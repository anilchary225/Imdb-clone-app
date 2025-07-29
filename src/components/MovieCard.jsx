import React from "react";
import './MovieCard.css'

function MovieCard(props) {
  function doesContain() {
    for (let i = 0; i < props.watchList.length; i++) {
      if (props.watchList[i].id === props.movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="movie-card h-[50vh] w-[280px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-row justify-end relative overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieObj.poster_path})`,
      }}
    >
      {doesContain() ? (
        <div
          onClick={() => props.handleRemoveFromWatchList(props.movieObj)}
          className="heart m-6 rounded-lg flex justify-center h-8 w-8 text-xl items-center bg-gray-600/60"
        >
          &#10084;
        </div>
      ) : (
        <div
          onClick={() => props.handleAddtoWatchList(props.movieObj)}
          className="heart m-6 rounded-lg flex justify-center h-8 w-8 text-xl items-center bg-gray-600/60"
        >
          &#9825;
        </div>
      )}

      <div className="movie-title absolute bottom-0 w-full text-white text-lg text-center bg-blue-900/70 p-3 font-copper">
        {props.movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
