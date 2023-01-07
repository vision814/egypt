import {
  LIST_POPULATIONS_AGE_FAILED,
  LIST_POPULATIONS_AGE_REQUEST,
  LIST_POPULATIONS_AGE_SUCCESS,
} from "../../type";
import axios from "axios";
export const listPopAge = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_AGE_REQUEST,
  });
  try {
    const res = await axios.get("/api/ages");
    dispatch({
      type: LIST_POPULATIONS_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
