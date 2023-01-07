import {
  LIST_HOUSING_FAILED,
  LIST_HOUSING_REQUEST,
  LIST_HOUSING_SUCCESS,
} from "../../type";
import axios from "axios";
export const listHousing = () => async (dispatch) => {
  dispatch({
    type: LIST_HOUSING_REQUEST,
  });
  try {
    const res = await axios.get("/api/housing");
    dispatch({
      type: LIST_HOUSING_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HOUSING_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listHousingReason = () => async (dispatch) => {
  dispatch({
    type: LIST_HOUSING_REQUEST,
  });
  try {
    const res = await axios.get("/api/housing-reason");
    dispatch({
      type: LIST_HOUSING_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_HOUSING_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
