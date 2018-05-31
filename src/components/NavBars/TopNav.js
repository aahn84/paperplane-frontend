import React from 'react';
import './NavBars.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../Welcome/Welcome.css';
import NotifyAlert from '../../NotifyAlert/NotifyAlert';

const TopNav = ({ location }) => {
  // const path = location.pathname;
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to='/mytrips'>
              <div className="navbar-item">
              {/* <a className="navbar-item"> */}
                  <img src="/paper-plane.png" alt="logo" />
                  <p id="WelcomeHeader-title">paperplane</p>
                {/* </a> */}
              </div>
            </Link>
          </div>

          {/* <NotifyAlert /> */}

          <div class="notify-alert-container">
            <div class="notify-alert">
              <p class="notify-text">***As of 06/02/18, access to the Aviation-Edge API will be discontinued. Click <a href="https://youtu.be/7qhBXYv4Ebs" target="_blank"><strong>HERE</strong></a> for a complete demo.***</p>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default withRouter(TopNav);
