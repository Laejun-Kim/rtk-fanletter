import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "../modules/chosenMemberSlice";
import modalReducer from "../modules/modalControlSlice";
import fanLetterReducer from "../modules/fanLetterSlice";

const store = configureStore({
  reducer: {
    chosenMember: memberReducer,
    modalControl: modalReducer,
    fanLetter: fanLetterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
