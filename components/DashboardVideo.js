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

      // Full autoplay, loop, mute, hide controls, title, and branding
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1`;
    } catch {
      return "";
    }
  };

  const embedUrl = getEmbedUrl(youtubeUrl);

  if (!embedUrl) return null;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full h-full">
        <div className="bg-white shadow-xl overflow-hidden h-full">
          {/* Full-size Video Container */}
          <div className="relative w-full h-full bg-black">
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Dashboard Video"
              style={{ pointerEvents: "none" }} // disables right-click/copy
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardVideo;
