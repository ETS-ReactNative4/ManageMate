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
            MANAGEMATE
          </h1>
          <ul className="main-nav">
            <li><a href='#'>leave</a></li>
            <li><a href='#'>calendar</a></li>
            <li><a href='#'>withdraw</a></li>
            <li><a href='#'>attendance</a></li>
            <li><a href='#'>projects</a></li>
            <li><a href='#'>statistics</a></li>
          </ul>
          <div className="mini-background">
          </div>
        </header>
        <header className="background">

        </header>

      </div>
    );
  }
}

export default App;
