import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Calendar from '../components/Calendar555';


const style = {
    position: "relative",
    margin: "50px auto"
}
class MyCalendar extends Component {

    render() {


        return (
            <div>
                <div className="tangkwaTitle"><h4><b>MY CALENDAR</b></h4></div>
                <Link to='MyCalendarCreateEvent' ><button type="submit" value="event" className="createEvent">CREATE EVENT</button></Link>
                <div className="App">
                    <Calendar style={style} width="1200px"
                      />
                </div>
            </div>

        );

    }
}

export default MyCalendar;
