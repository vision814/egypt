import {
  LIST_HOUSING_FAILED,
  LIST_HOUSING_REQUEST,
  LIST_HOUSING_SUCCESS,
} from "../../type";
const initialState = {
  housing: [],
};
export const listHousingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_HOUSING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_HOUSING_SUCCESS:
      return {
        ...state,
        loading: false,
        housing: payload,
      };
    case LIST_HOUSING_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
