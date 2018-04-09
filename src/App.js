import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Welcome from './components/Welcome/Welcome';
import MyTrips from './components/MyTrips/MyTrips';
import TripFlights from './components/TripFlights/TripFlights';
import FlightDetails from './components/FlightDetails/FlightDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome /> */}
        {/* <MyTrips /> */}
        {/* <TripFlights /> */}
        <FlightDetails />
      </div>
    );
  }
}

export default App;
