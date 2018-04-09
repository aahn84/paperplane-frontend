import axios from 'axios';
const BaseURL = 'https://localhost:8080';

export const TRIPS_RECEIVED = 'TRIPS_RECEIVED';
export function fetchTrips() {
  return async (dispatch) => {
    const response = await axios.get(`${BaseURL}/api/trips`);
    const trips = response.data.data;
    dispatch({
      type: TRIPS_RECEIVED,
      trips
    });
    // dispatch({
    //   type: SHOESINVIEW_LOAD,
    //   shoes
    // })
  };
}
