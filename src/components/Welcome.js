import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WelcomeHeader from './WelcomeHeader';

const Welcome = ({}) => {

  return (
    <div>
      <WelcomeHeader />
      Hi there!
    </div>
  )
}

export default Welcome
