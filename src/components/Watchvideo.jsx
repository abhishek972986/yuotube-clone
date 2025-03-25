import React from 'react';
import { useSelector } from 'react-redux';



const WatchVideo = () => {
    const videoId = useSelector(state => state.video.video.id.videoId);
const channel = useSelector(state => state.video.video.snippet.channelTitle);
const desc = useSelector(state => state.video.video.snippet.description);


    if (!videoId) {
        return <p className="text-center text-red-500">No video selected</p>;
    }

    return (
        <div className="w-full h-screen grid grid-cols-2  bg-white gap-3">
            <div className='border p-3 text-2xl text-center overflow-y-scroll'>
<div className=' text-center text-2xl text-red-500 font-extrabold'><span className='text-black'>Now</span> Playing</div>
<div>    <iframe
          className="w-full h-[500px] rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe></div>
        <div className='mt-2 flex justify-between font-bold'><div>{channel}</div> <div className="text-xl bg-gray-300 p-1 rounded mx-5 font-medium">🔔 Subscribe </div></div>
       <div>Description: {desc} </div>
            </div>
            <div className='border p-3 text-2xl text-center flex-col'>
                <h1>Related videos</h1>
                

            </div>
            
        </div>
    );
};

export default WatchVideo;
