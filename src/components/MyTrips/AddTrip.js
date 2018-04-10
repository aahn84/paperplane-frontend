import React, {Component} from 'react';
import './MyTrips.css';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import TopNav from '../NavBars/TopNav';
import TripNotes from '../TripFlights/TripNotes';
// import BottomNav from '../NavBars/BottomNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddTrip extends Component {

  toggleCalendar() {
    return(
      <DatePicker
        // selected={this.state.startDate}
        // onChange={this.handleChange}
      />
    )
  }

  render() {
    return (
      <div className="AddTrip">
        {/* <TopNav /> */}

        <div id="AddTrip-container">
          <div className="AddTrip-title-bar">
            <h1 className="AddTrip-title">Add New Trip</h1>
          </div>
          <div className="AddTrip-form">
            <div className="field">
              <label className="label">Name:</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Trip Name" />
                </div>
            </div>

            <div className="AddTrip-date-fields">
              <div id="date-field" className="field">
                <label className="label">Start Date:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={moment().format('l')}
                    // onClick={toggleCalendar()}
                  />
                </div>
              </div>
              <div id="date-field" className="field">
                <label className="label">End Date:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={moment().format('l')}
                  />
                </div>
              </div>
            </div>

            <TripNotes />

            <div className="AddTrip-add-cancel">
              <div id="AddTrip-buttons">
                <button id="AddTrip-add" className="button is-block is-info">Add Trip</button>
              </div>

              <Link id="AddTrip-buttons" to="/mytrips">
                <button id="AddTrip-cancel" className="button is-block is-info">Cancel</button>
              </Link>
            </div>

          </div>
        </div>
        {/* <BottomNav /> */}
      </div>
    )
  }
}

export default AddTrip;
