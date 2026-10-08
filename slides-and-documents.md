# Slides and documents

## Slides (1920 x 1080)

The PowerPoint template (`BAM_Halfdome_Powerpoint_Template_UPDATED.pptx`, in Branding > Document Templates > Powerpoint) and the decks the team builds from it follow one structure: a coloured cover, coloured dividers between sections, `snow` content slides in between, and a closing "Thank you!" slide at the end.

### Slide types

| Type | Ground | Header (logo + rule) | Visual | Component |
| --- | --- | --- | --- | --- |
| Cover (first slide) | `black-oak`, `sequoia` or `camas` | No rule. The logo sits left, above the title | One brand image on a shape, right half | `Slide layout="cover"` |
| Section divider | `white-fir`, `sequoia`, `camas` or `black-oak` | Logo top left with the rule | A brand image on a shape, or no image and a large dome on the bottom edge | `Slide layout="divider"` |
| Content (default) | `snow` | Logo top left with the rule | Charts, tables, boxes, icons | `Slide` |
| Content, dense | `snow` | No rule. A smaller logo moves to the bottom left or bottom right corner | As content | `Slide dense` |
| Closing (last slide, every deck) | `sequoia` by default | Logo top left; rule on by default, can be dropped | Title "Thank you!", no image, large `snow` dome on the bottom edge | `Slide layout="closing"` |

### The header

- On about 80% of slides, everything except the cover and often the closing slide, the logo sits top left (about 52px high at 1920 x 1080, top at 72px) with a thin rule beneath it across the full width between the side margins (`space-24`). The rule is `stroke-outline` (2px) in the slide's ink: `black-oak` on light grounds, `snow` on dark ones.
- The headline sits below the rule, top left in `slide-title`, at most two lines.
- When a slide has too much content to fit under the header, drop the rule and move a smaller logo (about 28px high) to the bottom left or bottom right corner. Use this only when the content needs the room.
- The cover never has the rule. The logo sits on the left above the title, larger than on content slides.

### Coloured slides

- Cover: title in `slide-hero` (96px, 700), the subtitle or period below it in Libre Baskerville italic (for example "Q2 FY27"). One brand image on one shape fills the right half, in a brand colour that contrasts with the ground (a `sequoia` shape on `black-oak`).
- Section dividers: title left and vertically centred. Either one brand image on a shape on the right, or, when there is no image, a large standalone dome (about 560px wide) sitting on the bottom edge at the right margin, in a colour that contrasts with the ground (`sequoia` on `camas`, `snow` on `sequoia`).
- Closing slide: every deck ends on one, by default. `sequoia` ground, the white logo with a `camas` dome top left, the title "Thank you!" left and vertically centred in `snow`, no image and no other copy, a large `snow` dome on the bottom edge at the right and the lock-up on the left edge. Only change the ground or add a line (contact details, a next meeting date) when the deck calls for it.
- The vertical "Whole Potential.™" lock-up runs up the left edge of covers, dividers and the closing slide, with its dome on the bottom edge of the frame.
- Marks per ground:

| Ground | Text | Logo | Lock-up | Large dome / shape |
| --- | --- | --- | --- | --- |
| `black-oak` | `snow` | White, `camas` dome | White, `camas` dome | `camas` dome / `sequoia` shape |
| `sequoia` | `snow` | White, `camas` dome | White, `camas` dome | `snow` dome / `camas` shape |
| `camas` | `snow` | White, `white-fir` dome | White, `white-fir` dome | `sequoia` dome / `sequoia` shape |
| `white-fir` | `snow` | White, `sequoia` dome | White, `sequoia` dome | `sequoia` dome / `sequoia` shape |

- Titles and subtitles on coloured slides are always `snow`, on every ground including `camas` and `white-fir`. Coloured slides only carry large title and subtitle type, which reads clearly at that size. Body copy, labels and data never sit on a `camas` or `white-fir` ground.

### Other layouts

| Layout | Use | Component |
| --- | --- | --- |
| Headline + text + chart | Results with a chart or table and a short read-out | `Slide` + `BarChart` / `DataTable` |
| Headline with an image | One idea and one brand image on a shape | `Slide` + `ShapeImage` |
| Process | Numbered steps (01, 02 ...) in Libre Baskerville italic `sequoia`, a subhead and short text per step, outputs underneath | `Slide` (often `dense`) |
| Quote | "Add a quote" and who said it | `Slide layout="quote"` |
| Four subheads / Three boxes | Columns of subhead and text | `FeatureBox` x 3 or 4 |
| Insights | Insight 1 to 3 with a headline and body | `InsightCard` x 3 |
| Team | "Half Domer Name / Half Domer Title" grid | `TeamMember` |
| Values statement | One values line, full slide | `Slide layout="statement"` |

### Rules

- Every deck runs cover, content (with a divider before each section), then the closing "Thank you!" slide. Never end on a content slide.
- Margins `space-24` (96px).
- Body copy no smaller than 20px (`slide-body` is 24px).
- One accent colour per section of the deck, matched across the logo dome, shape, icons and statement.
- A date stamp (DD.MM.YY) is optional: under the subtitle on the cover, or small in the bottom right corner of a content slide.
- Charts: `chart-1` for the client or hero series, `chart-2` for the comparison.

## Word documents

Use the HalfDome Word templates (Branding > Document Templates > Word, ten variants) and the client brief template `HD_CLIENT_BRIEF_DOCUMENT_TEMPLATE.docx`. Documents sit on white, use `h1` to `h3` and `body`, and close with the contact block in Libre Baskerville. Excel reports use the Excel template in the same folder.

## Social and email

LinkedIn banners, social templates, logo animations and the email signature live in Branding > Social Media Assets. Profile pictures use the standalone dome; cover images use a shape, one image and the logo.
