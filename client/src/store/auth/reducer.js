import * as types from './constants'

const initialState = {
  isAuthed: false,
  user: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_PENDING:
      return state

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthed: true,
        user: action.payload
      }

    case types.USER_LOGIN_FAILED:
      return {
        ...state,
        isAuthed: false,
        err: action.payload
      }

    default:
      return state
  }
}
