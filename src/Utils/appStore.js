import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlices";
import movieReducer from "./Slices/movieSlices";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
