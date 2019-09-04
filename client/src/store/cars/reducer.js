import * as types from './constants'

const initialState = {
  carList: [],
  // isAuthed: false,
  // user: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CARS_PENDING:
      return state

    case types.GET_ALL_CARS_SUCCESS:
      return {
        ...state,
        carList: action.payload
      }

    case types.GET_ALL_CARS_FAILED:
      return {
        ...state,
        err: action.payload
      }

    default:
      return state
  }
}
