import React, { Component } from 'react'
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class OfficeCalendar extends Component {
    render() {
        return (
            <div>
                <div className="tangkwaTitle"><h4><b>OFFICE CALENDAR</b></h4></div>
                <Link to='OfficecreateEvent' ><button type="submit" value="event" className="createEvent">CREATE EVENT</button></Link>
              
            </div>
        );
    }
}

export default OfficeCalendar;
