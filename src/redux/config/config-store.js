import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import memberReducer from "../modules/chosenMemberSlice";
import modalReducer from "../modules/modalControlSlice";
import fanLetterReducer from "../modules/fanLetterSlice";
import authReducer from "../modules/authSlice";

const rootReducer = combineReducers({
  chosenMember: memberReducer,
  modalControl: modalReducer,
  fanLetter: fanLetterReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "fanLetter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
