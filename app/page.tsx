import Image from "next/image";
import Link from "next/link";
import { getSiteData } from "../lib/site-data";
import CookieNotice from "../components/cookie-notice";

export const revalidate = 3600;

export default async function Home() {
  const d = await getSiteData();
  const maxVal = Math.max(...d.trend.map((g) => g.value));

  const followersLabel = d.stats.find((s) => s.label === "Followers")?.value ?? "85.4K";

  const tickerItems = d.stats.map((s) => ({ label: s.label, val: s.value }));

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
            <p className="brand">
              Just Another <span className="brand-accent">Film</span> Geek
            </p>
            <div className="topbar-right">
              <span className="pill">
                <span className="pill-dot" />
                {followersLabel} Followers
              </span>
              <Link
                href={d.profile.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                ▶ TikTok
              </Link>
            </div>
          </div>
        </nav>

        {/* ── HERO ─────── */}
        <section className="hero">
          {/* Video background */}
          <video
            className="hero-video-bg"
            src="/videoplayback-ezgif.com-gif-maker.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="hero-video-overlay" aria-hidden="true" />
          <div className="shell hero-content">
          <div className="hero-grid">
            <div>
              <div className="now-playing">
                <span className="now-playing-dot" />
                Now Playing
              </div>
              <div className="hero-kicker">
                <span className="kicker-line" />
                TikTok Creator · Media Pack 2026
              </div>
              <h1 className="hero-headline" data-text="Just Another&#10;Film Geek">
                Just Another<br />
                <span className="hero-headline-accent">Film Geek</span>
              </h1>
              <p className="hero-body">
                {d.profile.bio}
              </p>
              <div className="hero-actions">
                <a href={`mailto:${d.profile.email}`} className="btn btn-primary">
                  Get in touch
                </a>
                <Link
                  href={d.profile.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  ↗ @justanotherfilmgeek
                </Link>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item">
                  <span className="meta-label">Followers</span>
                  <span className="meta-value">{followersLabel}</span>
                </div>
                <div className="hero-meta-item">
                  <span className="meta-label">Niche</span>
                  <span className="meta-value">Film &amp; TV</span>
                </div>
                <div className="hero-meta-item">
                  <span className="meta-label">Market</span>
                  <span className="meta-value">{d.profile.market}</span>
                </div>
              </div>
            </div>

            {/* Poster stack */}
            <div className="poster-stack" aria-hidden="true">
              {[0, 1, 2].map((i) => {
                const item = d.bestContent[i];
                return (
                  <div className="poster-item" key={i}>
                    {item?.thumbnailUrl ? (
                      <Image
                        src={item.thumbnailUrl}
                        alt={item.title}
                        fill
                        sizes="200px"
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    ) : (
                      <div className="poster-bg">
                        <div className="poster-play">▶</div>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="reel-counter" aria-hidden="true">REEL 01 · JAFG · 2026</div>
          </div>
        </section>

        {/* ── TICKER ─────── */}
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span className="ticker-item" key={i}>
                {item.label} <span className="ticker-val">{item.val}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">By the Numbers</p>
            <h2 className="section-heading">The Stats</h2>
            <p className="section-sub">Real numbers, no inflated vanity metrics.</p>

            <div className="bento-grid">
              {d.stats.map((stat) => (
                <div className="bento-card" key={stat.label}>
                  <span className="bento-label">{stat.label}</span>
                  <span className="bento-value">{stat.value}</span>
                  {stat.label === "Avg Engagement" && (
                    <span className="bento-tag">Above avg</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST CONTENT ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Top Performing</p>
            <h2 className="section-heading">Best Videos</h2>
            <p className="section-sub">Highest-viewed content with strong save and share rates.</p>

            <div className="film-grid">
              {d.bestContent.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="film-card"
                >
                  {item.thumbnailUrl ? (
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 880px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  ) : (
                    <div className="film-card-bg">
                      <div className="film-play">▶</div>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  )}
                  <div className="film-overlay">
                    <p className="film-title">{item.title}</p>
                    <div className="film-stats">
                      <span>{item.views} views</span>
                      <span>·</span>
                      <span>{item.likes} likes</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── GROWTH + AUDIENCE ─────── */}
        <section className="section">
          <div className="shell">
            <p className="section-eyebrow">Audience</p>
            <h2 className="section-heading">Growth &amp; Demographics</h2>
            <p className="section-sub">Consistent month-on-month growth since launch.</p>

            <div className="two-col">
              {/* Growth bar chart */}
              <div className="chart-card">
                {d.trend.map((point) => (
                  <div className="chart-row" key={point.month}>
                    <span className="chart-month">{point.month}</span>
                    <div className="chart-track">
                      <div
                        className="chart-fill"
                        style={{ width: `${(point.value / maxVal) * 100}%` }}
                      />
                    </div>
                    <span className="chart-val">{point.label}</span>
                  </div>
                ))}
              </div>

              {/* Audience snapshot */}
              <div className="audience-card">
                {d.audience.map((line, i) => (
                  <div className="audience-row" key={i}>
                    <span className="audience-arrow">▸</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
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
