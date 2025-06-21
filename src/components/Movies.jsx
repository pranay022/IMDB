import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div className='p-5'>
        <div className='text-2xl font-bold text-center m-3'>
            <h1>Trending Movies</h1>
        </div>
        <div className='flex felx-row flex-wrap justify-around'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>
  )
}

export default Movies