import React, {Component} from 'react';
import './MyAccount.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class MyAccount extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  render() {
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

            <div id="MyAccount-buttons-div">
              <div id="MyAccountUpdate" className="MyAccount-update-button">
                <button id="MyAccount-update" className="button is-block is-info">Update Account</button>
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
  // user_id: state.user_id
});

export default connect(
  mapStateToProps,
)(MyAccount);
