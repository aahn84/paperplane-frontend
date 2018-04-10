import './App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import MyTrips from './components/MyTrips/MyTrips';
import TripFlights from './components/TripFlights/TripFlights';
import FlightDetails from './components/FlightDetails/FlightDetails';
import AddTrip from './components/MyTrips/AddTrip';
import AddFlight from './components/TripFlights/AddFlight';

class App extends Component {
  // componentDidMount() {
  //   if (this.props.user_id) this.props.setUserInfo(this.props.user_id);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Welcome /> */}
          <Switch>
            <Route path="/" component={ MyTrips } />
            {/* <MyTrips /> */}
            {/* <TripFlights /> */}
            {/* <FlightDetails /> */}
            {/* <AddTrip /> */}
            {/* <AddFlight /> */}

            {/* <Route path="/" component={ ProductList }/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
