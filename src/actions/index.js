import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const TOKEN_RECEIVED = 'TOKEN_RECEIVED';
export function fetchToken() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) dispatch({ type: TOKEN_RECEIVED, token });
  };
}

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHING_USER_CANCELED ='FETCHING_USER_CANCELED';
export const USER_RECEIVED = 'USER_RECEIVED';
export function fetchUser() {
  return async (dispatch, getState) => {
    const { token, fetchingUser } = getState();
    if (!token) {
      return dispatch({ type: FETCHING_USER_CANCELED });
    }
    if (!fetchingUser) dispatch({ type: FETCHING_USER });
    const response = await axios.get(
      `${BASE_URL}/api/users`,
      { headers: { token } }
    );
    const user = response.data;
    dispatch({ type: USER_RECEIVED, user });
  };
}

export const FETCHING_TRIPS = 'FETCHING_TRIPS';
export const FETCHING_TRIPS_CANCELED = 'FETCHING_TRIPS_CANCELED';
export const TRIPS_RECEIVED = 'TRIPS_RECEIVED';
export function fetchTrips() {
  return async (dispatch, getState) => {
    const { token, fetchingTrips } = getState();
    if (!token) {
      return dispatch({ type: FETCHING_TRIPS_CANCELED });
    }
    if (!fetchingTrips) dispatch({ type: FETCHING_TRIPS });
    const response = await axios.get(
      `${BASE_URL}/api/trips`,
      { headers: { token } }
    );
    const trips = response.data;
    dispatch({ type: TRIPS_RECEIVED, trips });
  };
}

export const TOKEN_CLEARED = 'TOKEN_CLEARED';
export const USER_CLEARED = 'USER_CLEARED';
export const TRIPS_CLEARED = 'TRIPS_CLEARED';
export function logout() {
  return (dispatch) => {
    dispatch({ type: TOKEN_CLEARED });
    dispatch({ type: USER_CLEARED });
    dispatch({ type: TRIPS_CLEARED });
    localStorage.removeItem('token');
  }
}

export function fetchUserData() {
  return async (dispatch) => {
    dispatch(fetchToken());
    await dispatch(fetchUser());
    await dispatch(fetchTrips());
    // await dispatch(getFlights());
  }
}
