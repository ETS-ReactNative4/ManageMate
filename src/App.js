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
          <div className="main-nav">
            <div className="dropdown">
              <button className="dropbtn">LEAVE</button>
              <div className="dropdown-content">
                <a href="#">LEAVE</a>
                <a href="#">MY HISTORY</a>
                <a href="#">APPROVE</a>
              </div>
            </div>
            <div className="dropdown2">
              <button className="dropbtn2">CALENDAR</button>
              <div className="dropdown-content2">
                <a href="#">CALENDAR</a>
                <a href="#">MY CALENDAR</a>
              </div>
            </div>

            <div className="dropdown3">
              <button className="dropbtn3">WITHDRAW</button>
              <div className="dropdown-content3">
                <a href="#">WITHDRAW</a>
                <a href="#">MY WITHDRAW</a>
                <a href="#">APPROVE</a>
              </div>
            </div>

            <div className="dropdown4">
              <button className="dropbtn4">ATTENDANCE</button>
              <div className="dropdown-content4">
                <a href="#">Link 10</a>
                <a href="#">Link 11</a>
                <a href="#">Link 12</a>
              </div>
            </div>

            <div className="dropdown5">
              <button className="dropbtn5">STATISTICS</button>
              <div className="dropdown-content5">
                <a href="#">STATISTICS</a>
                <a href="#">ADD USERS</a>
              </div>
            </div>

            <div className="dropdown6">
              <button className="dropbtn6">PROJECTS</button>
              <div className="dropdown-content6">
                <a href="#">ALL PROJECTS</a>
                <a href="#">MY PROJECTS</a>
                <a href="#">CREATE PROJECTS</a>
              </div>
            </div>

          </div>
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
