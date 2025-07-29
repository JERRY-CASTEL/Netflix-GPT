import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlices";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
