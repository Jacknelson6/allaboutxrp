import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
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

// Brand colors matching allaboutxrp.com
const blue = "#0085FF";
const bgColor = "#000000";
const cardBg = "#16181C";
const borderColor = "#2F3336";
const textColor = "#E7E9EA";
const mutedText = "#71767B";
const fontStack = "'Inter', 'Helvetica Neue', Arial, sans-serif";
const displayFont = "'Space Grotesk', 'Inter', 'Helvetica Neue', Arial, sans-serif";

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
      <Head />
      <Preview>{subtitle || title}</Preview>
      <Body style={{ backgroundColor: bgColor, fontFamily: fontStack, margin: "0", padding: "0", WebkitTextSizeAdjust: "100%", msTextSizeAdjust: "100%" }}>
        {/* Outer wrapper table for full-width bg */}
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: bgColor }}>
          <tr>
            <td align="center" style={{ padding: "0" }}>
              {/* Inner 600px container */}
              <table role="presentation" width="600" cellPadding="0" cellSpacing="0" style={{ maxWidth: "600px", width: "100%" }}>

                {/* ===== HEADER ===== */}
                <tr>
                  <td style={{ padding: "40px 24px 20px", textAlign: "center" as const, borderBottom: `1px solid ${borderColor}` }}>
                    {/* Text-based logo */}
                    <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                      <tr>
                        <td style={{ fontFamily: displayFont, fontSize: "28px", fontWeight: 700, color: textColor, letterSpacing: "0.5px" }}>
                          ALL ABOUT
                        </td>
                        <td style={{ width: "8px" }}></td>
                        <td style={{ fontFamily: displayFont, fontSize: "28px", fontWeight: 700, color: blue, letterSpacing: "0.5px" }}>
                          XRP
                        </td>
                      </tr>
                    </table>
                    <p style={{ color: mutedText, fontSize: "14px", fontFamily: fontStack, margin: "12px 0 0", fontStyle: "italic", letterSpacing: "0.3px" }}>
                      The Signal, Not the Noise
                    </p>
                  </td>
                </tr>

                {/* ===== TITLE ===== */}
                <tr>
                  <td style={{ padding: "32px 24px 8px", textAlign: "center" as const }}>
                    <h1 style={{ color: textColor, fontSize: "24px", fontFamily: displayFont, fontWeight: 700, margin: "0", lineHeight: "1.3" }}>
                      {title}
                    </h1>
                    {subtitle && (
                      <p style={{ color: mutedText, fontSize: "15px", fontFamily: fontStack, margin: "10px 0 0" }}>
                        {subtitle}
                      </p>
                    )}
                  </td>
                </tr>

                {/* ===== INTRO ===== */}
                {introHtml && (
                  <tr>
                    <td style={{ padding: "16px 24px 24px" }}>
                      <div style={{ color: textColor, fontSize: "15px", lineHeight: "1.6", fontFamily: fontStack }} dangerouslySetInnerHTML={{ __html: introHtml }} />
                    </td>
                  </tr>
                )}

                {/* ===== MARKET UPDATE ===== */}
                {marketData && (
                  <tr>
                    <td style={{ padding: "0 24px 20px" }}>
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: cardBg, borderRadius: "12px", border: `1px solid ${borderColor}`, borderLeft: `3px solid ${blue}` }}>
                        <tr>
                          <td style={{ padding: "24px" }}>
                            <h2 style={{ color: blue, fontSize: "13px", fontFamily: fontStack, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                              📊 MARKET UPDATE
                            </h2>
                            {/* Price row */}
                            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
                              <tr>
                                <td style={{ padding: "0 0 20px" }}>
                                  <p style={{ color: mutedText, fontSize: "12px", fontFamily: fontStack, margin: "0 0 4px", textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>XRP Price</p>
                                  <p style={{ color: textColor, fontSize: "32px", fontFamily: displayFont, fontWeight: 700, margin: "0" }}>{marketData.price}</p>
                                </td>
                              </tr>
                            </table>
                            {/* Support / Resistance */}
                            <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
                              <tr>
                                <td width="50%" style={{ padding: "12px 16px", backgroundColor: "#0d0f11", borderRadius: "8px" }}>
                                  <p style={{ color: mutedText, fontSize: "11px", fontFamily: fontStack, margin: "0 0 4px", textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>Support</p>
                                  <p style={{ color: "#22c55e", fontSize: "18px", fontFamily: displayFont, fontWeight: 600, margin: "0" }}>{marketData.support}</p>
                                </td>
                                <td width="12"></td>
                                <td width="50%" style={{ padding: "12px 16px", backgroundColor: "#0d0f11", borderRadius: "8px" }}>
                                  <p style={{ color: mutedText, fontSize: "11px", fontFamily: fontStack, margin: "0 0 4px", textTransform: "uppercase" as const, letterSpacing: "0.5px" }}>Resistance</p>
                                  <p style={{ color: "#ef4444", fontSize: "18px", fontFamily: displayFont, fontWeight: 600, margin: "0" }}>{marketData.resistance}</p>
                                </td>
                              </tr>
                            </table>
                            {/* Highlight */}
                            {marketData.highlight && (
                              <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "16px" }}>
                                <tr>
                                  <td style={{ padding: "12px 16px", backgroundColor: "rgba(0,133,255,0.08)", borderRadius: "8px", borderLeft: `2px solid ${blue}` }}>
                                    <p style={{ color: blue, fontSize: "14px", fontFamily: fontStack, fontWeight: 500, margin: "0", lineHeight: "1.5" }}>
                                      💡 {marketData.highlight}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            )}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                )}

                {/* ===== NEWS ===== */}
                {newsItems && newsItems.length > 0 && (
                  <tr>
                    <td style={{ padding: "0 24px 20px" }}>
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: cardBg, borderRadius: "12px", border: `1px solid ${borderColor}` }}>
                        <tr>
                          <td style={{ padding: "24px" }}>
                            <h2 style={{ color: blue, fontSize: "13px", fontFamily: fontStack, fontWeight: 600, margin: "0 0 20px", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                              📰 THE LATEST
                            </h2>
                            {newsItems.map((item, i) => (
                              <table key={i} role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: i < newsItems.length - 1 ? "16px" : "0", paddingBottom: i < newsItems.length - 1 ? "16px" : "0", borderBottom: i < newsItems.length - 1 ? `1px solid ${borderColor}` : "none" }}>
                                <tr>
                                  <td>
                                    <p style={{ color: textColor, fontSize: "16px", fontFamily: displayFont, fontWeight: 600, margin: "0 0 6px", lineHeight: "1.4" }}>
                                      {item.url ? (
                                        <a href={item.url} style={{ color: textColor, textDecoration: "none" }}>{item.title}</a>
                                      ) : item.title}
                                    </p>
                                    <p style={{ color: mutedText, fontSize: "14px", fontFamily: fontStack, margin: "0", lineHeight: "1.5" }}>
                                      {item.summary}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            ))}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                )}

                {/* ===== FEATURES / WHAT YOU GET ===== */}
                {featuresHtml && (
                  <tr>
                    <td style={{ padding: "0 24px 20px" }}>
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: cardBg, borderRadius: "12px", border: `1px solid ${borderColor}` }}>
                        <tr>
                          <td style={{ padding: "24px" }}>
                            <h2 style={{ color: blue, fontSize: "13px", fontFamily: fontStack, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                              ⚡ WHAT YOU GET
                            </h2>
                            <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.7", fontFamily: fontStack }} dangerouslySetInnerHTML={{ __html: featuresHtml }} />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                )}

                {/* ===== TOOL SPOTLIGHTS ===== */}
                {toolSpotlights && toolSpotlights.length > 0 && (
                  <tr>
                    <td style={{ padding: "0 24px 20px" }}>
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: cardBg, borderRadius: "12px", border: `1px solid ${borderColor}` }}>
                        <tr>
                          <td style={{ padding: "24px" }}>
                            <h2 style={{ color: blue, fontSize: "13px", fontFamily: fontStack, fontWeight: 600, margin: "0 0 20px", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                              🛠 TOOLS
                            </h2>
                            {toolSpotlights.map((tool, i) => (
                              <table key={i} role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: i < toolSpotlights.length - 1 ? "12px" : "0" }}>
                                <tr>
                                  <td>
                                    <a href={tool.url} style={{ color: blue, fontSize: "15px", fontWeight: 600, fontFamily: fontStack, textDecoration: "none" }}>{tool.name} →</a>
                                    <p style={{ color: mutedText, fontSize: "13px", fontFamily: fontStack, margin: "4px 0 0", lineHeight: "1.5" }}>{tool.description}</p>
                                  </td>
                                </tr>
                              </table>
                            ))}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                )}

                {/* ===== COMING NEXT ===== */}
                {comingNextHtml && (
                  <tr>
                    <td style={{ padding: "0 24px 20px" }}>
                      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: cardBg, borderRadius: "12px", border: `1px solid ${borderColor}` }}>
                        <tr>
                          <td style={{ padding: "24px" }}>
                            <h2 style={{ color: blue, fontSize: "13px", fontFamily: fontStack, fontWeight: 600, margin: "0 0 16px", textTransform: "uppercase" as const, letterSpacing: "1.5px" }}>
                              🔜 WHAT'S COMING
                            </h2>
                            <div style={{ color: textColor, fontSize: "14px", lineHeight: "1.7", fontFamily: fontStack }} dangerouslySetInnerHTML={{ __html: comingNextHtml }} />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                )}

                {/* ===== CTA BUTTON ===== */}
                <tr>
                  <td style={{ padding: "12px 24px 40px", textAlign: "center" as const }}>
                    <table role="presentation" cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                      <tr>
                        <td style={{ backgroundColor: blue, borderRadius: "10px" }}>
                          <a href={ctaUrl} style={{ color: "#ffffff", fontSize: "16px", fontFamily: fontStack, fontWeight: 600, textDecoration: "none", display: "inline-block", padding: "16px 40px" }}>
                            {ctaText}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* ===== FOOTER ===== */}
                <tr>
                  <td style={{ padding: "0 24px 40px", borderTop: `1px solid ${borderColor}` }}>
                    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={{ padding: "24px 0 0", textAlign: "center" as const }}>
                          <p style={{ color: mutedText, fontSize: "12px", fontFamily: fontStack, margin: "0 0 4px" }}>
                            <a href="https://allaboutxrp.com" style={{ color: mutedText, textDecoration: "none" }}>allaboutxrp.com</a>
                          </p>
                          <p style={{ color: mutedText, fontSize: "12px", fontFamily: fontStack, margin: "0 0 16px" }}>
                            You're receiving this because you subscribed to AllAboutXRP.
                          </p>
                          <a href={unsubscribeUrl} style={{ color: mutedText, fontSize: "12px", fontFamily: fontStack, textDecoration: "underline" }}>
                            Unsubscribe
                          </a>
                          <p style={{ color: "#3a3a3a", fontSize: "11px", fontFamily: fontStack, margin: "16px 0 0" }}>
                            © {new Date().getFullYear()} AllAboutXRP. All rights reserved.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </Body>
    </Html>
  );
}
