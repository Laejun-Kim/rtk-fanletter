import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = auth.actions;

export default auth.reducer;
