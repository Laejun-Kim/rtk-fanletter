// import dummyData from "fakeData.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonInstance } from "../../axios/api";

export const __setFanLetters = createAsyncThunk(
  "SET_FANLETTERS_FROM_SERVER",
  async (payload, thunkAPI) => {
    //수행할 동작
    try {
      const { data } = await jsonInstance.get("?_sort=createdAt&_order=desc");
      console.log("json 서버에서 받아온거", data);
      thunkAPI.dispatch(setFanLetters(data));
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = [];

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
