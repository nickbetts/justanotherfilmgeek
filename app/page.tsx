import Link from "next/link";
import { getSiteData } from "../lib/site-data";
import { CookieNotice } from "../components/cookie-notice";

export default async function Home() {
  const siteData = await getSiteData();
  const year = new Date().getFullYear();

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <header className="topbar shell">
        <p className="brand">JUST ANOTHER FILM GEEK</p>
        <p className="marquee">Now showing: creator collabs, film fandom, and viral watchlists</p>
        <a
          className="button ghost"
          href={siteData.profile.tiktokUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open TikTok
        </a>
      </header>

      <main className="shell">
        <section className="hero section">
          <div>
            <p className="badge">Comic-Con energy • Cinema-nerd authority</p>
            <p className="eyebrow">TikTok Creator Media Pack</p>
            <h1>{siteData.profile.name}</h1>
            <p className="lead">{siteData.profile.bio}</p>
            <div className="cta-row">
              <a className="button" href={`mailto:${siteData.profile.email}`}>
                Book a Campaign
              </a>
              <a className="button ghost" href="#analytics">
                View Stats
              </a>
            </div>
          </div>
          <aside className="hero-card reel-card">
            <p>Account</p>
            <h2>{siteData.profile.handle}</h2>
            <ul className="quick-list">
              <li>
                <span>Category</span>
                <strong>{siteData.profile.category}</strong>
              </li>
              <li>
                <span>Primary Market</span>
                <strong>{siteData.profile.market}</strong>
              </li>
              <li>
                <span>Avg Reply Time</span>
                <strong>{siteData.profile.replyTime}</strong>
              </li>
            </ul>
          </aside>
        </section>

        <section id="analytics" className="section">
          <div className="section-heading">
            <h2>Performance Snapshot</h2>
            <p>Mix of live counters + creator analytics highlights for brand outreach.</p>
          </div>
          <div className="chip-row">
            <span className="chip">Film News</span>
            <span className="chip">Reviews</span>
            <span className="chip">Franchise Lore</span>
            <span className="chip">Red Carpet Reactions</span>
          </div>
          <div className="stats-grid">
            {siteData.stats.map((stat, idx) => (
              <article
                className="stats-card"
                key={stat.label}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <h3>{stat.label}</h3>
                <p>{stat.value}</p>
                <small>{stat.source}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <div className="section-heading">
              <h2>Best Content</h2>
              <p>Top performing videos for social proof and campaign fit.</p>
            </div>
            <div className="video-grid">
              {siteData.bestContent.map((video) => (
                <article className="video-card" key={video.title}>
                  <h3>{video.title}</h3>
                  <p>{video.summary}</p>
                  <div className="video-meta">
                    <span>{video.views} views</span>
                    <span>{video.likes} likes</span>
                    <span>{video.comments} comments</span>
                  </div>
                  <p>
                    <a className="button ghost" href={video.url} target="_blank" rel="noreferrer">
                      Watch on TikTok
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className="section-heading">
              <h2>Growth Trend</h2>
              <p>A visual summary of recent momentum.</p>
            </div>
            <div className="trend-chart" role="img" aria-label="Monthly growth trend">
              {siteData.trend.map((point) => (
                <div className="trend-row" key={point.month}>
                  <strong>{point.month}</strong>
                  <div className="trend-bar-wrap">
                    <div className="trend-bar" style={{ width: `${point.value}%` }} />
                  </div>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section split">
          <div className="audience-card">
            <h2>Audience Fit</h2>
            <ul className="audience-list">
              {siteData.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="review-card">
            <h2>TikTok API Readiness</h2>
            <p>
              This site is structured for TikTok Login Kit + Display API integration. You can
              switch from fallback values to live API responses in
              <code> lib/site-data.ts</code> after app review approval.
            </p>
            <ul>
              <li>OAuth product: Login Kit</li>
              <li>Data product: Display API</li>
              <li>Suggested scopes: user.info.basic, video.list</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <p>
          {year} {siteData.profile.name}
        </p>
        <nav>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </nav>
      </footer>
      <CookieNotice />
    </>
  );
}
