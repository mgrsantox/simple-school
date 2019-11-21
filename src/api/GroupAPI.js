import APIEndPoint from "../constants/APIConstants";
import API from "./API";
// import LocalDb from "../api/LocalStorage";

class GroupAPI extends API {
  groupFetch = (employeeId, callback) => {
    const GROUP_FETCH =
      APIEndPoint.GROUP_FETCH + employeeId 
    fetch(GROUP_FETCH, {
      method: "GET",
      headers: this.authHeaders
    })
      .then(response => {
        console.log("Grpup Fetch Response: ", response);
        this.processResponse(response, callback);
      })
      .catch(error => {
        console.log("Error while fetching group");
        callback(null, null);
      });
  };
}

export default new GroupAPI();
