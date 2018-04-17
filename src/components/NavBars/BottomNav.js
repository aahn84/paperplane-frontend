import React from 'react';
import './NavBars.css';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import WelcomeFooter from '../Welcome/WelcomeFooter';
import '../Welcome/Welcome.css';

const BottomNav = ({ location }) => {
  const path = location.pathname;

  return (path !== '/' && path !== '/signup') ? (
    <div className="tabs is-centered">
      <ul>
        <li className={ path === '/mytrips' ? "is-active" : "" }>
          <Link to="/mytrips">
            <span className="icon is-small"><i className="fas fa-suitcase" /></span>
            <span>My Trips</span>
          </Link>
        </li>

        {/* <li className={ path === '/track' ? "is-active" : "" }>
          <Link to="/track">
            <span className="icon is-small"><i className="fas fa-plane" /></span>
            <span>Track Flight</span>
          </Link>
        </li> */}

        <li className={ path === '/myaccount' ? "is-active" : "" }>
          <Link to="/myaccount">
            <span className="icon is-small"><i className="fas fa-user" /></span>
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </div>
  ) :
  ( <WelcomeFooter /> )
}

export default withRouter(BottomNav);
