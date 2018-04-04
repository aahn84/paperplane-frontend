import React, { Component } from 'react';
import logo from './paperplane.svg';
// import './App.css';
import 'bulma/css/bulma.css';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
