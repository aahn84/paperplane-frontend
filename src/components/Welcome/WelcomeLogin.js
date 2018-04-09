import React from 'react';
import './Welcome.css';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

const WelcomeLogin = () => {

  return (
    <div>
      <div id="Welcome-container" className="has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="./paper-plane.png" alt="paperplane-logo" />
            </figure>
            <form>
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
              <button className="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
          <p className="has-text-grey">
            Don't have an account?
          </p>
          <a href="../">Sign Up</a>
        </div>
      </div>
    </div>
  )
}

export default WelcomeLogin;
