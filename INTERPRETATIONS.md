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
| Sticky | Ticker and menu bar both stay at the top while scrolling | Ken |
| Dropdown position | 12px under the bar; starts 32px left of the "Menüü" label, width = links + 32px each side; if the links are too long to fit, the panel shifts left just enough to end at the screen edge | Measured on the live main site, telliskivitln.ee/hub (Ken) |
| Dropdown spacing | 32px gap measured from cap height to baseline, like Figma (rows 44px apart) | From the file |
| Dropdown link hover | Orange + underline wipe | M-hoone hover |
| KOGUKOND button | Removed | Main-site item, not part of WLLNSS (Ken) |
| Main-site centre links (Vabad pinnad, M-hoone, HUB, WLLNSS) | Removed | Hidden leftovers in the WLLNSS file (Ken) |
| Dropdown contents | "Kõik treeningud" (→ treeningud.html, orange on that page) + placeholders "Link 2–3" | Ken: the main site's six links don't belong here; real list to come |
| Hidden exploration frames 3:399, 3:1255, 3:1462 | Ignored | Earlier versions (all links in the bar, "UUS M-hoone" tag) |

## Slider (agreed with Ken)

| What | What I did |
|---|---|
| Cards | 8: the 4 designed ones, then the same 4 again |
| Behaviour | Starts as designed, overflowing right. Each arrow click moves one card; once moved, cards overflow left too. Swipe/trackpad works natively. Mouse users can drag the row (grab cursor); on release it settles on the nearest card, and a drag doesn't open the card under the mouse (Ken) |
| Last position | Last card's right edge lines up under the arrows |

## Kõik treeningud page (treeningud.html, Figma 8:101)

| What | What I did | Why |
|---|---|---|
| Filters MOVE / RESET / RECOVER / CONNECT | Built and **on**, but not in the current Figma frame (Ken removed them there). Switch: `--filters: flex;` → `none` in assets/css/tokens.css. Hides the filters here and the category tag on detail pages. Off = exactly the Figma frames | Ken likes them; a PM may not |
| Filter look | Outlined white chips, active one filled WLLNSS hele with black text; hover = the 10% light overlay | From my earlier Figma version of this page |
| Treatment categories | **Placeholders:** Pilates = MOVE + RECOVER, Reformer = MOVE, Jooga = RESET + RECOVER + CONNECT, Personaaltreening = MOVE | Real categories are a content decision |
| Cards | Same as the homepage slider; cards 5–6 repeat 1–2, as in Figma. Links still `#` | Detail pages not built yet |
| Filtering | Non-matching cards disappear, the rest close up and fade in | Not designed |
| "Vaata kõiki" on the homepage | Now opens this page | — |
| <1200px | Cards in as many columns as fit (min 300px); filters wrap | Not designed |

## Detail page (reformer-pilates.html, Figma 6:35)

| What | What I did | Why |
|---|---|---|
| Hero | Homepage hero rules (full screen, centred 720 canvas) with the Figma positions of 6:133 | Ken's hero rule |
| "← Kõik treeningud" | Links to treeningud.html; arrow slides on hover like the other arrow buttons | — |
| "MOVE" tag | Links to treeningud.html?f=move, which opens the overview with MOVE selected. Hover turns orange. Hidden by the filters switch | Part of the filters feature |
| BRONEERI TREENING | Tume fill, white label; hover darkens to #8F5550 (same step as the other hovers). Link is `#` for now; the partner's booking URL goes in with `target="_blank"` | Opening a placeholder in a new tab would just duplicate this page |
| "Algaja" highlighted | Filled hele with black text = the level(s) this treatment suits | Ken's Figma |
| Other treatments | pilates.html, jooga.html, personaaltreening.html: copies of the Reformer page. Every card on every page links to its page | Ken |
| Copy on those pages | Written by me in Estonian (hero text, "Mida oodata?"), semi-real like the Reformer copy. Lesson lengths (50/60 min) are made up | Placeholder until partners supply text |
| "Kellele sobib?" | Pilates: Algaja. Jooga, Personaaltreening: Kõik tasemed | My guess |
| Several category tags | Side by side, 8px apart, wrap on phones (Figma shows one tag) | Pilates and Jooga have more than one placeholder category |
| Hero photos | Jooga and Personaaltreening use Ken's wide hero photos (`*_wide.webp`). Pilates uses `pilates_2.webp` (2026-10-08), one photo for both hero and cards; cards crop it with object-position 79% so the whole figure shows | Square card photos cut heads off in the wide hero |
| "Teised treeningud" | The other three treatments + the first repeated, so the row overflows like in Figma | Ken |
| <1200px | Hero stacks back link → title → text → tag; "Kellele sobib?" and partner cards go full width; level boxes wrap on phones | Not designed |

## Design update 2026-10-08 (Figma "Telliskivi – Web", section 3 Ekraanid)

| What | What I did | Why |
|---|---|---|
| "Üks koht" intro | Now tume with white text and an orange bar; the stats box left this section | From the file |
| New numbers band | Hele, 80px top/bottom, three stats centred (48px tume), "1 WLLNSS" 100px white on a 589×59 orange bar. Count-up kept. The bar is drawn in em so it scales with the text on phones | From the file; bar sizing is mine |
| Numbers band <1200px | 64px padding, "1 WLLNSS" 80px; phones: stats wrap, 36px numbers, "1 WLLNSS" 56px | Not designed |
| Detail "Mida oodata?" | Tume, white text, orange bar; "Kellele sobib?" at x779 (no longer flush right, so no bleed to the screen edge) | From the file |
| Line under "Mida oodata?" | 1px hele at the section bottom, from x144 to the screen's right edge (on wide screens it starts at the content edge; phones: at the side margin) | From the file (5605:5388); wide/phone behaviour is mine |
| Detail "Teised treeningud" | Same as the homepage slider (tume, hele links) + 1px hele line above the footer | From the file |

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

## Hero height (Ken's rule)

The hero always fills the first screen: logo bar + hero = one screen height
(minimum 560px). Figma's hero is a fixed 720px; its content is kept exactly as
drawn and centred vertically, so on taller screens there is more photo above
and below, and on shorter ones less.

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

- Pilates hero (pilates_2): white studio wall behind white text — description, RECOVER tag and "Menüü" are hard to read. Ken: use as is for now, decide later (tone the photo / stronger fade).

- Numbers band: the divider lines between the three stats are WLLNSS hele on the hele background, so they're invisible. Built as drawn. Intended, or should they be tume?

- Is the "1 WLLNSS" heading in the stats box final copy?
- Real social media URLs?
- Footer address is the Telliskivi TLN office (60/2), the location section says 60/1. Both copied from Figma, just flagging.
