import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonInstance } from "../../axios/api";

export const __editUser = createAsyncThunk(
  "EDIT_USER_AND_UPDATE_JSON_SERVER",
  async (payload, thunkAPI) => {
    try {
      //수정된 사용자가 작성한 글들의 id를 수집
      const usersLetters = await jsonInstance.get(`?userId=${payload.userId}`);
      const idArr = [];
      usersLetters.data.forEach((letter) => idArr.push(letter.id));

      //수집한 id를 기반으로 json-server쪽에 patch 요청
      idArr.forEach(
        async (id) =>
          await jsonInstance.patch(`/${id}`, payload.changedProfile, {
            headers: {
              "Content-Type": "application/json",
            },
          })
      );
      //프로필 변경사항을 redux-state에도 저장
      thunkAPI.dispatch(editUser(payload.changedProfile));
    } catch (error) {
      console.log(error);
    }
  }
);

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
