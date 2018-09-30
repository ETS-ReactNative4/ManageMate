import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import TangkwaLeaveHistory from './components/tangkwaLeaveHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TangkwaLeaveHistory />
      </div>
    );
  }
}

export default App;
