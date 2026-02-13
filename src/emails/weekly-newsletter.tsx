import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export interface NewsItem {
  title: string;
  summary: string;
  url?: string;
}

export interface MarketData {
  price: string;
  support: string;
  resistance: string;
  highlight?: string;
}

export interface ToolSpotlight {
  name: string;
  description: string;
  url: string;
}

export interface WeeklyNewsletterProps {
  title: string;
  subtitle?: string;
  introHtml?: string;
  marketData?: MarketData;
  newsItems?: NewsItem[];
  toolSpotlights?: ToolSpotlight[];
  featuresHtml?: string;
  comingNextHtml?: string;
  ctaText?: string;
  ctaUrl?: string;
  unsubscribeUrl?: string;
}

const blue = "#0085FF";
const bgColor = "#000000";
const cardBg = "#111111";
const textColor = "#E7E9EA";
const mutedText = "#8899A6";

export default function WeeklyNewsletter({
  title = "AllAboutXRP Weekly",
  subtitle,
  introHtml,
  marketData,
  newsItems,
  toolSpotlights,
  featuresHtml,
  comingNextHtml,
  ctaText = "Visit AllAboutXRP",
  ctaUrl = "https://allaboutxrp.com",
  unsubscribeUrl = "https://allaboutxrp.com/unsubscribe",
}: WeeklyNewsletterProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
        `}</style>
      </Head>
      <Preview>{subtitle || title}</Preview>
      <Body style={{ backgroundColor: bgColor, fontFamily: "'Inter', Arial, sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          {/* Header */}
          <Section style={{ textAlign: "center", padding: "32px 0 24px" }}>
            <Img
              src="https://allaboutxrp.com/images/aaxrp-logo.png"
              alt="AllAboutXRP"
              width="180"
              height="40"
              style={{ margin: "0 auto" }}
            />
          </Section>

          {/* Title */}
          <Section style={{ padding: "0 0 8px" }}>
            <Heading style={{ color: textColor, fontSize: "28px", fontFamily: "'Space Grotesk', Arial, sans-serif", fontWeight: 700, margin: 0, textAlign: "center" }}>
              {title}
            </Heading>
            {subtitle && (
              <Text style={{ color: mutedText, fontSize: "16px", textAlign: "center", margin: "8px 0 0" }}>
                {subtitle}
              </Text>
            )}
          </Section>

          <Hr style={{ borderColor: "#222", margin: "24px 0" }} />

          {/* Intro */}
          {introHtml && (
            <Section style={{ padding: "0 0 24px" }}>
              <div style={{ color: textColor, fontSize: "15px", lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: introHtml }} />
            </Section>
          )}

          {/* Features section */}
          {featuresHtml && (
            <Section style={{ backgroundColor: cardBg, borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
              <Heading as="h2" style={{ color: blue, fontSize: "20px", fontFamily: "'Space Grotesk', Arial, sans-serif", margin: "0 0 16px" }}>
                🔧 What You Get
              </Heading>
              <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.7" }} dangerouslySetInnerHTML={{ __html: featuresHtml }} />
            </Section>
          )}

          {/* Market Data */}
          {marketData && (
            <Section style={{ backgroundColor: cardBg, borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
              <Heading as="h2" style={{ color: blue, fontSize: "20px", fontFamily: "'Space Grotesk', Arial, sans-serif", margin: "0 0 16px" }}>
                📊 Market Check
              </Heading>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td style={{ color: mutedText, fontSize: "13px", padding: "6px 0" }}>XRP Price</td>
                    <td style={{ color: textColor, fontSize: "15px", fontWeight: 600, textAlign: "right" }}>{marketData.price}</td>
                  </tr>
                  <tr>
                    <td style={{ color: mutedText, fontSize: "13px", padding: "6px 0" }}>Support</td>
                    <td style={{ color: textColor, fontSize: "15px", textAlign: "right" }}>{marketData.support}</td>
                  </tr>
                  <tr>
                    <td style={{ color: mutedText, fontSize: "13px", padding: "6px 0" }}>Resistance</td>
                    <td style={{ color: textColor, fontSize: "15px", textAlign: "right" }}>{marketData.resistance}</td>
                  </tr>
                </tbody>
              </table>
              {marketData.highlight && (
                <Text style={{ color: blue, fontSize: "14px", marginTop: "12px", fontWeight: 500 }}>
                  💡 {marketData.highlight}
                </Text>
              )}
            </Section>
          )}

          {/* News Items */}
          {newsItems && newsItems.length > 0 && (
            <Section style={{ backgroundColor: cardBg, borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
              <Heading as="h2" style={{ color: blue, fontSize: "20px", fontFamily: "'Space Grotesk', Arial, sans-serif", margin: "0 0 16px" }}>
                📰 This Week in XRP
              </Heading>
              {newsItems.map((item, i) => (
                <div key={i} style={{ marginBottom: i < newsItems.length - 1 ? "16px" : "0" }}>
                  <Text style={{ color: textColor, fontSize: "15px", fontWeight: 600, margin: "0 0 4px" }}>
                    {item.url ? <Link href={item.url} style={{ color: textColor, textDecoration: "none" }}>{item.title}</Link> : item.title}
                  </Text>
                  <Text style={{ color: mutedText, fontSize: "13px", margin: 0, lineHeight: "1.5" }}>
                    {item.summary}
                  </Text>
                </div>
              ))}
            </Section>
          )}

          {/* Tool Spotlights */}
          {toolSpotlights && toolSpotlights.length > 0 && (
            <Section style={{ backgroundColor: cardBg, borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
              <Heading as="h2" style={{ color: blue, fontSize: "20px", fontFamily: "'Space Grotesk', Arial, sans-serif", margin: "0 0 16px" }}>
                ⚡ Tools Spotlight
              </Heading>
              {toolSpotlights.map((tool, i) => (
                <div key={i} style={{ marginBottom: i < toolSpotlights.length - 1 ? "12px" : "0" }}>
                  <Link href={tool.url} style={{ color: blue, fontSize: "15px", fontWeight: 600 }}>{tool.name}</Link>
                  <Text style={{ color: mutedText, fontSize: "13px", margin: "4px 0 0", lineHeight: "1.5" }}>{tool.description}</Text>
                </div>
              ))}
            </Section>
          )}

          {/* Coming Next */}
          {comingNextHtml && (
            <Section style={{ backgroundColor: cardBg, borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
              <Heading as="h2" style={{ color: blue, fontSize: "20px", fontFamily: "'Space Grotesk', Arial, sans-serif", margin: "0 0 16px" }}>
                🔜 What's Coming
              </Heading>
              <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.7" }} dangerouslySetInnerHTML={{ __html: comingNextHtml }} />
            </Section>
          )}

          {/* CTA */}
          <Section style={{ textAlign: "center", padding: "8px 0 32px" }}>
            <Link
              href={ctaUrl}
              style={{
                backgroundColor: blue,
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {ctaText}
            </Link>
          </Section>

          <Hr style={{ borderColor: "#222", margin: "0 0 24px" }} />

          {/* Footer */}
          <Section style={{ textAlign: "center", padding: "0 0 32px" }}>
            <Text style={{ color: mutedText, fontSize: "12px", margin: "0 0 8px" }}>
              You're receiving this because you subscribed to AllAboutXRP.
            </Text>
            <Link href={unsubscribeUrl} style={{ color: mutedText, fontSize: "12px" }}>
              Unsubscribe
            </Link>
            <Text style={{ color: mutedText, fontSize: "11px", margin: "16px 0 0" }}>
              © {new Date().getFullYear()} AllAboutXRP. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
