import APIEndPoint from "../constants/APIConstants";
import API from "./API";

class LunchCountAPI extends API {
  lunchCountPatch = (groupId, EmployeeId, count, callback) => {
    const LUNCH_COUNT_PATCH = APIEndPoint.LUNCH_COUNT_PATCH;
    const body = {"groupId" : groupId , "employeeId" : EmployeeId , "count":count}
    console.log("body", JSON.stringify(body))
    fetch(LUNCH_COUNT_PATCH, {
      method: "POST",
      headers: this.authHeaders,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("Lunch Count Patch Response", response);
        this.processResponse(response, callback);
      })
      .catch(error => {
        console.log("Error while patching lunch count", error);
        callback(null, null);
      });
  };
}

export default new LunchCountAPI();
