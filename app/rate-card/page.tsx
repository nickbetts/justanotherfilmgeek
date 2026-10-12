import Link from "next/link";
import { getSiteData } from "../../lib/site-data";
import CookieNotice from "../../components/cookie-notice";

export const metadata = {
  title: "Rate Card | justanotherfilmgeek"
};

export const revalidate = 3600;

type Package = {
  name: string;
  price: string;
  unit: string;
  tag: string;
  desc: string;
  features: string[];
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Brand Integration",
    price: "£250",
    unit: "from · per video",
    tag: "Entry",
    desc: "Your brand, title, or release woven naturally into native film content — rankings, trivia, or reaction formats.",
    features: [
      "15–30s integrated segment",
      "Concept + script included",
      "1 revision round",
      "Organic posting to 20K+ followers"
    ]
  },
  {
    name: "Sponsored Video",
    price: "£450",
    unit: "from · per video",
    tag: "Most Popular",
    featured: true,
    desc: "A dedicated 30–60s TikTok built around your brand — full creative from concept and hook through to publish.",
    features: [
      "Dedicated 30–60s video",
      "Concept, script + edit included",
      "2 revision rounds",
      "Organic posting + pinned option"
    ]
  },
  {
    name: "Premiere & Event Coverage",
    price: "£500",
    unit: "from · per event",
    tag: "On Location",
    desc: "On-the-ground content from premieres, Comic-Cons, and cinema exit polls — filmed, edited, and published around your event.",
    features: [
      "On-location filming",
      "Same-day or next-day edit",
      "1–2 videos per event",
      "Travel + expenses quoted separately"
    ]
  },
  {
    name: "UGC Ad Creative",
    price: "£300",
    unit: "from · per video",
    tag: "Brand-Owned",
    desc: "Ad-ready creator content delivered to you for paid and organic use on your own channels — no posting required.",
    features: [
      "30–60s ad-ready video",
      "Raw + edited files delivered",
      "30-day paid usage included",
      "Hook variants available"
    ]
  },
  {
    name: "Campaign Bundle",
    price: "£1,100",
    unit: "from · 3 videos",
    tag: "Best Value",
    desc: "A three-video series with a narrative arc — tease, launch, and sustain. Built for releases and season-long pushes.",
    features: [
      "3 linked videos",
      "Story arc across the series",
      "Priority scheduling",
      "End-of-campaign performance report"
    ]
  },
  {
    name: "Spark Ads + Whitelisting",
    price: "+30%",
    unit: "per 30 days",
    tag: "Amplify",
    desc: "Authorise any organic post for Spark Ads so your team can run paid media directly through the creator handle.",
    features: [
      "Spark Ads authorisation code",
      "Paid through @justanotherfilmgeek",
      "Renewable in 30-day blocks",
      "Stacks with any package"
    ]
  }
];

const included = [
  "Concept development + scripting",
  "Filming, editing + captions",
  "Posting at peak audience time",
  "30-day organic usage rights",
  "Performance snapshot after 7 days"
];

const extras = [
  "Rush turnaround (48h)",
  "Additional revision rounds",
  "Category exclusivity",
  "Extended usage rights",
  "Raw footage handover"
];

const steps = [
  { name: "Brief", desc: "Share your goals, timeline, and key messages — a one-pager is plenty." },
  { name: "Concept", desc: "You get a concept and hook to approve before anything is filmed." },
  { name: "Create", desc: "Filmed, edited, and sent to you for review within the agreed window." },
  { name: "Publish & Report", desc: "Posted at peak time, with a performance snapshot after 7 days." }
];

export default async function RateCardPage() {
  const d = await getSiteData();
  const followersLabel = d.stats.find((s) => s.label === "Followers")?.value ?? "20K+";

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
            <p className="section-eyebrow">Brand Partnerships · Media Pack 2026</p>
            <h1 className="section-heading">Rate Card</h1>
            <p className="section-sub">
              Partnership packages for {d.profile.name} — film-first TikTok content for cinema,
              streaming, entertainment, and culture brands. Every rate is a starting point and
              scoped to your campaign.
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

        {/* ── LIVE STATS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">By the Numbers</p>
            <h2 className="section-heading">The Audience You Reach</h2>
            <p className="section-sub">Live figures from the current media pack.</p>

            <div className="scene-grid">
              {d.stats.map((stat, i) => (
                <div className="scene-card" key={stat.label}>
                  <span className="scene-num" aria-hidden="true">SCENE {String(i + 1).padStart(2, "0")}</span>
                  <span className="scene-value">{stat.value}</span>
                  <span className="scene-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Deliverables</p>
            <h2 className="section-heading">Packages &amp; Pricing</h2>
            <p className="section-sub">
              Pick a single deliverable or bundle into a campaign — all packages include concept,
              creation, and publishing.
            </p>

            <div className="pricing-grid">
              {packages.map((pkg) => (
                <div className={`pricing-card${pkg.featured ? " featured" : ""}`} key={pkg.name}>
                  <span className="pricing-tag">{pkg.tag}</span>
                  <h3 className="pricing-name">{pkg.name}</h3>
                  <p className="pricing-price">
                    {pkg.price} <span>{pkg.unit}</span>
                  </p>
                  <p className="pricing-desc">{pkg.desc}</p>
                  <ul className="pricing-list">
                    {pkg.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="rate-note">
              Rates are starting points — final quotes depend on scope, timeline, and usage.
              VAT not applicable. Payment due on publication unless otherwise agreed.
            </p>
            <p className="rate-note">
              Happy to discuss budgets — if you have a figure in mind, get in touch and we can
              shape a package around it.
            </p>
          </div>
        </section>

        {/* ── INCLUDED + EXTRAS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">The Fine Print</p>
            <h2 className="section-heading">What&rsquo;s Included</h2>
            <p className="section-sub">Every booking, whatever the package.</p>

            <div className="two-col">
              <div className="policy-block">
                <h3 className="pricing-name">Included in every package</h3>
                <ul className="pricing-list">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="policy-block">
                <h3 className="pricing-name">Optional extras</h3>
                <ul className="pricing-list">
                  {extras.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-heading">From Brief to Publish</h2>
            <p className="section-sub">A simple four-step process — most videos turn around in under a week.</p>

            <div className="rate-steps">
              {steps.map((step, i) => (
                <div className="rate-step" key={step.name}>
                  <span className="rate-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="rate-step-name">{step.name}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUDIENCE SNAPSHOT ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Audience Snapshot</p>
            <h2 className="section-heading">Who&rsquo;s Watching</h2>
            <p className="section-sub">{d.profile.bio}</p>

            <div className="rate-chips">
              {d.audience.map((item) => (
                <span className="pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────── */}
        <section className="section rate-cta">
          <div className="shell">
            <p className="section-eyebrow">Next Steps</p>
            <h2 className="section-heading">Ready to Roll Cameras?</h2>
            <p className="section-sub rate-cta-sub">
              Send over your brief or campaign idea — replies within {d.profile.replyTime}.
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
