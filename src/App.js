import React, { Component } from 'react';
import './App.css';
import TangkwaLeaveHistory from './components/tangkwaLeaveHistory';
import GunHeader from './components/gunHeader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="background">
          <h1 className="hero-logo">
            M A N A G E M A T E
        </h1>
          <div className="mini-background">
            <TangkwaLeaveHistory />

          </div>
        </header>

      </div>
    );
  }
}

export default App;
