import React, { Component } from 'react';
import './App.css';
import TangkwaProjectDetail from './components/tangkwaProjectDetail';
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
            <TangkwaProjectDetail />

          </div>
        </header>

      </div>
    );
  }
}

export default App;
