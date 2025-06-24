import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] w-[200px] flex flex-col bg-center bg-cover rounded-md hover:cursor-pointer hover:scale-110 duration-300 m-2 mb-5"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-3 flex  justify-end h-8 w-42 pointer:cursor">
          <i class="fa-solid fa-xmark text-white drop-shadow-md"></i>
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-3 flex text-white justify-end h-8 w-42 pointer:cursor"
        >
          <i class="fa-solid fa-list-ul text-white drop-shadow-md"></i>
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/30 rounded-md mt-auto">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
