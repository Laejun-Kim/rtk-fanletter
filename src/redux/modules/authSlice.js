import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

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
    editUser: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser, logout, editUser } = auth.actions;

export default auth.reducer;
