import dummyData from "fakeData.json";

const initialState = [...dummyData];

//action types
export const SET_FAN_LETTERS = "SET_FAN_LETTERS";

//action creator
export const setFanLetters = (fanLetters) => ({
  type: SET_FAN_LETTERS,
  payload: fanLetters,
});

//리듀서
const fanLetter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAN_LETTERS:
      return [...action.payload];
    default:
      return state;
  }
};

export default fanLetter;
