import axios from 'axios';
const BaseURL = 'https://localhost:8080';

export const SET_WELCOME_VIEW = 'SET_WELCOME_VIEW';
export function setWelcomeView(viewName) {
  return (dispatch) => {
    dispatch({
      type: SET_WELCOME_VIEW,
      viewName
    });
  };
}

export const HIDE_WELCOME_VIEW = 'HIDE_WELCOME_VIEW';
export function hideWelcomeView() {
  return (dispatch) => {
    dispatch({
      type: HIDE_WELCOME_VIEW
    });
  };
}

// export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
// export function showLoginForm(viewName) {
//   return (dispatch) => {
//     dispatch({
//       type: SHOW_LOGIN_FORM,
//       viewName
//     });
//   };
// }
//
// export const HIDE_LOGIN_FORM = 'HIDE_LOGIN_FORM';
// export function hideLoginForm() {
//   return (dispatch) => {
//     dispatch({
//       type: HIDE_LOGIN_FORM
//     });
//   };
// }
//
// export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM';
// export function showSignupForm(viewName) {
//   return (dispatch) => {
//     dispatch({
//       type: SHOW_SIGNUP_FORM,
//       viewName
//     });
//   };
// }
//
// export const HIDE_SIGNUP_FORM = 'HIDE_SIGNUP_FORM';
// export function hideSignupForm() {
//   return (dispatch) => {
//     dispatch({
//       type: HIDE_SIGNUP_FORM
//     });
//   };
// }

// export const USER_INFO_SET_USER_INFO = 'USER_INFO_SET_USER_INFO';
// export function setUserInfo(user_id) {
//   return async (dispatch) => {
//     const user_req = await axios.get(`${BaseURL}/user/${user_id}`)
//     const user_info = user_req.data.data;
//     console.log(user_info);
//     dispatch({
//       type: USER_INFO_SET_USER_INFO,
//       user_info
//     });
//   };
// }

// export function clearUserInfo() {
//   return (dispatch) => {
//     dispatch({
//       type: USER_INFO_SET_USER_INFO,
//       user_info: {}
//     });
//   };
// }

export const TRIPS_RECEIVED = 'TRIPS_RECEIVED';
export function fetchTrips() {
  return async (dispatch) => {
    const response = await axios.get(`${BaseURL}/api/trips`);
    const trips = response.data.data;
    dispatch({
      type: TRIPS_RECEIVED,
      // trips
    });
  };
}
