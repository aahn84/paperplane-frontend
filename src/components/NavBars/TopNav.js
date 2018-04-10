import React from 'react';
import './NavBars.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const TopNav = () => {

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/paper-plane.png" alt="logo" />
              <p id="WelcomeHeader-title">paperplane</p>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
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

export default TopNav;
