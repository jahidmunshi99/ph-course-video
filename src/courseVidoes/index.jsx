import { useState } from "react";
import allVideo from "../data/index.js";
import Player from "./Player/index.jsx";
import VideoItem from "./VideoItem";

const CourseVidoes = () => {
  const videos = allVideo();

  const [playVideo, setPlayVideo] = useState({
    link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  });

  console.log(playVideo);

  const handlePlayVideo = (videoItem) => {
    setPlayVideo(videoItem);
  };

  return (
    <div className="bg-gray-100 h-screen py-10">
      <div className="max-w-6xl mx-auto h-full bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Main Player Area */}
        <div className="flex-1 order-1 md:order-2 p-4">
          <Player onPlay={playVideo} />
        </div>

        {/* Sidebar Playlist */}
        <div className="w-full h-full overflow-hidden md:w-1/3 order-2 md:order-1 bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-gray-800 z-10 pb-2">
            <h2 className="text-xl font-semibold">Video Playlist</h2>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              4th Batch
            </span>
          </div>
          <div className="space-y-2 text-sm pr-1 max-h-[50vh] md:max-h-full overflow-scroll">
            <VideoItem OnPlayVideo={handlePlayVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVidoes;
