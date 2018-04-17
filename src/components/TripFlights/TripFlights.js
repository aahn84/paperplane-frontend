import React, { Component } from 'react';
import './TripFlights.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TripFlightsList from './TripFlightsList'
import { fetchTrips } from '../../actions';


class TripFlights extends Component {

  componentDidMount() {
    this.props.fetchTrips(this.props.user.user_id);
  }

  renderTrips = (trip, id) => {
    return(
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
        </div>
      </div>

      <TripFlightsList id={id} flights={trip.flights} notes={trip.notes}/>

    </div>
    )
  }

  renderNoTrips = (id) => {
    return (
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

  render() {
    const { id } = this.props.match.params;
    const trip = this.props.tripsById[id];

    return (
      <div className="TripFlights">
        {
          trip
            ? this.renderTrips(trip, id)
            : this.renderNoTrips(id)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  tripsById: state.tripsById
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripFlights);
