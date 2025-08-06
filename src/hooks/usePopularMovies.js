import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constans";
import { addPopularMovies } from "../Utils/Slices/movieSlices";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispath = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispath(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
