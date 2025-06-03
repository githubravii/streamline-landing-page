"use client";

import Link from "next/link";
import React from "react";

const VideoCard = ({ videoUrl }) => {
  // console.log("Video URL:", videoUrl);
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <video
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link href={videoUrl} target="_blank" className="block mt-2 text-blue-600 hover:underline">
        Watch Video
        </Link>
    </div>
  );
};

export default VideoCard;
