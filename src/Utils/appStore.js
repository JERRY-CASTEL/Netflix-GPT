import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlices";
import movieReducer from "./Slices/movieSlices";
import gptReducer from "./Slices/gptSlices";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
