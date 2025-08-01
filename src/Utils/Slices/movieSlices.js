import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerVideo: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailerVideo } =
  movieSlicer.actions;

export default movieSlicer.reducer;
