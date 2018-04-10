import './App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import Welcome from './components/Welcome/Welcome';
import WelcomeLogin from './components/Welcome/WelcomeLogin';
import WelcomeSignup from './components/Welcome/WelcomeSignup';
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
            <Route exact path="/" component={ WelcomeLogin } />
            {/* <Route path="/login" component={ WelcomeLogin } /> */}
            <Route path="/signup" component={ WelcomeSignup } />
            <Route path="/mytrips" component={ MyTrips } />

            {/* <MyTrips /> */}
            {/* <TripFlights /> */}
            {/* <FlightDetails /> */}
            {/* <WelcomeLogin /> */}
            {/* <WelcomeSignup /> */}
            {/* <AddTrip /> */}
            {/* <AddFlight /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => ({
  user_id: state.user_id,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  // setUserInfo,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
