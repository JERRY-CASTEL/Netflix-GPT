import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },

    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlices.actions;

export default userSlices.reducer;
