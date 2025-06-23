import React from 'react'

function MovieCard({poster_path, name}) {
  
  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-2 mb-5' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/30 rounded-md'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard