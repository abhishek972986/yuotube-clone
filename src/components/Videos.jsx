import React from "react";
import VideoCard from "./VideoCard"; 
import ChannelCard from "./ChannelCard"; // Uncomment if needed

const Videos = ({ videos = [], category }) => {
  console.log("Videos:", videos); // Debugging

  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-blue-600 flex flex-wrap">
        {category} <span className="text-2xl font-bold text-red-600">videos</span>
      </div> 

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {videos?.map((video, index) => (
          <div key={index}>
            { video.id.videoId && <VideoCard video={video} />}
            {/* {index==2 && video.id.channelId && <ChannelCard channel={video} />} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
