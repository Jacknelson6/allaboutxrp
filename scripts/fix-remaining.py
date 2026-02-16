#!/usr/bin/env python3
"""Add hero images to the 5 pages without LearnHero."""
import os

PROJECT = os.path.expanduser("~/clawd/projects/allaboutxrp")
LEARN_DIR = os.path.join(PROJECT, "src/app/learn")

PAGES = {
    "escrow": {
        "alt": "Digital escrow and secure vault technology",
        "insert_after": '<div className="mx-auto max-w-7xl px-4 pt-10 pb-20">',
    },
    "faq": {
        "alt": "Frequently asked questions about XRP",
        "insert_after": '<div className="mx-auto max-w-4xl px-4 py-16">',
    },
    "key-people": {
        "alt": "Key people behind XRP and Ripple",
        "insert_after": '<div className="mx-auto max-w-7xl px-4 pt-10 pb-20">',
    },
    "riddlers": {
        "alt": "The mysterious XRP Riddler community",
        "insert_after": '<div className="mx-auto max-w-7xl px-4 pt-10">',
    },
    "trusted-sources": {
        "alt": "Trusted XRP research and data sources",
        "insert_after": '<div className="mx-auto max-w-7xl px-4 pt-10 pb-20">',
    },
}

for page, info in PAGES.items():
    path = os.path.join(LEARN_DIR, page, "page.tsx")
    with open(path) as f:
        content = f.read()
    
    if f'{page}-hero.jpg' in content:
        print(f"Skip {page}")
        continue

    # Add Image import
    if 'import Image from "next/image"' not in content:
        if 'import type { Metadata }' in content:
            content = content.replace('import type { Metadata }', 'import Image from "next/image";\nimport type { Metadata }')
        elif 'import { Metadata }' in content:
            content = content.replace('import { Metadata }', 'import Image from "next/image";\nimport { Metadata }')
        elif '"use client"' in content:
            content = content.replace('"use client"', '"use client";\nimport Image from "next/image"', 1)

    img_block = f"""
        <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/{page}-hero.jpg"
            alt="{info['alt']}"
            width={{1200}}
            height={{400}}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>"""

    target = info['insert_after']
    if target in content:
        content = content.replace(target, target + img_block, 1)
        print(f"Updated {page}")
    else:
        print(f"WARN {page}: target not found")

    with open(path, 'w') as f:
        f.write(content)
