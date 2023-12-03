import { createSlice } from "@reduxjs/toolkit";

const initialState = { chosenMember: "ALL" };

const chosenMemberSlice = createSlice({
  name: "chosenMember",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.chosenMember = action.payload;
    },
  },
});

export const { setMember } = chosenMemberSlice.actions;

export default chosenMemberSlice.reducer;
