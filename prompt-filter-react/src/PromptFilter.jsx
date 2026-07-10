// PromptFilter.jsx
// Drop-in React component for prompt filtering & plan generation
// Props:
//   onProceed  {fn}      - Called with (prompt, plan) when plan is generated successfully
//   onFail     {fn}      - Called with (prompt, result) when verdict is FAIL/WARN

import { useState, useEffect, useCallback, useRef } from "react";

// ── System prompt sent to Claude ────────────────────────────────────────────
const FILTER_SYSTEM_PROMPT = `You are a prompt quality and safety filter for an AI-powered web application builder (like Bolt.new). Your job is to analyze user prompts BEFORE they are sent to the code generation LLM.

Analyze the given prompt and return ONLY a valid JSON object with this exact structure:
{
  "verdict": "PASS" | "FAIL" | "WARN",
  "safety_score": 0-100,
  "clarity_score": 0-100,
  "relevance_score": 0-100,
  "overall_score": 0-100,
  "flags": [],
  "issues_summary": "one sentence summary of main issues, or empty string if none",
  "improved_prompt": "rewritten improved version of the prompt if needed, or empty string if prompt is already good",
  "explanation": "2-3 sentence explanation of the verdict and what was found",
  "can_proceed": true | false
}

Scoring guide:
- safety_score: 100=fully safe, 0=dangerous/harmful content
- clarity_score: 100=perfectly clear specific request, 0=completely vague/meaningless
- relevance_score: 100=directly relevant to web/app building, 0=totally off-topic
- overall_score: weighted average (safety 40%, clarity 35%, relevance 25%)
- verdict: PASS if overall>=70 and safety>=80, WARN if overall>=50 or safety>=60, FAIL otherwise
- can_proceed: true only if verdict is PASS
- flags: array of short labels from: ["vague", "offensive", "off-topic", "spam", "incomplete", "malformed", "harmful", "ambiguous", "duplicate", "too-broad"]
- improved_prompt: provide only if clarity_score < 70, otherwise empty string

Return ONLY the JSON. No markdown, no backticks, no explanation outside JSON.`;

// ── Core API function (use this in your backend too) ────────────────────────
export async function filterPrompt(userPrompt, imageFile = null) {
  if (imageFile) {
    const formData = new FormData();
    formData.append('prompt', userPrompt);
    formData.append('image', imageFile);
    const res = await fetch('/api/filter-prompt', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Server error');
    return data;
  } else {
    const res = await fetch('/api/filter-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userPrompt }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Server error');
    return data;
  }
}

// ── Plan generation API ─────────────────────────────────────────────────────
export async function generatePlan(userPrompt, imageFile = null) {
  if (imageFile) {
    const formData = new FormData();
    formData.append('prompt', userPrompt);
    formData.append('image', imageFile);
    const res = await fetch('/api/analyze-and-plan', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Server error');
    return data;
  } else {
    const res = await fetch('/api/analyze-and-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userPrompt }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Server error');
    return data;
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const EXAMPLES = [
  { label: "✅ Good", category: "good" },
  { label: "❓ Vague", category: "vague" },
  { label: "🚫 Unsafe", category: "unsafe" },
  { label: "🔤 Malformed", category: "malformed" },
  { label: "⚠️ Scattered", category: "scattered" },
];


function scoreColor(s) {
  if (s >= 70) return "#3ecf8e";
  if (s >= 50) return "#f6ad55";
  return "#f56565";
}

function ScoreBar({ label, value }) {
  return (
    <div style={{ background: "#1a1e25", borderRadius: 10, padding: "12px 14px" }}>
      <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: "#555a6a", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "monospace", color: scoreColor(value) }}>{value}</div>
      <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)", marginTop: 6 }}>
        <div style={{ height: "100%", width: `${value}%`, borderRadius: 2, background: scoreColor(value), transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function PromptFilter({
  onProceed,
  onFail,
}) {
  const [templates, setTemplates] = useState([]);
  const [prompt, setPrompt]         = useState("");
  const [clarification, setClarification] = useState("");
  const [endpoint, setEndpoint]     = useState("");
  const [apiVersion, setApiVersion] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  const textareaRef = useRef(null);

  const handleTemplateClick = async (templatePrompt) => {
    setPrompt(templatePrompt);
    setIsHighlighted(true);
    setTimeout(() => {
      setIsHighlighted(false);
    }, 1500);

    textareaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Automatically trigger plan generation and then code generation
    setLoading(true);
    setResult(null);
    setPlan(null);
    setError(null);
    
    try {
      // Step 1: Run filter pipeline
      const res = await generatePlan(templatePrompt, null);
      
      // Step 2: Auto-force generate if blocked
      if (res.filter && !res.filter.can_proceed) {
        // Fetch force plan without showing the rejection UI
        const forceRes = await fetch('/api/analyze-and-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: templatePrompt, force: true }),
        });
        const forceData = await forceRes.json();
        if (!forceRes.ok) throw new Error(forceData.error || 'Server error');
        
        const finalFilter = {
          verdict: "PASS",
          safety_score: 100,
          clarity_score: 100,
          relevance_score: 100,
          overall_score: 100,
          explanation: "Plan generated via template bypass.",
          can_proceed: true
        };
        
        setResult(finalFilter);
        if (forceData.plan) {
          setPlan(forceData.plan);
          if (onProceed) {
            onProceed(templatePrompt, forceData.plan);
          }
        }
      } else {
        setResult(res.filter || {});
        if (res.plan) setPlan(res.plan);
        
        if (res.filter && res.filter.can_proceed) {
          if (onProceed && res.plan) {
            onProceed(templatePrompt, res.plan);
          }
        }
      }
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  // load server config
  useEffect(() => {
    let mounted = true;
    fetch('/api/config').then(r => r.json()).then(cfg => {
      if (!mounted) return;
      if (cfg.endpoint) setEndpoint(cfg.endpoint);
      if (cfg.apiVersion) setApiVersion(cfg.apiVersion);
    }).catch(() => {});


    fetch('/api/templates').then(r => r.json()).then(data => {
      if (!mounted) return;
      if (data.templates) {
        setTemplates(data.templates);
        // Check for incoming template parameter
        const params = new URLSearchParams(window.location.search);
        const templateId = params.get('template');
        if (templateId) {
          const template = data.templates.find(t => t.id === templateId);
          if (template) {
            setPrompt(template.prompt);
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        }
      }
    }).catch(() => {});
    return () => { mounted = false; };
  }, []);

  const [loading, setLoading]       = useState(false);
  const [result, setResult]         = useState(null);
  const [plan, setPlan]             = useState(null);
  const [error, setError]           = useState(null);

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      alert('Please select a valid image or PDF file.');
      return;
    }
    
    if (file.size > 20 * 1024 * 1024) {
      alert('File must be smaller than 20MB.');
      return;
    }
    
    setSelectedImage(file);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else if (file.type === 'application/pdf') {
      setImagePreview('PDF_DOCUMENT');
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleExampleClick = async (category) => {
    setLoading(true);
    setResult(null);
    setPlan(null);
    setError(null);
    setPrompt("Generating random prompt via LLM...");
    try {
      const res = await fetch('/api/generate-example-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error generating prompt');
      
      setPrompt(data.prompt);
      // Run the analyze-and-plan filter on the generated prompt immediately
      const planRes = await generatePlan(data.prompt, selectedImage);
      setResult(planRes.filter || {});
      if (planRes.plan) setPlan(planRes.plan);
      if (planRes.filter && !planRes.filter.can_proceed && onFail) onFail(data.prompt, planRes.filter);
    } catch (err) {
      setError(err.message || "Failed to generate example prompt");
      setPrompt("");
    } finally {
      setLoading(false);
    }
  };

  const analyze = useCallback(async (overridePrompt) => {
    const textToAnalyze = typeof overridePrompt === 'string' ? overridePrompt : prompt;
    if (!textToAnalyze.trim()) return;
    setLoading(true);
    setResult(null);
    setPlan(null);
    setError(null);
    try {
      // Call analyze-and-plan for simultaneous filter + plan generation
      const res = await generatePlan(textToAnalyze, selectedImage);
      setResult(res.filter || {});
      if (res.plan) setPlan(res.plan);
      if (res.filter && !res.filter.can_proceed && onFail) onFail(textToAnalyze, res.filter);
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [prompt, selectedImage, onFail]);

  const handleProceed = () => {
    // Plan is already generated and displayed, just proceed with the generated plan
    if (onProceed && plan) onProceed(prompt, plan);
  };

  const forceGeneratePlan = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    setPlan(null);
    setError(null);
    try {
      let res;
      if (selectedImage) {
        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('image', selectedImage);
        formData.append('force', 'true');
        res = await fetch('/api/analyze-and-plan', {
          method: 'POST',
          body: formData,
        });
      } else {
        res = await fetch('/api/analyze-and-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, force: true }),
        });
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');
      
      setResult({
        verdict: "PASS",
        safety_score: 100,
        clarity_score: 100,
        relevance_score: 100,
        overall_score: 100,
        explanation: "Plan generated via bypass request.",
        can_proceed: true
      });
      if (data.plan) setPlan(data.plan);
    } catch (err) {
      setError(err.message || "Failed to force generate plan");
    } finally {
      setLoading(false);
    }
  };



  const verdictColor = result
    ? result.verdict === "PASS" ? "#3ecf8e" : result.verdict === "FAIL" ? "#f56565" : "#f6ad55"
    : "#555a6a";

  // ── Styles (inline for portability) ───────────────────────────────────────
  const s = {
    root: { fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#0d0f12", color: "#e8eaf0", minHeight: "100vh", padding: "2rem 1rem", display: "flex", justifyContent: "center" },
    wrap: { width: "100%", maxWidth: 660 },
    heading: { fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 },
    sub: { fontSize: 14, color: "#8b90a0", lineHeight: 1.6, marginBottom: "1.5rem" },
    configRow: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: "1.25rem" },
    fieldLabel: { fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#555a6a", marginBottom: 5, display: "block" },
    input: { width: "100%", background: "#13161b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "8px 12px", fontSize: 13, fontFamily: "monospace", color: "#e8eaf0", outline: "none" },
    inputCard: { background: "#13161b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden", marginBottom: "1rem" },
    textarea: { width: "100%", minHeight: 100, background: "transparent", border: "none", outline: "none", resize: "vertical", padding: 16, fontSize: 14, fontFamily: "inherit", color: "#e8eaf0", lineHeight: 1.65 },
    inputFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" },
    charCount: { fontSize: 12, color: "#555a6a", fontFamily: "monospace" },
    analyzeBtn: { display: "flex", alignItems: "center", gap: 7, background: "#4f8ef7", color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", opacity: loading ? 0.5 : 1 },
    exWrap: { display: "flex", flexWrap: "wrap", gap: 7, marginBottom: "1rem" },
    exPill: { fontSize: 12, padding: "5px 12px", borderRadius: 20, background: "#13161b", border: "1px solid rgba(255,255,255,0.07)", color: "#8b90a0", cursor: "pointer" },
    resultCard: { background: "#13161b", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" },
    resultHeader: { display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)" },
    verdictIcon: { width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, background: result ? `${verdictColor}22` : "#1a1e25", color: verdictColor },
    verdictBadge: { fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 10px", borderRadius: 20, background: result ? `${verdictColor}22` : "#1a1e25", color: verdictColor },
    body: { padding: "16px 18px" },
    scoreGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 },
    divider: { height: 1, background: "rgba(255,255,255,0.07)", margin: "14px 0" },
    sectionLabel: { fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: "#555a6a", marginBottom: 8 },
    explanation: { fontSize: 13, color: "#8b90a0", lineHeight: 1.7 },
    flagsWrap: { display: "flex", flexWrap: "wrap", gap: 6 },
    flagTag: { fontSize: 12, padding: "4px 11px", borderRadius: 20, background: "rgba(245,101,101,0.12)", color: "#f56565", border: "1px solid rgba(245,101,101,0.2)", fontWeight: 500 },
    suggestionBox: { background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#a0bfff", lineHeight: 1.7, fontStyle: "italic" },
    proceedBar: { display: "flex", gap: 8, padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" },
    btnGo: { flex: 1, padding: 9, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "rgba(62,207,142,0.12)", color: "#3ecf8e", border: "1px solid rgba(62,207,142,0.25)" },
    btnPlan: { flex: 1, padding: 9, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "rgba(79,142,247,0.12)", color: "#4f8ef7", border: "1px solid rgba(79,142,247,0.25)" },
    btnRevise: { flex: 1, padding: 9, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", background: "rgba(245,101,101,0.12)", color: "#f56565", border: "1px solid rgba(245,101,101,0.25)" },
    emptyState: { display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 1rem", color: "#555a6a", fontSize: 13, gap: 10, textAlign: "center" },
    errorText: { fontSize: 13, color: "#f56565", lineHeight: 1.7 },
  };

  const revisePrompt = () => {
    if (result && result.improved_prompt) {
      setPrompt(result.improved_prompt);
      setTimeout(() => analyze(result.improved_prompt), 100);
    }
  };

  const handleBypassPlan = () => {
    forceGeneratePlan();
  };

  useEffect(() => {
    document.body.classList.add('dark-bg');
    return () => document.body.classList.remove('dark-bg');
  }, []);

  return (
    <>


      <div className="main-wrapper">
        <h1 className="page-title">What should we build, GIRISH?</h1>

        <div className="prompt-pill" style={{
          border: isHighlighted ? "1px solid #4f8ef7" : "1px solid rgba(255,255,255,0.05)",
          boxShadow: isHighlighted ? "0 0 15px rgba(79, 142, 247, 0.4)" : "0 12px 40px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out"
        }}>
          <button className="icon-btn" onClick={() => document.getElementById('imageInput').click()}>+</button>
          <input type="file" id="imageInput" accept="image/*, application/pdf" onChange={handleImageSelect} style={{display:"none"}} />
          <button className="icon-btn">📎</button>
          
          <div className="prompt-input-wrapper">
            <input 
              ref={textareaRef}
              type="text" 
              placeholder="Ask AI to build a web app that..." 
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') analyze(); }}
              disabled={loading}
            />
          </div>

          <div className="build-dropdown">Build ⌄</div>
          <button className="icon-btn">🎤</button>
          <button className={`submit-btn ${prompt.trim().length > 0 ? 'active' : ''}`} onClick={analyze} disabled={loading || !prompt.trim()}>
            {loading ? <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.6s linear infinite" }} /> : "↑"}
          </button>
        </div>

        {imagePreview && (
          <div style={{ marginTop: "1rem", background: "#1a1b1e", padding: "8px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center" }}>
            {imagePreview === 'PDF_DOCUMENT' ? (
              <div style={{ color: "#e8eaf0", padding: "0 8px" }}>📄 {selectedImage?.name}</div>
            ) : (
              <img src={imagePreview} alt="Preview" style={{ height: "60px", borderRadius: "8px" }} />
            )}
            <button onClick={clearImage} style={{ background: "transparent", border: "none", color: "#f56565", cursor: "pointer", marginLeft: "8px" }}>&times;</button>
          </div>
        )}

        <div className="container" style={{marginTop: "2rem", width: "100%", maxWidth: "660px"}}>
          {/* Result area */}
          {!result && !error && !loading && (
            <div style={s.emptyState}>
              <div style={{ fontSize: 32, opacity: 0.4 }}>🛡️</div>
              <div>Enter a prompt above and click <strong style={{ color: "#8b90a0" }}>Analyze Prompt</strong></div>
            </div>
          )}

          {loading && (
            <div style={{ ...s.resultCard, padding: "2rem 1.25rem", textAlign: "center", color: "#555a6a", fontSize: 13 }}>
              Running filter pipeline…
            </div>
          )}

          {error && (
            <div style={s.resultCard}>
              <div style={s.resultHeader}>
                <div style={{ ...s.verdictIcon, background: "rgba(245,101,101,0.12)", color: "#f56565" }}>✕</div>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Analysis failed</span>
                <span style={{ ...s.verdictBadge, background: "rgba(245,101,101,0.12)", color: "#f56565" }}>ERROR</span>
              </div>
              <div style={s.body}>
                <div style={s.errorText}>{error}</div>
              </div>
            </div>
          )}

          {result && (
            <div style={s.resultCard}>
              {result.clarifying_question ? (
                <div style={s.resultHeader}>
                  <div style={{ ...s.verdictIcon, background: "rgba(246,173,85,0.2)", color: "#f6ad55" }}>!</div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#e8eaf0" }}>Clarification Needed</span>
                  <span style={{ ...s.verdictBadge, background: "rgba(246,173,85,0.2)", color: "#f6ad55" }}>WARN</span>
                </div>
              ) : (
                <div style={s.resultHeader}>
                  <div style={{ ...s.verdictIcon, background: `${verdictColor}22`, color: verdictColor }}>
                    {result.verdict === "PASS" ? "✓" : result.verdict === "FAIL" ? "✕" : "!"}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#e8eaf0" }}>Analysis complete</span>
                  <span style={{ ...s.verdictBadge, background: `${verdictColor}22`, color: verdictColor }}>{result.verdict}</span>
                  <div style={{ marginLeft: "auto", fontSize: 24, fontWeight: 700, fontFamily: "monospace", color: "#e8eaf0" }}>
                    {result.overall_score}<span style={{ fontSize: 13, fontWeight: 400, color: "#555a6a" }}>/100</span>
                  </div>
                </div>
              )}

              <div style={s.body}>
                <div style={s.explanation}>{result.explanation}</div>
                <div style={s.divider} />
                <div style={s.scoreGrid}>
                  <ScoreBar label="Safety" value={result.safety_score} />
                  <ScoreBar label="Clarity" value={result.clarity_score} />
                  <ScoreBar label="Relevance" value={result.relevance_score} />
                </div>
                {result.flags?.length > 0 && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={s.sectionLabel}>Detected Flags</div>
                    <div style={s.flagsWrap}>
                      {result.flags.map(f => <span key={f} style={s.flagTag}>{f}</span>)}
                    </div>
                  </div>
                )}
                {result.clarifying_question && (
                  <div style={{ marginBottom: 14 }}>
                    <div style={s.sectionLabel}>AI Clarification Needed</div>
                    <div style={s.suggestionBox}>{result.clarifying_question}</div>
                    
                    {result.clarifying_options && result.clarifying_options.length > 0 && (
                      <div style={{ marginTop: 12 }}>
                        {result.clarifying_options.map((opt, i) => (
                          <button key={i} onClick={() => setClarification(opt)} style={{
                            display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px', 
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
                            borderRadius: '8px', color: '#e8eaf0', fontSize: '13px', marginBottom: '8px', cursor: 'pointer'
                          }}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    
                    <div style={{ marginTop: 12 }}>
                      <textarea
                        style={{ ...s.textarea, minHeight: 60, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        placeholder="Type your clarification here..."
                        value={clarification}
                        onChange={e => setClarification(e.target.value)}
                      />
                      <button 
                        style={{ ...s.btnGo, width: '100%', marginTop: '8px' }}
                        onClick={() => {
                          const newPrompt = prompt + "\n\nClarification: " + clarification;
                          setPrompt(newPrompt);
                          setClarification("");
                          // Re-analyze
                          setTimeout(() => { analyze(); }, 100);
                        }}
                        disabled={!clarification.trim()}
                      >
                        Submit Clarification
                      </button>
                    </div>
                  </div>
                )}
                {result.improved_prompt && (
                  <div>
                    <div style={s.sectionLabel}>Suggested Rewrite</div>
                    <div style={s.suggestionBox}>{result.improved_prompt}</div>
                  </div>
                )}
              </div>
              <div style={s.proceedBar}>
                {!result.can_proceed ? (
                  <>
                    <button style={s.btnRevise} onClick={revisePrompt}>
                      Apply Suggestion & Revise
                    </button>
                    <button style={s.btnPlan} onClick={forceGeneratePlan}>
                      Force Generate Plan
                    </button>
                  </>
                ) : (
                  <>
                    <button style={s.btnGo} onClick={handleProceed}>
                      Continue to Code
                    </button>
                    {plan && (
                      <button style={s.btnPlan} onClick={handleBypassPlan}>
                        Regenerate Plan Only
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bottom-tray">
        <div className="tray-nav">
          <div className="tray-nav-item active">Templates</div>
          <div className="tray-nav-item browse-all" onClick={() => setShowAllTemplates(true)}>Browse all &rarr;</div>
        </div>
        <div className="template-carousel">
          {templates.map(t => (
            <div key={t.id} className="template-card" onClick={() => setPreviewTemplate(t)}>
              <img src={`/previews/${t.id}.jpg`} alt={t.id} loading="lazy" />
              <div className="template-info">
                <div className="template-title">{t.id.charAt(0).toUpperCase() + t.id.slice(1)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewTemplate && (
        <div 
          className="template-modal-overlay" 
          onClick={() => setPreviewTemplate(null)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div 
            className="template-modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#1e1e1e', borderRadius: '16px',
              width: '100%', maxWidth: '800px', maxHeight: '90vh',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'white' }}>
                {previewTemplate.id.charAt(0).toUpperCase() + previewTemplate.id.slice(1)} <span style={{ color: '#888', fontWeight: 400 }}></span>
              </div>
              <button 
                onClick={() => {
                  handleTemplateClick(previewTemplate.prompt);
                  setPreviewTemplate(null);
                }}
                style={{
                  backgroundColor: 'white', color: 'black',
                  padding: '8px 16px', borderRadius: '8px',
                  fontWeight: 600, border: 'none', cursor: 'pointer'
                }}
              >
                Use template
              </button>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#111', flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={`/previews/${previewTemplate.id}.jpg`} 
                alt={previewTemplate.id} 
                loading="lazy" 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} 
              />
            </div>
          </div>
        </div>
      )}

      {showAllTemplates && (
        <div 
          className="template-modal-overlay" 
          onClick={() => setShowAllTemplates(false)}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div 
            className="template-modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#1e1e1e', borderRadius: '16px',
              width: '100%', maxWidth: '1000px', maxHeight: '90vh',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'white' }}>
                All Templates
              </div>
              <button 
                onClick={() => setShowAllTemplates(false)}
                style={{
                  backgroundColor: 'transparent', color: 'white',
                  padding: '8px', border: 'none', cursor: 'pointer',
                  fontSize: '20px'
                }}
              >
                ✕
              </button>
            </div>
            <div style={{ padding: '24px', backgroundColor: '#111', flex: 1, overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {templates.map(t => (
                  <div 
                    key={t.id} 
                    className="template-card" 
                    onClick={() => {
                      setShowAllTemplates(false);
                      setPreviewTemplate(t);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={`/previews/${t.id}.jpg`} alt={t.id} loading="lazy" style={{ width: '100%', borderRadius: '8px' }} />
                    <div className="template-info" style={{ padding: '12px 0' }}>
                      <div className="template-title" style={{ color: 'white', fontWeight: 500 }}>{t.id.charAt(0).toUpperCase() + t.id.slice(1)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/*
Usage example in your app:

import PromptFilter, { generatePlan } from "./PromptFilter";

// Use the full UI component with plan generation
<PromptFilter
  onProceed={(prompt, plan) => {
    console.log("Plan generated:", plan.project_title);
    callYourCodeGenerationLLM(plan);
  }}
  onFail={(prompt, result) => {
    console.log("Prompt rejected:", result.flags);
  }}
/>

// Or use the plan generation function directly
const data = await generatePlan(userPrompt, imageFile);
if (data.plan) {
  callCodeGenLLM(data.plan);
} else {
  showUserFeedback(data.filter.explanation);
}
*/

