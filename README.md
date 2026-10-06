Half Dome is an independent performance marketing agency in Richmond, Melbourne. The brand idea is **Whole Potential.™**: confident, warm and a little hand-made. Heavy geometric type and a single half-dome mark do the heavy lifting; chalky hand-drawn arrows, outlined illustrated icons and playful 3D objects on soft shapes add personality. Keep layouts calm and spacious so the few brand elements carry the page.

## Content fundamentals

- Write in Australian English (colour, organise, optimise, programme only for events).
- Speak as "we" to "you": direct, plain and specific. Lead with the outcome, then the evidence. Numbers beat adjectives.
- Sentence case for headings, buttons and labels. Capitalise each word only in the tagline and proper names.
- Short statements end in a full stop, as the values do: "Stay classy." "Blow things up."
- The company is "Half Dome" in copy (two words). The wordmark is lowercase "halfdome"; never type it out to imitate the logo.
- The tagline is always **Whole Potential.™**: capital W and P, a full stop and the ™. Use it alongside the dome or the logo.
- Dates on slides and documents use DD.MM.YY (06.10.26).
- No emoji in client-facing work.

See the **Voice and values** section for the four values and how to write in them.

## Colour

Five named colours, used at full strength. Do not tint, shade or invent new hues.

| Token | Hex | Pantone | Role |
| --- | --- | --- | --- |
| `sequoia` | #8E1C02 | 484 C | Primary brand red |
| `camas` | #B0A3D0 | 522 C | Brand purple |
| `white-fir` | #D2C663 | 458 C | Brand gold ("fir" or "green" in file names) |
| `snow` | #F7F6F5 | | Off-white |
| `black-oak` | #0F0F0F | | Black |

- Documents and web pages sit on `surface` (white). Slides and presentations sit on `snow` (`surface-alt`).
- Set text in `ink`. Use `accent` for one emphasised word, a key number or a link.
- `sequoia`, `camas` and `white-fir` are fill colours for the dome, shapes, icons and statement type. Only `sequoia` may carry information as text on light grounds; `camas` and `white-fir` text is display-only (the values tiles) and never for body copy or data labels.
- On `black-oak`, use `snow` text with `white-fir` or `camas` accents. Never put `sequoia` text on `black-oak`.
- One brand hue per page or slide is the default; pair at most two. Keep `camas` and `white-fir` apart (1.3:1 against each other).
- Strong pairs: `sequoia` on `snow`, `snow` on `sequoia`, `white-fir` on `black-oak`, `camas` on `black-oak`, `black-oak` on `white-fir` or `camas`.
- Charts use `chart-1` to `chart-4` in order; change is shown with `positive` and `negative` plus an arrow or sign, never colour alone.

## Typography

- **Plus Jakarta Sans** (`sans`, variable 200 to 800) is the working face. Headlines in `h1` to `h3`, `slide-title` on slides, running text in `body` and `body-l`, labels in `eyebrow`, `small` and `caption`.
- **Statements** (`statement`, 800 weight) carry the values voice: two or three words in one brand colour, ending in a full stop. Hero numbers use `stat`.
- **Libre Baskerville** (`serif`) is the second voice, from the tagline and the contact cards: `display-xl` and `display-l` for cover lines and pull quotes, `display-italic` for a single emphasised word, and the office address. Never set body copy in the serif.
- Both families ship as variable woff2 files in `fonts/`. For Office, install the TTFs from the Fonts folder of the Asset Library.
- `eyebrow` is uppercase with its letter spacing, in `accent`.

## Logo

- The wordmark is lowercase "halfdome" with the "o" replaced by a half dome. Use only the files in `assets/Logos/` (or the `Logo` component); never redraw, recolour, stretch or rebuild it in type.
- Light grounds: `Halfdome-Logo-Black-Red` (default), `-Black-Purple` or `-Black-Green`. Dark or photo grounds: `-White-Red`, `-White-Purple`, `-White-Green` or `-White`.
- Match the dome colour to the page's accent colour.
- Clear space of at least the dome's height on every side. Keep it horizontal and at least 24px high on screen.

## The dome and tagline

- The standalone dome (`assets/Dome/`, `Dome`) is the brand icon: avatars, favicons, sign-offs and an anchor on covers, sitting flush on the bottom edge of the frame.
- The vertical "Whole Potential.™" lock-up (`assets/Tagline/`, `Tagline`) runs up the edge of a layout with the dome on the edge of the frame. Never crop the dome or float the lock-up mid-page.

## Shapes and imagery

- Every image sits in or on one of the six brand shapes (`assets/Shapes/`, `ShapeImage`). One shape per page, never rotated.
- Shapes appear only in `sequoia`, `camas` and `white-fir`; Black and White versions are for masks and one-colour work.
- Brand imagery (`assets/Imagery/`) is playful 3D objects cut out on transparency, placed on a coloured shape. Photography of people, such as the values hands or team headshots, is cut out the same way.
- No stock photos in rectangles, no rotated images, no image without a shape.

## Arrows

- Hand-drawn chalk arrows (`assets/Arrows/`, `Arrow`) point the eye to a key number or idea. Keep them `black-oak`, or White on dark grounds. One per view; never stretch, distort or recolour.

## Iconography

- The icon library (`assets/Icons/`, about 150 icons in up to five colourways) is illustrated: thick `black-oak` outline, flat brand-colour fill, white highlights, sometimes a chalk stroke. PNGs with transparency, not an icon font.
- Use one colourway per page, matched to the accent. Show icons at 48px or larger. Never substitute emoji or stock line icons.
- The `BrandIcon` component loads any icon by name and colour.

## Layout

- Generous white space: slide margins of `space-24` (96px at 1920 x 1080), section gaps of `space-8` to `space-12`.
- Cards and image frames use `radius-md`; buttons and pills use `radius-pill`; dividers use `hairline`.
- No drop shadows or gradients (`shadow-none`). Separate areas with space, a hairline or a flat fill.
- Bring it together with restraint: one shape, one accent colour, one icon or arrow per view. A page that uses every element at once is off-brand.
- Focus states are a 2px solid `focus-ring` outline offset 3px.

## Components

The `HalfDome` bundle provides the brand marks (`Logo`, `Dome`, `Tagline`, `BrandIcon`, `Arrow`, `ShapeImage`), actions (`Button`, `Pill`), type patterns (`SectionHeader`, `Statement`, `Quote`), data (`StatTile`, `InsightCard`, `FeatureBox`, `BarChart`, `DataTable`), people (`TeamMember`, `ContactBlock`) and a 1920 x 1080 `Slide` frame that follows the PowerPoint template. Asset paths resolve relative to this system; set `HalfDome.config.assetBase` (and `blobBase`) when using the bundle elsewhere.
