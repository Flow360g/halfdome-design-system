Half Dome is an independent performance marketing agency in Richmond, Melbourne. The brand idea is **Whole Potential.™**: confident, warm and a little hand-made. Heavy geometric type and a single half-dome mark do the heavy lifting; chalky hand-drawn arrows, outlined illustrated icons and playful 3D objects on soft shapes add personality. Keep layouts calm and spacious so the few brand elements carry the page.

## Start here: what to read for each job

This page holds the core rules. Read only the extra files your job needs:

| Job | Also read |
| --- | --- |
| Slides or a deck (PowerPoint, Slides, HTML) | **Slides and documents** section (`slides-and-documents.md`) and **Key assets** (`asset-ids.md`) |
| Charts, dashboards, reports | **Data visualisation** (`data-visualisation.md`) |
| Copy, headlines, social, values content | **Voice and values** (`voice-and-values.md`) |
| An icon | `assets/Icons/README.md` for names; paths and ids via **Key assets** |
| Exact token values for code | `tokens.json` (about 13 KB) |
| Rendering the live React components | `components/bundle.js`, `bundle.css`, `index.d.ts` and the component's README |

Skip `design-system.json` (in a Claude design system: about 95 KB of asset records), `components/bundle.js` and `components/lib/` unless the job truly needs them. Everything a typical deck or document needs is on this page plus the files in the table.

## Content fundamentals

- Australian English (colour, organise, optimise; programme only for events).
- Speak as "we" to "you": direct, plain and specific. Lead with the outcome, then the evidence. Numbers beat adjectives.
- Sentence case for headings, buttons and labels. Capitalise each word only in the tagline and proper names.
- Short statements end in a full stop, as the values do: "Stay classy." "Blow things up."
- The company is "Half Dome" in copy (two words). The wordmark is lowercase "halfdome"; never type it out to imitate the logo.
- The tagline is always **Whole Potential.™**: capital W and P, a full stop and the ™, used alongside the dome or the logo.
- Dates on slides and documents use DD.MM.YY (06.10.26). No emoji in client-facing work.

## Colour

Five named colours, used at full strength. Do not tint, shade or invent new hues. Use Hex or RGB on screen, CMYK and Pantone for print.

| Token | Hex | RGB | CMYK | Pantone | Role |
| --- | --- | --- | --- | --- | --- |
| `sequoia` | #8E1C02 | 142 28 2 | 27 98 100 33 | 484 C | Primary brand red |
| `camas` | #B0A3D0 | 176 163 208 | 37 39 0 0 | 522 C | Brand purple |
| `white-fir` | #D2C663 | 210 198 99 | 22 15 71 2 | 458 C | Brand gold ("fir" or "green" in file names) |
| `snow` | #F7F6F5 | 247 246 245 | 5 4 5 0 | | Off-white |
| `black-oak` | #0F0F0F | 15 15 15 | 0 0 0 99 | | Black |

- Documents and web pages sit on white. Content slides sit on `snow`; the cover, section dividers and closing slide use a full brand-colour ground (`black-oak`, `sequoia`, `camas` or `white-fir`).
- Text is `black-oak` (`ink`) on light grounds. Use `sequoia` (`accent`) for one emphasised word, a key number or a link. Secondary text is `ink-muted` (72% black-oak).
- `sequoia`, `camas` and `white-fir` are fill colours for the dome, shapes, icons and statement type. Only `sequoia` may carry information as text on light grounds; `camas` and `white-fir` text is display-only and never body copy or data labels.
- On `black-oak`, use `snow` text with `white-fir` or `camas` accents; never `sequoia` text on `black-oak`.
- Coloured slides set titles and subtitles in `snow` on every ground, `camas` and `white-fir` included. Body copy never sits on `camas` or `white-fir`.
- One brand hue per page or slide is the default; pair at most two. Keep `camas` and `white-fir` apart.
- Charts use `sequoia`, then `black-oak`, then `camas`, then `white-fir`; show change with an arrow or sign as well as colour.

## Typography

- **Plus Jakarta Sans** is the working face: headlines 700, statements and hero numbers 800, body 400. Slide titles about 64px at 1920 x 1080 (32 to 36pt in PowerPoint), slide body 24px (never under 20px), labels in uppercase with letter spacing.
- **Libre Baskerville** is the second voice: italic subtitles on coloured slides, cover lines, pull quotes, step numbers on process slides, the office address. Never body copy.
- Both ship as variable woff2 in `fonts/`. For Office, install the TTFs from SharePoint (Branding › Asset Library › Fonts); without them PowerPoint substitutes a default font.

## Logo, dome and lock-up

- The wordmark is lowercase "halfdome" with the "o" as a half dome. Use only the supplied files (listed in **Key assets**); never redraw, recolour, stretch or set it in type. At least 24px high on screen, with clear space of the dome's height on every side.
- Black logo on light grounds, White logo on coloured grounds; match the dome colour to the page accent.
- Slides: logo top left with a thin full-width rule under it on about 80% of slides. The cover has no rule and puts the logo above the title; very dense slides drop the rule and move a smaller logo to a bottom corner.
- The standalone dome sits flush on the bottom edge (large on dividers and the closing slide). The vertical "Whole Potential.™" lock-up runs up the left edge of coloured slides with its dome on the frame edge; never crop the dome or float the lock-up mid-page.

## Decks

Every deck runs: coloured cover (logo above the title, one brand image on a shape) → a coloured divider before each section → `snow` content slides under the logo-and-rule header → a `sequoia` "Thank you!" closing slide. Never end on a content slide. Full layout rules, sizes and the colour pairings per ground are in **Slides and documents**.

## Shapes, imagery, arrows and icons

- Use shapes sparingly, one per page, never rotated, only in `sequoia`, `camas` or `white-fir` (Black and White versions are for masks). Follow the document templates' shape placement.
- Every image sits on or in a brand shape. Brand imagery is playful 3D objects cut out on transparency; no stock photos in rectangles, no rotated images. Avoid HD_CHOC_GRAPH. Ask Jack in the creative team for images that are not in the library.
- Chalk arrows point at one key number or idea per view: `black-oak`, or White on dark grounds. Never stretch, distort or recolour.
- Icons (`assets/Icons/`, about 160 in up to five colourways) are illustrated: thick black outline, flat brand fill. One colourway per page, matched to the accent, 48px or larger. Never substitute emoji or stock icons; ask Jack for new ones.

## Layout

- Generous white space: slide margins 96px at 1920 x 1080 (0.67in in PowerPoint), section gaps 32 to 48px.
- Cards and image frames have 12px corners; buttons and pills are fully rounded; separate areas with space, a hairline or a flat fill. No drop shadows or gradients.
- Restraint: one shape, one accent colour, one icon or arrow per view.

## Components

The `HalfDome` bundle (React 18) provides `Logo`, `Dome`, `Tagline`, `BrandIcon`, `Arrow`, `ShapeImage`, `Button`, `Pill`, `SectionHeader`, `Statement`, `Quote`, `StatTile`, `InsightCard`, `FeatureBox`, `BarChart`, `DataTable`, `TeamMember`, `ContactBlock` and a 1920 x 1080 `Slide` frame (cover, content, divider, closing). Load it only when rendering these components; in a git checkout it loads assets from `HalfDome.config.assetBase`, and inside a Claude design system from the uploaded asset ids.

Source: the SharePoint Branding Asset Library, Logos and Document Templates, October 2026. Assets left in SharePoint are noted in the Imagery and Icons READMEs.
