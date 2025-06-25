import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  
};

  let handleRemoveFromWatchList = (movieObj) =>{
    let filteredWatchlist = watchlist.filter((movie) =>{
      return movie.id!= movieObj.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    setWatchList(filteredWatchlist)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/popular?api_key=17b9b19d2f191deebddbf636462abc05&language=en-US&page=1

// 17b9b19d2f191deebddbf636462abc05

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2I5YjE5ZDJmMTkxZGVlYmRkYmY2MzY0NjJhYmMwNSIsIm5iZiI6MTc1MDYzOTkwNS4zNiwic3ViIjoiNjg1OGE1MjFlYWZlMmU0MjQzNDkzNTFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.iD9ip35SGrULSuwMAaKqReUz4jYwTbIKVII49B-MXKA
