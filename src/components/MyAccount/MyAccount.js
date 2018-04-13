import React, {Component} from 'react';
import './MyAccount.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_DEV;

class MyAccount extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    notifications_on: false,
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('CLICKED!', this.state);

    const { first_name, last_name, email, password, notifications_on } = this.state;
    // axios.put(`${BASE_URL}/api/users/${id}}`, { first_name, last_name, email, password, notifications_on })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  render() {
    console.log(this.state);
    return (
      <div className="MyAccount">
        <div id="MyAccount-container">
          <div className="MyAccount-title-bar">
            <h1 className="MyAccount-title">My Account</h1>
          </div>

          <form>
            <div className="WelcomeSignup-fullname">
              <div id="WelcomeSignup-first" className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    required="required"
                    value={ this.state.first_name }
                    onChange={ (e) => this.setState({ first_name: e.target.value })}
                  />
                </div>
              </div>
              <div id="WelcomeSignup-last" className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    required="required"
                    value={ this.state.last_name }
                    onChange={ (e) => this.setState({ last_name: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Your Email"
                  required="required"
                  value={ this.state.email }
                  onChange={ (e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Your Password"
                  required="required"
                  value={ this.state.password }
                  onChange={ (e) => this.setState({ password: e.target.value }) }
                />
              </div>
            </div>

            <div id="MyAccount-notifications">
              <p>Nofications:</p>
              <div className="buttons has-addons">
                <span
                  className={ this.state.notifications_on ? 'button is-info is-selected' : 'button' }
                  onClick={ () => this.setState({ notifications_on: true }) }>
                  On
                </span>
                <span
                  className={ this.state.notifications_on ? 'button' : 'button is-info is-selected' }
                  onClick={ () => this.setState({ notifications_on: false }) }>
                  Off
                </span>
              </div>

              {/* <span className="button is-info is-selected">On</span>
              <span className="button">Off</span> */}
              </div>
            <div id="MyAccount-buttons-div">
              <div id="MyAccountUpdate" className="MyAccount-update-button">
                <button
                  id="MyAccount-update"
                  className="button is-block is-info"
                  onClick={ this.submitForm }
                  onTouchEnd={ this.submitForm }
                  >Update Account
                </button>
              </div>

              <div id="MyAccountLogout">
                <Link id="MyAccount-buttons" to="/">
                <button id="MyAccount-logout" className="button is-block is-info">Logout</button>
              </Link>
            </div>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // user: state.user,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//
// }, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(MyAccount);
