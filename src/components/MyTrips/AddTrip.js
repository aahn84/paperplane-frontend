import React, {Component} from 'react';
import './MyTrips.css';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TripNotes from '../TripFlights/TripNotes';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class AddTrip extends Component {
  state = {
    title: '',
    notes: '',
    user_id: '',
    loading: false,
  }

  toggleCalendar() {
    return(
      <DatePicker
        // selected={this.state.startDate}
        // onChange={this.handleChange}
      />
    )
  }

  render() {
    console.log(this.state);
    return (
      <div className="AddTrip">
        <div id="AddTrip-container">
          <div className="AddTrip-title-bar">
            <h1 className="AddTrip-title">Add New Trip</h1>
          </div>

          {/* <form></form> */}
          <div className="AddTrip-form">
            <div className="field">
              <label className="label">Name:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Trip Name"
                    defultValue={ this.state.title }
                    onChange={ (e) => this.setState({ title: e.target.value }) }
                    required="required"
                  />
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
                    required="required"
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
                    required="required"
                  />
                </div>
              </div>
            </div>

            <TripNotes />

            <div className="AddTrip-add-cancel">
              <div id="AddTrip-buttons">
                <button id="AddTrip-add" className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}>Add Trip</button>
              </div>

              <Link id="AddTrip-buttons" to="/mytrips">
                <button id="AddTrip-cancel" className="button is-block is-info">Cancel</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AddTrip;
