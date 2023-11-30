import { configureStore } from "@reduxjs/toolkit";

import memberReducer from "../modules/chosenMemberSlice";
import modalReducer from "../modules/modalControlSlice";
import fanLetterReducer from "../modules/fanLetterSlice";
import authReducer from "../modules/authSlice";

const store = configureStore({
  reducer: {
    chosenMember: memberReducer,
    modalControl: modalReducer,
    fanLetter: fanLetterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
