/* import { CHECKLOGIN } from "../actions/authAction";

const initialState = {
  isLoggedIn: false,
  loginCheck: false,
  user: null
};

function login(state = initialState, action) {
  switch (action.type) {
    case CHECKLOGIN:
      return Object.assign({}, state, {
        isLoggedIn: action.response.isLoggedIn,
        user: action.response.user,
        loginCheck: true
      });
    default:
      return state;
  }
}

export default login; */
