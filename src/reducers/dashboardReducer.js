import {
  GROUP_REQUEST,
  GROUP_REQUEST_SUCCESS,
  GROUP_REQUEST_FAILURE
} from "../constants/Type";

let initialState = { group: "" , error: ""};

const group = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_REQUEST:
      return {
        ...state
      };
    //chcek action type for success  return{ ...state,action.  s  }

    case GROUP_REQUEST_SUCCESS:
      return {
        ...state,
        group: action.groupInfo.groups
      };

    case GROUP_REQUEST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

export default group;
