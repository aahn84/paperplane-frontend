import React, {Component} from 'react';
import './TripFlights.css';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
// import TopNav from '../NavBars/TopNav';
// import BottomNav from '../NavBars/BottomNav';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddFlight extends Component {
  state = {
    airline_name: '',
    flight_num: '',
    depart_date: '',
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
    const { pathname } = this.props.location;

    return (
      <div className="AddFlight">
        {/* <TopNav /> */}

        <div id="AddFlight-container">
          <div className="AddFlight-title-bar">
            <h1 className="AddFlight-title">
              { pathname === '/track' ? `Track Flight` : `Add New Flight` }
            </h1>
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

            { pathname === '/track' ?
            (<div className="TrackFlight">
              <div id="TrackFlight-button">
                <Link to='/track/flightdetails'>
                  <button id="TrackFlight-track" className="button is-block is-info">Track Flight</button>
                </Link>
              </div>
            </div>)
            :
            (<div className="AddFlight-add-cancel">
              <div id="AddFlight-buttons">
                <button id="AddFlight-add" className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}>Add Flight</button>
              </div>

              <Link id="AddFlight-buttons" to="/mytrips/:id">
                <button id="AddFlight-cancel" className="button is-block is-info">Cancel</button>
              </Link>
            </div>)
          }

          </div>
        </div>

        {/* <BottomNav /> */}
      </div>
    )
  }
}

export default withRouter(AddFlight);
