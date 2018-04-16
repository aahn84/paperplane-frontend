import { combineReducers } from 'redux';
import {
  TOKEN_RECEIVED,
  TOKEN_CLEARED,
  FETCHING_USER,
  FETCHING_USER_CANCELED,
  USER_RECEIVED,
  USER_CLEARED,
  FETCHING_TRIPS,
  FETCHING_TRIPS_CANCELED,
  TRIPS_RECEIVED,
  TRIPS_CLEARED
} from '../actions';

function token(state = '', action) {
  switch (action.type) {
    case TOKEN_RECEIVED:
      return action.token;
    case TOKEN_CLEARED:
      return '';
    default:
      return state;
  }
}

function isFetchingUser(state = false, action) {
  switch(action.type) {
    case FETCHING_USER:
      return true;
    case USER_RECEIVED:
      return false;
    case FETCHING_USER_CANCELED:
      return false;
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case USER_RECEIVED:
      return action.user;
    case USER_CLEARED:
      return {};
    default:
      return state;
  }
}

function isFetchingTrips(state = false, action) {
  switch(action.type) {
    case FETCHING_TRIPS:
      return true;
    case TRIPS_RECEIVED:
      return false;
    case FETCHING_TRIPS_CANCELED:
      return false;
    default:
      return state;
  }
}

function trips(state = [], action) {
  switch (action.type) {
    case TRIPS_RECEIVED: {
      return action.trips
    }
    case TRIPS_CLEARED: {
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
    case TRIPS_CLEARED: {
      return {};
    }
    default:
      return state;
  }
}

export default combineReducers({
  token,
  user,
  isFetchingUser,
  isFetchingTrips,
  trips,
  tripsById,
});
