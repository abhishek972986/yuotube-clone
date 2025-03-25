import React from "react";
import { useDispatch } from "react-redux";
import { setVideo } from "../redux/Createslice";
import { NavLink } from "react-router";
const VideoCard = ({ video }) => {
  if (!video || !video.snippet) return null; // Prevents crashes
const dispatch = useDispatch();
  return (
   <NavLink to={`/watch/${video.id.videoId}`}>
    <div className="bg-white p-4 rounded-xl shadow-lg w-[320px] min-h-[350px] flex flex-col gap-3 
        hover:shadow-2xl transition-transform duration-200 hover:scale-105 cursor-pointer overflow-hidden" onClick={()=> {dispatch(setVideo(video))}}>
      
      {/* Video Thumbnail */}
      <div className="w-full h-44 relative rounded-xl overflow-hidden">
        <img
          src={video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.medium?.url}
          alt={video.snippet.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
      </div>

      {/* Video Info */}
      <div className="flex flex-col px-2">
        <p className="text-md font-semibold text-gray-900 line-clamp-2">
          {video.snippet.title}
        </p>
        <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto px-2 flex items-center justify-between text-gray-600">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
          {new Date(video.snippet.publishedAt).toDateString()}
        </span>
        <span className="text-xs font-medium">🔔 Subscribe</span>
      </div>
    </div></NavLink>
  );
};

export default VideoCard;
