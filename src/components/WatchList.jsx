import React from "react";
import { useEffect, useState } from "react";
import genrids from "../util/gener";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handlesearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  let handleFilter = (gener) => {
    setCurrGenre(gener);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genrids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "bg-blue-400 flex justify-center h-[2rem] w-[8rem] rounded-md text-white items-center mx-2"
                  : "bg-gray-400 flex justify-center h-[2rem] w-[8rem] rounded-md text-white items-center mx-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handlesearch}
          value={search}
          className="h-[2rem] w-[18rem] bg-gray-600/30 rounded-md outline-none p-2"
          placeholder="Search Movies"
        />
      </div>

      <div className="rounded-md overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div
                  onClick={sortIncreasing}
                  className="p-2 hover:text-gray-700"
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div
                  onClick={sortDecreasing}
                  className="p-2 hover:text-gray-700"
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Gener</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genrids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td className="flex item-center px-2">
                      <img
                        className="h-[5rem] p-2"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-4 ">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genrids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=> handleRemoveFromWatchList(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
