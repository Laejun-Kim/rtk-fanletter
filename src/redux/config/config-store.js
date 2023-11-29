import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "../modules/chosenMemberSlice";
import modalReducer from "../modules/modalControlSlice";
import fanLetterReducer from "../modules/fanLetterSlice";

const store = configureStore({
  reducer: {
    member: memberReducer,
    modal: modalReducer,
    fanLetter: fanLetterReducer,
  },
});

export default store;
