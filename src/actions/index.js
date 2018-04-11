import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;

export const TOKEN_RECEIVED = 'TOKEN_RECEIVED';
export function getToken() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) dispatch({ type: TOKEN_RECEIVED, token });
  };
}

export const FETCHING_USER = 'FETCHING_USER';
export const USER_RECEIVED = 'USER_RECEIVED';
export function getUser() {
  return async (dispatch, getState) => {
    const { token } = getState();
    if (!token) return;
    dispatch({ type: FETCHING_USER });
    const response = await axios.get(
      `${BASE_URL}/users/`,
      { headers: { token } }
    );
    const { user } = response.data;
    dispatch({ type: USER_RECEIVED, user });
  };
}

export const TRIPS_RECEIVED = 'TRIPS_RECEIVED';
export function getTrips() {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}/api/trips`);
    const trips = response.data.data;
    dispatch({
      type: TRIPS_RECEIVED,
      // trips
    });
  };
}

// export function getUserData() {
//   return async (dispatch) => {
//     dispatch(getToken());
//     await dispatch(getUser());
//     await dispatch(getTrips());
//     await dispatch(getFlights());
//   }
// }
