import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-36 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl  rounded cursor-pointer transition-all hover:bg-white/80">
          ▶️ Play
        </button>
        <button className="bg-gray-600/50  text-white p-4 px-16 text-xl ml-3 rounded cursor-pointer">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
