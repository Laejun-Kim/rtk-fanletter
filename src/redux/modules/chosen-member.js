const initialState = { chosenMember: "ALL" };

//action types
export const ALL = "member/ALL";
export const AKALI = "member/AKALI";
export const AHRI = "member/AHRI";
export const EVELYN = "member/EVELYN";
export const KAISA = "member/KAISA";

//action creator
export const setMemeber = (member) => {
  return { type: member };
};

//리듀서
const chosenMember = (state = initialState, action) => {
  switch (action.type) {
    case ALL:
      return { chosenMember: "ALL" };
    case AKALI:
      return { chosenMember: "AKALI" };
    case AHRI:
      return { chosenMember: "AHRI" };
    case EVELYN:
      return { chosenMember: "EVELYN" };
    case KAISA:
      return { chosenMember: "KAISA" };
    default:
      return state;
  }
};

export default chosenMember;
