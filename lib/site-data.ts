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
    { label: "Followers", value: "10K+", source: "Live ready" },
    { label: "Total Likes", value: "270K+", source: "Live ready" },
    { label: "30D Video Views", value: "1.2M", source: "Analytics" },
    { label: "Avg Engagement", value: "25.8%", source: "Calculated" },
    { label: "Top Video Views", value: "1.6M", source: "Analytics" },
    { label: "Profile Views (30D)", value: "13.5K", source: "Analytics" },
    { label: "Shares", value: "63.2K+", source: "Analytics" },
    { label: "Audience 18-34", value: "70.7%", source: "Media kit" }
  ],
  bestContent: [
    {
      title: "Top 10 Plot Twists in 60 Seconds",
      summary: "Fast-cut countdown format with strong completion and share velocity.",
      views: "1.6M",
      likes: "144K",
      comments: "2.3K",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7649144940961877270"
    },
    {
      title: "New Release Reaction: Live Cinema Exit",
      summary: "Street-style vox pop format, brand-safe and highly remixable.",
      views: "740K",
      likes: "88K",
      comments: "1.1K",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7645685980837580054"
    },
    {
      title: "Director Breakdown: Visual Language",
      summary: "Educational explainer with strong saves and repeat views.",
      views: "530K",
      likes: "52K",
      comments: "860",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7651019760280276246"
    },
    {
      title: "One-Minute Franchise Timeline",
      summary: "Carousel storytelling that performs well with fandom communities.",
      views: "410K",
      likes: "41K",
      comments: "640",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7645062624945671446"
    },
    {
      title: "Hot Take: Overrated Films of 2024",
      summary: "Opinion-led format that drives high comment and share velocity.",
      views: "380K",
      likes: "37K",
      comments: "1.8K",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7631225322423291158"
    },
    {
      title: "Best Cinematography Shots Ranked",
      summary: "Visual essay style — strong save rate, repeat views from film students.",
      views: "295K",
      likes: "31K",
      comments: "520",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7612385868225039638"
    },
    {
      title: "Every Marvel Phase 1 Film in 90s",
      summary: "Rapid-fire recap format; massive rewatch appeal with MCU fans.",
      views: "270K",
      likes: "28K",
      comments: "470",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7602262227747458326"
    },
    {
      title: "Cinema vs Streaming: The Debate",
      summary: "Duet-friendly debate format with strong audience polarisation.",
      views: "240K",
      likes: "24K",
      comments: "1.3K",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7603081068496932118"
    },
    {
      title: "Film Ranking Deep Dive",
      summary: "High engagement ranking format with strong comment debate.",
      views: "220K",
      likes: "22K",
      comments: "980",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7649802543953956099"
    },
    {
      title: "Scene Breakdown: Iconic Moments",
      summary: "Frame-by-frame analysis format; strong saves and shares.",
      views: "200K",
      likes: "19K",
      comments: "430",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7651675240430390550"
    },
    {
      title: "Underrated Gem You Need to Watch",
      summary: "Discovery recommendation format — high follow-through rate.",
      views: "185K",
      likes: "17K",
      comments: "360",
      url: "https://www.tiktok.com/@justanotherfilmgeek/video/7648608249549262102"
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
