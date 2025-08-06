import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constans";
import { addUpcommingMovies } from "../Utils/Slices/movieSlices";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispath = useDispatch();

  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispath(addUpcommingMovies(json.results));
  };

  useEffect(() => {
    getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
