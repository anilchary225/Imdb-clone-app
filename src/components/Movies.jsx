import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import './Movies.css';

function Movies(props) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
      });
  }, [pageNo]);

  return (
    <div className="p-2">
      <div className="text-2xl font-bold text-center my-4">Trending Movies</div>

      <div className="movies-div m-5 my-9 flex flex-row justify-around flex-wrap gap-8">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.title}
            watchList={props.watchList}
            handleAddtoWatchList={props.handleAddtoWatchList}
            handleRemoveFromWatchList={props.handleRemoveFromWatchList}
          />
        ))}
      </div>

      <div>
        <Pagination
          pageNo={pageNo}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default Movies;
