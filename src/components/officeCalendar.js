import React, { Component } from 'react'
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Calendar from '../components/Calendar556';
import axios from 'axios';
const style = {
    position: "relative",
    margin: "50px auto"
}



class OfficeCalendar extends Component {
    componentDidMount() {
        // axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByStaffID?staffId=${this.state.staffid}`)
        axios.get(`http://127.0.0.1:8000/employee/getcalendar/`)
            .then(res => {
               console.log('this is log',res.data)
            })
    }
    render() {
        return (
            <div>
                <div className="tangkwaTitle"><h4><b>OFFICE CALENDAR</b></h4></div>
                <Link to='OfficecreateEvent'><button type="submit" value="event" className="createEvent">CREATE EVENT</button></Link>
                <Calendar style={style} width="1200px"
                      />
            </div>
        );
    }
}

export default OfficeCalendar;
