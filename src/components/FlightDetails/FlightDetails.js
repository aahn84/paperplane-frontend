import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './FlightDetails.css';
import TopNav from '../NavBars/TopNav';
import FlightDetailCard from './FlightDetailCard'
import BottomNav from '../NavBars/BottomNav'


const FlightDetails = () => {

  return (
    <div className="FlightDetails">
      <TopNav />
      <div className="FlightDetails-container">
        <div className="FlightDetails-title-bar">
          <h1>{`Alaska (AS) 578`}</h1>
        </div>
        <div className="FlightDetails-title-name">
          <p>{`Status: Scheduled`}</p>
        </div>

        <FlightDetailCard />
      </div>
      <BottomNav />
    </div>
  )
}

export default FlightDetails
