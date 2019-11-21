import APIHeader from "../constants/APIHeader";
import LocalDb from "./LocalStorage";

export default class API {
  static token = null;
  static user = null;
  constructor() {
    API.token = null;
    API.user = null;
    this.setToken();
  }
  setToken() {
    var response = LocalDb.getSessions();
    if (null !== response) {
      API.token = response.employeeLoginResponse.token;
      API.user = response.employeeLoginResponse.employee;
    }
  }
  removeTokens() {
    API.token = null;
    API.user = null;
  }
  resetToken() {
    this.removeTokens();
    this.setToken();
  }
  processResponse(response, callback) {
    response.json().then(parsedResponse => {
      // console.log("Parse Response " , parsedResponse);
      if (parsedResponse.error) {
        const error = {
          error: true,
          msg: parsedResponse.msg,
          errorCode: parsedResponse.errorCode
        };
        callback(null, error);
      } else {
        // console.log("sucess", parsedResponse);
        callback(parsedResponse, null);
      }
    });
  }
  getUser() {
    return API.user;
  }
  get headers() {
    return { ...APIHeader };
  }
  get authHeaders() {
    return { ...APIHeader, Authorization: API.token };
  }
}
