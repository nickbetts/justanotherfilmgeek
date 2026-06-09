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
      {/* ── FILM COUNTDOWN LEADER ─────── */}
      <div className="countdown-overlay" aria-hidden="true">
        <div className="countdown-hairlines" />
        <div className="countdown-circle">
          <span className="countdown-num">5</span>
          <span className="countdown-num">4</span>
          <span className="countdown-num">3</span>
          <span className="countdown-num">2</span>
          <span className="countdown-num">1</span>
        </div>
        <p className="countdown-label">JUST ANOTHER FILM GEEK · MEDIA PACK 2026</p>
      </div>

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

        {/* ── BEST CONTENT — film reel ─────── */}
        <section className="section reel-section">
          <div className="shell">
            <p className="section-eyebrow">Top Performing</p>
            <h2 className="section-heading">Best Videos</h2>
            <p className="section-sub">Highest-viewed content with strong save and share rates.</p>
          </div>

          {/* Full-bleed reel strip */}
          <div className="reel-strip-wrapper">
            {/* sprocket holes row */}
            <div className="reel-sprockets top" aria-hidden="true" />

            <div className="reel-track">
              {d.bestContent.map((item, i) => (
                <div className="reel-frame" key={i}>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reel-card"
                >
                  <div className="reel-scene-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {item.thumbnailUrl ? (
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      sizes="320px"
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  ) : (
                    <div className="film-card-bg">
                      <div className="film-play">▶</div>
                    </div>
                  )}
                  <div className="reel-card-overlay">
                    <p className="reel-card-title">{item.title}</p>
                    <div className="reel-card-stats">
                      <span>{item.views} views</span>
                      <span>·</span>
                      <span>{item.likes} likes</span>
                    </div>
                  </div>
                </Link>
                <p className="reel-frame-label" aria-hidden="true">#{String(i + 1).padStart(2, "0")} · {item.views}</p>
                </div>
              ))}
            </div>

            {/* sprocket holes row */}
            <div className="reel-sprockets bottom" aria-hidden="true" />
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

              {/* Audience cinema seat map */}
              <div className="cinema-theatre">
                <div className="cinema-screen-wrap" aria-hidden="true">
                  <div className="cinema-screen">SCREEN</div>
                </div>
                <div className="cinema-rows">
                  {[
                    { label: "18–24", pct: 45, cls: "accent" },
                    { label: "25–34", pct: 27, cls: "amber" },
                    { label: "35–44", pct: 18, cls: "muted" },
                    { label: "45+",   pct: 10, cls: "dim" },
                  ].map(({ label, pct, cls }) => {
                    const total = 22;
                    const filled = Math.round((pct / 100) * total);
                    return (
                      <div className="cinema-row" key={label}>
                        <span className="cinema-row-label">{label}</span>
                        <div className="cinema-seats">
                          {Array.from({ length: total }).map((_, j) => (
                            <span
                              key={j}
                              className={`cinema-seat ${
                                j < filled ? `seat-${cls}` : "seat-empty"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="cinema-row-pct">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
                <p className="cinema-note">72% aged 18–34 · UK / Global English</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CREDITS ROLL ─────── */}
        <section className="credits-section" aria-label="End credits">
          <div className="credits-roll">
            <div className="credits-inner">
              <p className="credits-studio">A JUST ANOTHER FILM GEEK PRODUCTION</p>
              <p className="credits-title-card">@justanotherfilmgeek</p>
              <div className="credits-block">
                <p className="credits-role">Creator &amp; Host</p>
                <p className="credits-name">Ross</p>
              </div>
              <div className="credits-block">
                <p className="credits-role">Content Formats</p>
                <p className="credits-name">Film Reviews · Franchise Lore · Exit Polls</p>
                <p className="credits-name">Hot Takes · Rankings · Director Breakdowns</p>
              </div>
              <div className="credits-block">
                <p className="credits-role">Platform</p>
                <p className="credits-name">TikTok</p>
              </div>
              <div className="credits-block">
                <p className="credits-role">Ideal Brand Partnerships</p>
                <p className="credits-name">Cinema · Streaming · Consumer Tech</p>
                <p className="credits-name">Lifestyle · Entertainment · Gaming</p>
              </div>
              <div className="credits-block">
                <p className="credits-role">Market</p>
                <p className="credits-name">UK / Global English</p>
              </div>
              <div className="credits-block">
                <p className="credits-role">Collabs &amp; Enquiries</p>
                <a className="credits-name credits-email" href={`mailto:${d.profile.email}`}>{d.profile.email}</a>
              </div>
              <p className="credits-fin">★ FIN ★</p>
              <p className="credits-copyright">© {new Date().getFullYear()} Just Another Film Geek. All rights reserved.</p>
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
