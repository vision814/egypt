import {
  LIST_EDU_DROP_FAILED,
  LIST_EDU_DROP_REQUEST,
  LIST_EDU_DROP_SUCCESS,
  LIST_EDU_DROP_AGE_FAILED,
  LIST_EDU_DROP_AGE_REQUEST,
  LIST_EDU_DROP_AGE_SUCCESS,
  LIST_TOTAL_FAILED,
  LIST_TOTAL_REQUEST,
  LIST_TOTAL_SUCCESS,
} from "../../type";
import axios from "axios";
export const listEduDrop = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_DROP_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu-drop");
    dispatch({
      type: LIST_EDU_DROP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_DROP_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listDropAge = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_DROP_AGE_REQUEST,
  });
  try {
    const res = await axios.get(`/api/edu-drop-age`);
    dispatch({
      type: LIST_EDU_DROP_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_DROP_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listTotal = () => async (dispatch) => {
  dispatch({
    type: LIST_TOTAL_REQUEST,
  });
  try {
    const res = await axios.get(`/api/total-edu`);
    dispatch({
      type: LIST_TOTAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_TOTAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listPrimary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_DROP_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu-drop/primary");
    dispatch({
      type: LIST_EDU_DROP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_DROP_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listSecondary = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_DROP_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu-drop/secondary");
    dispatch({
      type: LIST_EDU_DROP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_DROP_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listHigh = () => async (dispatch) => {
  dispatch({
    type: LIST_EDU_DROP_REQUEST,
  });
  try {
    const res = await axios.get("/api/edu-drop/high");
    dispatch({
      type: LIST_EDU_DROP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDU_DROP_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
