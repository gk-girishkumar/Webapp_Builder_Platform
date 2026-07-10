// PromptFilter.jsx
// Drop-in React component for prompt filtering & plan generation
// Props:
//   onProceed  {fn}      - Called with (prompt, plan) when plan is generated successfully
//   onFail     {fn}      - Called with (prompt, result) when verdict is FAIL/WARN

import { useState, useEffect, useCallback } from "react";

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
  { label: "✅ Good", text: "Build me a todo app with React and Tailwind CSS, with add, delete, and complete task features." },
  { label: "❓ Vague", text: "make something cool" },
  { label: "🚫 Unsafe", text: "Create a site to hack email accounts and steal private photos." },
  { label: "🔤 Malformed", text: "asdfghjkl build website plzz asdfgh fast" },
  { label: "⚠️ Scattered", text: "I need a dashboard. Also login. And charts. And a map. And dark mode. And fast." },
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
  const [prompt, setPrompt]         = useState("");
  const [endpoint, setEndpoint]     = useState("");
  const [apiVersion, setApiVersion] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // load server config (non-sensitive) so UI reflects server-side Azure settings
  useEffect(() => {
    let mounted = true;
    fetch('/api/config').then(r => r.json()).then(cfg => {
      if (!mounted) return;
      if (cfg.endpoint) setEndpoint(cfg.endpoint);
      if (cfg.apiVersion) setApiVersion(cfg.apiVersion);
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
    
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }
    
    if (file.size > 20 * 1024 * 1024) {
      alert('Image file must be smaller than 20MB.');
      return;
    }
    
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const analyze = useCallback(async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    setPlan(null);
    setError(null);
    try {
      // Call analyze-and-plan for simultaneous filter + plan generation
      const res = await generatePlan(prompt, selectedImage);
      setResult(res.filter || {});
      if (res.plan) setPlan(res.plan);
      if (res.filter && !res.filter.can_proceed && onFail) onFail(prompt, res.filter);
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

  return (
    <div style={s.root}>
      <div style={s.wrap}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4f8ef7", marginBottom: 8 }}>⚡ LLM Gateway</div>
        <div style={s.heading}>Prompt → Plan → Code</div>
        <div style={s.sub}>Analyze prompts, generate structured plans, and produce code. Filter for safety, create blueprints, build apps.</div>


        {/* Examples */}
        <div style={s.exWrap}>
          <div style={{ ...s.fieldLabel, width: "100%" }}>Quick examples</div>
          {EXAMPLES.map(ex => (
            <button key={ex.label} style={s.exPill} onClick={() => { setPrompt(ex.text); setResult(null); setError(null); }}>
              {ex.label}
            </button>
          ))}
        </div>

        {/* Image Upload */}
        <div style={{...s.inputCard, marginBottom: "1rem"}}>
          <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <label style={s.fieldLabel}>📸 Upload Image (Optional)</label>
            <input type="file" accept="image/*" onChange={handleImageSelect} style={{ fontSize: 13, color: "#e8eaf0" }} />
            {imagePreview && (
              <div style={{ marginTop: "0.75rem" }}>
                <img src={imagePreview} alt="Preview" style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 8 }} />
                <button type="button" onClick={clearImage} style={{ marginTop: "0.5rem", padding: "0.5rem 1rem", background: "rgba(245,101,101,0.12)", color: "#f56565", border: "1px solid rgba(245,101,101,0.2)", borderRadius: 6, cursor: "pointer", fontSize: 12 }}>
                  Clear Image
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <div style={s.inputCard}>
          <textarea
            style={s.textarea}
            placeholder="Enter a user prompt to analyze before sending to your LLM…"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            disabled={loading}
          />
          <div style={s.inputFooter}>
            <span style={s.charCount}>{prompt.length} chars</span>
            <button style={s.analyzeBtn} onClick={analyze} disabled={loading || !prompt.trim()}>
              {loading ? <span style={{ width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.6s linear infinite" }} /> : "⌕"}
              {loading ? "Analyzing…" : "Analyze Prompt"}
            </button>
          </div>
        </div>

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
              <div style={{ marginTop: 10, fontSize: 12, color: "#555a6a" }}>Check your API key, endpoint, and API version above.</div>
            </div>
          </div>
        )}

        {result && (
          <div style={s.resultCard}>
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

            <div style={s.body}>
              <div style={s.scoreGrid}>
                <ScoreBar label="Safety"    value={result.safety_score} />
                <ScoreBar label="Clarity"   value={result.clarity_score} />
                <ScoreBar label="Relevance" value={result.relevance_score} />
              </div>

              <div style={s.divider} />

              <div style={s.sectionLabel}>Analysis</div>
              <div style={s.explanation}>{result.explanation}</div>

              {result.flags && result.flags.length > 0 && (
                <>
                  <div style={s.divider} />
                  <div style={s.sectionLabel}>Detected flags</div>
                  <div style={s.flagsWrap}>{result.flags.map(f => <span key={f} style={s.flagTag}>{f}</span>)}</div>
                </>
              )}

              {result.improved_prompt && (
                <>
                  <div style={s.divider} />
                  <div style={s.sectionLabel}>Suggested improvement</div>
                  <div style={s.suggestionBox}>{result.improved_prompt}</div>
                </>
              )}

              {result.improved_prompt_options && result.improved_prompt_options.length > 0 && (
                <>
                  <div style={s.divider} />
                  <div style={s.sectionLabel}>Suggested improvements</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {result.improved_prompt_options.map((sugg, i) => (
                      <button key={i} style={{ ...s.exPill, cursor: 'pointer' }} onClick={() => { setPrompt(sugg); setResult(null); }}>
                        {sugg}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div style={s.proceedBar}>
              {plan
                ? <button style={s.btnGo} onClick={handleProceed}>✓ Proceed to Code Generation</button>
                : result && result.can_proceed
                  ? <button style={s.btnPlan} onClick={() => {}} disabled>{loading ? "Generating Plan…" : "Plan Generated Above"}</button>
                  : result && !result.can_proceed
                    ? <button style={s.btnRevise} onClick={() => { setResult(null); setPlan(null); document.querySelector("textarea")?.focus(); }}>↺ Revise prompt</button>
                    : null
              }
            </div>
          </div>
        )}
        
        {plan && (
          <div style={{ ...s.resultCard, background: "#13161b", border: "1px solid rgba(79,142,247,0.2)", marginTop: "1rem" }}>
            <div style={{ ...s.resultHeader, background: "rgba(79,142,247,0.06)" }}>
              <div style={{ fontSize: 24, fontWeight: 700, marginRight: 12 }}>📋</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#e8eaf0" }}>{plan.project_title || "Page Plan"}</div>
                <div style={{ fontSize: 11, color: "#8b90a0", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {plan.project_type || "web_app"} • {plan.estimated_complexity || "moderate"} complexity
                </div>
              </div>
            </div>
            <div style={s.body}>
              {plan.tech_stack && (
                <>
                  <div style={s.sectionLabel}>🛠️ Tech Stack</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                    <div style={{ background: "#1a1e25", padding: "10px 12px", borderRadius: 10, fontSize: 12 }}>
                      <div style={{ fontSize: 11, color: "#555a6a", marginBottom: 4 }}>FRAMEWORK</div>
                      {plan.tech_stack.framework}
                    </div>
                    <div style={{ background: "#1a1e25", padding: "10px 12px", borderRadius: 10, fontSize: 12 }}>
                      <div style={{ fontSize: 11, color: "#555a6a", marginBottom: 4 }}>STYLING</div>
                      {plan.tech_stack.styling}
                    </div>
                    <div style={{ background: "#1a1e25", padding: "10px 12px", borderRadius: 10, fontSize: 12 }}>
                      <div style={{ fontSize: 11, color: "#555a6a", marginBottom: 4 }}>ICONS</div>
                      {plan.tech_stack.icons || "Lucide Icons"}
                    </div>
                    <div style={{ background: "#1a1e25", padding: "10px 12px", borderRadius: 10, fontSize: 12 }}>
                      <div style={{ fontSize: 11, color: "#555a6a", marginBottom: 4 }}>FONT</div>
                      {plan.tech_stack.font || "Inter"}
                    </div>
                    {plan.tech_stack.extras && plan.tech_stack.extras.length > 0 && (
                      <div style={{ gridColumn: "1/-1", background: "#1a1e25", padding: "10px 12px", borderRadius: 10, fontSize: 12 }}>
                        <div style={{ fontSize: 11, color: "#555a6a", marginBottom: 4 }}>LIBRARIES</div>
                        {plan.tech_stack.extras.join(", ")}
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {plan.color_scheme && (
                <>
                  <div style={s.sectionLabel}>🎨 Colors</div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                    {Object.entries(plan.color_scheme).map(([k, v]) => (
                      <div key={k} style={{ textAlign: "center" }}>
                        <div style={{ width: 40, height: 40, background: v, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", marginBottom: 4 }} title={v} />
                        <div style={{ fontSize: 10, color: "#555a6a", textTransform: "capitalize" }}>{k}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {plan.sections && plan.sections.length > 0 && (
                <>
                  <div style={s.sectionLabel}>📄 Sections ({plan.sections.length})</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
                    {plan.sections.map((sec, idx) => (
                      <div key={idx} style={{ background: "#1a1e25", padding: 12, borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                          <div style={{ width: 24, height: 24, background: "rgba(79,142,247,0.2)", color: "#4f8ef7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>
                            {sec.order}
                          </div>
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: "#e8eaf0" }}>{sec.name}</div>
                            <div style={{ fontSize: 10, background: "rgba(79,142,247,0.1)", color: "#4f8ef7", padding: "2px 6px", borderRadius: 4, width: "fit-content", marginTop: 2 }}>
                              {sec.type}
                            </div>
                          </div>
                        </div>
                        <div style={{ fontSize: 12, color: "#8b90a0", marginBottom: 6 }}>{sec.description}</div>
                        <div style={{ fontSize: 11, color: "#555a6a" }}>
                          <strong>Components:</strong> {sec.components.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {plan.summary && (
                <>
                  <div style={s.divider} />
                  <div style={s.sectionLabel}>Summary</div>
                  <div style={s.explanation}>{plan.summary}</div>
                </>
              )}
            </div>
            <div style={s.proceedBar}>
              <button style={s.btnGo} onClick={() => { if (onProceed) onProceed(prompt, plan); }}>✓ Accept & Proceed</button>
            </div>
          </div>
        )}
      </div>
    </div>
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
