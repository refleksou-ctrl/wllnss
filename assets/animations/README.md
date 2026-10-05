# Animations — handoff folder

Everything in here is written to be **lifted out and given to the dev team**.
The rest of the prototype is throwaway; these files are not.

## Rules

- One file per animation. Name it for what it does: `icon-arrow-loop.html`.
- Each file is self-contained: markup + its own `<style>` + a comment saying
  where it's used in the prototype. A developer copies one file, pastes it, it works.
- Inline SVG + CSS keyframes. No library, no build step, no external requests.
- Respect `prefers-reduced-motion` inside the file itself.
- Open the file directly in a browser to preview it in isolation.

## Index

| File | What it does | Used on |
|------|--------------|---------|
| `ticker-wllnss.html` | Seamless TELLISKIVI TLN / WLLNSS marquee from the single logo SVG. Pauses on hover. | every page, header |
| `wave-draw.html` | Orange wave draws itself left-to-right when scrolled into view. | index, "Rohkem kui treening" |
