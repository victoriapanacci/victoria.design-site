# Structure study — 20 homepage concepts

Twenty different structures for the same site, same copy, same palette.
The variable is *structure*: what the page is organised around, and what the
reader meets first.

Generated, not hand-edited. To change a concept, edit its source and rebuild:

    node run.mjs        # writes Main.dc.html, C01…C20.dc.html and canvas.json

| File | What it holds |
|---|---|
| `build.mjs` | Palette, type, shared helpers, and the real site copy |
| `emit.mjs` | Artboard wrapper |
| `concepts-a.mjs` | Concepts 01–07 |
| `concepts-b.mjs` | Concepts 08–14 |
| `concepts-c.mjs` | Concepts 15–20 |
| `run.mjs` | Builds the legend artboard, every concept, and `canvas.json` |

All imagery is a marked placeholder sized to the asset list in the root README.
Booking URL and response time are bracketed, not invented.
