import dummyData from "fakeData.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [...dummyData];

const fanLetterSlice = createSlice({
  name: "fanLetter",
  initialState,
  reducers: {
    setFanLetters: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { setFanLetters } = fanLetterSlice.actions;

export default fanLetterSlice.reducer;
