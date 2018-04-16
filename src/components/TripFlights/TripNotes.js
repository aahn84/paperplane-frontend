import React, { Component } from 'react';
import './TripFlights.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrips } from '../../actions'
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class TripNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user.user_id,
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
    this.setState({

    })
    // update
    // this.props.fetchTrips(1)
    this.props.fetchTrips(this.state.user_id)
    // update
  }

  handleChange = (e) => {
    this.setState({ notes: e.target.value }, () => {
      const { trip_id, notes } = this.state;
      return axios.patch(`${BASE_URL}/api/trips/${trip_id}`, { notes })
      // .then(res => {
      //   console.log(res.data);
      // })
      // .catch(err => {
      //   console.log(err);
      // })
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
                default={""}
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
  user: state.user,
  tripsById: state.tripsById,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTrips
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripNotes);
