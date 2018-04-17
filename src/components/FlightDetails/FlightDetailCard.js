import React from 'react';
import './FlightDetails.css';
import moment from 'moment';


const FlightDetailCard = ({ flight }) => {
  let airlineCallsign = flight.airline_callsign.toLowerCase();

  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {`${airlineCallsign[0].toUpperCase() + airlineCallsign.substring(1)} (${flight.airline_iata}) ${flight.flight_num}`}
          </p>
          <a className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>

        <div className="card-content">
          <div className="FlightDetail-card-row">
            <h6>Departure:</h6>
            <p className="FlightDetail-airport">
              {`${flight.depart_airport}`}
            </p>
          </div>
          <div className="Departure-content">
            <div className="FlightDetail-card-row">
              <p>{`Scheduled:`}</p>
              <p>{`${moment(flight.depart_scheduledTime).format('LT')}, ${moment(flight.depart_date).format('MMMM D')}`}</p>
            </div>
            <div className="FlightDetail-card-row">
              <p>{`Terminal / Gate:`}</p>
              <p>{`${flight.depart_terminal} ${flight.depart_gate}`}</p>
            </div>
          </div>

          <div className="FlightDetail-card-row">
            <h6>Arrival:</h6>
            <p className="FlightDetail-airport">
              {`${flight.arrive_airport}`}
            </p>
          </div>
          <div className="Arrival-content">
            <div className="FlightDetail-card-row">
              <p>{`Scheduled:`}</p>
              <p>{`${moment(flight.arrive_scheduledTime).format('LT')}, ${moment(flight.arrive_date).format('MMMM D')}`}</p>
            </div>
            <div className="FlightDetail-card-row">
              <p>{`Terminal / Gate:`}</p>
              <p>{`${flight.depart_terminal} ${flight.depart_gate}`}</p>
            </div>
            <div className="FlightDetail-card-row">
              <p>{`Baggage Claim:`}</p>
              <p>{`${flight.baggage_claim}`}</p>
            </div>
          </div>

          <div className="FlightDetail-card-row">
            <h6>Aircraft Info:</h6>
          </div>
          <div className="Flight-other-content">
            <div className="FlightDetail-card-row">
              <p>{`${flight.aircraft_info}`}</p>
            </div>
            <div className="FlightDetail-card-row">
              <p id="FlightDetailCard-flightTimes">{`*Flight times are listed in local time`}</p>
            </div>
          </div>
        </div>

        {/* <footer className="card-footer">
          <Link to='/mytrips/:id/:flightId/share'>
            <a className="card-footer-item">
              Share Flight Details
              <span id="FlightDetailCard-share" className="icon">
                <i className="fas fa-share-square" />
              </span>
            </a>
          </Link>
        </footer> */}

      </div>
    </div>
  )
}

export default FlightDetailCard;
