#!/usr/bin/env python3
"""Download Unsplash images and update learn pages with hero images."""
import os, subprocess, time, urllib.request, urllib.parse, re, sys

PROJECT = os.path.expanduser("~/clawd/projects/allaboutxrp")
IMG_DIR = os.path.join(PROJECT, "public/images/learn")
LEARN_DIR = os.path.join(PROJECT, "src/app/learn")

PAGES = {
    "acquisitions": "corporate merger acquisition",
    "banks-using-xrp": "banking finance digital",
    "cbdcs-and-xrp": "central bank digital currency",
    "cross-border-payments": "international money transfer",
    "escrow": "digital vault security",
    "faq": "question answer help desk",
    "get-started": "cryptocurrency beginner guide",
    "history": "timeline history evolution",
    "how-banks-use-xrp": "bank technology digital",
    "how-to-buy-xrp": "cryptocurrency exchange trading",
    "key-people": "technology leaders team",
    "leadership": "corporate leadership executive",
    "on-demand-liquidity": "liquidity flow finance",
    "partnerships": "business partnership handshake",
    "riddlers": "mystery puzzle cipher code",
    "ripple-ipo": "stock market ipo trading",
    "ripple-prime": "enterprise technology premium",
    "ripple-software-stack": "software architecture stack",
    "ripplenet": "global network connection map",
    "rlusd-explained": "stablecoin digital dollar",
    "rlusd": "stablecoin cryptocurrency dollar",
    "sec-vs-ripple-explained": "courtroom legal justice",
    "sec-vs-ripple": "legal court regulation law",
    "trusted-sources": "research data analytics",
    "what-is-ripple": "fintech company technology",
    "what-is-xrp": "cryptocurrency digital asset coin",
    "xrp-addresses-and-keys": "cryptography keys digital",
    "xrp-escrow-explained": "smart contract lock time",
    "xrp-etf": "exchange traded fund stock",
    "xrp-glossary": "dictionary terms education",
    "xrp-ledger-explained": "blockchain distributed ledger",
    "xrp-myths": "myths facts magnifying glass",
    "xrp-price-history": "stock chart price graph",
    "xrp-price-potential": "growth chart upward trend",
    "xrp-price-prediction": "forecast analytics data",
    "xrp-stablecoin-ecosystem": "stablecoin ecosystem digital",
    "xrp-staking": "cryptocurrency staking rewards",
    "xrp-supply-explained": "supply economics chart",
    "xrp-tax-guide": "tax calculator documents",
    "xrp-tokenomics": "tokenomics economics pie chart",
    "xrp-transaction-types": "transaction types digital payment",
    "xrp-use-cases": "technology applications innovation",
    "xrp-vs-bitcoin": "bitcoin cryptocurrency comparison",
    "xrp-vs-ethereum": "ethereum blockchain smart contract",
    "xrp-vs-solana": "blockchain speed technology",
    "xrp-vs-swift": "swift banking wire transfer",
    "xrp-wallets": "digital wallet cryptocurrency mobile",
    "xrpl-defi": "decentralized finance defi",
    "xrpl-validators": "server network nodes data center",
}

# Alt text for each page
ALT_TEXT = {
    "acquisitions": "Corporate acquisitions and mergers in the fintech space",
    "banks-using-xrp": "Banks and financial institutions embracing digital technology",
    "cbdcs-and-xrp": "Central bank digital currencies and blockchain innovation",
    "cross-border-payments": "International cross-border payment networks",
    "escrow": "Digital escrow and secure vault technology",
    "faq": "Frequently asked questions about XRP",
    "get-started": "Getting started with cryptocurrency",
    "history": "The history and evolution of XRP and Ripple",
    "how-banks-use-xrp": "How banks leverage XRP technology",
    "how-to-buy-xrp": "Cryptocurrency exchange and trading platform",
    "key-people": "Key people behind XRP and Ripple",
    "leadership": "Ripple's executive leadership team",
    "on-demand-liquidity": "On-demand liquidity and real-time payments",
    "partnerships": "Strategic business partnerships",
    "riddlers": "The mysterious XRP Riddler community",
    "ripple-ipo": "Ripple IPO and stock market",
    "ripple-prime": "Ripple Prime enterprise solution",
    "ripple-software-stack": "Ripple's technology and software architecture",
    "ripplenet": "RippleNet global payment network",
    "rlusd-explained": "RLUSD stablecoin explained",
    "rlusd": "RLUSD stablecoin digital dollar",
    "sec-vs-ripple-explained": "SEC vs Ripple legal case explained",
    "sec-vs-ripple": "SEC vs Ripple lawsuit and regulation",
    "trusted-sources": "Trusted XRP research and data sources",
    "what-is-ripple": "What is Ripple fintech company",
    "what-is-xrp": "What is XRP cryptocurrency digital asset",
    "xrp-addresses-and-keys": "XRP addresses and cryptographic keys",
    "xrp-escrow-explained": "XRP escrow mechanism explained",
    "xrp-etf": "XRP ETF exchange traded fund",
    "xrp-glossary": "XRP and blockchain glossary of terms",
    "xrp-ledger-explained": "XRP Ledger blockchain technology",
    "xrp-myths": "Common XRP myths debunked",
    "xrp-price-history": "XRP price history and chart",
    "xrp-price-potential": "XRP price growth potential",
    "xrp-price-prediction": "XRP price prediction and forecast",
    "xrp-stablecoin-ecosystem": "XRP stablecoin ecosystem",
    "xrp-staking": "XRP staking and rewards",
    "xrp-supply-explained": "XRP supply and distribution explained",
    "xrp-tax-guide": "XRP cryptocurrency tax guide",
    "xrp-tokenomics": "XRP tokenomics and economics",
    "xrp-transaction-types": "XRP transaction types on the ledger",
    "xrp-use-cases": "XRP real-world use cases",
    "xrp-vs-bitcoin": "XRP versus Bitcoin comparison",
    "xrp-vs-ethereum": "XRP versus Ethereum comparison",
    "xrp-vs-solana": "XRP versus Solana comparison",
    "xrp-vs-swift": "XRP versus SWIFT banking comparison",
    "xrp-wallets": "XRP cryptocurrency wallets",
    "xrpl-defi": "XRPL decentralized finance",
    "xrpl-validators": "XRPL validator nodes and network",
}

os.makedirs(IMG_DIR, exist_ok=True)

# Step 1: Download images
print("=== Downloading images ===")
for page, query in PAGES.items():
    img_path = os.path.join(IMG_DIR, f"{page}-hero.jpg")
    if os.path.exists(img_path) and os.path.getsize(img_path) > 1000:
        print(f"  Skip {page} (exists)")
        continue
    
    encoded = urllib.parse.quote(query)
    url = f"https://source.unsplash.com/1200x400/?{encoded}"
    print(f"  Downloading {page}: {query}")
    try:
        urllib.request.urlretrieve(url, img_path)
        time.sleep(0.3)
    except Exception as e:
        print(f"  ERROR downloading {page}: {e}")

# Step 2: Update page files
print("\n=== Updating page files ===")
for page in PAGES:
    page_file = os.path.join(LEARN_DIR, page, "page.tsx")
    if not os.path.exists(page_file):
        print(f"  Skip {page} (no page.tsx)")
        continue
    
    with open(page_file, 'r') as f:
        content = f.read()
    
    # Skip if already has hero image
    if f'{page}-hero.jpg' in content:
        print(f"  Skip {page} (already has hero image)")
        continue
    
    alt = ALT_TEXT.get(page, f"{page.replace('-', ' ').title()} hero image")
    
    # Add Image import if not present
    if 'import Image from "next/image"' not in content:
        # Add after the first import line
        content = content.replace(
            'import { Metadata } from "next";',
            'import { Metadata } from "next";\nimport Image from "next/image";'
        )
    
    # Find the closing </LearnHero> and add image after it
    hero_image_block = f"""
        <div className="mt-8 mb-12 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/learn/{page}-hero.jpg"
            alt="{alt}"
            width={{1200}}
            height={{400}}
            className="h-[300px] w-full object-cover"
            loading="lazy"
          />
        </div>"""
    
    # Insert after </LearnHero>
    if '</LearnHero>' in content:
        content = content.replace(
            '</LearnHero>',
            f'</LearnHero>\n{hero_image_block}',
            1  # Only first occurrence
        )
        print(f"  Updated {page}")
    else:
        print(f"  WARN {page}: no </LearnHero> found")
    
    with open(page_file, 'w') as f:
        f.write(content)

print("\nDone!")
