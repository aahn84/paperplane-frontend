import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';


const Trip = () => {

  return (
    // <div className="TripsList-container">
      <div className="TripsList-content">

        {/* <article className="message is-link"> */}
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
                {/* <span className="icon is-small"><i className="fas fa-plane" /></span> */}
                <p>{`AS 510 May 4`}</p>
                {/* <p>{`AS 510`}</p> */}
              </div>
              {/* <p>{`May 4`}</p> */}
              <p>{`Scheduled`}</p>
            </div>
          </div>
        </article>

      </div>
  )
}

export default Trip
