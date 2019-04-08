import React, { Component } from 'react'
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import UserProfile from './UserProfile'
import axios from 'axios';
const style = {
    position: "relative",
    margin: "50px auto"
}



class OfficeCalendar extends Component {
  
    render() {
        return (
            <div>
              <UserProfile/>
            </div>
        );
    }
}

export default OfficeCalendar;
