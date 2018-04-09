import React from 'react';
import './NavBars.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const BottomNav = () => {

  return (
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small"><i className="fas fa-suitcase" /></span>
            <span>My Trips</span>
          </a>
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
  )
}

export default BottomNav;
