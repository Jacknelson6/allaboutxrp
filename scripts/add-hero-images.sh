#!/bin/bash
# Download Unsplash images and update learn pages with hero images
cd ~/clawd/projects/allaboutxrp

# Map of page -> unsplash search query
declare -A QUERIES=(
  ["acquisitions"]="corporate merger acquisition business"
  ["banks-using-xrp"]="banking finance institution"
  ["cbdcs-and-xrp"]="central bank digital currency"
  ["cross-border-payments"]="international money transfer globe"
  ["escrow"]="digital vault security lock"
  ["faq"]="question answer help"
  ["get-started"]="cryptocurrency getting started beginner"
  ["history"]="timeline history technology"
  ["how-banks-use-xrp"]="bank technology digital transformation"
  ["how-to-buy-xrp"]="cryptocurrency exchange trading"
  ["key-people"]="technology leaders innovators"
  ["leadership"]="corporate leadership executives"
  ["on-demand-liquidity"]="liquidity flow money movement"
  ["partnerships"]="business partnership handshake"
  ["riddlers"]="mystery puzzle cipher"
  ["ripple-ipo"]="stock market ipo"
  ["ripple-prime"]="enterprise premium technology"
  ["ripple-software-stack"]="software architecture technology stack"
  ["ripplenet"]="global network connection"
  ["rlusd-explained"]="stablecoin digital dollar"
  ["rlusd"]="stablecoin cryptocurrency"
  ["sec-vs-ripple-explained"]="courtroom legal gavel"
  ["sec-vs-ripple"]="legal court regulation"
  ["trusted-sources"]="research data analytics"
  ["what-is-ripple"]="fintech company technology"
  ["what-is-xrp"]="cryptocurrency digital asset"
  ["xrp-addresses-and-keys"]="cryptography keys security"
  ["xrp-escrow-explained"]="smart contract escrow"
  ["xrp-etf"]="exchange traded fund investment"
  ["xrp-glossary"]="dictionary glossary terms"
  ["xrp-ledger-explained"]="blockchain technology distributed ledger"
  ["xrp-myths"]="myths facts truth"
  ["xrp-price-history"]="stock chart price graph"
  ["xrp-price-potential"]="growth potential upward chart"
  ["xrp-price-prediction"]="forecast prediction analytics"
  ["xrp-stablecoin-ecosystem"]="stablecoin ecosystem defi"
  ["xrp-staking"]="cryptocurrency staking rewards"
  ["xrp-supply-explained"]="supply tokenomics cryptocurrency"
  ["xrp-tax-guide"]="tax calculator finance"
  ["xrp-tokenomics"]="tokenomics cryptocurrency economics"
  ["xrp-transaction-types"]="digital transaction types"
  ["xrp-use-cases"]="use cases technology applications"
  ["xrp-vs-bitcoin"]="bitcoin cryptocurrency comparison"
  ["xrp-vs-ethereum"]="ethereum blockchain comparison"
  ["xrp-vs-solana"]="solana blockchain speed"
  ["xrp-vs-swift"]="swift banking wire transfer"
  ["xrp-wallets"]="digital wallet cryptocurrency"
  ["xrpl-defi"]="decentralized finance defi"
  ["xrpl-validators"]="server network validator node"
)

mkdir -p public/images/learn

# Download images from Unsplash
for page in "${!QUERIES[@]}"; do
  query="${QUERIES[$page]}"
  encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$query'))")
  output="public/images/learn/${page}-hero.jpg"
  
  if [ ! -f "$output" ]; then
    echo "Downloading: $page ($query)"
    curl -sL "https://source.unsplash.com/1200x400/?${encoded}" -o "$output"
    # Small delay to avoid rate limiting
    sleep 0.5
  else
    echo "Skipping: $page (already exists)"
  fi
done

echo "All images downloaded!"
