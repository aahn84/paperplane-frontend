import React from 'react';
import './NavBars.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../Welcome/Welcome.css';

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
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="tabs is-right"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(TopNav);
