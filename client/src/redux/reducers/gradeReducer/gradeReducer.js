import {
  LIST_GRADE_FAILED,
  LIST_GRADE_REQUEST,
  LIST_GRADE_SUCCESS,
} from "../../type";
const initialState = {
  grade: [],
};
export const listGradeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_GRADE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_GRADE_SUCCESS:
      return {
        ...state,
        loading: false,
        grade: payload,
      };
    case LIST_GRADE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
