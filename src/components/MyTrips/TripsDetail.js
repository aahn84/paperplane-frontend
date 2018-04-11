import React from 'react';
import './MyTrips.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchSingleTrip } from '../../actions';
import moment from 'moment';
moment().format();


const Trip = ({ trip }) => {

  return (
    <div>

      {/* <div className="TripsList-container"> */}
        <div className="TripsList-content">
          <article className="message">
            <div className="message-header">
              <p>{ trip.title }</p>
              {/* <p>{ `My Trip` }</p> */}
              <button className="delete" aria-label="delete" />
              {/* <a className="button"><i className="fas fa-angle-down" /></a> */}
            </div>
            <div className="message-body">
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  <span className="icon is-small"><i className="fas fa-globe" /></span>
                  <p>{`${trip.depart_airport} to ${trip.arrive_airport} `}</p>
                  {/* <p>{`Seattle to Orange County`}</p> */}
                </div>
                <span className="icon is-small"><i className="fas fa-angle-right" /></span>
              </div>
              <div className="TripList-card-row">
                <div className="TripList-card-row">
                  <span className="icon is-small"><i className="fas fa-paper-plane" /></span>
                  {/* <span className="icon is-small"><i className="fas fa-plane" /></span> */}
                  <p>{`${trip.airline_iata} ${trip.flight_num} ${moment(trip.depart_date).format('MMMM D')}`}</p>
                  {/* <p>{`AS 510 May 4`}</p> */}
                </div>
                <p>{ trip.flight_status[0].toUpperCase() + trip.flight_status.substring(1) }</p>
                {/* <p>{`Scheduled`}</p> */}
              </div>
            </div>
          </article>

        </div>
        {/* </div> */}

    </div>
  )
}

export default Trip;
