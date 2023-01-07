import {
  LIST_QUALI_REQUEST,
  LIST_QUALI_SUCCESS,
  LIST_QUALI_FAILED,
} from "../../type";
const initialState = {
  quali: [],
};
export const listQualiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_QUALI_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_QUALI_SUCCESS:
      return {
        ...state,
        loading: false,
        quali: payload,
      };
    case LIST_QUALI_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
