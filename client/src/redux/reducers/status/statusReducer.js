import {
  LIST_STATUS_REQUEST,
  LIST_STATUS_SUCCESS,
  LIST_STATUS_FAILED,
} from "../../type";
const initialState = {
  status: [],
};
export const listStatusReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: payload,
      };
    case LIST_STATUS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
