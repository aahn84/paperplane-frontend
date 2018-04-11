import { combineReducers } from 'redux';
import {
  TOKEN_RECEIVED,
  FETCHING_USER,
  USER_RECEIVED,
  TRIPS_RECEIVED,
} from '../actions';

function token(state = '', action) {
  switch (action.type) {
    case TOKEN_RECEIVED: {
      return action.token;
    }
    case TOKEN_CLEARED: {
      return '';
    }
    default:
      return state;
  }
}

function fetchingUser(state = false, action) {
  switch(action.type) {
    case FETCHING_USER: {
      return true;
    }
    case USER_RECEIVED: {
      return false;
    }
    default:
      return state;
  }
}

function user(state = null, action) {
  switch (action.type) {
    case USER_RECEIVED: {
      return action.user;
    }
    case USER_CLEARED: {
      return null;
    }
    default:
      return state;
  }
}

function trips(state = [], action) {
  switch (action.type) {
    case TRIPS_RECEIVED: {
      return action.trips;
    }
    default:
      return state;
  }
}

// function tripsById(state = {}, action) {
//   switch (action.type) {
//     case TRIPS_RECEIVED: {
//       return action.trips.reduce((byId, shoe) => {
//         byId[trip.id] = trip;
//         return byId;
//       }, {});
//     }
//     default:
//       return state;
//   }
// }

export default combineReducers({
  token,
  fetchingUser,
  user,
  trips,
  // tripsById,
});
