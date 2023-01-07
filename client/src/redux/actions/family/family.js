import {
  LIST_POPULATIONS_FAMILY_FAILED,
  LIST_POPULATIONS_FAMILY_REQUEST,
  LIST_POPULATIONS_FAMILY_SUCCESS,
} from "../../type";
import axios from "axios";
export const listFamily = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_FAMILY_REQUEST,
  });
  try {
    const res = await axios.get("/api/family");
    dispatch({
      type: LIST_POPULATIONS_FAMILY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAMILY_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
