import React from "react";
import { useState } from "react";
import { createContext } from "react";

const MovieContext = createContext();
  export function MovieContextProvider(props) {
    const [moviesList, setMoviesList] = useState([])
    const update =(movie)=>{
        setMoviesList(moviesList.concat(movie))
    }
    return (
      <MovieContext.Provider value={{moviesList,update}}>
        {props.children}
      </MovieContext.Provider>
    );
  }
  
export default MovieContext;