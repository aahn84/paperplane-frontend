import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { fetchUserData } from './actions';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

store.dispatch(fetchUserData());
// store.dispatch(fetchTrips(1));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
