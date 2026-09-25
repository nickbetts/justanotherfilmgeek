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
  thumbnailUrl?: string;
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
    bio: "Film-first storyteller creating viral movie content, cinematic trivia, and culture moments for entertainment audiences. As well as attending UK Comic Cons, Film/TV premieres and geek merch highlights.",
    category: "Film + Entertainment",
    market: "UK / Global English",
    replyTime: "< 24 hours",
    tiktokUrl: "https://www.tiktok.com/@justanotherfilmgeek",
    email: "ross@justanotherfilmgeek.com"
  },
  stats: [
    { label: "Followers", value: "20K+", source: "Live ready" },
    { label: "Total Likes", value: "490K+", source: "Live ready" },
    { label: "30D Video Views", value: "2.1M", source: "Analytics" },
    { label: "Engagement Rate", value: "12.5%", source: "Calculated" },
    { label: "2026 Video Views", value: "9.3M", source: "Analytics" },
    { label: "Profile Views", value: "26.1K", source: "Analytics" },
    { label: "Profile Shares", value: "79.1K", source: "Analytics" },
    { label: "Audience (18 - 34)", value: "72.9%", source: "Media kit" }
  ],
  bestContent: [
    {
      title: "Video 1",
      summary: "Latest top-performing content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7682156764468382998"
    },
    {
      title: "Video 2",
      summary: "Latest top-performing content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7688754077211086102"
    },
    {
      title: "Video 3",
      summary: "Latest top-performing content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7682815760644754710"
    },
    {
      title: "Video 1",
      summary: "Latest top-performing content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7676918945131154710"
    },
    {
      title: "Video 2",
      summary: "Latest top-performing content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7669115296719932694"
    },
    {
      title: "Top 10 Plot Twists in 60 Seconds",
      summary: "Fast-cut countdown format with strong completion and share velocity.",
      views: "1.6M",
      likes: "144K",
      comments: "2.3K",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7649144940961877270"
    },
    {
      title: "Video 4",
      summary: "High-performing film content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7672433947774651670"
    },
    {
      title: "Video 5",
      summary: "High-performing film content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7664316481156549890"
    },
    {
      title: "Video 9",
      summary: "High-performing film content.",
      views: "",
      likes: "",
      comments: "",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7633872915515165974"
    },
    {
      title: "Film Ranking Deep Dive",
      summary: "High engagement ranking format with strong comment debate.",
      views: "220K",
      likes: "22K",
      comments: "980",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7647289615245708566"
    }
  ],
  trend: [
    { month: "Jan", value: 6, label: "0.6M" },
    { month: "Feb", value: 11, label: "1.1M" },
    { month: "Mar", value: 17, label: "1.7M" },
    { month: "Apr", value: 25, label: "2.5M" },
    { month: "May", value: 35, label: "3.5M" },
    { month: "Jun", value: 42, label: "4.2M" }
  ],
  audience: [
    "52% women / 48% men",
    "Top geos: UK, US, Canada",
    "Peak activity: 7pm-11pm GMT",
    "Strong response to film news, rankings, and watchlist formats",
    "Ideal partnerships: cinema, streaming, consumer tech, lifestyle"
  ]
};

type OEmbedData = {
  thumbnail_url?: string;
};

async function getVideoThumbnail(videoUrl: string): Promise<string | undefined> {
  // oEmbed only works on individual video URLs, not profile pages
  if (!videoUrl.includes("/video/")) return undefined;
  try {
    const res = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return undefined;
    const data = (await res.json()) as OEmbedData;
    return data.thumbnail_url;
  } catch {
    return undefined;
  }
}

export async function getSiteData(): Promise<SiteData> {
  const useLiveTikTok = process.env.USE_LIVE_TIKTOK === "true";

  if (useLiveTikTok) {
    // Wire TikTok Display API responses here after app review approval
  }

  // Enrich each video entry with a live thumbnail via TikTok oEmbed (server-side)
  // Update the url fields in bestContent to real video URLs to activate thumbnails
  const enrichedContent = await Promise.all(
    fallbackData.bestContent.map(async (video) => ({
      ...video,
      thumbnailUrl: await getVideoThumbnail(video.url)
    }))
  );

  return { ...fallbackData, bestContent: enrichedContent };
}
