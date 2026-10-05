#!/usr/bin/env python3
"""
sync.py - push partials into every page. No dependencies, no network.

Edit partials/header.html (or footer/head), run:   python3 tools/sync.py
Every .html page in the project root gets the new version.

In a page, mark the slot like this:

    <!-- @header -->
    <!-- /@header -->

Anything between the markers is replaced. Available slots are just the
filenames in partials/ without .html  ->  @head, @header, @footer.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARTIALS = ROOT / "partials"


def load_partials():
    if not PARTIALS.is_dir():
        sys.exit("No partials/ folder found next to tools/")
    return {p.stem: p.read_text(encoding="utf-8").strip() for p in PARTIALS.glob("*.html")}


def main():
    partials = load_partials()
    if not partials:
        sys.exit("partials/ is empty")

    pages = sorted(p for p in ROOT.glob("*.html"))
    if not pages:
        sys.exit("No .html pages in the project root")

    changed = 0
    for page in pages:
        text = original = page.read_text(encoding="utf-8")
        page_id = page.stem

        for name, body in partials.items():
            pattern = re.compile(
                r"(<!--\s*@%s\s*-->)(.*?)(<!--\s*/@%s\s*-->)" % (re.escape(name), re.escape(name)),
                re.DOTALL,
            )
            if not pattern.search(text):
                continue
            # indent the partial to match the opening marker
            def repl(m, body=body):
                indent = re.search(r"[ \t]*$", text[: m.start()]).group(0)
                inner = "\n".join(
                    (indent + line) if line.strip() else line for line in body.splitlines()
                )
                return "%s\n%s\n%s%s" % (m.group(1), inner, indent, m.group(3))

            text = pattern.sub(repl, text, count=1)

        # mark the current page in the nav.
        # Only touch elements that carry data-page — page content may set
        # aria-current for its own reasons (tabs, steppers) and stripping
        # those silently breaks them.
        text = re.sub(
            r'(<a\b[^>]*\bdata-page="[^"]*")\s+aria-current="page"',
            r'\1', text,
        )
        text = re.sub(
            r'(<a\b[^>]*\bdata-page="%s")' % re.escape(page_id),
            r'\1 aria-current="page"',
            text,
        )

        if text != original:
            page.write_text(text, encoding="utf-8")
            changed += 1
            print("updated  %s" % page.name)
        else:
            print("unchanged %s" % page.name)

    print("\n%d of %d page(s) updated." % (changed, len(pages)))


if __name__ == "__main__":
    main()
