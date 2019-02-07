import React, { Component } from 'react';
import '../App.css';

import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class MyCalendar extends Component {
    
    render() {
        const EventCalendar = require('react-event-calendar');

const events = [
    {
        start: '2015-07-20',
        end: '2015-07-02',
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2015-07-19',
        end: '2015-07-25',
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];


        return (
            <div>
                <div className="tangkwaTitle"><h4><b>MY CALENDAR</b></h4></div>
                <Link to='MyCalendarCreateEvent' ><button type="submit" value="event" className="createEvent">CREATE EVENT</button></Link>
                <EventCalendar month={7} year={2015} events={events}  onEventClick={(target, eventData, day) => console.log(eventData)} />
            </div>
            
        );

    }
}

export default MyCalendar;
