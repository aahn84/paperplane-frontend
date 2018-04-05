import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Welcome.css';
import WelcomeHeader from './WelcomeHeader';
import WelcomeLogin from './WelcomeLogin';
import WelcomeSignup from './WelcomeSignup';
import WelcomeFooter from './WelcomeFooter';


const Welcome = () => {

  return (
    <div>
      <WelcomeHeader />
      <WelcomeLogin />
      <WelcomeSignup />
      <WelcomeFooter />
    </div>
  )
}

export default Welcome
