import {
  LIST_POPULATIONS_FAILED,
  LIST_POPULATIONS_REQUEST,
  LIST_POPULATIONS_SUCCESS,
  LIST_POPULATIONS_MIDDLE_FAILED,
  LIST_POPULATIONS_MIDDLE_REQUEST,
  LIST_POPULATIONS_MIDDLE_SUCCESS,
} from "../../type";
const initialState = {
    populations:[]
}
export const listPopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        populations: payload,
      };
    case LIST_POPULATIONS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listPopMiddleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_POPULATIONS_MIDDLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_POPULATIONS_MIDDLE_SUCCESS:
      return {
        ...state,
        loading: false,
        populations: payload,
      };
    case LIST_POPULATIONS_MIDDLE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
