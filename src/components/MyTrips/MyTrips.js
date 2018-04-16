import React, { Component } from 'react';
import './MyTrips.css';
import TripsList from './TripsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions';


// const MyTrips = ({ trips, fetchTrips }) => {
class MyTrips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     trips: nextProps.trips
  //   })
  // }

  componentDidMount() {
    // update
    const user_id = this.state.user.id;
    this.props.fetchTrips(user_id);
    // this.props.fetchTrips(1)
    // update
  }

  render() {
    console.log('state', this.state);
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
}

const mapStateToProps = (state) => ({
  user: state.user,
  // trips: state.trips
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTrips);
