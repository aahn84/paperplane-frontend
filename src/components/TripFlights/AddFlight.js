import React from 'react';
import './TripFlights.css';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TopNav from '../NavBars/TopNav';
import BottomNav from '../NavBars/BottomNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


const AddFlight = () => {

  const toggleCalendar = () => {
    return(
      <DatePicker
        // selected={this.state.startDate}
        // onChange={this.handleChange}
      />
    )
  }

  return (
    <div className="AddFlight">
      <TopNav />

      <div id="AddFlight-container">
        <div className="AddFlight-title-bar">
          <h1 className="AddFlight-title">Add New Flight</h1>
        </div>
        <div className="AddFlight-form">
          <div className="field">
            <label className="label">Airline Name:</label>
            <div className="control">
              <input className="input" type="text" placeholder="Alaska" />
            </div>
          </div>

          <div className="field">
            <label className="label">Flight Number:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="ex: 123"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Departure Date:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder={moment().format('l')}
              />
            </div>
          </div>

          <div className="AddFlight-add-cancel">
            <div id="AddFlight-buttons">
              <button id="AddFlight-add" className="button is-block is-info">Add Flight</button>
            </div>

            <Link id="AddFlight-buttons" to="/mytrips/:id">
              <button id="AddFlight-cancel" className="button is-block is-info">Cancel</button>
            </Link>
          </div>

        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default AddFlight;
