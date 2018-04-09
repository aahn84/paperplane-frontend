import React from 'react';
import './TripFlights.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const TripNotes = () => {

  return (
    <div className="TripNotes">
      <div className="TripNotes-container">
        <p className="TripNotes-title">Notes:</p>
        <div className="field">
          <div className="control">
            <textarea className="textarea" placeholder="Trip Notes" defaultValue={""} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripNotes;
