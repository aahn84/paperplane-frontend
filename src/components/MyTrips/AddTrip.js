import React, {Component} from 'react';
import './MyTrips.css';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TripNotes from '../TripFlights/TripNotes';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;

class AddTrip extends Component {
  state = {
    title: '',
    start_date: moment(),
    end_date: moment(),
    notes: '',
    user_id: 1,
    loading: false,
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('CLICKED!', this.state);

    this.setState({ loading: true });

    const { user_id, title, start_date, end_date, notes } = this.state;

    axios.post(`${BASE_URL}/api/trips`, { user_id, title, start_date, end_date, notes })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    this.setState({ loading: false });
    console.log(this.state);
  }

  handleChangeStart = (date) => {
    this.setState({
      start_date: date
    });
  }

  handleChangeEnd = (date) => {
    this.setState({
      end_date: date
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="AddTrip">
        <div id="AddTrip-container">
          <div className="AddTrip-title-bar">
            <h1 className="AddTrip-title">Add New Trip</h1>
          </div>

          <form>
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
                  <DatePicker
                      className="input"
                      selected={ this.state.start_date }
                      onChange={ this.handleChangeStart }
                      popperPlacement="top-end"
                      popperModifiers={{
                        offset: {
                        enabled: true,
                        offset: '5px, 10px'
                        },
                          preventOverflow: {
                          enabled: true,
                          escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                          boundariesElement: 'viewport'
                        }
                      }}
                  />
                  {/* <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder={moment().format('l')}
                      // onClick={toggleCalendar()}
                      required="required"
                    />
                  </div> */}
                </div>
                <div id="date-field" className="field">
                  <label className="label">End Date:</label>
                  <DatePicker
                    className="input"
                    selected={ this.state.end_date }
                    onChange={ this.handleChangeEnd }
                    popperPlacement="top-end"
                    popperModifiers={{
                      offset: {
                      enabled: true,
                      offset: '5px, 10px'
                      },
                        preventOverflow: {
                        enabled: true,
                        escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                        boundariesElement: 'viewport'
                      }
                    }}
                  />
                  {/* <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder={moment().format('l')}
                      required="required"
                    />
                  </div> */}
                </div>
              </div>

              {/* <TripNotes /> */}
              <div className="TripNotes">
                <div className="TripNotes-container">
                  <p className="TripNotes-title">Notes:</p>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Trip Notes"
                        defaultValue={""}
                        value={ `${ this.state.notes }` }
                        onChange={ (e) => this.setState({ notes: e.target.value }) }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="AddTrip-add-cancel">
                <div id="AddTrip-buttons">
                  <button id="AddTrip-add"
                    className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}
                    onClick={ this.submitForm }
                    >Add Trip
                  </button>
                </div>

                <Link id="AddTrip-buttons" to="/mytrips">
                  <button id="AddTrip-cancel" className="button is-block is-info">Cancel</button>
                </Link>
              </div>

            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default AddTrip;
