import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload, isLoggedIn: true };
    },
    logout: (state, action) => {
      return { isLoggedIn: false };
    },
  },
});

export const { setUser, logout } = auth.actions;

export default auth.reducer;
