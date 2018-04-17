import React, {Component} from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class TrackFlight extends Component {

  render() {

    return (
      <div className="TrackFlight">

        <div id="TrackFlight-container">
          <div className="TrackFlight-title-bar">
            <h1 className="TrackFlight-title">Add New Flight</h1>
          </div>
          <div className="TrackFlight-form">
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

            <div className="TrackFlight-add-cancel">
              <div id="TrackFlight-buttons">
                <button id="TrackFlight-add" className="button is-block is-info">Add Flight</button>
              </div>

              <Link id="TrackFlight-buttons" to="/mytrips/:id">
                <button id="TrackFlight-cancel" className="button is-block is-info">Cancel</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default TrackFlight;
