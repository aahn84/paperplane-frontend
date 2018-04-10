import './App.css';
import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeLogin from './components/Welcome/WelcomeLogin';
import WelcomeSignup from './components/Welcome/WelcomeSignup';
import TopNav from './components/NavBars/TopNav';
import BottomNav from './components/NavBars/BottomNav';
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
          <TopNav />
          <Switch>
            <Route exact path="/" component={ WelcomeLogin } />
            <Route path="/signup" component={ WelcomeSignup } />
            <Route exact path="/mytrips" component={ MyTrips } />
            <Route exact path="/mytrips/addtrip" component={ AddTrip } />
            <Route exact path="/mytrips/:id/flightdetails" component={ FlightDetails } />
            <Route exact path="/mytrips/:id" component={ TripFlights } />
            <Route exact path="/mytrips/:id/addflight" component={ AddFlight } />
            <Route exact path="/track/flight" component={ FlightDetails } />
            <Route exact path="/track" component={ AddFlight } />

            {/* <Route exact path="/mytrips/:id/flightdetails" component={ FlightDetails } /> */}

            {/* <WelcomeLogin /> */}
            {/* <WelcomeSignup /> */}
            {/* <MyTrips /> */}
            {/* <TripFlights /> */}
            {/* <FlightDetails /> */}
            {/* <AddTrip /> */}
            {/* <AddFlight /> */}
          </Switch>
          <BottomNav />
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
