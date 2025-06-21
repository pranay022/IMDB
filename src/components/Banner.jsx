import React from 'react'

function Banner() {
  return (
    <div className='h-[80vh] md:h[70vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-white text-2xl w-full bg-gray-800/30 text-center p-2'>Avernger end game</div>
    </div>
  )
}

export default Banner