import React from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TripFlightsList from './TripFlightsList'


const TripFlights = ({ match, tripsById }) => {
  const { id } = match.params;
  const trip = tripsById[id];

  return (
    <div className="TripFlights">
      {
        // trip && trip.flights ?
        trip ?
        (
            <div id="TripFlights-container" className="has-text-centered">
              <div className="TripFlights-title-bar">
                <h1>Flights</h1>
                <span id="TripFlights-add" className="icon is-medium">
                  <Link to={ `/mytrips/${id}/addflight` }>
                  <i className="fas fa-plus-circle" />
                </Link>
              </span>
            </div>
            <div className="TripFlights-title-name">
              <div>
                <p>{`${trip.title}`}</p>
                {/* <p>{`My Trip Name  May 4 - May 7`}</p> */}
              </div>
            </div>

            <TripFlightsList id={id} flights={trip.flights} notes={trip.notes}/>

          </div>
        ) : (
          <div id="TripFlights-container" className="has-text-centered">
            <div className="TripFlights-title-bar">
              <h1>Flights</h1>
                <span id="TripFlights-add" className="icon is-medium">
                  <Link to={ `/mytrips/${id}/addflight` }>
                  <i className="fas fa-plus-circle" />
                </Link>
              </span>
            </div>

            <div id="TripFlights-noFlights">
              <p id="TripFlights-text">No flights to display</p>
              <span id="TripFlights-icon-span" className="icon is-large"><i id="TripFlights-icon" className="fas fa-paper-plane" /></span>
            </div>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  tripsById: state.tripsById
});

export default connect(
  mapStateToProps,
)(TripFlights);
