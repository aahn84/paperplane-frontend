import React, {Component} from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserData } from '../../actions';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class WelcomeSignup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isFetchingUser: false,
    signupSuccess: true,
  }

  signup = async () => {
  const { isFetchingUser, signupSuccess, ...signupBody } = this.state;
    if (
      signupBody.first_name &&
      signupBody.last_name &&
      signupBody.email &&
      signupBody.password
    ) {
      this.setState({ isFetchingUser: true });
      const response = await axios.post(`${BASE_URL}/auth/signup`, signupBody);
      if (response.status === 200) {
        const token = response.headers.auth.split(' ')[1];
        localStorage.setItem('token', token);
        const { fetchUserData, history } = this.props;
        fetchUserData();
        // history.push('/mytrips');
        history.push('/myaccount');
      }
    }
    this.setState({ isFetchingUser: false });
    this.setState({ signupSuccess: false });
  }

  render() {

    return (
      <div id="Welcome-container" className="has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Sign Up</h3>
          <p className="subtitle has-text-grey">Please sign up to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="/paper-plane.png" alt="logo" />
            </figure>
            <form onSubmit={ (e) => {
              e.preventDefault();
              this.signup();
            } }>
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
              <button
                id="LoginSignup-button"
                className={`button is-block is-info is-fullwidth ${ this.state.isFetchingUser ? 'is-loading' : ''}`}
                onTouchStart={ (e) => {
                  e.preventDefault();
                  this.signup();
                } }
                >Sign Up
              </button>
            </form>

            { this.state.signupSuccess ? (<div></div>) : (<div className="LoginSignup-error">
              <p>Error signing up</p>
            </div>) }
          </div>
          <p className="has-text-grey">
            Already have an account?
          </p>
          <Link to="/">
              Login
          </Link>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUserData,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(WelcomeSignup);
