import React from 'react';
import './FlightDetails.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import FlightDetailCard from './FlightDetailCard'


const FlightDetails = () => {

  return (
    <div className="FlightDetails">
      <div className="FlightDetails-container">
        <div className="FlightDetails-title-bar">
          <h1>{`Alaska (AS) 578`}</h1>
        </div>
        <div className="FlightDetails-title-name">
          <p>{`Status: Scheduled`}</p>
        </div>

        <FlightDetailCard />
        
      </div>
    </div>
  )
}

export default FlightDetails;
