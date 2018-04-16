import './App.css';
import 'bulma/css/bulma.css';
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
import MyAccount from './components/MyAccount/MyAccount';
import ShareFlightForm from './components/FlightDetails/ShareFlightForm';

const App = ({ token }) => {

  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path="/" render={ (props) => (
            token ? <Redirect to="/mytrips" /> : <WelcomeLogin { ...props } />
          ) } />
          <Route path="/signup" render={ (props) => (
            token ? <Redirect to="/myaccount" /> : <WelcomeSignup { ...props } />
          ) } />
          <Route exact path="/mytrips" render={ (props) => (
            token ? <MyTrips { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/mytrips/addtrip" render={ (props) => (
            token ? <AddTrip { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/mytrips/:id/addflight" render={ (props) => (
            token ? <AddFlight { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/mytrips/:id/:flightId/share" render={ (props) => (
            token ? <ShareFlightForm { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/mytrips/:id/:flightId" render={ (props) => (
            token ? <FlightDetails { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/mytrips:id" render={ (props) => (
            token ? <TripFlights { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/myaccount" render={ (props) => (
            token ? <MyAccount { ...props } /> : <Redirect to="/" />
          ) } />
          <Route exact path="/track/:iataNumber" component={ FlightDetails } />
          <Route exact path="/track" render={ (props) => (
            token ? <AddFlight { ...props } /> : <Redirect to="/" />
          ) } />

          {/* <Route exact path="/" component={ WelcomeLogin } /> */}
          {/* <Route path="/signup" component={ WelcomeSignup } /> */}
          {/* <Route exact path="/mytrips" component={ MyTrips } /> */}
          {/* <Route exact path="/mytrips/addtrip" component={ AddTrip } /> */}
          {/* <Route exact path="/mytrips/:id/addflight" component={ AddFlight } /> */}
          {/* <Route exact path="/mytrips/:id/:flightId" component={ FlightDetails } /> */}
          {/* <Route exact path="/mytrips/:id" component={ TripFlights } /> */}
          {/* <Route exact path="/myaccount" component={ MyAccount } /> */}
          {/* <Route exact path="/track/:iataNumber" component={ FlightDetails } /> */}
          {/* <Route exact path="/track" component={ AddFlight } /> */}
        </Switch>
        <BottomNav />
      </div>
    </Router>
  )
}

// {/* <Route exact path="/track/flightdetails" component={ FlightDetails } /> */}


const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(
  mapStateToProps,
)(App);
