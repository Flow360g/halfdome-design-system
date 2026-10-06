# Half Dome design system (source files)

This repository holds the Half Dome brand design system in the folder layout used by Claude's Design System artifact, so it can be imported with "build from a GitHub repository".

| Path | Contents |
| --- | --- |
| `README.md` | The brand book (usage rules that name tokens) |
| `voice-and-values.md`, `slides-and-documents.md`, `data-visualisation.md` | Further brand guide sections |
| `tokens.json` | All colour, type, spacing, radius, stroke and shadow tokens, already in the Design System format |
| `tokens.css` | The same tokens as CSS custom properties, with `@font-face` rules |
| `fonts/` | Plus Jakarta Sans and Libre Baskerville, variable woff2 |
| `assets/<Group>/` | Logos, Dome, Tagline, Values, Icons, Imagery, Shapes, Arrows, Tech-Frames, Diagrams, Contact-Cards (originals from the SharePoint Branding Asset Library), each with a README |
| `components/` | `bundle.js` (window.HalfDome, React 18), `bundle.css`, `index.d.ts`, `lib/` (React 18.3.1), and a README plus live `preview.html` per component |

Source: SharePoint Operations > General > Branding (Asset Library, Logos, Document Templates), October 2026.
