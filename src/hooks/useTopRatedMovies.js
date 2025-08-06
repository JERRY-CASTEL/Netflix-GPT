import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constans";
import { addTopRatedMovies } from "../Utils/Slices/movieSlices";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispath = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispath(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
