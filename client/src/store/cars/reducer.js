import * as types from './constants'

const initialState = {
  carList: [],
  viewedCar: {},
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

    case types.GET_ONE_CAR_PENDING:
    return state

    case types.GET_ONE_CAR_SUCCESS:
      return {
        ...state,
        viewedCar: action.payload
      }

    case types.GET_ONE_CAR_FAILED:
      return {
        ...state,
        err: action.payload,
        viewedCar: {}
      }

    default:
      return state
  }
}
