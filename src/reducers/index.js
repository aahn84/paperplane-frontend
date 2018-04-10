import { combineReducers } from 'redux';
import {
  SET_WELCOME_VIEW,
  HIDE_WELCOME_VIEW,
  // SHOW_LOGIN_FORM,
  // HIDE_LOGIN_FORM,
  // SHOW_SIGNUP_FORM,
  // HIDE_SIGNUP_FORM,
  TRIPS_RECEIVED,
} from '../actions';

function welcomeView(state = null, action) {
  switch(action.type) {
    case SET_WELCOME_VIEW: {
      return action.viewName;
    }
    case HIDE_WELCOME_VIEW: {
      return null;
    }
    default: {
      return state;
    }
  }
}

// function loginView(state = '', action) {
//   switch(action.type) {
//     case SHOW_LOGIN_FORM: {
//       return action.viewName;
//     }
//     case HIDE_LOGIN_FORM: {
//       return '';
//     }
//     default: {
//       return state;
//     }
//   }
// }
//
// function signupView(state = '', action) {
//   switch(action.type) {
//     case SHOW_SIGNUP_FORM: {
//       return action.viewName;
//     }
//     case HIDE_SIGNUP_FORM: {
//       return '';
//     }
//     default: {
//       return state;
//     }
//   }
// }

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
  welcomeView,
  // loginView,
  // signupView,
  trips,
  // tripsById,
});
