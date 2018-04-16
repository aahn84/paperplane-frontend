import React from 'react';
import './FlightDetails.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlightDetailCard from './FlightDetailCard'

const FlightDetails = ({ match, tripsById }) => {
  // console.log('match', match.params);
  const tripId = match.params.id;
  const flightId = match.params.flightId;
  const trip = tripsById[tripId];
  console.log(trip);
  let flight;
  let airlineCallsign;

  if (trip) {
    flight = trip.flights.find(flight => flight.id === flightId)
    airlineCallsign = flight.airline_callsign.toLowerCase();
  }

  return (
    <div className="FlightDetails">

      {flight ?
        (
          <div>
            <div className="FlightDetails-container">
              <div className="FlightDetails-title-bar">
                <h1 id="FlightDetails-title-h1">
                  {`${airlineCallsign[0].toUpperCase() + airlineCallsign.substring(1)} (${flight.airline_iata}) ${flight.flight_num}`}
                </h1>
                {/* <h1 id="FlightDetails-title-h1">{`Alaska (AS) 578`}</h1> */}
              </div>
              <div className="FlightDetails-title-name">
                <p>{`Status: ${flight.flight_status[0].toUpperCase() + flight.flight_status.substring(1)}`}</p>
                {/* <p>{`Status: Scheduled`}</p> */}
              </div>

              <FlightDetailCard flight={ flight }/>
            </div>
          </div>
        ) : (
          <div className="FlightDetails-container">
            <div id="TripFlights-noFlights">
              <p id="TripFlights-text">No flight information to display</p>
              <span id="TripFlights-icon-span" className="icon is-large"><i id="TripFlights-icon" className="fas fa-paper-plane" /></span>
            </div>
          </div>
        )
      }

    </div>
  )
}

const mapStateToProps = (state) => ({
  tripsById: state.tripsById,
});

export default connect(
  mapStateToProps,
)(FlightDetails);
