"use client";

import React from "react";

const DashboardVideo = () => {
  const youtubeUrl = "https://youtu.be/sCRXayZzndE";

  const getEmbedUrl = (url) => {
    try {
      let videoId = "";
      if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      } else {
        videoId = new URL(url).searchParams.get("v");
      }

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1`;
    } catch {
      return "";
    }
  };

  const embedUrl = getEmbedUrl(youtubeUrl);
  if (!embedUrl) return null;

  return (
    <section className="w-full bg-black overflow-hidden">
      {/* 16:9 responsive container */}
      <div className="relative w-full aspect-video">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Dashboard Video"
        />
      </div>
    </section>
  );
};

export default DashboardVideo;
