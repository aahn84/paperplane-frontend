import React from 'react';
import './FlightDetails.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ShareFlightForm = () => {

  return (
    <div className="ShareFlightForm">
      <div id="ShareFlightForm-container">
        <div className="ShareFlightForm-title-bar">
          <h1 className="ShareFlightForm-title">
            Share Flight
          </h1>
        </div>

        <form id="ShareFlightForm-form">
          <div className="ShareFlightForm-form">
            <div className="field">
              <label className="label">Mobile Number:</label>
              <div className="control">
                <input
                  className="input"
                  type="phone"
                  placeholder="(555) 555-5555"
                  required="required"
                  // onChange={ (e) => this.setState({ airline_name: e.target.value }) }
                />
              </div>
            </div>

            {/* <div className="field">
              <label className="label">Flight Number:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="ex: 123"
                  required="required"
                  // onChange={ (e) => this.setState({ flight_num: e.target.value }) }
                />
              </div>
            </div> */}

            {/* <div className="field">
              <label className="label">Departure Date:</label>

              <div className="control">
                <input
                  className="input"
                  type="text"
                  // placeholder={moment().format('l')}
                  required="required"
                  // onChange={ (e) => this.setState({ depart_date: moment(e.target.value).format('YYYY-MM-DD') }) }
                />
              </div>
            </div> */}

            <div className="ShareFlightForm-send-cancel">
              <div id="ShareFlightForm-buttons">
                <button id="ShareFlightForm-add"
                  className={`button is-block is-info ${ this.state.loading ? 'is-loading' : ''}`}
                  // onClick={ this.submitForm }
                  // onTouchStart={ this.submitForm }
                  >Share Trip
                </button>
              </div>

              <Link id="ShareFlightForm-buttons" to="/mytrips">


                {/* !!!UPDATE LINK ROUTE */}


                <button id="ShareFlightForm-cancel" className="button is-block is-info">Cancel</button>
              </Link>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tripsById: state.tripsById,
});

export default connect(
  mapStateToProps,
)(ShareFlightForm);
