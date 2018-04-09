import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';
import TopNav from '../NavBars/TopNav';
import TripsList from './TripsList'
import BottomNav from '../NavBars/BottomNav'


const MyTrips = () => {

  return (
    <div className="MyTrips">
      <TopNav />

      <div id="MyTrips-container" className="has-text-centered">
        <div className="MyTrips-title-bar">
          <h1>My Trips</h1>
          <span id="MyTrips-add" className="icon is-medium">
            <i className="fas fa-plus-circle" />
          </span>
        </div>
        
        <TripsList />
      </div>


      <BottomNav />
    </div>
  )
}

export default MyTrips
