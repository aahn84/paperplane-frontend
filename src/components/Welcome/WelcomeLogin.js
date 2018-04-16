import React, {Component} from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserData } from '../../actions';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class WelcomeLogin extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    isFetchingUser: false,
    loginSuccess: true,
  }

  // componentDidMount() {
  //   const token = JSON.parse(localStorage.getItem('token'));
  //   if (token) this.props.history.push('/mytrips');
  // }

  login = async () => {
  const { loading, loginSuccess, ...loginBody } = this.state;
    if (loginBody.email && loginBody.password) {
      this.setState({ loading: true, isFetchingUser: true });
      const response = await axios.post(`${BASE_URL}/api/auth/login`, loginBody);
      if (response.status === 200) {
        const token = response.headers.auth.split(' ')[1];
        localStorage.setItem('token', token);
        const { history, fetchUserData } = this.props;
        fetchUserData();
        history.push('/mytrips');
      }
    }
    this.setState({ loading: false });
    this.setState({ loginSuccess: false });
  }


  render() {
    // let loginSuccess;
    // let loginSuccess = true;

    return (
      <div id="Welcome-container" className="has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to proceed.</p>
          <div className="box">
            <figure className="avatar">
              <img src="/paper-plane.png" alt="logo" />
            </figure>
            <form>
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
                className={`button is-block is-info is-fullwidth ${ this.state.loading ? 'is-loading' : ''}` }
                >Login
              </button>
            </form>

            { this.state.loginSuccess ? (<div></div>) : (<div className="LoginSignup-error">
              <p>Error logging in</p>
            </div>) }

          </div>
          <p className="has-text-grey">
            Don't have an account?
          </p>
          <Link to="/signup">
              Sign Up
          </Link>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   // token: state.token
// });

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUserData,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(WelcomeLogin);
