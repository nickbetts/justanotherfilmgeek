"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

type Props = {
  url: string;
  title: string;
  views: string;
  likes: string;
  thumbnailUrl?: string;
  index: number;
};

function extractVideoId(url: string): string | null {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : null;
}

export default function ReelCard({ url, title, views, likes, thumbnailUrl, index }: Props) {
  const [active, setActive] = useState(false);
  const videoId = extractVideoId(url);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (!videoId) return;
    timerRef.current = setTimeout(() => setActive(true), 300);
  }

  function handleLeave() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(false);
  }

  return (
    <div className="reel-frame">
      <div
        className="reel-card"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="reel-scene-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </div>

        {active && videoId ? (
          <iframe
            className="reel-embed"
            src={`https://www.tiktok.com/embed/v2/${videoId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={title}
          />
        ) : (
          <>
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={title}
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
            {/* hover hint */}
            <div className="reel-play-hint" aria-hidden="true">▶</div>
          </>
        )}

        {!active && (
          <div className="reel-card-overlay">
            <p className="reel-card-title">{title}</p>
            <div className="reel-card-stats">
              <span>{views} views</span>
              <span>·</span>
              <span>{likes} likes</span>
            </div>
          </div>
        )}

        {/* click-through to TikTok when not playing */}
        {!active && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="reel-card-link"
            aria-label={`Watch ${title} on TikTok`}
          />
        )}
      </div>
      <p className="reel-frame-label" aria-hidden="true">
        #{String(index + 1).padStart(2, "0")} · {views}
      </p>
    </div>
  );
}
