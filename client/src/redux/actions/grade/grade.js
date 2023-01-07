import {
  LIST_GRADE_FAILED,
  LIST_GRADE_REQUEST,
  LIST_GRADE_SUCCESS,
} from "../../type";
import axios from "axios";
export const listGrade = () => async (dispatch) => {
  dispatch({
    type: LIST_GRADE_REQUEST,
  });
  try {
    const res = await axios.get("/api/grade");
    dispatch({
      type: LIST_GRADE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_GRADE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
