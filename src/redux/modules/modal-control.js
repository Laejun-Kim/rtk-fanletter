const initialState = null;

//action types
export const RESET = "modal/RESET";
export const ACTIVATE = "modal/ACTIVATE";

//action creator
export const activateModal = (configObj) => ({
  type: ACTIVATE,
  payload: configObj,
});
export const resetModal = () => ({
  type: RESET,
});

//리듀서
const modalControl = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE:
      return { ...action.payload };
    case RESET:
      return null;
    default:
      return state;
  }
};

export default modalControl;
