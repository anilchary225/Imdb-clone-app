import React, { useEffect, useState } from "react";
import genreids from '../Utility/genre'
import './WatchList.css'

function WatchList(props) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) =>{
    setCurrGenre(genre)
  }

  let sortIncreasing = () =>{
    let sortedIncreasing = props.watchList.sort((movieA,movieB)=>{
        return movieA.vote_average - movieB.vote_average
    })
    props.setWatchList([...sortedIncreasing])
  }
  let sortDecreasing = () =>{
    let sortedDecresing = props.watchList.sort((movieA,movieB)=>{
        return movieB.vote_average - movieA.vote_average
    })
    props.setWatchList([...sortedDecresing])
  }

  useEffect(() => {
    let temp = props.watchList.map((movieObj) =>{
        return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp)
  }, [props.watchList])

  return (
    <>
      <div className="flex justify-center flex-wrap m-8 gap-6">
        {genreList.map((genre) => {
            return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre ? "flex justify-center items-center text-white font-bold rounded-xl mx-4 h-[3rem] w-[10rem] bg-yellow-500" : "flex justify-center items-center text-white font-bold rounded-xl mx-4 h-[3rem] w-[10rem] bg-gray-200" }>
            {genre}
          </div>
        })}

        
      </div>

      <div className="flex justify-center my-5">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="search movies"
          className="h-[3rem] w-[28rem] border-2 bg-gray-100 px-4"
        />
      </div>

      <div className="rounded-lg overflow-hidden mx-8 p-4 border border-gray-300">
        <table className="table-div w-full text-center text-gray-500">
          <thead className="border-b-4">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center gap-2">
                <i onClick={sortIncreasing} className="fa-solid fa-arrow-up cursor-pointer" />
                Rating
                <i onClick={sortDecreasing} className="fa-solid fa-arrow-down cursor-pointer" />
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-body" >
            {props.watchList.filter((movieObj)=>{
                if(currGenre=='All Genres'){
                    return true
                }else{
                    return genreids[movieObj.genre_ids[0]]==currGenre;
                }
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => (
                  <tr key={movieObj.id} className="border-b-2">
                      <td className="flex items-center px-4 py-3">
                          <img
                              className="table-img w-[8rem] h-auto"
                              src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                              alt={movieObj.title} />
                          <div className="mx-12 font-copper">{movieObj.title}</div>
                      </td>
                      <td>{movieObj.vote_average}</td>
                      <td>{movieObj.popularity}</td>
                      <td>{genreids[movieObj.genre_ids?.[0]]}</td>
                      <td onClick={()=>props.handleRemoveFromWatchList(movieObj)} className="text-gray-500 hover:text-red-600 hover:cursor-pointer">Delete</td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
