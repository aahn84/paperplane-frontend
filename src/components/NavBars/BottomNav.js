import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './NavBars.css';

const BottomNav = () => {

  return (
    // <div className="tabs is-centered">
    //    <ul>
    //      <li className="is-active"><a>Pictures</a></li>
    //      <li><a>My Trips</a></li>
    //      <li><a>Track Flight</a></li>
    //      <li><a>Documents</a></li>
    //    </ul>
    //  </div>
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small"><i className="fas fa-suitcase" /></span>
            {/* <i className="fas fa-suitcase" /> */}
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
        {/* <li>
          <a>
            <span className="icon is-small"><i className="fas fa-file-alt" /></span>
            <span>Documents</span>
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default BottomNav
