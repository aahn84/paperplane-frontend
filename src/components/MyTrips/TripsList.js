import React from 'react';
import './MyTrips.css';
import TripsDetail from './TripsDetail'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchTrips } from '../../actions';


// const TripsList = ({ trips }) => {
const TripsList = (props) => {
  let trips = props.trips;
  // console.log('TRIPSLST', trips);
  let tripEls = Object.keys(trips).map(key => {
    let trip = trips[key]
    // console.log('TRIP', trip);
    return <TripsDetail key={ key } trip={ trip } trip_id={ key } />
  })
  // const tripEls = trips.map((trip, i) => {
  //   return <TripsDetail key={ i } trip={ trip } />
  // })

  return (
    <div className="TripsList-container">
      { tripEls.length
        ? tripEls
        : <div id="MyTrips-noTrips">
            <p id="MyTrips-text">No trips to display</p>
            <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
          </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  trips: state.tripsById
});

export default connect(
  mapStateToProps
)(TripsList);

// export default TripsList;
