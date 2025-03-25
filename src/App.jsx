import React from 'react'
import { Routes, Route } from 'react-router'
import Search from './components/Search'
import Feeds from './components/Feeds'
import Videos from './components/Videos'
import Navlinks from './components/Navlinks'
import Watchvideo from './components/Watchvideo'
import { useSelector } from 'react-redux'

const App = () => {
  const videoId = useSelector(state => state.video?.video?.id.videoId);
  return (
    <div className='bg-blue-500'>
      <Navlinks  />
     <Routes>
       
        <Route path="/" element={<Feeds />} />
        <Route path="/videos" element={<Videos />} />
<Route path='/search' element={<Search />} />
<Route path={`/watch/${videoId}`} element={<Watchvideo  />} />
      </Routes> 
    </div>
  )
}

export default App
