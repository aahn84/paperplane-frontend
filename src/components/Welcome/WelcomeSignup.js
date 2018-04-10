import React, {Component} from 'react';
import './Welcome.css';
import WelcomeHeader from './WelcomeHeader';
import WelcomeFooter from './WelcomeFooter';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import { setWelcomeView, hideWelcomeView } from '../../actions';

class WelcomeSignup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    isSigningUp: false,
  };

  // componentDidMount() {
  //   if (JSON.parse(localStorage.getItem('token'))) {
  //     this.props.history.push('/mytrips');
  //   }
  // }

  render() {
    return (
      <div>
        <WelcomeHeader />

        <div id="Welcome-container" className="has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Sign Up</h3>
            <p className="subtitle has-text-grey">Please sign up to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="./paper-plane.png" alt="paperplane-logo" />
              </figure>
              <form>
                <div className="WelcomeSignup-fullname">
                  <div id="WelcomeSignup-first" className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="First Name" required="required"/>
                    </div>
                  </div>
                  <div id="WelcomeSignup-last" className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Last Name" required="required"/>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="email" placeholder="Your Email" required="required"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="password" placeholder="Your Password" required="required"/>
                  </div>
                </div>
              <button className="button is-block is-info is-fullwidth">Sign Up</button>
            </form>
          </div>
          <p className="has-text-grey">
            Already have an account?
          </p>
          <a>
            <Link to="/">
                Login
            </Link>
          </a>
        </div>
      </div>

      <WelcomeFooter />
    </div>
    )
  }
}

export default WelcomeSignup;
