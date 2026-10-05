# Everything in the build that is NOT in Figma

A static Figma frame can't show hover, focus, motion or breakpoints, so some
things have to be decided rather than copied. This file lists every one of
those decisions so nothing is silently invented. Anything not on this list
came from the file.

## Interaction states (no designed state exists in this file)

Ken's call: reuse Telliskivi M's designed hovers (same brand family).

| What | What I did | Why |
|---|---|---|
| Arrow buttons, transparent (incl. card buttons) | Background → Helehall #F0F0F0 at 10% opacity, arrow slides 4px | M-hoone Tükid 1:66082 hover, toned down to 10% by Ken |
| Arrow buttons, WLLNSS hele fill | Background darkens to #D9906A, arrow slides 4px | M-hoone darkens orange → "oranži hover". No hele hover exists, so hele is darkened by the same step |
| Treatment cards | Whole card is the link; its "Vaata lähemalt" button takes the hover above; photo zooms 3% | Card-wide click target feels expected; zoom is mine |
| Slider arrows at either end | Dim to 30%, not clickable | Shows there is nothing further that way |
| ENG / EST | Hover turns orange; EST is marked active with the designed bar | — |
| Social icons | Hovered icon turns Helehall #F0F0F0 (Ken); links `#` | No URLs supplied |
| Footer links | Turn white on hover | M-hoone uses orange, but orange on WLLNSS tume is hard to read |
| Keyboard focus | 2px orange outline, 2px offset | Needed for keyboard use |
| "Vaata asukohta kaardil" | Opens Google Maps for Telliskivi 60/1 in a new tab | — |
| "Avasta treeninguid" | Scrolls down to the treatments | — |

## Menu (designed: main-site menu, Figma "MENÜÜ EXPLORATION" 3:398)

Copied from the file: bar layout, burger → X when open,
dropdown links, the scrolled bar colour rgba(245,245,244,0.9) and the light dropdown.

| What | What I did | Why |
|---|---|---|
| When the bar gets its background | As soon as the page scrolls at all (Ken). Fades in over 250ms | Figma shows the scrolled state, not the moment it switches |
| Sticky | Ticker scrolls away, bar sticks to the top | Ken |
| Dropdown position | 12px under the bar; starts 32px left of the "Menüü" label, width = links + 32px each side | Measured on the live main site, telliskivitln.ee/hub (Ken) |
| Dropdown spacing | 32px gap measured from cap height to baseline, like Figma (rows 44px apart) | From the file |
| Dropdown link hover | Orange + underline wipe | M-hoone hover |
| KOGUKOND button | Removed | Main-site item, not part of WLLNSS (Ken) |
| Main-site centre links (Vabad pinnad, M-hoone, HUB, WLLNSS) | Removed | Hidden leftovers in the WLLNSS file (Ken) |
| Dropdown contents | Three placeholders, "Link 1–3" | Ken: the main site's six links don't belong here; real list to come |
| Hidden exploration frames 3:399, 3:1255, 3:1462 | Ignored | Earlier versions (all links in the bar, "UUS M-hoone" tag) |

## Slider (agreed with Ken)

| What | What I did |
|---|---|
| Cards | 8: the 4 designed ones, then the same 4 again |
| Behaviour | Starts as designed, overflowing right. Each arrow click moves one card; once moved, cards overflow left too. Swipe/trackpad works natively |
| Last position | Last card's right edge lines up under the arrows |

## Motion (no motion spec in the file)

| What | What I did |
|---|---|
| Header ticker | Scrolls right-to-left ~60px/sec, pauses on hover (M-hoone behaviour). 44px tall, not Figma's 48, to match the live Telliskivi sites (Ken) |
| Section content | Fade + 24px rise, 450ms, as it enters view |
| Bars behind headings | Wipe in from the left, 700ms |
| Orange wave | Draws itself left to right over 2.4s |
| Stat numbers | Count up from 0 over 1.1s |
| Slider | Smooth scroll between cards |

All motion is off under `prefers-reduced-motion`.

## Wide screens (>1440)

Content stays on a centred 1440 canvas. Exception: the social icons are always 24px from the screen's left edge (Ken), not from the canvas. The heading bars and the stats box
bleed off the edge in Figma, so they stretch to the viewport edge. The slider
starts aligned with the headings and overflows to the screen edge.

## Responsive (Figma is 1440 only)

| Breakpoint | What happens |
|---|---|
| ≥1200px | Matches Figma |
| <1200px | Everything stacks in one column with 48px side margins. Heading bars move to just behind each heading. Hero bar is redrawn under the title's second line. Social icons stay 24px from the left edge; hero text moves in to 96px to clear them. "Rohkem" points become a 2×2 grid with the wave faded behind them. Location text moves to the bottom-left with a darker fade for legibility. Footer stacks |
| <700px | Social icons hidden (no room beside the text). 20px margins, headings 32/24px, cards 300×360, "Rohkem" points in one column |

**None of this is approved design.** Worth caveating to the client, or asking
the designer for mobile frames.

## Substitutions

| What | Standing in | Until |
|---|---|---|
| Treatment cards 5–8 | Copies of cards 1–4 | real treatments + photos |
| All menu / footer / card links | `#` | real pages exist |

## Technical notes

- Text positions use CSS `text-box` trimming to match Figma's cap-height
  measurements exactly. Chrome and Safari support it; in Firefox text sits a
  few px lower.

## Open questions

- Is the "1 WLLNSS" heading in the stats box final copy?
- Real social media URLs?
- Footer address is the Telliskivi TLN office (60/2), the location section says 60/1. Both copied from Figma, just flagging.
