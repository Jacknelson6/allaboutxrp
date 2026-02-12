import type { Metadata } from "next";

export const dynamic = "force-static";

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
            <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
            <p>
              AllAboutXRP.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains what information we collect, how we use it, and what choices you
              have when you visit{" "}
              <a href="https://allaboutxrp.com" className="text-[#0085FF] hover:underline">
                allaboutxrp.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
            <p>
              We automatically collect certain non-personal information when you visit our site. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URLs (how you found us)</li>
              <li>Device type (mobile, desktop, tablet)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Data We Do NOT Collect</h2>
            <p>
              We want to be clear about what we <strong className="text-white/80">do not</strong> collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>We do not collect personal information unless you voluntarily provide it (e.g., contacting us via email).</li>
              <li>We do not collect or store cryptocurrency wallet addresses.</li>
              <li>We do not collect precise geolocation data.</li>
              <li>We do not sell, rent, or share your personal data with third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">How We Use Information</h2>
            <p>The information we collect is used to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Improve website performance and user experience</li>
              <li>Analyze traffic patterns and site usage</li>
              <li>Display relevant advertisements</li>
              <li>Prevent fraud and abuse</li>
              <li>Debug technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Third-Party Services</h2>
            <p>Our website integrates with the following third-party services, each with their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>
                <strong className="text-white/80">Google Analytics (GA4)</strong> — website analytics
                and traffic measurement. Collects anonymized usage data via cookies.
              </li>
              <li>
                <strong className="text-white/80">TradingView</strong> — embedded charting widgets
                for live price data and technical analysis.
              </li>
              <li>
                <strong className="text-white/80">CoinGecko API</strong> — cryptocurrency price,
                market cap, and volume data.
              </li>
              <li>
                <strong className="text-white/80">Affiliate Partners</strong> — including Uphold,
                Coinbase, and Ledger. See the Affiliate Disclosure section below.
              </li>
            </ul>
            <p className="mt-3">
              We encourage you to review the privacy policies of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p>
              Cookies are small text files stored on your device by your web browser. They help websites
              remember your preferences and understand how you use the site.
            </p>
            <p className="mt-3">We use cookies for:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Website analytics (Google Analytics)</li>
              <li>Essential site functionality and preferences</li>
            </ul>
            <p className="mt-3">
              You can disable cookies through your browser settings. Note that disabling cookies may
              affect site functionality. You can also opt out of Google Analytics using the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0085FF] hover:underline"
              >
                Google Analytics Opt-Out Browser Add-on
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Affiliate Disclosure</h2>
            <p>
              AllAboutXRP.com participates in affiliate programs. Some links on our site are affiliate
              links, meaning we may earn a commission if you click through and make a purchase or sign
              up for a service — at <strong className="text-white/80">no additional cost to you</strong>.
            </p>
            <p className="mt-3">
              Our affiliate partners include, but are not limited to:{" "}
              <strong className="text-white/80">Uphold</strong>,{" "}
              <strong className="text-white/80">Coinbase</strong>, and{" "}
              <strong className="text-white/80">Ledger</strong>.
            </p>
            <p className="mt-3">
              Affiliate relationships do not influence our editorial content, rankings, or reviews.
              We only recommend products and services we believe provide value to our readers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Data Retention</h2>
            <p>
              We retain collected data only for as long as necessary to fulfill the purposes outlined
              in this policy. Analytics data is retained in accordance with Google Analytics&apos; default
              retention settings. We do not maintain separate databases of personal user information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              Our website is not directed at children under the age of 13. We do not knowingly collect
              personal information from children. If you believe a child has provided us with personal
              information, please contact us so we can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
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
            <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights,
              please contact us at{" "}
              <a href="mailto:info@allaboutxrp.com" className="text-[#0085FF] hover:underline">
                info@allaboutxrp.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &quot;Last updated&quot; date. Your continued use of AllAboutXRP.com after any
              changes constitutes your acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
