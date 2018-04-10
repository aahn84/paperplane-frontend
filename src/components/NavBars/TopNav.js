import React from 'react';
import './NavBars.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import WelcomeHeader from '../Welcome/WelcomeHeader';
import '../Welcome/Welcome.css';

const TopNav = ({ location }) => {
  const path = location.pathname;
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/paper-plane.png" alt="logo" />
              <p id="WelcomeHeader-title">paperplane</p>
            </a>
            {/* <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span> */}
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

  // return (path !== '/' && path !== '/signup') ? (
  //   <div>
  //     <nav className="navbar">
  //       <div className="container">
  //         <div className="navbar-brand">
  //           <a className="navbar-item">
  //             <img src="/paper-plane.png" alt="logo" />
  //             <p id="WelcomeHeader-title">paperplane</p>
  //           </a>
  //           <span className="navbar-burger burger" data-target="navbarMenu">
  //             <span />
  //             <span />
  //             <span />
  //           </span>
  //         </div>
  //         <div id="navbarMenu" className="navbar-menu">
  //           <div className="navbar-end">
  //             <div className="tabs is-right"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // ) :
  // ( <WelcomeHeader /> )
}

export default withRouter(TopNav);
