import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constans";
import { addNowPlayingMovies } from "../Utils/Slices/movieSlices";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispath = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispath(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
