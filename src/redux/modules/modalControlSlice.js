import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

// createSlice를 사용하여 리듀서와 액션 생성자를 함께 정의
const modalControlSlice = createSlice({
  name: "modalControl",
  initialState,
  reducers: {
    activateModal: (state, action) => {
      // payload로 전달된 값을 사용하여 state 업데이트
      return { ...action.payload };
    },
    resetModal: (state) => {
      // 상태를 초기 상태로 리셋
      return null;
    },
  },
});

// 액션 생성자를 외부로 추출
export const { activateModal, resetModal } = modalControlSlice.actions;

// 리듀서를 외부로 추출
export default modalControlSlice.reducer;
