import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyTrips.css';
import Trip from './Trip'


const TripsList = () => {

  return (
    <div className="TripsList-container">
      <div className="TripsList-content">

        {/* <article className="message is-link"> */}
        <article className="message">
          <div className="message-header">
            <p>Trip Name</p>
            <button className="delete" aria-label="delete" />
            {/* <button>
              <span className="icon">
                <i className="fas fa-plus-circle"></i>
              </span>
            </button> */}
            {/* <a className="button">
              <span className="icon is-small">
                <i className="fas fa-plus"></i>
              </span>
            </a> */}
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
            <div className="TripList-card-row">
              <span className="icon is-small"><i className="fas fa-plus-circle" /></span>
            </div>
          </div>
        </article>

        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {`Alaska (AS) 510`}
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </a>
          </header>

          <div className="card-content">
            <p className="Trips-card-content">{`Status: Scheduled`}</p>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
          {/* <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer> */}
        </div>

      </div>
    </div>
  )
}

export default TripsList
