#!/usr/bin/env node
// Cross-link all learn pages and generate keyword list
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const LEARN_DIR = join(import.meta.dirname, '..', 'src', 'app', 'learn');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');

// Define topic categories for intelligent cross-linking
const CATEGORIES = {
  basics: ['what-is-xrp', 'what-is-ripple', 'how-does-xrp-work', 'ripple-vs-xrp', 'xrp-for-beginners', 'faq', 'xrp-glossary', 'can-xrp-be-mined', 'xrp-myths'],
  buying_storing: ['get-started', 'how-to-buy-xrp', 'how-to-store-xrp-safely', 'how-to-send-xrp', 'crypto-wallets-for-xrp', 'xrp-wallets', 'xrp-addresses-and-keys', 'xrp-common-mistakes'],
  comparisons: ['xrp-vs-bitcoin', 'xrp-vs-ethereum', 'xrp-vs-solana', 'xrp-vs-stellar', 'xrp-vs-cardano', 'xrp-vs-hedera', 'xrp-vs-swift', 'xrp-vs-stocks'],
  price_market: ['xrp-price-history', 'xrp-price-prediction', 'xrp-price-potential', 'can-xrp-reach-100', 'why-is-xrp-so-cheap', 'xrp-market-cap-explained', 'xrp-2026-outlook', 'xrp-bull-run-indicators', 'xrp-altseason-guide'],
  trading: ['best-xrp-trading-pairs', 'how-to-read-xrp-charts', 'xrp-swing-trading-guide', 'xrp-technical-analysis-guide', 'xrp-whale-tracking', 'xrp-accumulation-zones', 'xrp-exit-strategy', 'xrp-dollar-cost-averaging', 'xrp-portfolio-allocation'],
  tokenomics: ['xrp-tokenomics', 'xrp-supply-explained', 'xrp-burn-rate', 'escrow', 'xrp-escrow-explained'],
  technology: ['xrp-ledger-explained', 'xrpl-consensus-mechanism', 'xrpl-validators', 'xrpl-decentralization', 'xrpl-sidechains', 'xrpl-payment-channels', 'xrpl-trust-lines-explained', 'xrp-smart-contracts', 'xrp-interledger-protocol', 'xrp-transaction-types', 'xrp-energy-consumption'],
  defi: ['xrpl-defi', 'xrp-amm', 'how-to-use-xrpl-dex', 'how-to-stake-xrp', 'xrp-staking', 'xrp-nfts', 'xrp-airdrops', 'how-to-create-xrpl-token', 'xrp-real-world-assets'],
  ripple_products: ['ripplenet', 'on-demand-liquidity', 'ripple-software-stack', 'ripple-prime', 'rlusd', 'rlusd-explained', 'xrp-stablecoin-ecosystem', 'cbdcs-and-xrp'],
  institutional: ['how-banks-use-xrp', 'banks-using-xrp', 'cross-border-payments', 'partnerships', 'xrp-institutional-custody', 'xrp-iso-20022', 'xrp-etf', 'xrp-spot-etf-vs-futures-etf', 'ripple-ipo'],
  legal: ['sec-vs-ripple', 'sec-vs-ripple-explained', 'is-xrp-a-security', 'crypto-regulation-xrp-impact', 'xrp-european-regulation', 'xrp-tax-guide'],
  global: ['xrp-japan-sbi', 'xrp-middle-east-adoption', 'xrp-africa-remittances', 'xrp-southeast-asia'],
  people_community: ['leadership', 'key-people', 'partnerships', 'acquisitions', 'trusted-sources', 'riddlers', 'history', 'xrp-use-cases'],
};

// Related category mappings - which categories are related to each other
const RELATED_CATEGORIES = {
  basics: ['buying_storing', 'comparisons', 'technology'],
  buying_storing: ['basics', 'trading', 'defi'],
  comparisons: ['basics', 'price_market', 'technology'],
  price_market: ['trading', 'institutional', 'tokenomics'],
  trading: ['price_market', 'buying_storing', 'defi'],
  tokenomics: ['price_market', 'technology', 'basics'],
  technology: ['basics', 'defi', 'tokenomics'],
  defi: ['technology', 'trading', 'buying_storing'],
  ripple_products: ['institutional', 'legal', 'global'],
  institutional: ['ripple_products', 'legal', 'global'],
  legal: ['institutional', 'ripple_products', 'price_market'],
  global: ['institutional', 'ripple_products', 'legal'],
  people_community: ['institutional', 'ripple_products', 'basics'],
};

function getCategoriesForSlug(slug) {
  const cats = [];
  for (const [cat, slugs] of Object.entries(CATEGORIES)) {
    if (slugs.includes(slug)) cats.push(cat);
  }
  return cats;
}

function getRelatedSlugs(slug, allSlugs, count = 8) {
  const myCats = getCategoriesForSlug(slug);
  if (myCats.length === 0) {
    // Uncategorized - just return random mix
    return allSlugs.filter(s => s !== slug).slice(0, count);
  }
  
  const related = new Set();
  
  // First: same category pages
  for (const cat of myCats) {
    for (const s of CATEGORIES[cat]) {
      if (s !== slug) related.add(s);
    }
  }
  
  // Second: related category pages
  for (const cat of myCats) {
    const relCats = RELATED_CATEGORIES[cat] || [];
    for (const rc of relCats) {
      for (const s of (CATEGORIES[rc] || [])) {
        if (s !== slug) related.add(s);
      }
    }
  }
  
  // Filter to only existing slugs
  const existing = [...related].filter(s => allSlugs.includes(s));
  
  // Prioritize same-category, then related
  const sameCategory = existing.filter(s => {
    const sCats = getCategoriesForSlug(s);
    return sCats.some(c => myCats.includes(c));
  });
  const otherRelated = existing.filter(s => !sameCategory.includes(s));
  
  return [...sameCategory.slice(0, Math.ceil(count * 0.6)), ...otherRelated].slice(0, count);
}

// Nice labels for slugs
function slugToLabel(slug) {
  const labels = {
    'what-is-xrp': 'What is XRP?',
    'what-is-ripple': 'What is Ripple?',
    'how-does-xrp-work': 'How Does XRP Work?',
    'ripple-vs-xrp': 'Ripple vs XRP',
    'xrp-for-beginners': 'XRP for Beginners',
    'faq': 'XRP FAQ',
    'xrp-glossary': 'XRP Glossary',
    'can-xrp-be-mined': 'Can XRP Be Mined?',
    'xrp-myths': 'XRP Myths Debunked',
    'get-started': 'Get Started with XRP',
    'how-to-buy-xrp': 'How to Buy XRP',
    'how-to-store-xrp-safely': 'Store XRP Safely',
    'how-to-send-xrp': 'How to Send XRP',
    'crypto-wallets-for-xrp': 'Crypto Wallets for XRP',
    'xrp-wallets': 'XRP Wallets Guide',
    'xrp-addresses-and-keys': 'XRP Addresses & Keys',
    'xrp-common-mistakes': 'Common XRP Mistakes',
    'xrp-vs-bitcoin': 'XRP vs Bitcoin',
    'xrp-vs-ethereum': 'XRP vs Ethereum',
    'xrp-vs-solana': 'XRP vs Solana',
    'xrp-vs-stellar': 'XRP vs Stellar',
    'xrp-vs-cardano': 'XRP vs Cardano',
    'xrp-vs-hedera': 'XRP vs Hedera',
    'xrp-vs-swift': 'XRP vs SWIFT',
    'xrp-vs-stocks': 'XRP vs Stocks',
    'xrp-price-history': 'XRP Price History',
    'xrp-price-prediction': 'XRP Price Prediction',
    'xrp-price-potential': 'XRP Price Potential',
    'can-xrp-reach-100': 'Can XRP Reach $100?',
    'why-is-xrp-so-cheap': 'Why Is XRP So Cheap?',
    'xrp-market-cap-explained': 'Market Cap Explained',
    'xrp-2026-outlook': '2026 XRP Outlook',
    'xrp-bull-run-indicators': 'Bull Run Indicators',
    'xrp-altseason-guide': 'Altseason Guide',
    'best-xrp-trading-pairs': 'Best Trading Pairs',
    'how-to-read-xrp-charts': 'How to Read XRP Charts',
    'xrp-swing-trading-guide': 'Swing Trading Guide',
    'xrp-technical-analysis-guide': 'Technical Analysis',
    'xrp-whale-tracking': 'Whale Tracking',
    'xrp-accumulation-zones': 'Accumulation Zones',
    'xrp-exit-strategy': 'Exit Strategy',
    'xrp-dollar-cost-averaging': 'Dollar Cost Averaging',
    'xrp-portfolio-allocation': 'Portfolio Allocation',
    'xrp-tokenomics': 'XRP Tokenomics',
    'xrp-supply-explained': 'XRP Supply Explained',
    'xrp-burn-rate': 'XRP Burn Rate',
    'escrow': 'XRP Escrow',
    'xrp-escrow-explained': 'Escrow Explained',
    'xrp-ledger-explained': 'XRP Ledger Explained',
    'xrpl-consensus-mechanism': 'XRPL Consensus',
    'xrpl-validators': 'XRPL Validators',
    'xrpl-decentralization': 'XRPL Decentralization',
    'xrpl-sidechains': 'XRPL Sidechains',
    'xrpl-payment-channels': 'Payment Channels',
    'xrpl-trust-lines-explained': 'Trust Lines',
    'xrp-smart-contracts': 'Smart Contracts',
    'xrp-interledger-protocol': 'Interledger Protocol',
    'xrp-transaction-types': 'Transaction Types',
    'xrp-energy-consumption': 'Energy Consumption',
    'xrpl-defi': 'XRPL DeFi',
    'xrp-amm': 'XRP AMM',
    'how-to-use-xrpl-dex': 'XRPL DEX Guide',
    'how-to-stake-xrp': 'How to Stake XRP',
    'xrp-staking': 'XRP Staking',
    'xrp-nfts': 'XRP NFTs',
    'xrp-airdrops': 'XRP Airdrops',
    'how-to-create-xrpl-token': 'Create XRPL Token',
    'xrp-real-world-assets': 'Real-World Assets',
    'ripplenet': 'RippleNet',
    'on-demand-liquidity': 'On-Demand Liquidity',
    'ripple-software-stack': 'Ripple Software Stack',
    'ripple-prime': 'Ripple Prime',
    'rlusd': 'RLUSD',
    'rlusd-explained': 'RLUSD Explained',
    'xrp-stablecoin-ecosystem': 'Stablecoin Ecosystem',
    'cbdcs-and-xrp': 'CBDCs & XRP',
    'how-banks-use-xrp': 'How Banks Use XRP',
    'banks-using-xrp': 'Banks Using XRP',
    'cross-border-payments': 'Cross-Border Payments',
    'partnerships': 'Ripple Partnerships',
    'xrp-institutional-custody': 'Institutional Custody',
    'xrp-iso-20022': 'XRP & ISO 20022',
    'xrp-etf': 'XRP ETF',
    'xrp-spot-etf-vs-futures-etf': 'Spot vs Futures ETF',
    'ripple-ipo': 'Ripple IPO',
    'sec-vs-ripple': 'SEC vs Ripple',
    'sec-vs-ripple-explained': 'SEC vs Ripple Explained',
    'is-xrp-a-security': 'Is XRP a Security?',
    'crypto-regulation-xrp-impact': 'Crypto Regulation Impact',
    'xrp-european-regulation': 'European Regulation',
    'xrp-tax-guide': 'XRP Tax Guide',
    'xrp-japan-sbi': 'XRP in Japan (SBI)',
    'xrp-middle-east-adoption': 'Middle East Adoption',
    'xrp-africa-remittances': 'Africa Remittances',
    'xrp-southeast-asia': 'Southeast Asia',
    'leadership': 'Ripple Leadership',
    'key-people': 'Key People',
    'acquisitions': 'Ripple Acquisitions',
    'trusted-sources': 'Trusted Sources',
    'riddlers': 'XRP Riddlers',
    'history': 'XRP History',
    'xrp-use-cases': 'XRP Use Cases',
  };
  return labels[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function slugToDesc(slug) {
  const descs = {
    'what-is-xrp': 'Complete guide to XRP',
    'what-is-ripple': 'The company behind XRP',
    'how-does-xrp-work': 'Technology explained simply',
    'ripple-vs-xrp': 'Key differences explained',
    'xrp-for-beginners': 'Start your XRP journey',
    'faq': 'Common questions answered',
    'xrp-glossary': 'A-Z of XRP terms',
    'can-xrp-be-mined': 'Why XRP uses consensus',
    'xrp-myths': 'Common myths debunked',
    'get-started': 'Buy your first XRP',
    'how-to-buy-xrp': 'Step-by-step buying guide',
    'how-to-store-xrp-safely': 'Security best practices',
    'how-to-send-xrp': 'Transfer XRP quickly',
    'crypto-wallets-for-xrp': 'Best wallet comparison',
    'xrp-wallets': 'Top wallet picks',
    'xrp-addresses-and-keys': 'Accounts & cryptography',
    'xrp-common-mistakes': 'Avoid costly errors',
    'xrp-vs-bitcoin': 'Side-by-side comparison',
    'xrp-vs-ethereum': 'Payments vs smart contracts',
    'xrp-vs-solana': 'Speed & fees compared',
    'xrp-vs-stellar': 'Cross-border rivals',
    'xrp-vs-cardano': 'Full comparison',
    'xrp-vs-hedera': 'Enterprise crypto showdown',
    'xrp-vs-swift': 'Legacy vs crypto payments',
    'xrp-vs-stocks': 'Comparing asset classes',
    'xrp-price-history': 'Complete price timeline',
    'xrp-price-prediction': 'Analyst forecasts',
    'xrp-price-potential': 'Realistic price analysis',
    'can-xrp-reach-100': 'Math behind $100 XRP',
    'why-is-xrp-so-cheap': 'Price vs value',
    'xrp-market-cap-explained': 'Understanding valuations',
    'xrp-2026-outlook': 'This year\'s catalysts',
    'xrp-bull-run-indicators': 'Spot the next rally',
    'xrp-altseason-guide': 'When altcoins pump',
    'best-xrp-trading-pairs': 'Optimize your trades',
    'how-to-read-xrp-charts': 'Chart reading basics',
    'xrp-swing-trading-guide': 'Medium-term strategy',
    'xrp-technical-analysis-guide': 'Advanced TA for XRP',
    'xrp-whale-tracking': 'Follow the big money',
    'xrp-accumulation-zones': 'Strategic buy levels',
    'xrp-exit-strategy': 'When to take profits',
    'xrp-dollar-cost-averaging': 'DCA strategy guide',
    'xrp-portfolio-allocation': 'Position sizing guide',
    'xrp-tokenomics': 'Supply & distribution',
    'xrp-supply-explained': 'Inflation & burn mechanics',
    'xrp-burn-rate': 'Deflationary fee mechanism',
    'escrow': 'Ripple\'s escrow system',
    'xrp-escrow-explained': '1B XRP monthly unlock',
    'xrp-ledger-explained': 'How XRPL works',
    'xrpl-consensus-mechanism': 'Byzantine agreement',
    'xrpl-validators': 'Network consensus nodes',
    'xrpl-decentralization': 'Centralization debate',
    'xrpl-sidechains': 'EVM sidechain & scaling',
    'xrpl-payment-channels': 'Off-ledger micropayments',
    'xrpl-trust-lines-explained': 'Token holding mechanics',
    'xrp-smart-contracts': 'Hooks & EVM sidechain',
    'xrp-interledger-protocol': 'Cross-network payments',
    'xrp-transaction-types': 'Every TX type explained',
    'xrp-energy-consumption': 'Green crypto analysis',
    'xrpl-defi': 'DeFi on the XRPL',
    'xrp-amm': 'Automated market maker',
    'how-to-use-xrpl-dex': 'Decentralized trading',
    'how-to-stake-xrp': 'Earn yield on XRP',
    'xrp-staking': 'Staking options explained',
    'xrp-nfts': 'NFTs on the XRPL',
    'xrp-airdrops': 'Free XRPL tokens',
    'how-to-create-xrpl-token': 'Issue tokens on XRPL',
    'xrp-real-world-assets': 'Tokenization on XRPL',
    'ripplenet': 'Global payment network',
    'on-demand-liquidity': 'XRP bridge currency',
    'ripple-software-stack': 'Complete product suite',
    'ripple-prime': 'Enterprise brokerage',
    'rlusd': 'Ripple\'s stablecoin',
    'rlusd-explained': 'Deep dive into RLUSD',
    'xrp-stablecoin-ecosystem': 'RLUSD and beyond',
    'cbdcs-and-xrp': 'Central bank digital currencies',
    'how-banks-use-xrp': 'Institutional adoption',
    'banks-using-xrp': 'Complete institution list',
    'cross-border-payments': 'Why XRP changes everything',
    'partnerships': 'Banks & institutions',
    'xrp-institutional-custody': 'Enterprise storage',
    'xrp-iso-20022': 'Global payments standard',
    'xrp-etf': 'ETF filings & impact',
    'xrp-spot-etf-vs-futures-etf': 'ETF types compared',
    'ripple-ipo': 'Ripple going public',
    'sec-vs-ripple': 'Lawsuit timeline',
    'sec-vs-ripple-explained': 'Case that changed crypto',
    'is-xrp-a-security': 'SEC ruling explained',
    'crypto-regulation-xrp-impact': 'Laws shaping XRP',
    'xrp-european-regulation': 'MiCA & EU framework',
    'xrp-tax-guide': 'Tax reporting guide',
    'xrp-japan-sbi': 'Japan\'s XRP champion',
    'xrp-middle-east-adoption': 'Gulf region adoption',
    'xrp-africa-remittances': 'African payment revolution',
    'xrp-southeast-asia': 'ASEAN adoption',
    'leadership': 'Ripple executives',
    'key-people': 'Ecosystem leaders',
    'acquisitions': 'Strategic acquisitions',
    'trusted-sources': 'Community voices',
    'riddlers': 'XRP riddle community',
    'history': 'Complete XRP timeline',
    'xrp-use-cases': 'Real-world applications',
  };
  return descs[slug] || 'Learn more';
}

async function main() {
  // Get all learn page slugs
  const entries = await readdir(LEARN_DIR, { withFileTypes: true });
  const allSlugs = entries
    .filter(e => e.isDirectory() && e.name !== 'components')
    .map(e => e.name)
    .sort();
  
  console.log(`Found ${allSlugs.length} learn pages`);
  
  // Task 1: Update LearnLinkGrid in each page
  let updated = 0;
  let skipped = 0;
  
  for (const slug of allSlugs) {
    const filePath = join(LEARN_DIR, slug, 'page.tsx');
    let content;
    try {
      content = await readFile(filePath, 'utf-8');
    } catch { skipped++; continue; }
    
    // Find existing LearnLinkGrid
    const linkGridRegex = /<LearnLinkGrid\s+links=\{?\[[\s\S]*?\]\}?\s*\/>/;
    const match = content.match(linkGridRegex);
    
    if (!match) {
      // No LearnLinkGrid found - skip (some pages might use different structure)
      console.log(`No LearnLinkGrid in ${slug}`);
      skipped++;
      continue;
    }
    
    // Get related slugs for this page
    const related = getRelatedSlugs(slug, allSlugs, 8);
    
    if (related.length < 5) {
      // Add more from all slugs
      const remaining = allSlugs.filter(s => s !== slug && !related.includes(s));
      while (related.length < 6 && remaining.length > 0) {
        related.push(remaining.shift());
      }
    }
    
    // Build new LearnLinkGrid
    const linkEntries = related.map(s => 
      `              { href: "/learn/${s}", label: "${slugToLabel(s)}", desc: "${slugToDesc(s)}" }`
    ).join(',\n');
    
    const newGrid = `<LearnLinkGrid links={[\n${linkEntries},\n            ]} />`;
    
    const newContent = content.replace(linkGridRegex, newGrid);
    
    if (newContent !== content) {
      await writeFile(filePath, newContent);
      updated++;
    }
  }
  
  console.log(`Updated ${updated} pages, skipped ${skipped}`);
  
  // Task 2: Generate keyword/page list
  const rows = [];
  for (const slug of allSlugs) {
    const filePath = join(LEARN_DIR, slug, 'page.tsx');
    let content;
    try {
      content = await readFile(filePath, 'utf-8');
    } catch { continue; }
    
    // Extract title
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    // Extract keywords
    const kwMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
    const keywords = kwMatch ? kwMatch[1].replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() : 'N/A';
    
    // Extract description - get the first standalone description
    const descMatch = content.match(/description:\s*\n?\s*"([^"]+)"/);
    const desc = descMatch ? descMatch[1] : 'N/A';
    
    rows.push({ slug, title, keywords, desc });
  }
  
  // Build markdown
  let md = `# AllAboutXRP - Complete Page & Keyword List\n\n`;
  md += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`;
  md += `Total pages: ${rows.length}\n\n`;
  md += `| URL Path | Page Title | Target Keywords | Meta Description |\n`;
  md += `|----------|-----------|----------------|------------------|\n`;
  
  for (const r of rows) {
    const url = `/learn/${r.slug}`;
    const kw = r.keywords.replace(/\|/g, '\\|').replace(/"/g, '');
    const desc = r.desc.replace(/\|/g, '\\|');
    const title = r.title.replace(/\|/g, '\\|');
    md += `| ${url} | ${title} | ${kw} | ${desc} |\n`;
  }
  
  await writeFile(join(PUBLIC_DIR, 'allaboutxrp-pages-keywords.md'), md);
  console.log(`Keyword list saved to public/allaboutxrp-pages-keywords.md`);
}

main().catch(console.error);
