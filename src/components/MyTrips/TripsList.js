import React from 'react';
import './MyTrips.css';
import TripsDetail from './TripsDetail'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchTrips } from '../../actions';


const TripsList = ({ trips }) => {
  const tripEls = trips.map((trip, i) => {
    return <TripsDetail key={ i } trip={ trip } />
  })

  return (
    <div className="TripsList-container">
      { trips.length ? (
          tripEls
        ) : (
          <div id="MyTrips-noTrips">
            <p id="MyTrips-text">No trips to display</p>
            <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
          </div>
          // <div id="MyTrips-noFlights">
          //   <p id="MyTrips-text">No flights to display</p>
          //   <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
          //   {/* <TripsDetail />
          //     <TripsDetail />
          //     <TripsDetail />
          //     <TripsDetail />
          //     <TripsDetail /> */}
          // </div>
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  trips: state.trips
});

export default connect(
  mapStateToProps
)(TripsList);
