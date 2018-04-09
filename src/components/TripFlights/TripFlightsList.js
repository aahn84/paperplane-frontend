import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TripFlights.css';
import TripsFlightCard from './TripsFlightCard'
import TripNotes from './TripNotes'


const TripFlightsList = () => {

  return (
    <div className="TripFlightsList-container">
      <TripsFlightCard />
      <TripsFlightCard />

      {/* <div className="TripFlightsList-content">

        <p className="TripFlightsList-departure-title">{`May 4, 2018 Departures`}</p>
        <article className="message">
          <div className="message-header">
            <p>{`Seattle to Orange County`}</p>
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


        <p className="TripFlightsList-departure-title">{`May 7, 2018 Departures`}</p>
        <article className="message">
          <div className="message-header">
            <p>{`Orange County to Seattle`}</p>
          </div>
          <div className="message-body">
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-globe" /></span>
                <p>{`Orange County to Seattle`}</p>
              </div>
              <span className="icon is-small"><i className="fas fa-angle-right" /></span>
            </div>
            <div className="TripList-card-row">
              <div className="TripList-card-row">
                <span className="icon is-small"><i className="fas fa-paper-plane" /></span>
                <p>{`AS 510 May 7`}</p>
              </div>
              <p>{`Scheduled`}</p>
            </div>
          </div>
        </article>


      </div> */}


      <TripNotes />
    </div>
  )
}

export default TripFlightsList
