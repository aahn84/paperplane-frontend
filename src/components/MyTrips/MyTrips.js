import React from 'react';
import './MyTrips.css';
import TripsList from './TripsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';

const MyTrips = ({ trips, fetchTrips }) => {
  fetchTrips(1);

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
        
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  trips: state.trips
});

const mapDispatchToProps = (display) => ({
  fetchTrips
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);
