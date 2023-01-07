import {
  LIST_STATUS_FAILED,
  LIST_STATUS_REQUEST,
  LIST_STATUS_SUCCESS,
} from "../../type";
import axios from "axios";
export const listStatus = () => async (dispatch) => {
  dispatch({
    type: LIST_STATUS_REQUEST,
  });
  try {
    const res = await axios.get("/api/status");
    dispatch({
      type: LIST_STATUS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_STATUS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
