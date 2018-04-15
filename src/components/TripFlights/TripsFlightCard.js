import React from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';
import moment from 'moment';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const TripsFlightCard = ({ flight, fetchTrips }) => {
  console.log(flight);
  const deleteFlight = async () => {
    const response = await axios.delete(`${BASE_URL}/api/flights/${flight.flights_id}`, { trips_id: flight.trips_id })
    if (response.status === 200) {
      //CALL DISPATCH TO REMOVE FROM STORE
      let id = 1
      // update
      fetchTrips(id);
      // update
    }
  };

  return (
    <div>
      <div className="TripFlightsList-content">
        <article className="message">
          <div className="message-header">
            <p>
              {`${flight.depart_airport} > ${flight.arrive_airport}`}
            </p>
            {/* <p>{`Seattle to Orange County`}</p> */}
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
                    {/* {`Seattle to Orange County`} */}
                  </p>
                </div>
                <span id="TripList-icon" className="icon is-small"><i className="fas fa-angle-right" /></span>
              </div>
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  {/* <span className="icon is-small"><i className="fas fa-paper-plane" /></span> */}
                  <p>{`Departure:`}</p>
                </div>
                <p>{`${moment(flight.depart_scheduledTime).format('LT')}, ${moment(flight.depart_date).format('MMMM D')}`}</p>
                {/* <p>{`6:10 PM, May 4`}</p> */}
              </div>
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  {/* <span className="icon is-small"><i className="fas fa-paper-plane" /></span> */}
                  <p>{`Arrival:`}</p>
                </div>
                <p>{`${moment(flight.arrive_scheduledTime).format('LT')}, ${moment(flight.arrive_date).format('MMMM D')}`}</p>
                {/* <p>{`8:47 PM, May 4`}</p> */}
              </div>
              <div id="TripsFlightCard-updated" className="TripList-card-row">
                <p>{`Last Updated:`}</p>
                <p>
                  { `${moment.unix(flight.updated).format('LT')} ${moment.unix(flight.updated).format('MMMM D')}` }
                </p>
                {/* <p>{`2:48 PM Apr 5`}</p> */}
              </div>
            </div>
          </Link>
        </article>

      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   tripsById: state.tripsById
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(TripsFlightCard);
