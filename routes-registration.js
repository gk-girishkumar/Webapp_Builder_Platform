// ─── Route Registration (add to your Express server entry, e.g. server.js / index.js) ───
//
// Import the new handlers:
//
//   import {
//     handleFilterPrompt,
//     handleGeneratePlan,
//     handleAnalyzeAndPlan,
//     handleConfig,
//   } from './filter.js';
//
// Register routes (multer upload middleware assumed as `upload`):
//
//   // Existing
//   app.post('/api/filter-prompt', upload.single('image'), handleFilterPrompt);
//   app.get('/api/config', handleConfig);
//
//   // NEW: generate a page plan from an approved prompt (+ optional image)
//   app.post('/api/generate-plan', upload.single('image'), handleGeneratePlan);
//
//   // NEW: filter + plan in one call (most useful for the frontend)
//   app.post('/api/analyze-and-plan', upload.single('image'), handleAnalyzeAndPlan);

// ─────────────────────────────────────────────────────────────────────────────

// STRUCTURED PROMPT + IMAGE PLAN
// ─────────────────────────────────────────────────────────────────────────────
// This service supports a two-step workflow:
//   1. Filter the prompt for safety, clarity, and relevance.
//   2. Generate a structured page plan from the approved prompt.
//
// Image guidance is optional but encouraged: when an image is provided,
// the plan should infer layout, color palette, section order, and UI patterns
// from the screenshot/wireframe.
//
// The generated plan includes project metadata, tech stack, color scheme,
// ordered sections with content hints, and suggested file structure.
//
// ─────────────────────────────────────────────────────────────────────────────
//
// API CONTRACT
// ─────────────────────────────────────────────────────────────────────────────
//
// POST /api/filter-prompt          (unchanged)
//   Body (multipart/form-data):
//     prompt  string  required
//     image   file    optional  — reference screenshot/wireframe
//   Response: FilterResult JSON (verdict, scores, flags, can_proceed, ...)
//
// POST /api/generate-plan          (NEW)
//   Body (multipart/form-data):
//     prompt  string  required  — should already be approved by filter
//     image   file    optional  — reference screenshot/wireframe
//   Response:
//     {
//       success: true,
//       plan: {
//         project_title, project_type,
//         tech_stack: { framework, styling, extras[] },
//         color_scheme: { primary, secondary, accent, background, text },
//         sections: [
//           {
//             id, name, type, order, description,
//             components[],
//             content_hints: { heading, subheading, cta_text, items[] },
//             design_notes
//           }
//         ],
//         global_design_notes,
//         responsive,
//         estimated_complexity,
//         suggested_file_structure[],
//         summary
//       },
//       fallback: boolean   // true if LLM failed and heuristics were used
//     }
//
// POST /api/analyze-and-plan       (NEW — recommended for frontend)
//   Body (multipart/form-data):
//     prompt  string  required
//     image   file    optional
//   Response:
//     {
//       filter: FilterResult,       // same as /api/filter-prompt
//       plan:   PagePlan | null,    // null if filter blocked the prompt
//       plan_fallback: boolean
//     }
//
// ─────────────────────────────────────────────────────────────────────────────
//
// FRONTEND USAGE EXAMPLE (fetch)
// ─────────────────────────────────────────────────────────────────────────────
//
//   const fd = new FormData();
//   fd.append('prompt', userPrompt);
//   if (imageFile) fd.append('image', imageFile);
//
//   const res  = await fetch('/api/analyze-and-plan', { method: 'POST', body: fd });
//   const data = await res.json();
//
//   if (data.filter.can_proceed && data.plan) {
//     // Show the plan to user: data.plan.sections[] etc.
//     renderPlanPreview(data.plan);
//   } else {
//     // Show filter feedback
//     showFilterWarning(data.filter);
//   }
