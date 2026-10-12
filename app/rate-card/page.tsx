import Link from "next/link";
import { getSiteData } from "../../lib/site-data";
import CookieNotice from "../../components/cookie-notice";

export const metadata = {
  title: "Rate Card | justanotherfilmgeek"
};

export const revalidate = 3600;

type Deliverable = {
  category: string;
  name: string;
  usd: string;
  gbp: string;
  desc: string;
  featured?: boolean;
};

const deliverables: Deliverable[] = [
  {
    category: "Film & TV",
    name: "Dedicated Film/Trailer Review",
    usd: "$450",
    gbp: "£350",
    desc: "60–90s video breakdown, release reaction, franchise lore, or ranking inclusion. Posted directly to profile.",
    featured: true
  },
  {
    category: "Film & TV",
    name: "Organic Integration / Exit Poll",
    usd: "$275",
    gbp: "£215",
    desc: "30–45s integrated segment or sponsored mention within a standard listicle or hot-take reel."
  },
  {
    category: "Gaming",
    name: "Gameplay Integration / First Look",
    usd: "$500",
    gbp: "£390",
    desc: "60–90s video featuring gameplay footage, narrative hook, or a “Movie vs. Game” lore comparison, plus link in bio."
  },
  {
    category: "Gaming",
    name: "Dedicated TikTok Live (60 Mins)",
    usd: "$650",
    gbp: "£500",
    desc: "60-minute interactive live gameplay session, Q&A, and pinned campaign link."
  },
  {
    category: "Consumer / Non-Endemic",
    name: "Lifestyle Product Placement / Skit",
    usd: "$250",
    gbp: "£195",
    desc: "30–45s organic placement (tech, snacks, merch, apparel) styled to fit the channel's humour and voice."
  },
  {
    category: "UGC Asset Creation",
    name: "Brand-Owned UGC (No Post)",
    usd: "$350",
    gbp: "£275",
    desc: "Custom, high-retention vertical video produced exclusively for brand channels or dark ads."
  }
];

const addons = [
  { name: "Spark Ads Authorization", fee: "+30%", desc: "30-day code to boost the post in TikTok Ads Manager." },
  { name: "Whitelisting / Dark Ad Rights", fee: "+50%", desc: "30-day rights to run paid through the creator handle." },
  { name: "Cross-Platform Syndication", fee: "+30%", desc: "Per platform: Instagram Reels / YouTube Shorts." },
  { name: "Category Exclusivity", fee: "+35%", desc: "No competing titles or products for 30 days." },
  { name: "Rush Delivery", fee: "+25%", desc: "Under 48-hour turnaround." },
  { name: "Raw Footage Capture", fee: "+20%", desc: "B-roll or gameplay files handed over." }
];

const bundles = [
  {
    name: "The Premier Film/Game Release Bundle",
    usd: "$1,100",
    gbp: "£850",
    features: [
      "1x dedicated pre-release hype video (trailer reaction, lore breakdown, or first look)",
      "1x opening weekend reaction / review video",
      "30-day Spark Ads code included for both posts",
      "Link in bio during premiere week"
    ]
  },
  {
    name: "Consumer Product Launch Bundle",
    usd: "$600",
    gbp: "£475",
    features: [
      "3x organic 30s product integrations distributed across 30 days",
      "Permanent link / promo code in bio for the duration of the campaign"
    ]
  }
];

const terms = [
  {
    name: "Deliverables & Assets",
    desc: "Digital screeners, press keys, physical samples, or campaign briefs must be delivered 5 business days prior to the agreed go-live date."
  },
  {
    name: "Editorial Rights",
    desc: "To maintain high engagement and community trust, all sponsored content retains the signature Just Another Film Geek visual style and narrative voice."
  },
  {
    name: "Revisions",
    desc: "Base pricing includes 1 round of minor structural revisions prior to posting."
  },
  {
    name: "Payment Terms",
    desc: "Net 30 days from invoice date for agency partners, or 50% deposit upfront for first-time direct brands."
  }
];

export default async function RateCardPage() {
  const d = await getSiteData();
  const followersLabel = d.stats.find((s) => s.label === "Followers")?.value ?? "20K+";
  const engagementLabel = d.stats.find((s) => s.label === "Engagement Rate")?.value ?? "12.5%";

  return (
    <>
      {/* Aurora background */}
      <div className="aurora" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Film grain */}
      <div className="grain" aria-hidden="true" />

      <div className="page-wrapper">
        {/* ── NAV ─────── */}
        <nav className="topbar">
          <div className="shell topbar-inner">
            <Link href="/" className="brand">
              Just Another <span className="brand-accent">Film</span> Geek
            </Link>
            <div className="topbar-right">
              <span className="pill">
                <span className="pill-dot" />
                {followersLabel} Followers
              </span>
              <Link href="/" className="btn btn-ghost topbar-rate">
                ← Media Kit
              </Link>
              <Link
                href={d.profile.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                ▶ TikTok
              </Link>
              <a
                href={`mailto:${d.profile.email}`}
                className="btn btn-primary topbar-contact-mobile"
              >
                ✉️ Get in touch
              </a>
            </div>
          </div>
        </nav>

        {/* ── HEADER ─────── */}
        <header className="rate-hero">
          <div className="shell">
            <p className="section-eyebrow">Official Creator Rate Card · 2026</p>
            <h1 className="section-heading">Rate Card</h1>
            <p className="section-sub">
              Partnership packages for {d.profile.name}, hosted by Ross on TikTok. Film culture,
              franchise lore, pop culture, gaming &amp; lifestyle for high-intent, film-loving
              audiences.
            </p>
            <div className="hero-actions">
              <a href={`mailto:${d.profile.email}`} className="btn btn-primary">
                Get in touch
              </a>
              <Link href="/" className="btn btn-ghost">
                View media kit
              </Link>
            </div>
          </div>
        </header>

        {/* ── AUDIENCE PROFILE & STATS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Section 01</p>
            <h2 className="section-heading">Audience Profile &amp; Stats</h2>
            <p className="section-sub">
              Data pulled directly from channel analytics for high-intent, film-loving audiences.
            </p>

            <div className="scene-grid">
              {d.stats.map((stat, i) => (
                <div className="scene-card" key={stat.label}>
                  <span className="scene-num" aria-hidden="true">SCENE {String(i + 1).padStart(2, "0")}</span>
                  <span className="scene-value">{stat.value}</span>
                  <span className="scene-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <p className="rate-note">
              Average engagement rate of {engagementLabel} against an industry benchmark of 3–5%.
              Demographic focus: {d.profile.market}.
            </p>
          </div>
        </section>

        {/* ── DELIVERABLES & RATES ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Section 02</p>
            <h2 className="section-heading">Sponsored Content &amp; Rates</h2>
            <p className="section-sub">
              Flat-rate deliverables across film &amp; TV, gaming, consumer, and UGC formats.
            </p>

            <div className="pricing-grid">
              {deliverables.map((item) => (
                <div className={`pricing-card${item.featured ? " featured" : ""}`} key={item.name}>
                  <span className="pricing-tag">{item.category}</span>
                  <h3 className="pricing-name">{item.name}</h3>
                  <p className="pricing-price">
                    {item.usd} <span>· {item.gbp} flat</span>
                  </p>
                  <p className="pricing-desc">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="rate-note">
              Happy to discuss budgets. If you have a figure in mind, get in touch and we can
              shape a package around it.
            </p>
          </div>
        </section>

        {/* ── USAGE RIGHTS & ADD-ONS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Section 03</p>
            <h2 className="section-heading">Usage Rights &amp; Add-Ons</h2>
            <p className="section-sub">
              Standard deliverables include organic posting rights on TikTok for 30 days.
            </p>

            <div className="pricing-grid">
              {addons.map((addon) => (
                <div className="pricing-card" key={addon.name}>
                  <h3 className="pricing-name">{addon.name}</h3>
                  <p className="pricing-price">
                    {addon.fee} <span>of base fee</span>
                  </p>
                  <p className="pricing-desc">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAMPAIGN BUNDLES ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Section 04</p>
            <h2 className="section-heading">Campaign Bundles</h2>
            <p className="section-sub">Multi-video packages built for releases and launches.</p>

            <div className="two-col">
              {bundles.map((bundle) => (
                <div className="pricing-card featured" key={bundle.name}>
                  <span className="pricing-tag">Bundle</span>
                  <h3 className="pricing-name">{bundle.name}</h3>
                  <p className="pricing-price">
                    {bundle.usd} <span>· {bundle.gbp}</span>
                  </p>
                  <ul className="pricing-list">
                    {bundle.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKING TERMS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Section 05</p>
            <h2 className="section-heading">Working Terms &amp; Workflow</h2>
            <p className="section-sub">How every collaboration runs, from brief to publish.</p>

            <div className="rate-steps">
              {terms.map((term, i) => (
                <div className="rate-step" key={term.name}>
                  <span className="rate-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="rate-step-name">{term.name}</h3>
                  <p>{term.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────── */}
        <section className="section rate-cta">
          <div className="shell">
            <p className="section-eyebrow">Enquiries &amp; Booking</p>
            <h2 className="section-heading">Ready to Roll Cameras?</h2>
            <p className="section-sub rate-cta-sub">
              Send over your brief or campaign idea. Replies within {d.profile.replyTime}.
            </p>
            <div className="hero-actions rate-cta-actions">
              <a href={`mailto:${d.profile.email}`} className="btn btn-primary">
                ✉️ {d.profile.email}
              </a>
              <Link href="/" className="btn btn-ghost">
                ← Back to media kit
              </Link>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────── */}
        <footer className="shell">
          <div className="footer">
            <p className="footer-copy">
              © {new Date().getFullYear()} @justanotherfilmgeek ·{" "}
              <a href={`mailto:${d.profile.email}`}>{d.profile.email}</a>
            </p>
            <nav className="footer-nav">
              <Link href="/">Media Kit</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          </div>
        </footer>
      </div>

      <CookieNotice />
    </>
  );
}
