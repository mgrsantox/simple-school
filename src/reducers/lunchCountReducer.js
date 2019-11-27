import {
  LUNCH_COUNT_REQUEST,
  LUNCH_COUNT_UPDATE_SUCCESS,
  LUNCH_COUNT_UPDATE_FAILURE
} from "../constants/Type";

let initialState = { lunchdata: "", employeeData: {} };

const lunchCount = (state = initialState, action) => {
  switch (action.type) {
    case LUNCH_COUNT_REQUEST:
      return {
        ...state,
        lunchdata: action.lunchdata
      };

    case LUNCH_COUNT_UPDATE_SUCCESS:
      return {
        ...state,
        lunchCountUpdate: action.lunchCountUpdate
      };

    case LUNCH_COUNT_UPDATE_FAILURE:
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};

export default lunchCount;
