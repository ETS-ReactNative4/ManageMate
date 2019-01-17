import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'


class TangkwaMyClockIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : '11/12/2018',
            clockIn : '9.30 AM',
            GPSIn : 'In',
            clockOut : '18.33 PM',
            GPSOut : 'out'

        }
    }
   
    render() {
        return (
            <div className="App">
               <div className = "tangkwaTitle"><h4><b>MY CLOCK IN</b></h4></div>
               <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p><b>DATE</b></p></div>
                    <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                    <div className="tkflex-1"><p><b>GPS</b></p></div>
                    <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                    <div className="tkflex-1"><p><b>GPS</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p>{this.state.date}</p></div>
                    <div className="tkflex-1"><p>{this.state.clockIn}</p></div>
                    <div className="tkflex-1"><p>{this.state.GPSIn}</p></div>
                    <div className="tkflex-1"><p>{this.state.clockOut}</p></div>
                    <div className="tkflex-1"><p>{this.state.GPSOut}</p></div>
                </div>
            </div>
        );
    }
}
export default TangkwaMyClockIn;