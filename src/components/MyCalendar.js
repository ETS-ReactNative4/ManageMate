import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';


class MyCalendar extends Component {
    
    render() {


        return (
            <div>
                <div className="tangkwaTitle"><h4><b>MY CALENDAR</b></h4></div>
                <Link to='MyCalendarCreateEvent' ><button type="submit" value="event" className="createEvent">CREATE EVENT</button></Link>
            
            </div>
            
        );

    }
}

export default MyCalendar;
