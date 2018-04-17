import React from 'react';
import './MyTrips.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';
import moment from 'moment';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;


const Trip = ({ key, trip, trip_id, fetchTrips, user }) => {
  const firstFlight = trip.flights[0]

  const deleteTrip = async (trip_id) => {
    const token = localStorage.getItem('token')
    const config = { headers: { token } }
    const response = await axios.delete(`${BASE_URL}/api/trips/${trip_id}`, config)
    if (response.status === 200) {
      //CALL DISPATCH TO REMOVE FROM STORE
      fetchTrips(user.id);
    }
  };

  const renderTripDetail = (trip_id) => {
    return (
      <div className="TripsList-content">
      <article className="message">
        <div className="message-header">
          <p>{ trip.title }</p>
          {/* <p>{ `My Trip` }</p> */}
          <button
            className="delete"
            aria-label="delete"
            onClick={ () => deleteTrip(trip_id) }
          />
        </div>
        <Link to={ `/mytrips/${trip_id}` } style={{ textDecoration: 'none', borderRadius: 'none' }}>
          <div className="message-body">
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-globe" /></span>
                <p>{`${firstFlight.depart_airport} to ${firstFlight.arrive_airport} `}</p>
                {/* <p>{`Seattle to Orange County`}</p> */}
              </div>
              <span className="icon is-small"><i className="fas fa-angle-right" /></span>
            </div>
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-paper-plane" /></span>
                <p>{`${firstFlight.airline_iata} ${firstFlight.flight_num} ${moment(firstFlight.depart_date).format('MMMM D')}`}</p>
                {/* <p>{`AS 510 May 4`}</p> */}
              </div>
              <p id="TripsDetail-status">{ firstFlight.flight_status[0].toUpperCase() + firstFlight.flight_status.substring(1) }</p>
              {/* <p>{`Scheduled`}</p> */}
            </div>
          </div>
        </Link>
      </article>
    </div>
    )
  }

  const renderTripNoFlightDetail = () => {
    return (
      <div className="TripsList-content">
      <article className="message">
        <div className="message-header">
          <p>{ trip.title }</p>
          {/* <p>{ `My Trip` }</p> */}
          <button
            className="delete"
            aria-label="delete"
            onClick={ () => deleteTrip(trip_id) }
          />
          {/* <a className="button"><i className="fas fa-angle-down" /></a> */}
        </div>
        <Link to={ `/mytrips/${trip_id}` } style={{ textDecoration: 'none', borderRadius: 'none' }}>
          <div className="message-body">
            <div id="TripsDetail-noFlights">
              <p id="TripsDetail-text">No flights to display</p>
              {/* <span id="TripsDetail-icon-span" className="icon is-large"><i id="TripsDetail-icon" className="fas fa-paper-plane" /></span> */}
            </div>

          </div>
        </Link>
      </article>
    </div>
    )
  }

  return (
    <div>
      {
        firstFlight
          ? renderTripDetail(trip_id)
          : renderTripNoFlightDetail()
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip);
