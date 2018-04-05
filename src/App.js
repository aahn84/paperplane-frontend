import React, { Component } from 'react';
// import './App.css';
import 'bulma/css/bulma.css';
import Welcome from './components/Welcome/Welcome';
import MyTrips from './components/MyTrips/MyTrips';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome /> */}
        <MyTrips />
      </div>
    );
  }
}

export default App;
