import * as types from './constants'
import axios from 'axios'

export const userLogin = (creds, history) => async dispatch => {
  dispatch({ type: types.USER_LOGIN_PENDING })
  try {
    let response = await axios.post(types.BASE_URL + '/login', creds)
    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: response.data
    })
    history.push('/dashboard')
  } catch (err) {
    dispatch({
      type: types.USER_LOGIN_FAILED,
      payload: err
    })
  }
}
