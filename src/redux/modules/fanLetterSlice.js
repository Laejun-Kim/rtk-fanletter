// import dummyData from "fakeData.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonInstance } from "../../axios/api";
import tokenValid from "utils/tokenValid";
import { toast } from "react-toastify";

export const __setFanLetters = createAsyncThunk(
  "SET_FANLETTERS_FROM_SERVER",
  async (payload, thunkAPI) => {
    console.log(payload);
    //수행할 동작
    const isValid = await tokenValid(payload);
    console.log(isValid);
    try {
      if (isValid) {
        const { data } = await jsonInstance.get("?_sort=createdAt&_order=desc");
        console.log("json 서버에서 받아온거", data);
        thunkAPI.dispatch(setFanLetters(data));
      } else {
        toast.error(`from slice 토큰이 만료되었습니다. 다시 로그인해주세요`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          window.location.href = "/login"; //훅을 사용 못해서 어쩔수 없이 이걸 사용...
        }, 2000);
      }
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
