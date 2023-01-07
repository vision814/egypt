import {
  LIST_POPULATIONS_FAILED,
  LIST_POPULATIONS_REQUEST,
  LIST_POPULATIONS_SUCCESS,
  LIST_POPULATIONS_MIDDLE_FAILED,
  LIST_POPULATIONS_MIDDLE_REQUEST,
  LIST_POPULATIONS_MIDDLE_SUCCESS,
} from "../../type";
import axios from "axios";
export const listPop = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_REQUEST,
  });
  try {
    const res = await axios.get("/api/pop");
    dispatch({
      type: LIST_POPULATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopMiddle = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_MIDDLE_REQUEST,
  });
  try {
    const res = await axios.get(`/api/popMiddleYear`);
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
