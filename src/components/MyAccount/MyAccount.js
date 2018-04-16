import React, {Component} from 'react';
import './MyAccount.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

class MyAccount extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    notifications_on: false,
    user_id: '',
    updated: false,
  }

  componentDidMount() {
    this.populateUser();
  }

  populateUser = () => {
    if (this.props.user) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        phone: this.props.user.phone,
        password: this.props.user.password,
        notifications_on: this.props.user.notifications_on,
        user_id: this.props.user.user_id
      })
    }
  }

  validatePhone = () => {
    if (this.state.phone) {
      let formattedPhone = (this.state.phone).replace(/\D/g,'');

      if (formattedPhone.length === 10) {
        this.setState({ phone: formattedPhone })
      }
      else {
        this.setState({ phone: null })
      }
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    // console.log('CLICKED!', this.state);
    this.validatePhone();
    this.setState({ loading: true });

    const { first_name, last_name, email, phone, password, notifications_on, user_id } = this.state;

    // !!!UPDATE!!!
    axios.patch(`${BASE_URL}/api/users/${this.state.user_id}`, { first_name, last_name, email, password, notifications_on })
    // !!!UPDATE!!!
      .then(res => {
        console.log('patched!!!', res);
        if (res.status === 201) {
          this.setState({updated: true})
        }
        return res
      })
      .catch(err => {
        console.log(err);
      })
    this.setState({ loading: false });
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
                  placeholder="Email"
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
                  type="phone"
                  placeholder="Phone"
                  value={ this.state.phone }
                  required={ this.state.notifications_on ? "required" : ""}
                  // required="required"
                  onChange={ (e) => this.setState({ phone: e.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
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
            </div>

            <div id="MyAccount-buttons-div">
              <div id="MyAccountUpdate" className="MyAccount-update-button">
                <button
                  id="MyAccount-update"
                  className="button is-block is-info"
                  onClick={ this.submitForm }
                  onTouchStart={ this.submitForm }
                  >Update Account
                </button>
              </div>

              {
                this.state.updated
                ? <p className="MyAccount-updated">Account Updated</p>
                : null
              }

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
  token: state.token,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUser
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
