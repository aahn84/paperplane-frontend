import React from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';
import moment from 'moment';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;


const TripsFlightCard = ({ user, flight, fetchTrips }) => {
  const deleteFlight = async () => {
    const response = await
    axios.delete(`${BASE_URL}/api/flights/${flight.id}`, { trips_id: flight.trips_id })
    if (response.status === 200) {
      fetchTrips(user.id);
    }
  };

const now = new Date();

  return (
    <div>
      <div className="TripFlightsList-content">
        <article className="message">
          <div className="message-header">
            <p>
              {`${flight.depart_airport} > ${flight.arrive_airport}`}
            </p>
            <button
              className="delete"
              aria-label="delete"
              onClick={ () => deleteFlight(flight.id) }
            />
          </div>
          <Link to={`/mytrips/${flight.trips_id}/${flight.id}`} style={{ textDecoration: 'none', borderRadius: 'none' }}>
            <div className="message-body">
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  <span id="TripList-icon" className="icon is-small"><i className="fas fa-globe" /></span>
                  <p>
                    {`${flight.depart_airport} to ${flight.arrive_airport}`}
                  </p>
                </div>
                <span id="TripList-icon" className="icon is-small"><i className="fas fa-angle-right" /></span>
              </div>
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  <p>{`Departure:`}</p>
                </div>
                <p>{`${moment(flight.depart_scheduledTime).format('LT')}, ${moment(flight.depart_date).format('MMMM D')}`}</p>
              </div>
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  <p>{`Arrival:`}</p>
                </div>
                <p>{`${moment(flight.arrive_scheduledTime).format('LT')}, ${moment(flight.arrive_date).format('MMMM D')}`}</p>
              </div>
              <div id="TripsFlightCard-updated" className="TripList-card-row">
                <p>{`Last Updated:`}</p>
                <p>
                  { `${moment(now).format('LT')} ${moment(now).format('MMMM D')}` }
                </p>
              </div>
            </div>
          </Link>
        </article>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsFlightCard);
