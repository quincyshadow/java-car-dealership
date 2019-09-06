import * as types from "./constants";
import axios from "axios";

export const getAllCars = (creds, history) => async dispatch => {
  dispatch({ type: types.GET_ALL_LOCS_PENDING });
  try {
    let response = await axios.get(types.BASE_URL);
    dispatch({
      type: types.GET_ALL_LOCS_SUCCESS,
      payload: response.data.cars
    });
    // history.push('/dashboard')
  } catch (err) {
    dispatch({
      type: types.GET_ALL_LOCS_FAILED,
      payload: err
    });
  }
};

export const getOneCar = (id, creds, history, method) => async dispatch => {
  dispatch({ type: types.GET_ONE_LOC_PENDING });
  try {
    let response = await axios.get(`${types.BASE_URL}/${id}`);
    dispatch({
      type: types.GET_ONE_LOC_SUCCESS,
      payload: response.data.car
    });
    if (method == "edit") {
      // history.push(`/cars/${id}/edit`);
    } else {
      history.push(`/cars/${id}/`);
    }
  } catch (err) {
    dispatch({
      type: types.GET_ONE_LOC_FAILED,
      payload: err
    });
  }
};

export const deleteOneCar = (id, cred, history) => async dispatch => {
    dispatch({ type: types.DELETE_ONE_LOC_PENDING });
  try {
    let response = await axios.delete(`${types.BASE_URL}/${id}/delete`);
    dispatch({
      type: types.DELETE_ONE_LOC_SUCCESS
    });
    // if (method == "edit") {
    //   // history.push(`/cars/${id}/edit`);
    // } else {
    //   history.push(`/cars/${id}/`);
    // }
  } catch (err) {
    dispatch({
      type: types.DELETE_ONE_LOC_FAILED,
      payload: err
    });
  }
}
