# Publishing this preview

Claude publishes. Ken doesn't need GitHub Desktop or the terminal: just say
"publish" (or "push the changes") and the live link updates in about a minute.

## What Claude does

First time (once per project):
1. `git init -b main`, commit everything (`.gitignore` keeps `_source/` and `.claude/` out).
2. Creates a **public** repo on the **refleksou-ctrl** account with `gh`
   (public is required for free GitHub Pages; pages carry `noindex`).
   Use `GH_TOKEN=$(gh auth token -u refleksou-ctrl)`: two accounts are logged in
   and the active one is kenliivik.
3. Turns on Pages from `main` / root via the API, waits for the build, checks
   the live URL loads with fonts and images.

Every update after that: commit → push → wait for the build → check the live page.

Live link: `https://refleksou-ctrl.github.io/<repo-name>/`
Hard-refresh (⌘⇧R) if you see the old version.

## Things that quietly break it

- **A path starting with `/`.** GitHub serves this site from a subfolder, so
  `/assets/style.css` looks in the wrong place and the page loads unstyled.
- **Deleting `.nojekyll`.** GitHub then ignores any folder starting with `_`.
- **Renaming the repo.** The URL changes; resend the link.

## If a client needs the preview private

GitHub Pages has no password option. The same folder can deploy to
**Cloudflare Pages** instead, behind a free email-code gate. Ask Claude to switch.
