import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { fetchUserData } from './actions';
// import { fetchTrips } from './actions';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

store.dispatch(fetchUserData());
// store.dispatch(fetchTrips(1));
// store.dispatch(fetchTrips(3));
// store.dispatch(fetchTrips(6));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
