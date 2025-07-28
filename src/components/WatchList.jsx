import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";
import "./WatchList.css";

function WatchList(props) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = props.watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    props.setWatchList([...sortedIncreasing]);
  };
  let sortDecreasing = () => {
    let sortedDecresing = props.watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    props.setWatchList([...sortedDecresing]);
  };

  useEffect(() => {
    let temp = props.watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [props.watchList]);

  return (
    <>
      <div className="genre flex justify-start md:justify-center overflow-x-auto m-5 gap-3 px-4 scrollbar-hide">
        {genreList.map((genre, idx) => (
          <div
            key={idx}
            onClick={() => handleFilter(genre)}
            className={
              currGenre === genre
                ? "gbox flex-shrink-0 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] min-w-[8rem] px-4 bg-yellow-500 cursor-pointer"
                : "gbox flex-shrink-0 flex justify-center items-center text-white font-bold rounded-xl h-[3rem] min-w-[8rem] px-4 bg-gray-300 cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="flex justify-center px-4 my-5">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search movies..."
          className="w-full max-w-md h-[3rem] border-2 border-gray-300 bg-gray-100 px-4 rounded-md text-sm sm:text-base"
        />
      </div>

      <div className="rounded-lg mx-4 my-6 border border-gray-300 overflow-x-auto">
        <table className="min-w-full text-sm text-gray-500 text-center">
          <thead className="border-b-4 text-gray-700 bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3 flex justify-center items-center gap-2">
                <i
                  onClick={sortIncreasing}
                  className="fa-solid fa-arrow-up cursor-pointer"
                />
                Rating
                <i
                  onClick={sortDecreasing}
                  className="fa-solid fa-arrow-down cursor-pointer"
                />
              </th>
              <th className="px-4 py-3">Popularity</th>
              <th className="px-4 py-3">Genre</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {props.watchList
              .filter((movieObj) =>
                currGenre === "All Genres"
                  ? true
                  : genreids[movieObj.genre_ids[0]] === currGenre
              )
              .filter((movieObj) =>
                movieObj.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id}>
                  <td className="flex items-center px-4 py-3 min-w-[250px]">
                    <img
                      className="w-24 h-auto rounded-md"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt={movieObj.title}
                    />
                    <div className="ml-6 font-medium">{movieObj.title}</div>
                  </td>
                  <td className="px-4 py-3">{movieObj.vote_average}</td>
                  <td className="px-4 py-3">{movieObj.popularity}</td>
                  <td className="px-4 py-3">
                    {genreids[movieObj.genre_ids?.[0]]}
                  </td>
                  <td
                    onClick={() => props.handleRemoveFromWatchList(movieObj)}
                    className="px-4 py-3 text-gray-500 hover:text-red-600 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
