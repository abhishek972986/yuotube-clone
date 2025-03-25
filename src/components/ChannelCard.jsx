import React from 'react'

const ChannelCard = ({channel}) => {
  return (
    <div>
    {
        channel.map((item, index) => (
          <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
            <div className='flex items-center space-x-4'>
              <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} className='w-16 h-16 rounded-full' />
              <div>
                <div className='text-lg font-semibold text-gray-800'>{item.snippet.title}</div>
                <div className='text-sm text-gray-500'>{item.snippet.description}</div>
              </div>
            </div>
          </div>
        ))
    }
    </div>
  )
}

export default ChannelCard
