import APIEndPoints from "../constants/APIConstants";
import API from "./API";

class AccountAPI extends API {
  onLogin = (userName, password, callback) => {
    let bodyParams = JSON.stringify({ email: userName, pin: password });

    fetch(APIEndPoints.LOGIN, {
      method: "POST",
      headers: this.headers,
      body: bodyParams
    })
      .then(response => {
        // console.log("parsing response", response);
        this.processResponse(response, callback);
        
      })
      .catch(error => {
        console.log("Error in calling login api.", error);
        callback(null, null);
      });
  };

  logout = callback => {
    return fetch(APIEndPoints.LOGOUT, {
      method: "DELETE",
      headers: this.authHeaders
    })
      .then(response => {
        // console.log("Logout Response : ", response);
        this.processResponse(response, callback);
      })
      .catch(error => {
        console.log("Error in calling logout api.", error);
        callback(null, null);
      });
  };

  onRegister = (userInfo, callback) => {
    return fetch(APIEndPoints.REGISTER, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(userInfo)
    })
      .then(response => {
        console.log("res", response);
        this.processResponse(response, callback);
      })
      .catch(error => {
        console.log("Error in calling register api.", error);
        callback(null, null);
      });
  };
}

export default new AccountAPI();
