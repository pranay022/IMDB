import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from 'axios'
import Pagination from "./pagination";

function Movies({handleAddToWatchList, handleRemoveFromWatchList, watchlist}) {

  const [movies , setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)


  const handlePrev =()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }else{
      setPageNo(pageNo-1)
    }
    
  }

   const handleNext =()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      }, [pageNo]);
  });
  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-3">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex felx-row flex-wrap justify-around gap-8">

        {movies.map((movieObje)=>{
          return <MovieCard key={movieObje.id} movieObj={movieObje} poster_path={movieObje.poster_path} name={movieObje.original_title} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;
