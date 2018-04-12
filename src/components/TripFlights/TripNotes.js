import React, { Component } from 'react';
import './TripFlights.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveTrip, fetchTrips } from '../../actions'
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;

class TripNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trip_id: props.id,
      notes: props.notes || '',
      // notes: props.tripsById[props.id].notes || '',
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      notes: nextProps.notes
    })
  }

  componentDidMount() {
    this.props.fetchTrips(1)
  }

  handleChange = (e) => {
    this.setState({ notes: e.target.value }, () => {
      const { trip_id, notes } = this.state
      axios.patch(`${BASE_URL}/api/trips/${trip_id}`, { notes })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  render() {

    return (
      <div className="TripNotes">
        <div className="TripNotes-container">
          <p className="TripNotes-title">Notes:</p>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Trip Notes"
                defaultValue={""}
                value={ `${ this.state.notes }` }
                onChange={ this.handleChange }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tripsById: state.tripsById,
  setTrip: state.setTrip,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveTrip,
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripNotes);
