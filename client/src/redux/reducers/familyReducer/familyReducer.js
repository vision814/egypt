import {
  LIST_POPULATIONS_FAMILY_REQUEST,
  LIST_POPULATIONS_FAMILY_SUCCESS,
  LIST_POPULATIONS_FAMILY_FAILED,
} from "../../type";
const initialState = {
  family: [],
};
export const listFamilyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_FAMILY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        family: payload,
      };
    case LIST_POPULATIONS_FAMILY_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
