import React, {Component} from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class AddFlight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airline_name: '',
      flight_num: '',
      depart_date: '',
      // depart_date: moment(),
      user_id: '',
      loading: false,
    }
  }

  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.match.params.id);
  }

  handleChangeDepart = (date) => {
    this.setState({
      depart_date: date
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('CLICKED!', this.state);
  }

  render() {
    const { pathname } = this.props.location;
    console.log(this.state);

    return (
      <div className="AddFlight">
        <div id="AddFlight-container">
          <div className="AddFlight-title-bar">
            <h1 className="AddFlight-title">
              { pathname === '/track' ? `Track Flight` : `Add New Flight` }
            </h1>
          </div>

          <form id="AddFlight-form">
            <div className="AddFlight-form">
              <div className="field">
                <label className="label">Airline Name:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Alaska"
                    required="required"
                    onChange={ (e) => this.setState({ airline_name: e.target.value }) }
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Flight Number:</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="ex: 123"
                    required="required"
                    onChange={ (e) => this.setState({ flight_num: e.target.value }) }
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Departure Date:</label>
                {/* <DatePicker
                  className="input AddFlight-depart"
                  selected={ this.state.depart_date }
                  onChange={ this.handleChangeDepart }
                  popperPlacement="auto"
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
                /> */}

                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder={moment().format('l')}
                    required="required"
                    onChange={ (e) => this.setState({ depart_date: moment(e.target.value).format('YYYY-MM-DD') }) }
                  />
                </div>

              </div>

              {
                pathname === '/track' ?
                (
                  <div className="TrackFlight">
                    <div id="TrackFlight-button">
                      <Link to='/track/:iataNumber'>
                      <button
                        id="TrackFlight-track"
                        className="button is-block is-info"
                        onClick={ this.submitForm }
                        >Track Flight
                      </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="AddFlight-add-cancel">
                    <div id="AddFlight-buttons">
                      <button
                        id="AddFlight-add"
                        className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}
                        onClick={ this.submitForm }
                        >Add Flight
                      </button>
                    </div>

                    <Link id="AddFlight-buttons" to="/mytrips/:id">
                      <button id="AddFlight-cancel" className="button is-block is-info">Cancel</button>
                    </Link>
                  </div>
                )
              }

            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(AddFlight);
