import React from 'react';
import './TripFlights.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const TripsFlightCard = () => {

  return (
    <div>
      <div className="TripFlightsList-content">

        <p className="TripFlightsList-departure-title">{`May 4, 2018 Departures`}</p>
        {/* <article className="message is-link"> */}
        <article className="message">
          <div className="message-header">
            <p>{`Seattle to Orange County`}</p>
            {/* <button className="delete" aria-label="delete" /> */}
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
                {/* <span className="icon is-small"><i className="fas fa-paper-plane" /></span> */}
                <p>{`Scheduled Departure:`}</p>
              </div>
              <p>{`6:10 PM, May 4`}</p>
            </div>
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                {/* <span className="icon is-small"><i className="fas fa-paper-plane" /></span> */}
                <p>{`Scheduled Arrival`}</p>
              </div>
              <p>{`8:47 PM, May 4`}</p>
            </div>
            <div id="TripsFlightCard-updated" className="TripList-card-row">
              <p>{`Last Updated:`}</p>
              <p>{`2:48 PM Apr 5`}</p>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}

export default TripsFlightCard;
