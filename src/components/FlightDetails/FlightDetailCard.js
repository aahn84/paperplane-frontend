import React from 'react';
import './FlightDetails.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


const FlightDetailCard = () => {

  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {`Alaska (AS) 510`}
          </p>
          <a className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>

        <div className="card-content">
          {/* <p className="Flight-card-content">{`Status: Scheduled`}</p> */}
          <div className="FlightDetail-card-row">
            <h6>Departure:</h6>
            <p className="FlightDetail-airport">{`Seattle, WA (SEA)`}</p>
          </div>
          <div className="Departure-content">
            <div className="FlightDetail-card-row">
              <p>{`Scheduled:`}</p>
              <p>{`6:10pm May 4`}</p>
            </div>
            {/* <br /> */}
            <div className="FlightDetail-card-row">
              <p>{`Current Weather:`}</p>
              <p>{`51 F / 11 C`}</p>
            </div>
            {/* <br /> */}
            {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>

          <div className="FlightDetail-card-row">
            <h6>Arrival:</h6>
            <p className="FlightDetail-airport">{`Orange County, CA (SNA)`}</p>
          </div>
          <div className="Arrival-content">
            <div className="FlightDetail-card-row">
              <p>{`Scheduled:`}</p>
              <p>{`8:47pm May 4`}</p>
            </div>
            <div className="FlightDetail-card-row">
              <p>{`Current Weather:`}</p>
              <p>{`60 F / 16 C`}</p>
            </div>
            {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>

          <div className="FlightDetail-card-row">
            <h6>Flight Info:</h6>
          </div>
          <div className="Flight-other-content">
            <div className="FlightDetail-card-row">
              <p>{`Scheduled Duration:`}</p>
              <p>{`2 hr 37 min`}</p>
            </div>
            {/* <br /> */}
            <div className="FlightDetail-card-row">
              <p>{`Aircraft:`}</p>
              <p>{`Boeing 737-800`}</p>
            </div>
          </div>

        </div>
        <footer className="card-footer">
          <a className="card-footer-item">
            Share Flight Details
            <span id="FlightDetailCard-share" className="icon">
              <i className="fas fa-share-square" />
            </span>
          </a>
          {/* <a href="#" className="card-footer-item">Edit</a> */}
          {/* <a href="#" className="card-footer-item">Remove Flight</a> */}
        </footer>

        {/* <button className="button is-block is-info is-fullwidth">Share Flight Details</button> */}

      </div>
    </div>
  )
}

export default FlightDetailCard;
