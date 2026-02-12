import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AllAboutXRP.com privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-black">
      <div className="mx-auto max-w-3xl px-5 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-white/40 mb-10">
          Last updated: February 12, 2026
        </p>

        <div className="prose-policy space-y-8 text-[14px] leading-relaxed text-white/60">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to AllAboutXRP.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, and safeguard information
              when you visit our website at{" "}
              <a href="https://allaboutxrp.com" className="text-[#0085FF] hover:underline">
                allaboutxrp.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>
              We do not require you to create an account or provide personal information to use our
              website. We may automatically collect certain non-personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited, time spent, and referral source</li>
              <li>Approximate geographic location (country/region level)</li>
              <li>Device type (mobile, desktop, tablet)</li>
            </ul>
            <p className="mt-3">
              <strong className="text-white/80">We do not sell, rent, or share your personal data with third parties.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Cookies &amp; Tracking Technologies</h2>
            <p>We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong className="text-white/80">Google Analytics (GA4)</strong> — to understand website
                traffic and usage patterns. Google Analytics uses cookies to collect anonymized data.
                You can opt out via the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0085FF] hover:underline"
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>.
              </li>
              <li>Essential cookies for site functionality and preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Third-Party Services</h2>
            <p>Our website integrates with the following third-party services:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong className="text-white/80">Google Analytics</strong> — website analytics and
                traffic measurement.
              </li>
              <li>
                <strong className="text-white/80">TradingView</strong> — embedded charting widgets for
                live price data.
              </li>
              <li>
                <strong className="text-white/80">CoinGecko API</strong> — cryptocurrency price and
                market data.
              </li>
              <li>
                <strong className="text-white/80">Affiliate Partners</strong> — including Uphold,
                Coinbase, and Ledger. See Section 5 for details.
              </li>
            </ul>
            <p className="mt-3">
              Each third-party service has its own privacy policy governing the data they collect.
              We encourage you to review their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Affiliate Disclosure</h2>
            <p>
              AllAboutXRP.com participates in affiliate programs. Some links on our site are affiliate
              links, meaning we may earn a commission if you click through and make a purchase or
              sign up for a service — at no additional cost to you.
            </p>
            <p className="mt-2">
              Our affiliate partners include, but are not limited to: Uphold, Coinbase, and Ledger.
              Affiliate relationships do not influence our editorial content or recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              Analytics data is retained in accordance with Google Analytics&apos; default retention
              settings (14 months). We do not maintain separate databases of personal user information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your Rights (GDPR &amp; CCPA)</h2>
            <p>
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong className="text-white/80">Right to Access</strong> — request information about
                data we hold about you.
              </li>
              <li>
                <strong className="text-white/80">Right to Deletion</strong> — request deletion of
                your data.
              </li>
              <li>
                <strong className="text-white/80">Right to Opt-Out</strong> — opt out of analytics
                tracking via browser settings or the GA opt-out tool.
              </li>
              <li>
                <strong className="text-white/80">Right to Non-Discrimination</strong> — we will not
                discriminate against you for exercising your privacy rights.
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-white/80">For California Residents (CCPA):</strong> We do not
              sell personal information. You may request disclosure of data collected and request its
              deletion.
            </p>
            <p className="mt-2">
              <strong className="text-white/80">For EU/EEA Residents (GDPR):</strong> Our legal basis
              for processing data is legitimate interest (website analytics and improvement). You may
              withdraw consent for cookies at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under 13. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights,
              please contact us at{" "}
              <a href="mailto:info@allaboutxrp.com" className="text-[#0085FF] hover:underline">
                info@allaboutxrp.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
