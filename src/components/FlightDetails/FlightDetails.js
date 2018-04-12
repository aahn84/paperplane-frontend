import React from 'react';
import './FlightDetails.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlightDetailCard from './FlightDetailCard'

const FlightDetails = ({ match, tripsById }) => {
  console.log('match', match.params);
  const tripId = match.params.id;
  const flightId = match.params.flightId;
  const trip = tripsById[tripId];
  console.log(trip);

  // console.log(tripsById);
  console.log(flightId);

  let flight

  if (trip) {
    flight = trip.flights.find(flight => flight.id == flightId)
    console.log('GOT IT', flight);
  }


  return (
    <div className="FlightDetails">
      <div className="FlightDetails-container">

        {flight ?
          (
            <div>
              <div className="FlightDetails-title-bar">
                <h1>{`Alaska (AS) ${flight.flight_num}`}</h1>
                {/* <h1>{`Alaska (AS) 578`}</h1> */}
              </div>
              <div className="FlightDetails-title-name">
                <p>{`Status: `}</p>
                {/* <p>{`Status: Scheduled`}</p> */}
              </div>

              <FlightDetailCard />
            </div>
          ) : (
            null
          )
        }

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tripsById: state.tripsById,
});

export default connect(
  mapStateToProps,
)(FlightDetails);
