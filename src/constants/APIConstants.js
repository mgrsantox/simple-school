const MainAPI = "http://192.168.0.191:9070/";

let APIEndPoints = {
  // REGISTER: MainAPI + '/user',
  LOGIN: MainAPI + "employee/login",
  LOGOUT: MainAPI + "logout",
  GROUP_FETCH : MainAPI + 'group/employment/'
}


export default APIEndPoints;
