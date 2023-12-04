// import dummyData from "fakeData.json";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonInstance } from "../../axios/api";
import tokenValid from "utils/tokenValid";
import { toast } from "react-toastify";

export const __setFanLetters = createAsyncThunk(
  "SET_FANLETTERS_FROM_SERVER",
  async (payload, thunkAPI) => {
    //json-server 에서 데이터를 받아오기 전, accessToken 의 유효성을 검사
    //isValid===false 라면 toast알림과 함께 로그인페이지로 돌려보냄.
    const isValid = await tokenValid(payload);
    console.log(isValid);
    try {
      if (isValid) {
        const { data } = await jsonInstance.get("?_sort=createdAt&_order=desc");
        console.log("json 서버에서 받아온거", data);
        return thunkAPI.fulfillWithValue(data);
      } else {
        toast.error(`토큰이 만료되었습니다. 다시 로그인해주세요`, {
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  fanLetters: [],
  isLoading: false,
  error: null,
};

const fanLetterSlice = createSlice({
  name: "fanLetter",
  initialState,
  reducers: {},
  extraReducers: {
    [__setFanLetters.pending]: (state) => {
      state.isLoading = true;
    },
    [__setFanLetters.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.fanLetters = action.payload;
    },
    [__setFanLetters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setFanLetters } = fanLetterSlice.actions;

export default fanLetterSlice.reducer;
