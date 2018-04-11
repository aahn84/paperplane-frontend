import React from 'react';
import './MyTrips.css';
import TripsDetail from './TripsDetail'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchTrips } from '../../actions';


const TripsList = ({ trips }) => {
  const tripEls = trips.map((trip, i) => {
    return <TripsDetail key={ i } trip={ trip } />
  })

  return (
    <div className="TripsList-container">
      { trips.length ? (
          tripEls
        ) : (
          <div id="MyTrips-noFlights">
            <p id="MyTrips-text">No flights to display</p>
            <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
            {/* <TripsDetail />
              <TripsDetail />
              <TripsDetail />
              <TripsDetail />
              <TripsDetail /> */}
          </div>
        )
      }
      {/* <div className="TripsList-content">

        <article className="message">
          <div className="message-header">
            <p>Trip Name</p>
            <button className="delete" aria-label="delete" />
          </div>
          <div className="message-body">
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-globe" /></span>
                <p>{`Seattle to Orange County`}</p>
              </div>
              <span className="icon is-small"><i className="fas fa-angle-right" /></span>
            </div>
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-paper-plane" /></span>
                <p>{`AS 510 May 4`}</p>
              </div>
              <p>{`Scheduled`}</p>
            </div>
          </div>
        </article>

      </div> */}
    </div>
  )
}

export default TripsList;
