export type Stat = {
  label: string;
  value: string;
  source: "Live ready" | "Analytics" | "Calculated" | "Media kit";
};

export type BestContent = {
  title: string;
  summary: string;
  views: string;
  likes: string;
  comments: string;
  url: string;
};

export type TrendPoint = {
  month: string;
  value: number;
  label: string;
};

export type SiteData = {
  profile: {
    name: string;
    handle: string;
    bio: string;
    category: string;
    market: string;
    replyTime: string;
    tiktokUrl: string;
    email: string;
  };
  stats: Stat[];
  bestContent: BestContent[];
  trend: TrendPoint[];
  audience: string[];
};

const fallbackData: SiteData = {
  profile: {
    name: "Just Another Film Geek",
    handle: "@justanotherfilmgeek",
    bio: "Film-first storyteller creating viral movie content, interviews, and culture moments for entertainment audiences.",
    category: "Film + Entertainment",
    market: "UK / Global English",
    replyTime: "< 24 hours",
    tiktokUrl: "https://www.tiktok.com/@justanotherfilmgeek",
    email: "collabs@justanotherfilmgeek.com"
  },
  stats: [
    { label: "Followers", value: "85.4K", source: "Live ready" },
    { label: "Total Likes", value: "221.6K", source: "Live ready" },
    { label: "30D Video Views", value: "2.4M", source: "Analytics" },
    { label: "Avg Engagement", value: "8.2%", source: "Calculated" },
    { label: "Top Video Views", value: "1.1M", source: "Analytics" },
    { label: "Profile Views (30D)", value: "11.2K", source: "Analytics" },
    { label: "Campaign CTR", value: "3.6%", source: "Media kit" },
    { label: "Audience 18-34", value: "72%", source: "Media kit" }
  ],
  bestContent: [
    {
      title: "Top 10 Plot Twists in 60 Seconds",
      summary: "Fast-cut countdown format with strong completion and share velocity.",
      views: "1.1M",
      likes: "144K",
      comments: "2.3K",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "New Release Reaction: Live Cinema Exit",
      summary: "Street-style vox pop format, brand-safe and highly remixable.",
      views: "740K",
      likes: "88K",
      comments: "1.1K",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "Director Breakdown: Visual Language",
      summary: "Educational explainer with strong saves and repeat views.",
      views: "530K",
      likes: "52K",
      comments: "860",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "One-Minute Franchise Timeline",
      summary: "Carousel storytelling that performs well with fandom communities.",
      views: "410K",
      likes: "41K",
      comments: "640",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    }
  ],
  trend: [
    { month: "Jan", value: 26, label: "0.4M" },
    { month: "Feb", value: 92, label: "2.0M" },
    { month: "Mar", value: 68, label: "1.4M" },
    { month: "Apr", value: 74, label: "1.6M" },
    { month: "May", value: 81, label: "1.8M" },
    { month: "Jun", value: 100, label: "2.4M" }
  ],
  audience: [
    "52% women / 48% men",
    "Top geos: UK, US, Canada",
    "Peak activity: 7pm-11pm GMT",
    "Strong response to film news, rankings, and watchlist formats",
    "Ideal partnerships: cinema, streaming, consumer tech, lifestyle"
  ]
};

export async function getSiteData(): Promise<SiteData> {
  // Official TikTok Display API requires OAuth and approved app scopes.
  // Keep this switch to quickly move from fallback data to server-fetched values.
  const useLiveTikTok = process.env.USE_LIVE_TIKTOK === "true";

  if (!useLiveTikTok) {
    return fallbackData;
  }

  return fallbackData;
}
