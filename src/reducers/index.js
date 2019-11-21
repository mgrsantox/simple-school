import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
import lunchReducer from "./lunchReducer";

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  lunch: lunchReducer
});
