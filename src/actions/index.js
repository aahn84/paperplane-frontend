import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;


export const TRIPS_RECEIVED = 'TRIPS_RECEIVED';

export function fetchTrips(id) {
  return async (dispatch) => {
    const response = await axios.get(`${BASE_URL}/api/users/${id}/trips`);
    const trips = response.data.data;
    dispatch({
      type: TRIPS_RECEIVED,
      trips
    });
  };
}

// export const CLEAR_TRIPS = 'CLEAR_TOKEN';
export const CLEAR_TRIPS = 'CLEAR_TRIPS';
export function logout() {
  return (dispatch) => {
    // dispatch({ type: CLEAR_TOKEN });
    dispatch({ type: CLEAR_TRIPS });
    // localStorage.removeItem('token');
  }
}

// export function getUserData() {
//   return async (dispatch) => {
//     dispatch(getToken());
//     await dispatch(getUser());
//     await dispatch(getTrips());
//     await dispatch(getFlights());
//   }
// }
