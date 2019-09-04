import * as types from './constants'
import axios from 'axios'

export const getAllCars = (creds, history) => async dispatch => {
  dispatch({ type: types.GET_ALL_CARS_PENDING })
  try {
    let response = await axios.get(types.BASE_URL)
    dispatch({
      type: types.GET_ALL_CARS_SUCCESS,
      payload: response.data.cars
    })
    // history.push('/dashboard')
  } catch (err) {
    dispatch({
      type: types.GET_ALL_CARS_FAILED,
      payload: err
    })
  }
}
