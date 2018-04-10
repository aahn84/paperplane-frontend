import React from 'react';
import './NavBars.css';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import WelcomeFooter from '../Welcome/WelcomeFooter';
import '../Welcome/Welcome.css';

const BottomNav = ({ location }) => {
  const path = location.pathname;

  return (path !== '/' && path !== '/signup') ? (
    <div className="tabs is-centered">
      <ul>
          <li className="is-active">
            <Link to="/mytrips">
            {/* <a> */}
              <span className="icon is-small"><i className="fas fa-suitcase" /></span>
              <span>My Trips</span>
            {/* </a> */}
          </Link>
          </li>
        <li>
          <a>
            <span className="icon is-small"><i className="fas fa-plane" /></span>
            <span>Track Flight</span>
          </a>
        </li>
        <li>
          <a>
            {/* <span className="icon is-small"><i className="fas fa-cogs" /></span> */}
            {/* <span className="icon is-small"><i className="fas fa-sliders-h" /></span> */}
            <span className="icon is-small"><i className="fas fa-wrench" /></span>
            <span>Options</span>
          </a>
        </li>
      </ul>
    </div>
  ) : ( <WelcomeFooter /> )
}

export default withRouter(BottomNav);
