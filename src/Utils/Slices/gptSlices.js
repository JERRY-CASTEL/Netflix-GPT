import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptmovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieName = movieNames;
    },
  },
});

export const { toggleGptSearch, addGptmovieResult } = gptSlice.actions;

export default gptSlice.reducer;
