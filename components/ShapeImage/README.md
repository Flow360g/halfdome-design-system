# ShapeImage

Puts an image inside a brand shape, the only way images appear in the brand.

**Props**
- `src`: the image. Brand imagery (`assets/Imagery/`) is cut out on transparency and sits on the shape by default.
- `shape`: 1 to 6 (default 4). Red exists for 1 to 5 and Purple for 2 to 6; the component falls back to the nearest one.
- `colour`: `"red"` (default), `"purple"` or `"gold"`.
- `mask`: set `true` for rectangular photography, which is then clipped to the shape instead.
- `width`: px (default 360); the shape canvas is 3:2.

One shape per page. Never rotate shapes or images.
