// SecondaryContainer.jsx

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black ">
      <div className="-mt-82 pl-5 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcomming"} movies={movies.upcommingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
