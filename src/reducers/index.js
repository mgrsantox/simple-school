import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
import lunchCountReducer from "./lunchCountReducer";

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  lunch: lunchCountReducer
});
