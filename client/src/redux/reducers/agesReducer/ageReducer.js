import {
  LIST_POPULATIONS_AGE_FAILED,
  LIST_POPULATIONS_AGE_REQUEST,
  LIST_POPULATIONS_AGE_SUCCESS,
} from "../../type";
const initialState = {
  age: [],
};
export const listAgeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_AGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        age: payload,
      };
    case LIST_POPULATIONS_AGE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
