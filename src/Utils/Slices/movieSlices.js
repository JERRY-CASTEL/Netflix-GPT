import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcommingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addMovieTrailerVideo: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
} = movieSlicer.actions;

export default movieSlicer.reducer;
