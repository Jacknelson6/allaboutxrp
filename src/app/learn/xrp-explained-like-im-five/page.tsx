import { Metadata } from "next";
import SEOSchema from "@/components/shared/SEOSchema";
import AuthorByline from "@/components/shared/AuthorByline";
import Link from "next/link";
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema, buildSpeakableSchema } from "@/lib/utils/seo";
import {
  LearnHero, RevealSection, SectionNav, LearnCTA, LearnLinkGrid,
  HighlightBox, FAQAccordion,
  TLDRBox, LastUpdated,
} from "@/components/learn/LearnPageShell";

export const dynamic = "force-static";

const slug = "xrp-explained-like-im-five";
const title = "XRP Explained Like I'm 5: The Simplest Guide";
const description = "XRP explained so simply a 5-year-old could understand. No jargon, no fluff — just what XRP is and why it matters.";
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
    { name: "XRP Explained Simply" },
  ]),
  buildSpeakableSchema({ url }),
  buildFAQSchema([
    { question: "What is XRP in simple terms?", answer: "XRP is digital money that can be sent to anyone in the world in about 3 seconds, for less than a penny. It's like sending a text message, but instead of words, you're sending money." },
    { question: "Why does XRP exist?", answer: "XRP exists to make sending money around the world fast and cheap. Right now, sending money to another country takes days and costs a lot. XRP does it in seconds for almost nothing." },
    { question: "How does XRP work?", answer: "When you send XRP, a network of computers around the world agrees that the transaction is real, and it's done in 3-5 seconds. No bank needed. No waiting. It just works." },
    { question: "Is XRP real money?", answer: "XRP is digital money — you can't hold it in your hand like a dollar bill, but you can buy things with it, trade it for regular money, or send it to anyone in the world. It has real value." },
    { question: "Is XRP safe?", answer: "XRP runs on a technology called blockchain that has been working without any downtime for over 12 years. It's very secure. But like any investment, the price can go up or down." },
  ]),
];

const faqItems = [
  { q: "What is XRP?", a: "XRP is digital money that lives on the internet. You can send it to anyone, anywhere in the world, in about 3 seconds. It costs less than a penny to send. Think of it like a super-fast, super-cheap way to move money." },
  { q: "Who made XRP?", a: "XRP was created by three smart people: David Schwartz, Jed McCaleb, and Arthur Britto. They built it in 2012. A company called Ripple helps make XRP useful for banks, but Ripple doesn't own or control XRP." },
  { q: "Why should I care about XRP?", a: "Imagine your grandma wants to send you birthday money from another country. Right now, it takes days and costs a lot. With XRP, she could send it in 3 seconds for almost free. That's why banks are interested too." },
  { q: "Can XRP go up in value?", a: "It can — but it can also go down. The price changes every day. Many people believe XRP will become more valuable as more banks and companies use it. But nobody knows for sure. Never invest more than you can afford to lose." },
  { q: "How do I get XRP?", a: "You can buy XRP on apps called 'exchanges' — like Coinbase or Kraken. You sign up, connect your bank account, and buy XRP with regular money. It takes about 5 minutes to get started." },
  { q: "Where do I keep my XRP?", a: "You keep XRP in a 'wallet' — a digital app that stores your XRP safely. Some people keep it on the exchange where they bought it. Others use special wallet apps for extra security." },
];

export default function XRPExplainedSimplyPage() {
  return (
    <>
      <SEOSchema schema={schemas} />
      <div className="relative mx-auto max-w-4xl px-4 py-16">
        <LearnHero
          title="XRP Explained"
          titleAccent="Like I'm 5"
          subtitle="The simplest XRP explanation on the internet. No confusing words. No technical jargon. Just the basics."
          breadcrumbLabel="XRP Explained Simply"
        >
          <div className="mt-5">
            <AuthorByline date={dp} />
            <LastUpdated date="February 15, 2026" />
          </div>
        </LearnHero>

        <TLDRBox>
          <p><strong className="text-text-primary">XRP is digital money that you can send to anyone in the world in 3 seconds for less than a penny.</strong> That&apos;s it. That&apos;s the core idea. Everything else is just details about why that&apos;s important and who&apos;s using it.</p>
        </TLDRBox>

        <SectionNav items={[
          { id: "what", label: "What Is It" },
          { id: "why", label: "Why It Matters" },
          { id: "how", label: "How It Works" },
          { id: "ripple", label: "Ripple" },
          { id: "faq", label: "FAQ" },
        ]} />

        <div className="cv-auto mt-14 space-y-14">
          <RevealSection id="what">
            <h2 className="text-2xl font-bold text-text-primary">What Is XRP? 🤔</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              You know how you can send a photo to someone on the other side of the world in one second? For free?
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              Well, sending <em>money</em> to the other side of the world takes 3-5 <strong className="text-text-primary">days</strong> and costs $30-65.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              That&apos;s pretty crazy when you think about it. Photos travel at the speed of light. Money travels at the speed of a fax machine.
            </p>
            <div className="mt-5">
              <HighlightBox title="XRP fixes this" variant="accent" large>
                <p className="text-lg">XRP lets you send money to anyone, anywhere in the world, in about <strong>3 seconds</strong>, for less than <strong>one penny</strong>. It&apos;s like sending a text message — but instead of words, you&apos;re sending money.</p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="why" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Why Does This Matter? 🌍</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              Think about all the people who work in one country and send money home to their families in another country. There are millions of them. Right now, they lose a big chunk of their hard-earned money to fees every time they send money home.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              XRP could change that. And it&apos;s not just for regular people — <strong className="text-text-primary">big banks are using it too</strong>. Over 100 banks and financial companies around the world are already using <Link href="/learn/ripplenet" className="text-xrp-accent underline decoration-xrp-accent/30">Ripple&apos;s network</Link> to move money with XRP.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              That&apos;s what makes XRP exciting — it&apos;s not just an idea. It&apos;s actually being used in the real world, right now.
            </p>
          </RevealSection>

          <RevealSection id="how" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">How Does It Work? ⚡</h2>
            <p className="mt-4 text-text-secondary leading-relaxed text-lg">
              Imagine a room full of trusted referees. When someone wants to send XRP, all the referees watch the transaction and agree &quot;yes, that&apos;s real.&quot; Once they all agree, it&apos;s done. Takes about 3 seconds.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              These &quot;referees&quot; are actually computers called <Link href="/learn/xrpl-validators" className="text-xrp-accent underline decoration-xrp-accent/30">validators</Link>. There are over 150 of them around the world. Nobody owns all of them. Nobody can cheat the system.
            </p>
            <p className="mt-3 text-text-secondary leading-relaxed text-lg">
              And because there&apos;s no mining (like Bitcoin), XRP doesn&apos;t waste tons of electricity. It&apos;s one of the <Link href="/learn/xrp-energy-consumption" className="text-xrp-accent underline decoration-xrp-accent/30">greenest cryptocurrencies</Link> out there.
            </p>
          </RevealSection>

          <RevealSection id="ripple" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Wait, What About Ripple? 🏢</h2>
            <div className="mt-5">
              <HighlightBox title="The #1 thing people get confused about" variant="info">
                <p className="text-lg"><strong>Ripple</strong> is a company. <strong>XRP</strong> is a digital currency. They&apos;re related but they&apos;re not the same thing. Ripple uses XRP in its products to help banks send money. But XRP exists on its own — even if Ripple disappeared tomorrow, XRP would keep working.</p>
                <p className="mt-2">Learn more: <Link href="/learn/xrp-vs-ripple-for-beginners" className="text-xrp-accent underline decoration-xrp-accent/30">XRP vs Ripple for Beginners</Link></p>
              </HighlightBox>
            </div>
          </RevealSection>

          <RevealSection id="faq" delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary mb-5">Frequently Asked Questions</h2>
            <FAQAccordion items={faqItems} />
          </RevealSection>

          <RevealSection delay={0.05}>
            <h2 className="text-2xl font-bold text-text-primary">Keep Learning</h2>
            <LearnLinkGrid links={[
              { href: "/learn/what-is-xrp", label: "What is XRP?", desc: "More detail" },
              { href: "/learn/xrp-for-beginners", label: "XRP for Beginners", desc: "Beginner guide" },
              { href: "/learn/what-makes-xrp-different", label: "What's Different", desc: "XRP vs others" },
              { href: "/learn/xrp-vs-ripple-for-beginners", label: "XRP vs Ripple", desc: "Key difference" },
              { href: "/learn/how-does-xrp-work", label: "How XRP Works", desc: "A bit more detail" },
              { href: "/learn/first-time-buying-crypto-xrp", label: "Buy XRP", desc: "Your first purchase" },
            ]} />
          </RevealSection>
        </div>

        <LearnCTA
          title="Make Sense? 😊"
          description="XRP is fast, cheap, and used by real banks. Ready to get some?"
          primaryHref="/learn/get-started"
          primaryLabel="How to Buy XRP →"
          secondaryHref="/learn/what-is-xrp"
          secondaryLabel="Learn More About XRP"
        />

        <p className="mt-8 text-xs text-text-secondary/60">
          <em>Last updated: February 15, 2026. Written by the AllAboutXRP Editorial Team. Not financial advice.</em>
        </p>
      </div>
    </>
  );
}
