import * as types from "./constants";

const initialState = {
  locList: [],
  viewedLoc: {},
  editLoc: {},
  // isAuthed: false,
  // user: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_LOCS_PENDING:
      return state;

    case types.GET_ALL_LOCS_SUCCESS:
      return {
        ...state,
        locList: action.payload
      };

    case types.GET_ALL_LOCS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.GET_ONE_LOC_PENDING:
      return state;

    case types.GET_ONE_LOC_SUCCESS:
      return {
        ...state,
        viewedLoc: action.payload
      };

    case types.GET_ONE_LOC_FAILED:
      return {
        ...state,
        err: action.payload,
        viewedLoc: {}
      };
    
    // case types.DELETE_ONE_LOC_SUCCESS:
    //   {
    //     return {
    //       ...state,
    //       locList: [...state,]
    //     }
    //   };

    default:
      return state;
  }
};
