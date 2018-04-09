import { combineReducers } from 'redux';
import {
  TRIPS_RECEIVED,
} from '../actions';


function trips(state = [], action) {
  switch (action.type) {
    case TRIPS_RECEIVED: {
      return action.trips;
    }
    default:
      return state;
  }
}

export default combineReducers({
  trips,
});
