import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TripFlights.css';
import TopNav from '../NavBars/TopNav';
import TripFlightsList from './TripFlightsList'
import BottomNav from '../NavBars/BottomNav'


const TripFlights = () => {

  return (
    <div className="TripFlights">
      <TopNav />
      <div className="TripFlights-container">
        <div className="TripFlights-title-bar">
          <h1>Flights</h1>
          <span id="TripFlights-add" className="icon is-medium">
            <i className="fas fa-plus-circle" />
          </span>
        </div>
        <div className="TripFlights-title-name">
          <p>{`My Trip Name  May 4 - May 7`}</p>
        </div>
        <TripFlightsList />
      </div>
      <BottomNav />
    </div>
  )
}

export default TripFlights
