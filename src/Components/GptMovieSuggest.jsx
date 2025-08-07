import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggest = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);

  if (!movieName) return null;

  return (
    <div className=" p-4 m-4  mt-10 bg-black/80 rounded">
      {movieName.map((movie, index) => {
        return (
          <MovieList title={movie} key={index} movies={movieResults[index]} />
        );
      })}
    </div>
  );
};

export default GptMovieSuggest;
