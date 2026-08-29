#!/usr/bin/env python3
"""One-off helper: extract a PDF's text layer to a plain-text search copy.

Usage: python3 scripts/extract-pdf-text.py <input.pdf> <output.txt>
Not part of the build; kept for regenerating docs/sources/*/*.txt copies.
"""
import sys
from pypdf import PdfReader


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: extract-pdf-text.py <input.pdf> <output.txt>", file=sys.stderr)
        return 2
    src, dest = sys.argv[1], sys.argv[2]
    reader = PdfReader(src)
    parts = []
    for i, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        parts.append(f"\n\n===== page {i} =====\n{text}")
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write("".join(parts))
    print(f"wrote {dest}: {len(reader.pages)} pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
