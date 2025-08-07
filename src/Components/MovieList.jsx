import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  if (!movies) return;

  return (
    <div className="px-6  text-white">
      <h2 className="text-3xl font-bold py-2">{title}</h2>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
