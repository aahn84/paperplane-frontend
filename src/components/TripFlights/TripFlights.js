import React from 'react';
import './TripFlights.css';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import TopNav from '../NavBars/TopNav';
import TripFlightsList from './TripFlightsList'
// import BottomNav from '../NavBars/BottomNav'


const TripFlights = () => {

  return (
    <div className="TripFlights">
      {/* <TopNav /> */}

      <div id="TripFlights-container" className="has-text-centered">
        <div className="TripFlights-title-bar">
          <h1>Flights</h1>
          <span id="TripFlights-add" className="icon is-medium">
            <Link to="/mytrips/:id/addflight">
              <i className="fas fa-plus-circle" />
            </Link>
          </span>
        </div>
        <div className="TripFlights-title-name">
          <p>{`My Trip Name  May 4 - May 7`}</p>
        </div>

        <TripFlightsList />

      </div>
      {/* <BottomNav /> */}
    </div>
  )
}

export default TripFlights;
