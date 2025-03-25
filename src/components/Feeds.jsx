import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import Sidebar from './Sidebar'
import { Fetchapi } from './utils/Fetchapi'
const Feeds = () => {
    const [videos, setVideos] = useState([])
   const [category, setcat] = useState("New")
   useEffect(() => {
    Fetchapi(`search?part=snippet&maxResults=25&order=date&q=${category}`)
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging
        if (data && data.items) {
          setVideos(data.items);
        } else {
          setVideos([]); // Prevents undefined errors
        }
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, [category]);
  
  
  return (
    <div className='bg-white h-screen overflow-y-scroll w-full flex sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
     <div className='w-[15%] h-full sticky'><Sidebar  setcat={setcat}/></div> 
     <div className='w-[70%] h-full flex flex-wrap'><Videos category={category} videos={videos}/></div>
    </div>
  )
}

export default Feeds
