# Half Dome design system (source files)

This repository holds the Half Dome brand design system in the folder layout used by Claude's Design System artifact, so it can be imported with "build from a GitHub repository".

## Built to be light to read

The guide is arranged so Claude (or a person) reads only what a job needs, which keeps token use low:

1. `README.md` is the core brand book, short enough to read in full every time. Its **Start here** table says which one or two extra files each job needs.
2. `asset-ids.md` (**Key assets**) lists the logos, domes, taglines, shapes, images and arrows most work uses, so nobody has to browse the asset folders or a large manifest.
3. Everything else is opened on demand: one section file, one group README, `tokens.json` for exact values, and `components/bundle.js` only when rendering React components.

A typical deck needs `README.md`, `slides-and-documents.md` and `asset-ids.md`: about 18 KB in total, compared with well over 150 KB if every file were read.

## File map

| Path | Contents |
| --- | --- |
| `README.md` | The core brand book and the **Start here** reading guide |
| `slides-and-documents.md` | Deck structure (coloured cover, dividers, content, closing "Thank you!" slide), header and logo rules, colour pairings per ground |
| `voice-and-values.md`, `data-visualisation.md` | Copy and values; charts and reports |
| `asset-ids.md` | Key assets by group, with paths (a Claude design system adds upload ids) |
| `tokens.json` | All colour, type, spacing, radius, stroke and shadow tokens, in the Design System format |
| `tokens.css` | The same tokens as CSS custom properties, with `@font-face` rules |
| `fonts/` | Plus Jakarta Sans and Libre Baskerville, variable woff2 |
| `assets/<Group>/` | Logos, Dome, Tagline, Values, Icons, Imagery, Shapes, Arrows, Tech-Frames, Diagrams, Contact-Cards (originals from the SharePoint Branding Asset Library), each with a README |
| `components/` | `bundle.js` (window.HalfDome, React 18), `bundle.css`, `index.d.ts`, `lib/` (React 18.3.1), and a README plus live `preview.html` per component |

## Components and assets

`components/bundle.js` loads assets from `HalfDome.config.assetBase` (default `../../assets/`, relative to a component page). When the repository is imported into a Claude design system, the assets are uploaded and the bundle's `BLOB` map is filled with their ids, with `config.useBlobs` set to true.

Source: SharePoint Operations > General > Branding (Asset Library, Logos, Document Templates), October 2026.
