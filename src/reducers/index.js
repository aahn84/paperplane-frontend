import { combineReducers } from 'redux';
import {
  TRIPS_RECEIVED,
  CLEAR_TRIPS,
} from '../actions';


function trips(state = [], action) {
  switch (action.type) {
    case TRIPS_RECEIVED: {
      return action.trips
    }
    case CLEAR_TRIPS: {
      return [];
    }
    default:
      return state;
  }
}

export default combineReducers({
  trips,
});
