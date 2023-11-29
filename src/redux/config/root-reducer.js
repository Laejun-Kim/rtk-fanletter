import { combineReducers } from "redux";
import fanLetter from "redux/modules/fanletter";
import chosenMember from "redux/modules/chosen-member";
import modalControl from "redux/modules/modal-control";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fanLetter"],
};

const rootReducer = combineReducers({
  fanLetter,
  chosenMember,
  modalControl,
});

export default persistReducer(persistConfig, rootReducer);
