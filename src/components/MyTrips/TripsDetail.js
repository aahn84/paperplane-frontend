import React from 'react';
import './MyTrips.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';
import moment from 'moment';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;


const Trip = ({ fetchTrips, trip }) => {
  const firstFlight = trip.flights[0]

  const deleteTrip = async () => {
    const response = await axios.delete(`${BASE_URL}/api/trips/${trip.id}`)
    if (response.status === 200) {
      //CALL DISPATCH TO REMOVE FROM STORE
      let id = 1
      fetchTrips(1);
    }
  };

  return (
    <div>

      {/* <div className="TripsList-container"> */}
        <div className="TripsList-content">
          <article className="message">
            <div className="message-header">
              <p>{ trip.title }</p>
              {/* <p>{ `My Trip` }</p> */}
              <button
                className="delete"
                aria-label="delete"
                onClick={ () => deleteTrip(trip.id) }
              />
              {/* <a className="button"><i className="fas fa-angle-down" /></a> */}
            </div>
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
                  {/* <span className="icon is-small"><i className="fas fa-plane" /></span> */}
                  <p>{`${firstFlight.airline_iata} ${firstFlight.flight_num} ${moment(firstFlight.depart_date).format('MMMM D')}`}</p>
                  {/* <p>{`AS 510 May 4`}</p> */}
                </div>
                <p>{ firstFlight.flight_status[0].toUpperCase() + firstFlight.flight_status.substring(1) }</p>
                {/* <p>{`Scheduled`}</p> */}
              </div>
            </div>
          </article>

        </div>
        {/* </div> */}

    </div>
  )
}

// const mapStateToProps = (state) => ({
//   trips: state.trips
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Trip);
