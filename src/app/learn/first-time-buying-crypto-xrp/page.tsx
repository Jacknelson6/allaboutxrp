import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, StatPill, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FeatureGrid, FAQAccordion, IconList,
  TLDRBox, KeyFactsTable, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "first-time-buying-crypto-xrp";
const title = "Buying Crypto for the First Time? Start With XRP";
const description = "Never bought crypto before? This guide walks you through everything from creating an account to buying your first XRP.";
const url = `https://allaboutxrp.com/learn/${slug}`;
const dp = "2026-02-15";

export const metadata: Metadata = {
  title, description,
  openGraph: { title: `${title} | AllAboutXRP`, description, url, type: "article" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const schemas = [
  buildArticleSchema({ headline: title, description, url, datePublished: dp, dateModified: dp }),
  buildBreadcrumbSchema([
    { name: "Home", url: "https://allaboutxrp.com" },
    { name: "Learn", url: "https://allaboutxrp.com/learn" },
    { name: "First Time Buying Crypto" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "How do I buy crypto for the first time?", answer: "Choose a reputable exchange (like Coinbase, Kraken, or Uphold), create an account, verify your identity, deposit money from your bank, and buy your first XRP. The whole process takes about 10-15 minutes." },
    { question: "How much money do I need to buy XRP?", answer: "You can start with as little as $10-$20. You don't need to buy a whole XRP coin — you can buy fractions. Start small while you learn how everything works." },
    { question: "Is it safe to buy crypto?", answer: "Buying crypto on regulated exchanges is generally safe. Use strong passwords, enable two-factor authentication, and only use reputable platforms. The biggest risk is price volatility, not theft — if you use proper security." },
    { question: "What exchange should I use?", answer: "Popular beginner-friendly exchanges include Coinbase (easiest for beginners), Kraken (lower fees), and Uphold (simple interface). All are regulated and support XRP." },
    { question: "Do I need to buy a whole XRP?", answer: "No! You can buy any fraction of XRP. If XRP costs $2, you can buy $10 worth and get 5 XRP. You can start with any amount you're comfortable with." },
  ]),
];

const faqItems = [
  { q: "I'm scared to start. Is that normal?", a: "Completely normal! Everyone feels that way before their first crypto purchase. Start with a small amount ($10-$20) on a reputable exchange. You'll be surprised how easy it is once you do it." },
  { q: "Can I lose all my money?", a: "Crypto is volatile — prices go up and down. You could lose some or all of your investment. That's why rule #1 is: only invest what you can afford to lose. Start small. Learn as you go." },
  { q: "What's the minimum I can buy?", a: "Most exchanges let you buy as little as $1-$10 worth of XRP. You don't need thousands of dollars. Start with whatever amount won't stress you out if the price drops." },
  { q: "How do I keep my XRP safe?", a: "For beginners, keeping XRP on a reputable exchange is fine. Enable 2FA (two-factor authentication), use a strong unique password, and never share your login. As you get more comfortable, explore hardware wallets for extra security." },
  { q: "Do I need to pay taxes on XRP?", a: "Yes, in most countries. When you sell XRP at a profit, you owe capital gains tax. Many exchanges provide tax reports. Keep records of your purchases. See our tax guide for details." },
  { q: "Why XRP as my first crypto?", a: "XRP has real-world utility (banks actually use it), regulatory clarity (the SEC case is settled), and it's affordable per coin so you can buy whole coins. It's also on all major exchanges, making it easy to buy." },
];

export default function FirstTimeBuyingCryptoPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="First Time"
          titleAccent="Buying Crypto?"
          subtitle="Never bought cryptocurrency before? No problem. This step-by-step guide walks you through buying your first XRP — from zero to crypto owner in under 15 minutes."
          breadcrumbLabel="First Time Buying Crypto"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p>Buying crypto for the first time is easier than you think. <strong className="text-text-primary">Pick an exchange → Create account → Verify identity → Deposit money → Buy XRP</strong>. The whole process takes about 15 minutes. You can start with as little as $10. Here&apos;s exactly how to do it, step by step.</p>
        </TLDRBox>

        <KeyFactsTable facts={[
          { label: "Time Required", value: "~15 minutes" },
          { label: "Minimum Investment", value: "As low as $10" },
          { label: "What You Need", value: "Phone/computer, bank account, ID" },
          { label: "Best for Beginners", value: "Coinbase, Kraken, Uphold" },
          { label: "Difficulty", value: "Easy (like signing up for any app)" },
        ]} />

        <SectionNav items={[
          { id: "before", label: "Before You Start" },
          { id: "choose", label: "Choose Exchange" },
          { id: "steps", label: "Step by Step" },
          { id: "after", label: "After Buying" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill label="Time" value="15 min" delay={0} />
          <StatPill label="Min Buy" value="$10" delay={0.06} />
          <StatPill label="Steps" value="5" delay={0.12} />
          <StatPill label="Difficulty" value="Easy" delay={0.18} />
        </div>

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="before">
            <h2 className="text-2xl font-bold text-text-primary">Before You Start</h2>
            <div className="mt-5">
              <HighlightBox title="The Golden Rule" variant="accent" large>
                <p className="text-lg"><strong>Only invest money you can afford to lose.</strong> Crypto is exciting, but prices go up AND down. Start small. Learn how it works. You can always buy more later. Never invest rent money, emergency funds, or borrowed money.</p>
              </HighlightBox>
            </div>
            <p className="mt-5 text-text-secondary leading-relaxed text-lg">
              You&apos;ll need three things:
            </p>
            <div className="mt-3">
              <IconList items={[
                { title: "A phone or computer", desc: "Any smartphone or computer with internet access" },
                { title: "A bank account or debit card", desc: "To deposit money into the exchange" },
                { title: "A government ID", desc: "Driver's license or passport for identity verification (required by law)" },
              ]} variant="check" />
            </div>
          </RevealSection>

          <RevealSection id="choose" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Step 1: Choose an Exchange</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              An exchange is the app where you buy crypto (like an app store, but for digital currency). Here are the best options for beginners:
            </p>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                {
                  title: "🏆 Coinbase — Best for Absolute Beginners",
                  desc: "The easiest exchange to use. Clean interface, strong security, US-regulated. Slightly higher fees but worth it for the simplicity. Available in 100+ countries."
                  /* 💰 Affiliate placeholder: Replace with Coinbase referral link */
                },
                {
                  title: "⚡ Kraken — Best for Lower Fees",
                  desc: "Professional-grade exchange with lower trading fees than Coinbase. Slightly steeper learning curve but excellent security and support. Great for US and European investors."
                  /* 💰 Affiliate placeholder: Replace with Kraken referral link */
                },
                {
                  title: "🚀 Uphold — Simplest XRP Buying",
                  desc: "Was one of the first US exchanges to keep XRP listed during the SEC case. Very simple buying process. Supports bank transfers, debit cards, and crypto-to-crypto."
                  /* 💰 Affiliate placeholder: Replace with Uphold referral link */
                },
                {
                  title: "📱 Robinhood — If You Already Have It",
                  desc: "If you already use Robinhood for stocks, you can buy XRP there too. Note: Robinhood recently added XRP withdrawals, but it's still primarily a trading app."
                  /* 💰 Affiliate placeholder: Replace with Robinhood referral link */
                },
              ]} />
            </div>
            {/* 💰 AFFILIATE NOTE: Replace the exchange descriptions above with referral links when affiliate partnerships are established */}
          </RevealSection>

          <RevealSection id="steps" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Steps 2-5: Buy Your First XRP</h2>
            <div className="mt-6">
              <FeatureGrid columns={2} items={[
                { title: "Step 2: Create Your Account", desc: "Download the app or visit the website. Sign up with your email and create a strong password. Enable two-factor authentication (2FA) — this is crucial for security." },
                { title: "Step 3: Verify Your Identity", desc: "Upload a photo of your government ID (driver's license or passport). Take a selfie. This is required by law (KYC) and protects you. Usually takes 5-15 minutes." },
                { title: "Step 4: Deposit Money", desc: "Connect your bank account or debit card. Deposit the amount you want to invest. Bank transfers are usually free but take 1-3 days. Debit cards are instant but have a small fee." },
                { title: "Step 5: Buy XRP! 🎉", desc: "Search for 'XRP' on the exchange. Enter the amount you want to buy ($10, $50, $100 — whatever you're comfortable with). Hit 'Buy.' Congratulations — you now own XRP!" },
              ]} />
            </div>
          </RevealSection>

          <RevealSection id="after" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">After Your First Purchase</h2>
            <div className="mt-5">
              <IconList items={[
                { title: "Don't panic if the price drops", desc: "Crypto is volatile. Your XRP might be worth less tomorrow. That's normal. If you believe in the long-term thesis, short-term drops are buying opportunities, not emergencies." },
                { title: "Learn about storage", desc: "For now, your XRP is fine on the exchange. As your holdings grow, consider a hardware wallet for extra security." },
                { title: "Understand taxes", desc: "Keep a record of what you bought and when. You'll need this for taxes. Most exchanges provide downloadable tax reports." },
                { title: "Keep learning", desc: "You've taken the first step! Keep reading our guides to understand what you own and why XRP has long-term potential." },
                { title: "Consider dollar-cost averaging", desc: "Instead of buying all at once, consider buying a fixed amount weekly or monthly. This smooths out price volatility." },
              ]} variant="zap" />
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Continue Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Complete beginner guide" },
              { href: "/learn/xrp-explained-like-im-five", label: "XRP Explained Simply", desc: "Simplest explanation" },
              { href: "/learn/how-to-store-xrp-safely", label: "Store XRP Safely", desc: "Secure your investment" },
              { href: "/learn/xrp-risks", label: "XRP Risks", desc: "Honest risk assessment" },
              { href: "/learn/xrp-dollar-cost-averaging", label: "Dollar Cost Averaging", desc: "Smart buying strategy" },
              { href: "/learn/xrp-common-mistakes", label: "Common Mistakes", desc: "Avoid these errors" },
              { href: "/learn/crypto-wallets-for-xrp", label: "XRP Wallets", desc: "Wallet options" },
              { href: "/learn/xrp-tax-guide", label: "Tax Guide", desc: "Stay legal" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="You Did It! 🎉"
          description="Buying your first crypto is a big step. Now keep learning about what makes XRP special."
          primaryHref="/learn/what-is-xrp"
          primaryLabel="What is XRP? →"
          secondaryHref="/learn/xrp-for-beginners"
          secondaryLabel="Beginner Guide"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice. All investments carry risk. Exchange referral links may earn us a commission at no extra cost to you.</em>
        </p>
      </div>
    </>
  );
}
