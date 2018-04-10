import axios from 'axios';
const BaseURL = process.env.REACT_APP_DEV;

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

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export function setActiveTab(tab) {
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab
    })
  }
}
