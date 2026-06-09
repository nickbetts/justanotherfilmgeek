import Image from "next/image";
import Link from "next/link";
import { getSiteData } from "../lib/site-data";
import { CookieNotice } from "../components/cookie-notice";

export default async function Home() {
  const siteData = await getSiteData();
  const year = new Date().getFullYear();

  const tickerItems = [
    ...siteData.stats.map((s) => ({ label: s.label, value: s.value })),
    { label: "Handle", value: siteData.profile.handle },
    { label: "Category", value: siteData.profile.category }
  ];

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* ── TOPBAR ──────────────────────────────────── */}
      <header className="topbar shell">
        <p className="brand">
          JUST ANOTHER <span>FILM</span> GEEK
        </p>
        <div className="topbar-actions">
          <span className="follower-chip">{siteData.stats[0].value} followers</span>
          <a className="button" href={siteData.profile.tiktokUrl} target="_blank" rel="noreferrer">
            ▶ TikTok
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner shell">
          <div className="hero-text">
            <p className="hero-eyebrow">TikTok Creator · Media Pack 2025</p>
            <h1 className="hero-title">
              Just
              <br />
              Another
              <br />
              <em>Film Geek</em>
            </h1>
            <p className="hero-bio">{siteData.profile.bio}</p>
            <div className="cta-row">
              <a className="button" href={`mailto:${siteData.profile.email}`}>
                Book a Campaign
              </a>
              <a className="button outline" href="#analytics">
                View Stats
              </a>
            </div>
            <div className="hero-meta-row">
              <span className="handle-chip">{siteData.profile.handle}</span>
              <span className="meta-dot" aria-hidden="true">·</span>
              <span className="meta-text">{siteData.profile.category}</span>
              <span className="meta-dot" aria-hidden="true">·</span>
              <span className="meta-text">{siteData.profile.market}</span>
            </div>
          </div>

          {/* Staggered poster rail */}
          <div className="poster-rail" aria-hidden="true">
            {siteData.bestContent.slice(0, 3).map((video, i) => (
              <div key={video.title} className="poster-rail-item">
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl}
                    alt=""
                    fill
                    sizes="160px"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                ) : (
                  <div className="poster-placeholder">
                    <span className="play-icon">▶</span>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────── */}
      <div className="ticker-strip" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ticker-item" key={i}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ──────────────────────────────────── */}
      <section id="analytics" className="section shell">
        <div className="section-header">
          <p className="section-label">Box Office Numbers</p>
          <h2 className="section-title">Performance Snapshot</h2>
          <p className="section-sub">Key metrics for brand collaboration decisions.</p>
        </div>
        <div className="stats-grid">
          {siteData.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-source">{stat.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO POSTERS ──────────────────────────────────── */}
      <section className="section shell">
        <div className="section-header">
          <p className="section-label">Content Library</p>
          <h2 className="section-title">Now Streaming</h2>
          <p className="section-sub">
            Top performing videos by views, engagement and shareability. Update URLs in{" "}
            <code>lib/site-data.ts</code> with real TikTok video links to load live thumbnails.
          </p>
        </div>
        <div className="video-poster-grid">
          {siteData.bestContent.map((video) => (
            <a
              key={video.title}
              className="video-poster"
              href={video.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch: ${video.title}`}
            >
              {video.thumbnailUrl ? (
                <Image
                  src={video.thumbnailUrl}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              ) : (
                <div className="video-poster-placeholder">
                  <div className="play-icon">▶</div>
                  <span>Watch on TikTok</span>
                </div>
              )}
              <div className="video-poster-overlay">
                <p className="video-poster-title">{video.title}</p>
                <div className="video-poster-meta">
                  <span>{video.views} views</span>
                  <span>·</span>
                  <span>{video.likes} likes</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── MOMENTUM + AUDIENCE ──────────────────────────────────── */}
      <section className="section shell">
        <div className="split">
          <div>
            <p className="section-label">Monthly Views</p>
            <h2 className="section-title">Momentum</h2>
            <div className="growth-chart" style={{ marginTop: "1.5rem" }}>
              {siteData.trend.map((point) => (
                <div className="growth-row" key={point.month}>
                  <span className="growth-month">{point.month}</span>
                  <div className="growth-bar-track">
                    <div className="growth-bar-fill" style={{ width: `${point.value}%` }} />
                  </div>
                  <span className="growth-value">{point.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Who&rsquo;s Watching</p>
            <h2 className="section-title">The Audience</h2>
            <div className="audience-card" style={{ marginTop: "1.5rem" }}>
              {siteData.audience.map((item) => (
                <div className="audience-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="footer shell">
        <p className="footer-copy">© {year} justanotherfilmgeek — All rights reserved</p>
        <nav>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteData.profile.email}`}>Contact</a>
        </nav>
      </footer>

      <CookieNotice />
    </>
  );
}

