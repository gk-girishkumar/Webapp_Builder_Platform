import { useState, useEffect, useRef } from 'react'
import PromptFilter from './PromptFilter'

function renderPreviewHTML(reactCode, fontName = 'Inter') {
  let code = reactCode.replace(/```(javascript|jsx|js|tsx|ts)?/gi, '').replace(/```/g, '');
  
  // Preprocess react code to intercept lucide-react imports that contain removed brand icons
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  let counter = 0;
  let preprocessedCode = code.replace(importRegex, (match, specifiersText) => {
    const specifiers = specifiersText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
      
    const importNamespace = `_allLucideIcons_${counter++}`;
    let replacement = `import * as ${importNamespace} from 'lucide-react';\n`;
    
    specifiers.forEach(spec => {
      if (spec.includes(' as ')) {
        const [original, local] = spec.split(/\s+as\s+/);
        replacement += `const ${local.trim()} = ${importNamespace}.${original.trim()} || window.createBrandIconMock('${original.trim()}');\n`;
      } else {
        replacement += `const ${spec} = ${importNamespace}.${spec} || window.createBrandIconMock('${spec}');\n`;
      }
    });
    
    return replacement;
  });

  // Fix empty/incomplete map arrow functions that cause Compilation Errors
  const emptyMapRegex = /\.map\s*\(\s*(\([^)]*\)|[a-zA-Z0-9_$]+)\s*=>\s*\(\s*(?:\/\/[^\n]*\n|\/\*[\s\S]*?\*\/|\s)*\)\s*\)/g;
  preprocessedCode = preprocessedCode.replace(emptyMapRegex, '.map(($1) => null)');

  // Safely declare any referenced JSX components (like missing Lucide icons) that aren't defined
  try {
    const jsxTagRegex = /<([A-Z][a-zA-Z0-9_]*)/g;
    let tagMatch;
    const usedTags = new Set();
    while ((tagMatch = jsxTagRegex.exec(preprocessedCode)) !== null) {
      usedTags.add(tagMatch[1]);
    }

    const declaredRegex = /\b(?:const|let|var|function|class|import)\s+([a-zA-Z0-9_$]+)/g;
    let declMatch;
    const declaredNames = new Set(['React', 'App', 'Fragment']);
    while ((declMatch = declaredRegex.exec(preprocessedCode)) !== null) {
      declaredNames.add(declMatch[1]);
    }

    const lucideNamespace = '_allLucideIcons_0';
    let missingDeclarations = '';
    usedTags.forEach(tag => {
      if (!declaredNames.has(tag)) {
        missingDeclarations += `const ${tag} = (typeof ${lucideNamespace} !== 'undefined' && ${lucideNamespace}.${tag}) || window.createBrandIconMock('${tag}');\n`;
      }
    });

    if (missingDeclarations) {
      if (!preprocessedCode.includes('import * as _allLucideIcons_')) {
        preprocessedCode = `import * as ${lucideNamespace} from 'lucide-react';\n` + preprocessedCode;
      }
      preprocessedCode = preprocessedCode + '\n' + missingDeclarations;
    }
  } catch (e) {
    console.warn('Failed to pre-declare missing icons:', e);
  }

  const safeCode = preprocessedCode.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"${fontName}"', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.2.0?dev",
        "react/jsx-runtime": "https://esm.sh/react@18.2.0/jsx-runtime?dev",
        "react/jsx-dev-runtime": "https://esm.sh/react@18.2.0/jsx-dev-runtime?dev",
        "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
        "react-dom": "https://esm.sh/react-dom@18.2.0?dev",
        "lucide-react": "https://esm.sh/lucide-react?external=react,react-dom"
      }
    }
  </script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
    body {
      margin: 0;
      font-family: "${fontName}", sans-serif;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import React from 'react';
    import { createRoot } from 'react-dom/client';
    
    window.React = React;
    
    window.createBrandIconMock = (name) => {
      const brandPaths = {
        facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        twitter: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        instagram: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
        linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2-2 2 2 0 0 1 2 2z",
        github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
        youtube: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M10 14.5v-5l5 2.5-5 2.5z",
        snapchat: "M12 2a5.4 5.4 0 0 0-5.3 5.4c0 3.8 2.8 5 3.1 6.8a1.2 1.2 0 0 1-1 1.4c-.6.1-1 .5-1 1.1s.3 1 1 1.1h.3a8.9 8.9 0 0 0 5.8 0h.3c.7-.1 1-.5 1-1.1s-.4-1-1-1.1a1.2 1.2 0 0 1-1-1.4c.3-1.8 3.1-3 3.1-6.8A5.4 5.4 0 0 0 12 2z",
        tiktok: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5h-1a4 4 0 0 1-4-4H9z",
        figma: "M8 2a3 3 0 1 0 0 6h4V2zm0 6a3 3 0 1 0 0 6h4V8zm0 6a3 3 0 1 0 0 6h4v-6zm8-6a3 3 0 1 0 0 6H12V8zm0-6a3 3 0 1 0 0 6H12V2z",
        dribbble: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm8.2-9.7c-.5-.1-2.4-.6-4.8-.3 1 2.7 1.4 4.9 1.5 5.5 1.9-1.3 3-3.2 3.3-5.2zm-4.7 6.1c-.1-.7-.6-3-1.7-5.7-4.3 1.2-5.9 3.6-6 3.7 1.4 1.1 3.2 1.8 5.1 1.8.9 0 1.8-.2 2.6-.6zm-10-2.3c.2-.2 2.4-2.4 6.3-3.4-.6-1.5-1.3-3-2-4.4-3.8 1.1-5.1 4.5-5.2 4.6.2 1.2.5 2.2.9 3.2zM5.3 9.4c.1 0 2-.4 4.9-.1-.8-1.5-1.7-3.1-2.4-4.5-1.8 1.1-3 3-3.3 5-.1-.1-.1-.2.8-.4zm5.5-5.8c.8 1.4 1.7 2.9 2.4 4.3 2.1-.7 3.1-1.9 3.2-2-1.2-1.4-3-2.3-5.1-2.3-.2 0-.3 0-.5 0zm6.9 2.5c-.2.2-1.3 1.4-3.4 2.2.6 1.4 1.2 2.8 1.7 4.1 2.3-.2 4.5.3 4.7.4.1-.7.1-1.4.1-2.2-.1-1.9-.9-3.5-3.1-4.5z",
        reddit: "M22 11.5c0-1.38-1.12-2.5-2.5-2.5-.23 0-.45.03-.66.09C17.39 8.04 15.15 7.33 12.67 7.2l1.62-3.41 3.51.74c.04.83.73 1.48 1.56 1.48 1.1 0 2-.9 2-2s-.9-2-2-2c-.93 0-1.7.64-1.93 1.5l-3.87-.82c-.22-.05-.44.07-.52.28l-1.85 3.9C7.38 7.37 5.09 8.08 3.66 9.09c-.21-.06-.43-.09-.66-.09C1.62 9 1.5 10.12 1.5 11.5c0 .93.51 1.74 1.27 2.19-.07.26-.11.53-.11.81 0 2.87 3.61 5.2 8.07 5.2s8.07-2.33 8.07-5.2c0-.28-.04-.55-.11-.81.76-.45 1.27-1.26 1.27-2.19z",
        discord: "M18.97 5.7c-1.26-.58-2.61-.99-4.04-1.2a12.8 12.8 0 0 0-.56 1.15c-1.53-.23-3.06-.23-4.58 0a12.4 12.4 0 0 0-.57-1.15 13.9 13.9 0 0 0-4.04 1.2c-2.58 3.86-3.28 7.63-2.93 11.35 1.72 1.26 3.37 2.03 5 2.53.4-.55.76-1.15 1.07-1.78-1-.38-1.94-.87-2.82-1.47.24-.18.47-.36.7-.56 3.1 1.43 6.44 1.43 9.5 0 .23.2.46.38.7.56-.88.6-1.82 1.09-2.82 1.47.31.63.67 1.23 1.07 1.78 1.63-.5 3.28-1.27 5-2.53.41-4.29-.7-8.03-2.93-11.35zM9.44 14.16c-.95 0-1.73-.87-1.73-1.93s.76-1.94 1.73-1.94c.98 0 1.75.88 1.73 1.94 0 1.06-.76 1.93-1.73 1.93zm5.12 0c-.95 0-1.73-.87-1.73-1.93s.76-1.94 1.73-1.94c.98 0 1.75.88 1.73 1.94 0 1.06-.76 1.93-1.73 1.93z"
      };

      const lowercaseName = name.toLowerCase();
      const path = brandPaths[lowercaseName];
      
      return (props) => {
        const svgProps = {
          xmlns: "http://www.w3.org/2000/svg",
          width: props.size || props.width || 24,
          height: props.size || props.height || 24,
          viewBox: "0 0 24 24",
          fill: props.fill || "none",
          stroke: props.stroke || "currentColor",
          strokeWidth: props.strokeWidth || 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: props.className,
          ...props
        };

        if (path) {
          if (lowercaseName === 'instagram') {
            return window.React.createElement(
              "svg",
              svgProps,
              window.React.createElement("rect", { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
              window.React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
              window.React.createElement("line", { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 })
            );
          }
          if (lowercaseName === 'linkedin') {
            return window.React.createElement(
              "svg",
              svgProps,
              window.React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
              window.React.createElement("rect", { width: 4, height: 12, x: 2, y: 9 }),
              window.React.createElement("circle", { cx: 4, cy: 4, r: 2 })
            );
          }
          return window.React.createElement(
            "svg",
            svgProps,
            window.React.createElement("path", { d: path })
          );
        } else {
          return window.React.createElement(
            "svg",
            svgProps,
            window.React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
            window.React.createElement("line", { x1: 2, x2: 22, y1: 12, y2: 12 }),
            window.React.createElement("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
          );
        }
      };
    };

    async function renderApp() {
      const rootEl = document.getElementById('root');
      let rawCode = \`${safeCode}\`;
      
      // Prepend React import if missing to satisfy classic runtime requirement
      if (!rawCode.includes('import React') && !rawCode.includes('import * as React')) {
        rawCode = "import React from 'react';\\n" + rawCode;
      }
      
      const rewriteImports = () => {
        return {
          visitor: {
            ImportDeclaration(path) {
              const source = path.node.source.value;
              if (!source.startsWith('.') && !source.startsWith('/') && !source.startsWith('http')) {
                if (source !== 'react' && !source.startsWith('react-dom') && source !== 'lucide-react') {
                  path.node.source.value = 'https://esm.sh/' + source + '?external=react,react-dom';
                }
              }
            }
          }
        };
      };
      Babel.registerPlugin('rewrite-imports', rewriteImports);
 
      let compiledCode;
      try {
        compiledCode = Babel.transform(rawCode, {
          filename: 'App.tsx',
          presets: ['typescript', ['react', { runtime: 'classic' }]],
          plugins: ['rewrite-imports']
        }).code;
      } catch (e) {
        rootEl.innerHTML = '<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap;">Compilation Error:\\n' + e.message + '</div>';
        return;
      }
 
      const blob = new Blob([compiledCode], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      
      try {
        const module = await import(url);
        const App = module.default;
        
        if (App) {
          createRoot(rootEl).render(React.createElement(App));
        } else {
          rootEl.innerHTML = '<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap;">Error: Component did not export a default. Ensure your code uses "export default function App() {}"</div>';
        }
      } catch (e) {
        rootEl.innerHTML = '<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap;">Runtime Error:\\n' + e.message + '\\n' + (e.stack || '') + '</div>';
      }
    }
 
    renderApp().catch(e => {
      document.getElementById('root').innerHTML = '<div style="color:red;padding:20px;font-family:monospace;white-space:pre-wrap;">Fatal Error:\\n' + e.message + '</div>';
    });
  </script>
</body>
</html>`;
}


function parseFiles(code) {
  if (!code) return { 'App.jsx': '' };
  let cleanCode = code.replace(/^```(javascript|jsx|js|tsx|ts|html|css)?\s*/gi, '').replace(/```\s*$/g, '');
  
  if (cleanCode.includes('<!DOCTYPE html>')) {
    let css = '';
    let js = '';
    let html = cleanCode;
    
    const styleStart = html.indexOf('<style>');
    const styleEnd = html.indexOf('</style>');
    if (styleStart !== -1 && styleEnd !== -1) {
      css = html.substring(styleStart + 7, styleEnd).trim();
      html = html.substring(0, styleStart) + '<link rel="stylesheet" href="styles.css" />' + html.substring(styleEnd + 8);
    }
    
    const scriptStart = html.lastIndexOf('<script>');
    const scriptEnd = html.lastIndexOf('</script>');
    if (scriptStart !== -1 && scriptEnd !== -1) {
      const scriptContent = html.substring(scriptStart + 8, scriptEnd).trim();
      if (scriptContent.length > 50) {
        js = scriptContent;
        html = html.substring(0, scriptStart) + '<script src="app.js"></script>' + html.substring(scriptEnd + 9);
      }
    }
    
    return { 'index.html': html, 'styles.css': css, 'app.js': js };
  } else {
    // Parse dependencies dynamically from imports
    const deps = {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    };
    const importRegex = /import\s+.*?\s+from\s+['"]([^.'"][^'"]*)['"]/g;
    let match;
    while ((match = importRegex.exec(cleanCode)) !== null) {
      const pkg = match[1];
      if (pkg && !pkg.startsWith('react')) {
         let basePkg = pkg;
         if (pkg.startsWith('@')) {
           const parts = pkg.split('/');
           basePkg = parts.slice(0, 2).join('/');
         } else {
           basePkg = pkg.split('/')[0];
         }
         deps[basePkg] = "latest";
      }
    }
    
    // Parse Tailwind config (colors, font family) from comments
    let tailwindColors = {};
    const colorMatch = cleanCode.match(/scheme\s*\(([^)]+)\)/i);
    if (colorMatch) {
       const colors = colorMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
       tailwindColors = colors.reduce((acc, c, i) => ({...acc, [`brand-${i+1}`]: c}), {});
    }
    
    const fontMatch = cleanCode.match(/font\s+["']([^"']+)["']/i);
    
    let tailwindConfig = `/** @type {import('tailwindcss').Config} */\nexport default {\n  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {`;
    
    if (Object.keys(tailwindColors).length > 0) {
      tailwindConfig += `\n      colors: ${JSON.stringify(tailwindColors, null, 6).replace(/\n/g, '\n      ')},`;
    }
    if (fontMatch) {
      tailwindConfig += `\n      fontFamily: {\n        sans: ['"${fontMatch[1]}"', 'sans-serif']\n      },`;
    }
    tailwindConfig += `\n    },\n  },\n  plugins: [],\n}`;
    
    // Strip the initial comment block (which contains the LLM understanding and tailwind colors) from App.jsx
    const cleanedAppJsx = cleanCode.replace(/^\s*\/\*[\s\S]*?\*\//, '').trim();

    return {
      'App.jsx': cleanedAppJsx,
      'package.json': JSON.stringify({
        "name": "generated-react-app",
        "version": "1.0.0",
        "dependencies": deps
      }, null, 2),
      'tailwind.config.js': tailwindConfig
    };
  }
}

function App() {
  const [acceptedPlan, setAcceptedPlan] = useState(null)
  const [userPrompt, setUserPrompt] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [previewHtml, setPreviewHtml] = useState('')
  const [activeTab, setActiveTab] = useState('preview')
  const [genError, setGenError] = useState(null)
  const [deviceMode, setDeviceMode] = useState('desktop')
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  const [showCompanionModal, setShowCompanionModal] = useState(false)
  const [selectedFileTab, setSelectedFileTab] = useState(null)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Code customization states
  const [editPrompt, setEditPrompt] = useState('')
  const [editHistory, setEditHistory] = useState([])
  const [editLoading, setEditLoading] = useState(false)
  const [editError, setEditError] = useState(null)
  const [editStatusMsg, setEditStatusMsg] = useState('')
  const [companionImages, setCompanionImages] = useState([])
  const [companionImagePreviews, setCompanionImagePreviews] = useState([])
  const [companionPdf, setCompanionPdf] = useState(null)
  const [companionPdfName, setCompanionPdfName] = useState('')




  const handleCompanionImagesSelect = (e) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      if (!file.type.startsWith('image/')) {
        alert(`File "${file.name}" is not a valid image file.`);
        return false;
      }
      if (file.size > 20 * 1024 * 1024) {
        alert(`Image "${file.name}" is larger than 20MB.`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    setCompanionImages(prev => [...prev, ...validFiles]);

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCompanionImagePreviews(prev => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeCompanionImage = (index) => {
    setCompanionImages(prev => prev.filter((_, i) => i !== index));
    setCompanionImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const clearCompanionImages = () => {
    setCompanionImages([]);
    setCompanionImagePreviews([]);
    const input = document.getElementById('companionImageInput');
    if (input) input.value = '';
  };

  const handleCompanionPdfSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      alert('Please select a valid PDF document.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      alert('PDF document must be smaller than 15MB.');
      return;
    }

    setCompanionPdf(file);
    setCompanionPdfName(file.name);
  };

  const removeCompanionPdf = () => {
    setCompanionPdf(null);
    setCompanionPdfName('');
    const input = document.getElementById('companionPdfInput');
    if (input) input.value = '';
  };

  const clearAllCompanionFiles = () => {
    clearCompanionImages();
    removeCompanionPdf();
  };
 
  useEffect(() => {
    if (acceptedPlan && userPrompt) {
      setGeneratedCode('// Generating React code via LLM, please wait...\n');
      setGenError(null);
      
      const generateCode = async () => {
        try {
          const res = await fetch('/api/generate-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              prompt: userPrompt,
              plan: acceptedPlan,
              sub_classification: { sections: [] }, // Provide empty if not available
              filename: 'App.jsx'
            })
          });
 
          if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
          }
 
          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let code = '';
          let buffer = '';

          const processLine = (line) => {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.type === 'token') {
                  code += data.content;
                  setGeneratedCode(code);
                } else if (data.type === 'done' || data.type === 'fallback') {
                  setPreviewHtml(renderPreviewHTML(code, acceptedPlan.tech_stack?.font || 'Inter'));
                } else if (data.type === 'error') {
                  setGeneratedCode(prev => prev + '\n// Error: ' + data.message);
                  setGenError(data.message);
                }
              } catch(e) {}
            }
          };
          
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              if (buffer.trim()) {
                processLine(buffer);
              }
              // Fallback: If previewHtml is not set, set it now that stream is done
              setPreviewHtml(prev => prev || renderPreviewHTML(code, acceptedPlan.tech_stack?.font || 'Inter'));
              break;
            }
            
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Store the trailing partial line back in buffer
            
            for (const line of lines) {
              processLine(line);
            }
          }
        } catch(err) {
          setGeneratedCode(prev => prev + '\n// Failed to connect to generator: ' + err.message);
          setGenError(err.message);
        }
      };
 
      generateCode();
    }
  }, [acceptedPlan, userPrompt])

  const handleRevertEdit = (historyItem, index) => {
    if (!historyItem || !historyItem.codeBefore) return;

    if (window.confirm(`Are you sure you want to revert "${historyItem.prompt}"? This will also roll back any subsequent edits.`)) {
      const rolledBackCode = historyItem.codeBefore;
      setGeneratedCode(rolledBackCode);
      setPreviewHtml(renderPreviewHTML(rolledBackCode, acceptedPlan.tech_stack?.font || 'Inter'));
      setEditHistory(prev => prev.slice(index + 1));
    }
  }
  const handleEditSubmit = async (overridePrompt) => {
    const activePrompt = overridePrompt || editPrompt;
    if (!activePrompt.trim() || editLoading) return;

    const codeBeforeEdit = generatedCode;

    setEditLoading(true);
    setEditError(null);
    setEditStatusMsg('');
    setGeneratedCode('// Applying edits to React code, please wait...\n');
    setPreviewHtml('');

    try {
      let body;
      let headers = {};

      const hasImages = companionImages.length > 0;
      const hasPdf = companionPdf !== null;

      const chronologicalHistory = [...editHistory]
        .reverse()
        .map(h => typeof h === 'string' ? h : h.prompt);

      if (hasImages || hasPdf) {
        const formData = new FormData();
        formData.append('code', codeBeforeEdit);
        formData.append('prompt', activePrompt);
        formData.append('plan', JSON.stringify(acceptedPlan));
        formData.append('history', JSON.stringify(chronologicalHistory));
        
        if (hasImages) {
          companionImages.forEach(img => {
            formData.append('images', img);
          });
        }
        if (hasPdf) {
          formData.append('pdf', companionPdf);
        }
        body = formData;
      } else {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify({
          code: codeBeforeEdit,
          prompt: activePrompt,
          plan: acceptedPlan,
          history: chronologicalHistory
        });
      }

      const res = await fetch('/api/customize-code', {
        method: 'POST',
        headers: headers,
        body: body
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let code = '';
      let buffer = '';

      const processLine = (line) => {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === 'token') {
              code += data.content;
              setGeneratedCode(code);
            } else if (data.type === 'done') {
              setPreviewHtml(renderPreviewHTML(code, acceptedPlan.tech_stack?.font || 'Inter'));
              const newHistoryItem = {
                id: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9),
                prompt: activePrompt,
                codeBefore: codeBeforeEdit,
                codeAfter: code
              };
              setEditHistory(prev => [newHistoryItem, ...prev]);
              setEditPrompt('');
              clearAllCompanionFiles();
            } else if (data.type === 'error') {
              setEditError(data.message);
              setGeneratedCode(codeBeforeEdit);
              setPreviewHtml(renderPreviewHTML(codeBeforeEdit, acceptedPlan.tech_stack?.font || 'Inter'));
            } else if (data.type === 'status') {
              setEditStatusMsg(data.message || '');
            }
          } catch(e) {}
        }
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          if (buffer.trim()) processLine(buffer);
          setPreviewHtml(prev => prev || renderPreviewHTML(code, acceptedPlan.tech_stack?.font || 'Inter'));
          break;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          processLine(line);
        }
      }
    } catch (err) {
      setEditError(err.message || 'Connection error');
      setGeneratedCode(codeBeforeEdit);
      setPreviewHtml(renderPreviewHTML(codeBeforeEdit, acceptedPlan.tech_stack?.font || 'Inter'));
    } finally {
      setEditLoading(false);
    }
  };

  if (acceptedPlan) {
    const renderCompanionContent = () => (
      <>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">✨</span>
          <span className="font-bold text-sm tracking-tight text-white uppercase">AI Edit Companion</span>
        </div>

        {editError && (
          <div style={{ background: 'rgba(245,101,101,0.1)', border: '1px solid rgba(245,101,101,0.2)', padding: '10px 12px', borderRadius: '8px', fontSize: '12px', color: '#f56565', marginBottom: '1rem', lineHeight: 1.5 }}>
            <strong>Edit failed:</strong> {editError}
          </div>
        )}

        {/* Presets */}
        <div className="mb-4">
          <div style={{ fontSize: '10px', fontWeight: '700', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Redesign Ideas</div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "🌸 Pastel Cherry", prompt: "Redesign the website theme using warm pastel cherry colors (creamy pink background, dark rose primary buttons, soft card backgrounds, Playfair Display heading font)." },
              { label: "🌌 Cyber Neon", prompt: "Modify the theme to cyber neon dark mode (pure black/dark violet background, glowing cyan primary buttons, hot magenta accents, Outfit font)." },
              { label: "🌿 Sage Eco", prompt: "Set the layout to Eco Forest (sage green background, forest green cards, emerald primary buttons, dark green text)." },
              { label: "🌙 Dark Mode", prompt: "Transform the site into a sleek dark mode with dark gray/black backgrounds, crisp white text, and dynamic neon blue accents." },
              { label: "👤 Add Contact Form", prompt: "Add a complete, beautiful contact form section at the bottom of the page containing name, email, message text area, and a send button." },
              { label: "👥 Add Team Grid", prompt: "Add a modern team showcase section with 3 cards displaying employee profile photos, names, and job roles." }
            ].map(sugg => (
              <button 
                key={sugg.label} 
                onClick={() => {
                  handleEditSubmit(sugg.prompt);
                  if (isMobile) setShowCompanionModal(false);
                }}
                disabled={editLoading || !previewHtml}
                style={{ fontSize: '11px', padding: '6px 12px', borderRadius: '20px', background: '#1a1e25', border: '1px solid rgba(255,255,255,0.07)', color: '#8b90a0', cursor: 'pointer', opacity: (editLoading || !previewHtml) ? 0.5 : 1 }}
              >
                {sugg.label}
              </button>
            ))}
          </div>
        </div>

        {/* Files Upload Component */}
        <div className="flex flex-col gap-3 mb-4">
          {/* Multiple Image Section */}
          <div className="flex flex-col gap-1.5">
            <div style={{ fontSize: '10px', fontWeight: '700', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📸 Reference / Profile Images</div>
            
            {companionImagePreviews.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mb-2">
                {companionImagePreviews.map((preview, index) => (
                  <div key={index} className="relative group aspect-square rounded-md overflow-hidden bg-black border border-white/10">
                    <img 
                      src={preview} 
                      alt={`Upload ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                    <button
                      type="button"
                      onClick={() => removeCompanionImage(index)}
                      style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        width: '16px',
                        height: '16px',
                        background: 'rgba(239, 68, 68, 0.9)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        fontSize: '9px',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div 
              style={{ 
                border: '1px dashed rgba(255, 255, 255, 0.15)', 
                borderRadius: '8px', 
                padding: '10px', 
                background: '#0d0f12', 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              className="hover:border-blue-500 transition-colors group relative"
              onClick={() => document.getElementById('companionImageInput').click()}
            >
              <input 
                type="file" 
                id="companionImageInput" 
                accept="image/*" 
                multiple
                onChange={handleCompanionImagesSelect} 
                style={{ display: 'none' }} 
              />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px' }}>📷</span>
                <span style={{ fontSize: '11px', color: '#8b90a0' }}>
                  {companionImages.length > 0 ? (
                    <><span style={{ color: '#4f8ef7', fontWeight: '600' }}>Add more images</span> ({companionImages.length} uploaded)</>
                  ) : (
                    <><span style={{ color: '#4f8ef7', fontWeight: '600' }}>Click to upload</span> images</>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* PDF Document Section */}
          <div className="flex flex-col gap-1.5">
            <div style={{ fontSize: '10px', fontWeight: '700', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📄 Reference PDF Document</div>
            {companionPdf ? (
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '8px 12px', 
                  background: 'rgba(79, 142, 247, 0.08)', 
                  border: '1px solid rgba(79, 142, 247, 0.2)', 
                  borderRadius: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>📕</span>
                  <span style={{ fontSize: '12px', color: '#a0bfff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={companionPdfName}>
                    {companionPdfName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removeCompanionPdf}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#f56565',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '2px 6px'
                  }}
                  className="hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div 
                style={{ 
                  border: '1px dashed rgba(255, 255, 255, 0.15)', 
                  borderRadius: '8px', 
                  padding: '10px', 
                  background: '#0d0f12', 
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
                className="hover:border-blue-500 transition-colors group relative"
                onClick={() => document.getElementById('companionPdfInput').click()}
              >
                <input 
                  type="file" 
                  id="companionPdfInput" 
                  accept="application/pdf" 
                  onChange={handleCompanionPdfSelect} 
                  style={{ display: 'none' }} 
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>📕</span>
                  <span style={{ fontSize: '11px', color: '#8b90a0' }}>
                    <span style={{ color: '#4f8ef7', fontWeight: '600' }}>Upload PDF</span> specifications (Max 15MB)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Textarea Input */}
        <div className="flex flex-col gap-2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '10px', fontWeight: '700', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Write Your Edit Instructions</div>
          </div>
          <textarea 
            value={editPrompt}
            onChange={e => setEditPrompt(e.target.value)}
            placeholder="Example: 'Change the hero button text to Get Started Now, make it bounce on hover, and change primary color to rose (#ec4899)'..."
            disabled={editLoading || !previewHtml}
            style={{ width: '100%', minHeight: '80px', background: '#0d0f12', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '10px', fontSize: '12px', color: '#e8eaf0', outline: 'none', resize: 'none', opacity: (editLoading || !previewHtml) ? 0.5 : 1 }}
          />
          <button 
            onClick={() => {
              handleEditSubmit();
              if (isMobile) setShowCompanionModal(false);
            }} 
            disabled={editLoading || !editPrompt.trim() || !previewHtml}
            style={{ width: '100%', borderRadius: '8px', background: '#4f8ef7', color: '#ffffff', border: 'none', fontWeight: '600', fontSize: '12px', cursor: 'pointer', padding: '10px 0', opacity: (editLoading || !editPrompt.trim() || !previewHtml) ? 0.5 : 1 }}
          >
            {editLoading ? "Refining Website Code..." : "Apply Prompt Edit"}
          </button>
        </div>

        {/* History */}
        {editHistory.length > 0 && (
          <div className="flex flex-col gap-2 mt-4">
            <div style={{ fontSize: '10px', fontWeight: '700', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Redesigns Applied ({editHistory.length})</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
              {editHistory.map((h, i) => {
                const promptText = typeof h === 'string' ? h : h.prompt;
                const isRevertible = typeof h === 'object' && h !== null && h.codeBefore;

                return (
                  <div 
                    key={i} 
                    className="relative group flex items-start justify-between gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200"
                    style={{ fontSize: '11px', lineHeight: '1.4' }}
                  >
                    <div className="flex-1 text-[#8b90a0] font-medium leading-relaxed italic pr-12">
                      "{promptText}"
                    </div>
                    {isRevertible && (
                      <button
                        onClick={() => handleRevertEdit(h, i)}
                        className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 absolute right-2 top-2 px-2 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/30 rounded text-red-400 font-semibold flex items-center gap-1 cursor-pointer select-none active:scale-95"
                        style={{ fontSize: '10px' }}
                        title="Revert this edit and all subsequent ones"
                      >
                        <span>↩</span>
                        <span>Revert</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#0d0f12', color: '#e8eaf0', fontFamily: '"DM Sans", sans-serif' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center', 
          justifyContent: 'space-between', 
          gap: isMobile ? '0.75rem' : '1rem',
          padding: isMobile ? '0.75rem 1rem' : '0.75rem 2rem', 
          backgroundColor: '#13161b', 
          borderBottom: '1px solid rgba(255,255,255,0.07)' 
        }}>
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>{acceptedPlan.project_title || 'Generated React App'}</h2>
            <div style={{ fontSize: '10px', color: '#555a6a', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>
              {acceptedPlan.project_type || 'web_app'} • {acceptedPlan.tech_stack?.font || 'Inter'}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: isMobile ? 'space-between' : 'flex-end' }}>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '4px' }}>
              <button 
                onClick={() => setActiveTab('preview')}
                style={{ padding: '6px 12px', border: 'none', background: activeTab === 'preview' ? '#4f8ef7' : 'transparent', color: activeTab === 'preview' ? '#fff' : '#8b90a0', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '600', transition: 'all 0.2s' }}
              >
                Preview
              </button>
              <button 
                onClick={() => setActiveTab('code')}
                style={{ padding: '6px 12px', border: 'none', background: activeTab === 'code' ? '#4f8ef7' : 'transparent', color: activeTab === 'code' ? '#fff' : '#8b90a0', borderRadius: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: '600', transition: 'all 0.2s' }}
              >
                Code
              </button>
            </div>
            <button 
              onClick={() => { 
                if(window.confirm('Are you sure you want to clear the session and start over?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              style={{ padding: '7px 12px', background: 'rgba(245,101,101,0.12)', border: '1px solid rgba(245,101,101,0.25)', borderRadius: '8px', color: '#f56565', cursor: 'pointer', fontSize: '11px', fontWeight: '600' }}
            >
              Start Over
            </button>
          </div>
        </div>

        {/* Split View Container */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
          {/* Left Edit Companion Sidebar Panel */}
          {!isMobile && (
            <div style={{ width: '380px', backgroundColor: '#13161b', borderRight: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '1.25rem' }}>
              {renderCompanionContent()}
            </div>
          )}

          {/* Right Preview Pane */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {activeTab === 'preview' && previewHtml && !genError && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: '8px',
                padding: '8px 12px', 
                backgroundColor: '#13161b', 
                borderBottom: '1px solid rgba(255,255,255,0.07)' 
              }}>
                <div style={{ display: 'flex', gap: '4px', overflowX: 'auto' }}>
                  {[
                    { id: 'desktop', label: '🖥️' + (isMobile ? '' : ' Desktop') },
                    { id: 'laptop', label: '💻' + (isMobile ? '' : ' Laptop') },
                    { id: 'tablet', label: '📱' + (isMobile ? '' : ' Tablet') },
                    { id: 'mobile', label: '🔌' + (isMobile ? '' : ' Mobile') }
                  ].map(mode => (
                    <button
                      key={mode.id}
                      onClick={() => setDeviceMode(mode.id)}
                      style={{
                        padding: '4px 8px',
                        fontSize: '11px',
                        fontWeight: '600',
                        border: 'none',
                        borderRadius: '6px',
                        background: deviceMode === mode.id ? '#4f8ef7' : 'transparent',
                        color: deviceMode === mode.id ? '#fff' : '#8b90a0',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
                {!isMobile && (
                  <div style={{ fontSize: '11px', color: '#555a6a', fontFamily: 'monospace' }}>
                    {deviceMode === 'desktop' && 'Responsive × 100%'}
                    {deviceMode === 'laptop' && '1024px × 100%'}
                    {deviceMode === 'tablet' && '768px × 1024px'}
                    {deviceMode === 'mobile' && '375px × 667px'}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'preview' ? (
              genError ? (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem', textAlign: 'center', maxWidth: '500px', margin: '3rem auto', background: '#1c1f26', border: '1px solid rgba(245,101,101,0.2)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '1rem' }}>⚠️</div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#f56565', margin: '0 0 10px 0' }}>Generation Stopped</h3>
                  <p style={{ fontSize: '13px', color: '#8b90a0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {genError.includes('429') 
                      ? 'The API rate limit (TPM/RPM) was exceeded. Azure OpenAI has throttled requests temporarily. Please wait a moment and try again.' 
                      : `Connection error or timeout occurred: ${genError}`}
                  </p>
                  <button 
                    onClick={() => { setGenError(null); setAcceptedPlan({...acceptedPlan}); }}
                    style={{ padding: '10px 20px', background: '#4f8ef7', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer', fontSize: '13px' }}
                  >
                    Retry Code Generation
                  </button>
                </div>
              ) : previewHtml ? (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161920', overflow: 'auto', padding: deviceMode === 'desktop' ? '0' : '1.5rem 1rem' }}>
                  <div style={{
                    width: deviceMode === 'desktop' ? '100%' : deviceMode === 'laptop' ? '1024px' : deviceMode === 'tablet' ? '768px' : '375px',
                    height: '100%',
                    maxHeight: deviceMode === 'desktop' || deviceMode === 'laptop' ? '100%' : deviceMode === 'tablet' ? '1024px' : '667px',
                    maxWidth: '100%',
                    border: deviceMode === 'tablet' || deviceMode === 'mobile' ? '12px solid #2d3748' : 'none',
                    borderLeft: deviceMode === 'laptop' ? '1px solid rgba(255,255,255,0.07)' : deviceMode === 'tablet' || deviceMode === 'mobile' ? '12px solid #2d3748' : 'none',
                    borderRight: deviceMode === 'laptop' ? '1px solid rgba(255,255,255,0.07)' : deviceMode === 'tablet' || deviceMode === 'mobile' ? '12px solid #2d3748' : 'none',
                    borderRadius: deviceMode === 'tablet' ? '24px' : deviceMode === 'mobile' ? '36px' : '0',
                    boxShadow: deviceMode === 'desktop' ? 'none' : '0 25px 50px -12px rgba(0,0,0,0.5)',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.3s ease-in-out',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    {/* Phone/Tablet Notch Speaker simulation */}
                    {(deviceMode === 'tablet' || deviceMode === 'mobile') && (
                      <div style={{
                        position: 'absolute',
                        top: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: deviceMode === 'mobile' ? '60px' : '80px',
                        height: '4px',
                        backgroundColor: '#1a202c',
                        borderRadius: '2px',
                        zIndex: 20
                      }} />
                    )}
                    <iframe 
                      srcDoc={previewHtml} 
                      style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#ffffff' }}
                      title="React Preview"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </div>
              ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '10px', color: '#8b90a0', fontSize: '14px' }}>
                  <span style={{ display: 'inline-block', width: 24, height: 24, border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#4f8ef7', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                  <div>Generating live preview...</div>
                </div>
              )
            ) : (
              (() => {
                const parsedFiles = parseFiles(generatedCode);
                const fileNames = Object.keys(parsedFiles).filter(name => parsedFiles[name].trim().length > 0);
                const activeFile = fileNames.includes(selectedFileTab) ? selectedFileTab : (fileNames[0] || 'App.jsx');
                const fileContent = parsedFiles[activeFile] || '';

                return (
                  <div style={{ padding: '2rem', height: '100%', overflow: 'auto', backgroundColor: '#1a1e25', display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Header Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '10px' }}>
                      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                        {fileNames.map(name => (
                          <button
                            key={name}
                            onClick={() => setSelectedFileTab(name)}
                            style={{
                              padding: '8px 16px',
                              background: activeFile === name ? '#2d3748' : '#0d0f12',
                              color: activeFile === name ? '#ffffff' : '#8b90a0',
                              border: '1px solid rgba(255,255,255,0.07)',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '13px',
                              fontWeight: activeFile === name ? '600' : '400',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                      
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(fileContent);
                            alert('Code copied to clipboard!');
                          }} 
                          style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', color: '#e8eaf0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                          Copy Code
                        </button>
                        <button 
                          onClick={() => {
                            const blob = new Blob([fileContent], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = activeFile;
                            a.click();
                            URL.revokeObjectURL(url);
                          }} 
                          style={{ padding: '8px 16px', background: '#4f8ef7', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                          Download {activeFile}
                        </button>
                      </div>
                    </div>

                    <pre style={{ margin: 0, padding: '1.5rem', background: '#0d0f12', borderRadius: '12px', fontSize: '14px', fontFamily: 'monospace', color: '#a0bfff', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.07)', whiteSpace: 'pre-wrap', flex: 1 }}>
                      <code>{fileContent}</code>
                    </pre>
                  </div>
                );
              })()
            )}

            {/* Editing Loader Overlay */}
            {editLoading && (
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13, 15, 18, 0.75)', backdropFilter: 'blur(3px)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                <span style={{ display: 'inline-block', width: 32, height: 32, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: editStatusMsg ? '#f6ad55' : '#4f8ef7', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#e8eaf0' }}>{editStatusMsg || 'AI is customizing website code...'}</div>
                <div style={{ fontSize: '11px', color: '#8b90a0' }}>{editStatusMsg ? 'Generating a new AI image for your website. This may take a moment...' : 'Redesigning features and updating source code token-by-token.'}</div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Companion Overlay Modal */}
        {isMobile && showCompanionModal && (
          <div style={{ 
            position: 'fixed', 
            inset: 0, 
            backgroundColor: 'rgba(13, 15, 18, 0.85)', 
            backdropFilter: 'blur(8px)', 
            zIndex: 100, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '1rem' 
          }}>
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              maxWidth: '420px', 
              maxHeight: '90vh', 
              backgroundColor: '#13161b', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px', 
              display: 'flex', 
              flexDirection: 'column', 
              overflowY: 'auto', 
              padding: '1.5rem', 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' 
            }}>
              <button 
                onClick={() => setShowCompanionModal(false)}
                style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  background: 'none', 
                  border: 'none', 
                  color: '#8b90a0', 
                  fontSize: '20px', 
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
              {renderCompanionContent()}
            </div>
          </div>
        )}

        {/* Mobile Floating Action Button (FAB) */}
        {isMobile && (
          <button 
            onClick={() => setShowCompanionModal(true)}
            style={{ 
              position: 'fixed', 
              bottom: '1.5rem', 
              right: '1.5rem', 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              backgroundColor: '#4f8ef7', 
              color: '#fff', 
              fontSize: '24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: 'none', 
              cursor: 'pointer', 
              boxShadow: '0 4px 14px rgba(79, 142, 247, 0.4)', 
              zIndex: 90, 
              transition: 'transform 0.2s',
              outline: 'none'
            }}
            title="AI Edit Companion"
          >
            ✨
          </button>
        )}
      </div>
    );
  }

  return (
    <PromptFilter 
      onProceed={(prompt, plan) => {
        console.log('Proceed with:', prompt, plan)
        setUserPrompt(prompt)
        setAcceptedPlan(plan || { project_title: 'Custom Plan' })
      }} 
      onFail={(prompt, result) => console.log('Failed:', prompt, result)} 
    />
  );
}

export default App;
