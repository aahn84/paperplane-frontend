import { combineReducers } from 'redux';
import {
  TRIPS_RECEIVED,
} from '../actions';

// function user_info(state = {}, action) {
//   switch(action.type) {
//     case USER_INFO_SET_USER_INFO: {
//       const {password, ...user_info_noPass} = action.user_info;
//       return user_info_noPass;
//     }
//     default: {
//       return state;
//     }
//   }
// }

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
  // welcomeView,
  // loginView,
  // signupView,
  trips,
  // tripsById,
});
