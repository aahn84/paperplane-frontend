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
      <div className="MyTrips-container">
        <h1>My Trips</h1>
        <TripsList />
      </div>
      <BottomNav />
    </div>
  )
}

export default MyTrips
