import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './Movies.css'


import axios from "axios";
import Pagination from "./Pagination";

function Movies(props) {
  const [movies, setMovies] = useState([]);


  const [pageNo, setPageNo] = useState(1);

  const handlePrev=()=>{
    if(pageNo == 1){
        setPageNo(pageNo)
    }
    else{
        setPageNo(pageNo-1)
    }
  }
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-2">
      <div className="text-2xl font-bold text-center my-4">Trending Movies</div>

      <div className="movies-div m-5 my-9 flex flex-row justify-around flex-wrap gap-8">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} watchList={props.watchList} handleAddtoWatchList={props.handleAddtoWatchList} handleRemoveFromWatchList={props.handleRemoveFromWatchList} />
        })}
      </div>
      <div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=57290a21de804af1800e23365f2bf079&language=en-US&page=1
