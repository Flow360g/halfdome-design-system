# StatTile

A KPI tile: label, hero number and change.

**Props**: `label`, `value` (pre-formatted string, e.g. "4.3x", "$1.2M"), `delta` (e.g. "+18%" or "-6%"; sign sets the arrow and colour), `period` (e.g. "vs last quarter"), `emphasis` (true for the one hero tile in `sequoia`).

Change is never shown by colour alone: an arrow and the sign always accompany it.
