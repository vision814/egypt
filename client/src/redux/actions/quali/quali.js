import {
  LIST_QUALI_FAILED,
  LIST_QUALI_REQUEST,
  LIST_QUALI_SUCCESS,
} from "../../type";
import axios from "axios";
export const listQuali = () => async (dispatch) => {
  dispatch({
    type: LIST_QUALI_REQUEST,
  });
  try {
    const res = await axios.get("/api/quali");
    dispatch({
      type: LIST_QUALI_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_QUALI_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
