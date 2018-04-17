import React from 'react';
import './TripFlights.css';
import TripsFlightCard from './TripsFlightCard'
import TripNotes from './TripNotes'

const TripFlightsList = ({ id, flights, notes }) => {
  const flightEls = flights.map((flight, i) => {
    return <TripsFlightCard key={ i } flight={ flight } />
  })

  return (
    <div className="TripFlightsList-container">
      {
        flights.length ?
        (
          <div>
            {flightEls}

            <TripNotes
              id={id}
              notes={notes}
            />
          </div>
        ) : (
          <div id="TripFlights-noFlights">
            <p id="TripFlights-text">No flights to display</p>
            <span id="TripFlights-icon-span" className="icon is-large"><i id="TripFlights-icon" className="fas fa-paper-plane" /></span>
          </div>
        )
      }
    </div>
  )
}

export default TripFlightsList;
