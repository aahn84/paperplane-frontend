import React from 'react';
import './MyTrips.css';
import TripsList from './TripsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MyTrips = ({ trips }) => {

  return (
    <div className="MyTrips">
      <div id="MyTrips-container" className="has-text-centered">
        <div className="MyTrips-title-bar">
          <h1>My Trips</h1>
          <span id="MyTrips-add" className="icon is-medium">
            <Link to="/mytrips/addtrip">
              <i className="fas fa-plus-circle" />
            </Link>
          </span>
        </div>

        <TripsList />

        {/* {
          trips.length ? (
            <TripsList trips={ trips } />
          ) : (
            <div id="MyTrips-noTrips">
              <p id="MyTrips-text">No trips to display</p>
              <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
            </div>
          )
        } */}

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  trips: state.trips
});

export default connect(
  mapStateToProps
)(MyTrips);
