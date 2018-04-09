import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TripFlights.css';


const TripNotes = () => {

  return (
    <div className="TripNotes">
      <div className="TripNotes-container">
        <p className="TripNotes-title">Notes:</p>
        <textarea className="textarea" placeholder="Trip Notes" defaultValue={""} />
      </div>
    </div>
  )
}

export default TripNotes
