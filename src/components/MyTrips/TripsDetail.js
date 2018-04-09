import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';


const Trip = () => {

  return (
    <div>

      {/* <div className="TripsList-container"> */}
        <div className="TripsList-content">
          <article className="message">
            <div className="message-header">
              <p>Trip Name</p>
              <button className="delete" aria-label="delete" />
              {/* <a className="button"><i className="fas fa-angle-down" /></a> */}
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
                </div>
                <p>{`Scheduled`}</p>
              </div>
            </div>
          </article>

        </div>
        {/* </div> */}

    </div>
  )
}

export default Trip
