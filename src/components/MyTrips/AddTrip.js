import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';
import TopNav from '../NavBars/TopNav';
import BottomNav from '../NavBars/BottomNav'


const AddTrip = () => {

  return (
    <div className="AddTrip">
      <TopNav />

      <div id="AddTrip-container" className="has-text-centered">
        <div className="AddTrip-title-bar">
          <h1>Add New Trip</h1>
          {/* <span id="AddTrip-add" className="icon is-medium">
            <i className="fas fa-plus-circle" />
          </span> */}
        </div>

      </div>


      <BottomNav />
    </div>
  )
}

export default AddTrip
