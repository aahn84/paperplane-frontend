import React, {Component} from 'react';
import './TripFlights.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;


class AddFlight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      airline_name: '',
      flight_num: '',
      // depart_date: '',
      depart_date: moment(),
      user_id: 'this.props.user.id',
      trip_id: this.props.match.params.id || '',
      loading: false,
      flight_found: true,
    }
  }

  componentDidMount() {
    const tripId = this.props.match.params.id;
    this.setState({ trip_id: tripId, user_id: this.props.user.id })
    console.log('props user', this.props.user);
  }

  handleChangeDepart = (date) => {
    this.setState({
      depart_date: date
    });
  }

  submitForm = (e, tripId) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { airline_name, flight_num, depart_date, user_id } = this.state;

    return axios.post(`${BASE_URL}/api/flights/${this.state.trip_id}`, { airline_name, flight_num, depart_date, user_id })
    .then(res => {
      console.log('add flight', res.status);
      this.setState({ loading: false });

      if (res.status !== 200) {
        this.setState({flight_found: false})
      }
      return this.props.history.push(`/mytrips/${this.state.trip_id}`);
    })
    .catch(err => {
      console.log(err);
    })
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
                    type="phone"
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
                <DatePicker
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
                />
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

                    {
                      this.state.flight_found
                      ? null
                      : <p className="AddFlight-notFound">Flight not found</p>
                    }
                  </div>
                ) : (
                  <div className="AddFlight-add-cancel">
                    <div id="AddFlight-buttons">
                      <button
                        id="AddFlight-add"
                        className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}
                        onClick={ this.submitForm }
                        onTouchStart={ this.submitForm }
                        >Add Flight
                      </button>
                    </div>

                    {/* <Link id="AddFlight-buttons" to="/mytrips"> */}
                    {/* !!!UPDATE!!! */}
                    <Link id="AddFlight-buttons" to={`/mytrips/${this.state.user_id}`}>
                    {/* !!!UPDATE!!! */}
                      <button id="AddFlight-cancel" className="button is-block is-info">Cancel</button>
                    </Link>

                    {
                      this.state.flight_found
                      ? null
                      : <p className="AddFlight-notFound">Flight not found</p>
                    }
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

const mapStateToProps = (state) => ({
  user: state.user,
  tripsById: state.tripsById
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFlight);
