# Publishing this preview

Once set up, updating the live site is **one click**. Setup happens once per project.

## First time (about 3 minutes)

1. Open **GitHub Desktop** → `File` → `Add Local Repository…` → pick this project folder.
   It'll say there's no repository here → click **Create a Repository**.
   - Keep it **Private** for now if you like; Pages needs it public, so you can flip
     it later. (Free accounts can only publish Pages from public repos.)
2. Click **Publish repository** (top bar).
3. Go to the repo on github.com → **Settings** → **Pages**.
   - Source: *Deploy from a branch*
   - Branch: `main`, folder: `/ (root)` → **Save**
4. Wait ~1 minute. Your URL appears at the top of that same page:
   `https://<your-username>.github.io/<repo-name>/`

Send that link to the client.

## Every update after that

1. Open GitHub Desktop.
2. Type a short note in the box bottom-left (e.g. "hero animation").
3. **Commit to main** → **Push origin**.
4. Live in about 30 seconds. Hard-refresh (⌘⇧R) if you see the old version.

Because it's git, every version is kept. If the client prefers last week's hero,
it's recoverable.

## Things that quietly break it

- **A path starting with `/`.** GitHub serves this site from a subfolder, so
  `/assets/style.css` looks for it at the wrong place and the page loads unstyled.
  Every path here is relative on purpose — if a page suddenly renders as plain
  text, that's why.
- **Deleting `.nojekyll`.** GitHub then ignores any folder starting with `_`.
- **Renaming the repo.** The URL changes; resend the link.

## If a client needs the preview private

GitHub Pages has no password option. Same folder deploys to **Cloudflare Pages**
instead, which can sit behind a free email-code gate. Ask Claude to switch it —
no code changes needed.
