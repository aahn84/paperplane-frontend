import { combineReducers } from 'redux';
import {
  TRIPS_RECEIVED,
  CLEAR_TRIPS,
  SET_ACTIVE_TRIP,
  CLEAR_ACTIVE_TRIP,
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

function tripsById(state = {}, action) {
  switch (action.type) {
    case TRIPS_RECEIVED: {
      return action.trips.reduce((byId, trip) => {
        const { id, ...tripWithoutId } = trip;
        byId[id] = tripWithoutId;
        return byId;
      }, {});
    }
    case CLEAR_TRIPS: {
      return {};
    }
    default:
      return state;
  }
}

function setTrip(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_TRIP: {
      return action.trip
    }
    case CLEAR_ACTIVE_TRIP: {
      return {};
    }
    default:
      return state;
  }
}

export default combineReducers({
  trips,
  tripsById,
  setTrip
});
