import React from 'react';
import './MyTrips.css';
import TripsList from './TripsList';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchTrips } from '../../actions';
import axios from 'axios';

const MyTrips = ({ trips, fetchTrips }) => {
  // const tripsByUserId =  axios.get(`http://localhost:8080/api/trips/1`)
  //   .then(trips => {
  //     console.log('1', trips.data.data);
  //     return trips.data.data
  //   })
  // console.log('2', tripsByUserId);

  // let tripEls = tripsByUserId.map((trip, i) => {
  //   return <DetailReview key={ i } review={ review }/>
  // })

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
        {
          trips.length ? (
            <TripsList trips={ trips } />
          ) : (
            <div id="MyTrips-noTrips">
              <p id="MyTrips-text">No trips to display</p>
              <span id="MyTrips-icon-span" className="icon is-large"><i id="MyTrips-icon" className="fas fa-paper-plane" /></span>
            </div>
          )
        }


      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  trips: state.trips
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);
