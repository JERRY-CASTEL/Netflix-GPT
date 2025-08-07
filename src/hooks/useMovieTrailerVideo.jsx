import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constans";
import { addMovieTrailerVideo } from "../Utils/Slices/movieSlices";
import { useEffect } from "react";

const useMovieTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  // This process is called memorization this will help to stop unwanted api calls
  const movieTrailerVideos = useSelector(
    (store) => store.movie.movieTrailerVideo
  );

  const getMovieVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/videos?language=en-US";

    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filteredData = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addMovieTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailerVideos && getMovieVideo();
  }, []);
};

export default useMovieTrailerVideo;
