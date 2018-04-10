import React, {Component} from 'react';
import './Welcome.css';
import WelcomeHeader from './WelcomeHeader';
import WelcomeFooter from './WelcomeFooter';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class WelcomeLogin extends Component {
  state = {
    email: '',
    password: '',
    isLoggingIn: false,
  };

  // componentDidMount() {
  //   const token = JSON.parse(localStorage.getItem('token'));
  //   if (token) this.props.history.push('/mytrips');
  // }

  render() {
    return (
      <div>
        <WelcomeHeader />

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
            <Link to="/signup">
                Sign Up
            </Link>
          </div>
        </div>

        <WelcomeFooter />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user_id: state.user_id
});

export default connect(
  mapStateToProps,
)(WelcomeLogin);
