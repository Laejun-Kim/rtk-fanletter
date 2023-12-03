import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const modalControlSlice = createSlice({
  name: "modalControl",
  initialState,
  reducers: {
    activateModal: (state, action) => {
      return { ...action.payload };
    },
    resetModal: (state) => {
      return null;
    },
  },
});

export const { activateModal, resetModal } = modalControlSlice.actions;

export default modalControlSlice.reducer;
