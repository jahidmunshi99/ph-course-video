import { useState } from "react";
// import videoList from "../../data/index.js";
import Player from "../../components/Player/index.jsx";
import PlayList from "../../components/PlayList/index.jsx";
import { UseAuth } from "../../Provider/AuthProvider.jsx";

const Dashboard = () => {
  // const videos = videoList();
  const {videos} = UseAuth();

  const [playVideo, setPlayVideo] = useState({
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  });



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
            <PlayList OnPlayVideo={handlePlayVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
