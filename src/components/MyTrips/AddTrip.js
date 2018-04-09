import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';
import TopNav from '../NavBars/TopNav';
import TripNotes from '../TripFlights/TripNotes';
import BottomNav from '../NavBars/BottomNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const AddTrip = () => {

  return (
    <div className="AddTrip">
      <TopNav />

      <div id="AddTrip-container">
        <div className="AddTrip-title-bar">
          <h1 className="AddTrip-title">Add New Trip</h1>
        </div>
        <div className="AddTrip-form">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Trip Name" />
            </div>
          </div>

          <div className="field">
            <label className="label">Start Date</label>
            <div className="control">
              <input className="input" type="text" placeholder={moment().format('l')} />
            </div>
          </div>

          <div className="field">
            <label className="label">End Date</label>
            <div className="control">
              <input className="input" type="text" placeholder={moment().format('l')} />
            </div>
          </div>

          <TripNotes />
        </div>

      </div>


      <BottomNav />
    </div>
  )
}

export default AddTrip
