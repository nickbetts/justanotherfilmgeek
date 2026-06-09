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
    bio: "Film-first storyteller creating viral movie content, interviews, and culture moments for entertainment audiences.",
    category: "Film + Entertainment",
    market: "UK / Global English",
    replyTime: "< 24 hours",
    tiktokUrl: "https://www.tiktok.com/@justanotherfilmgeek",
    email: "ross@justanotherfilmgeek.com"
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
    },
    {
      title: "Hot Take: Overrated Films of 2024",
      summary: "Opinion-led format that drives high comment and share velocity.",
      views: "380K",
      likes: "37K",
      comments: "1.8K",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "Best Cinematography Shots Ranked",
      summary: "Visual essay style — strong save rate, repeat views from film students.",
      views: "295K",
      likes: "31K",
      comments: "520",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "Every Marvel Phase 1 Film in 90s",
      summary: "Rapid-fire recap format; massive rewatch appeal with MCU fans.",
      views: "270K",
      likes: "28K",
      comments: "470",
      url: "https://www.tiktok.com/@justanotherfilmgeek"
    },
    {
      title: "Cinema vs Streaming: The Debate",
      summary: "Duet-friendly debate format with strong audience polarisation.",
      views: "240K",
      likes: "24K",
      comments: "1.3K",
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
