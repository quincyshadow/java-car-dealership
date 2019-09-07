import * as types from "./constants";
import axios from "axios";

export const getAllLocs = (creds, history) => async dispatch => {
  dispatch({ type: types.GET_ALL_LOCS_PENDING });
  try {
    let response = await axios.get(types.BASE_URL);
    dispatch({
      type: types.GET_ALL_LOCS_SUCCESS,
      payload: response.data.locations
    });
    // history.push('/dashboard')
  } catch (err) {
    dispatch({
      type: types.GET_ALL_LOCS_FAILED,
      payload: err
    });
  }
};

export const getOneLoc = (id, creds, history, method) => async dispatch => {
  dispatch({ type: types.GET_ONE_LOC_PENDING });
  try {
    let response = await axios.get(`${types.BASE_URL}/${id}`);
    dispatch({
      type: types.GET_ONE_LOC_SUCCESS,
      payload: response.data
    });
    if (method == "edit") {
      // history.push(`/locs/${id}/edit`);
    } else {
      history.push(`/locations/${id}/`);
    }
  } catch (err) {
    dispatch({
      type: types.GET_ONE_LOC_FAILED,
      payload: err
    });
  }
};

export const deleteOneLoc = (id, cred, history) => async dispatch => {
    dispatch({ type: types.DELETE_ONE_LOC_PENDING });
  try {
    let response = await axios.delete(`${types.BASE_URL}/${id}`);
    dispatch({
      type: types.DELETE_ONE_LOC_SUCCESS
    });
    // if (method == "edit") {
    //   // history.push(`/locs/${id}/edit`);
    // } else {
    //   history.push(`/locs/${id}/`);
    // }
  } catch (err) {
    dispatch({
      type: types.DELETE_ONE_LOC_FAILED,
      payload: err
    });
  }
}
