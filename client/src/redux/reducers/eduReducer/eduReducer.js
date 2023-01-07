import {
  LIST_EDU_DROP_AGE_FAILED,
  LIST_EDU_DROP_AGE_REQUEST,
  LIST_EDU_DROP_AGE_SUCCESS,
  LIST_EDU_DROP_FAILED,
  LIST_EDU_DROP_REQUEST,
  LIST_EDU_DROP_SUCCESS,
  LIST_TOTAL_FAILED,
  LIST_TOTAL_REQUEST,
  LIST_TOTAL_SUCCESS,
} from "../../type";
const initialState = {
  edu: [],
};
export const listEduReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_DROP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_DROP_SUCCESS:
      return {
        ...state,
        loading: false,
        edu: payload,
      };
    case LIST_EDU_DROP_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const listEduAgeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDU_DROP_AGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDU_DROP_AGE_SUCCESS:
      return {
        ...state,
        loading: false,
        edu: payload,
      };
    case LIST_EDU_DROP_AGE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export const listTotalEduReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_TOTAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_TOTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        edu: payload,
      };
    case LIST_TOTAL_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
