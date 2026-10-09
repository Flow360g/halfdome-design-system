# Slide

A 1920 x 1080 slide frame that follows the Half Dome deck template: coloured cover, divider and closing slides, `snow` content slides with the logo top left above a full-width rule.

**When to use**: build every slide of a Half Dome deck from it. Scale it with a CSS transform to fit its container.

**Props**
- `layout`: `"cover"` (first slide: no rule, logo above the title, brand image on a shape on the right), `"content"` (default: header, headline and children), `"divider"` (section title on a coloured ground with an image on a shape, or a large dome on the bottom edge), `"closing"` (the last slide of every deck: "Thank you!" on `sequoia` with a large `snow` dome; the title defaults to "Thank you!"), `"statement"` (one values line), `"quote"` (pull quote with `by`). `"title"` is kept as an alias of `"cover"`.
- `ground`: `"snow"` (content default), `"black"` (cover default), `"red"` (divider and closing default), `"purple"`, `"gold"`. Titles and subtitles are `snow` and the logo is white on every coloured ground; lock-up and dome colours follow the ground (see Slides and documents).
- `title`, `subtitle` (Libre Baskerville italic on cover, divider and closing), `by`, `date` (DD.MM.YY, optional).
- `image` (a brand image url), `shape` (1 to 6) and `shapeColour` for the image on cover and divider slides. Without an image, dividers and the closing slide show a large dome; `domeColour` overrides its colour.
- `rule`: show or hide the rule under the logo. On by default except on the cover; turn it off on a closing slide when you want.
- `dense`: for content-heavy slides. Drops the header rule and moves a smaller logo to a bottom corner; `logoCorner` is `"bottom-left"` (default) or `"bottom-right"`.
- `accent`: overrides the logo dome colour. `ink`: `"black"` or `"snow"` to override the text colour. `theme="dark"` is kept as an alias of `ground="black"`.

Default to the header with the rule on about 80% of slides; use `dense` only when the content will not fit under it.
