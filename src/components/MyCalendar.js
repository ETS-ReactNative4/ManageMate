import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import Calendar from '../components/Calendar555';
import axios from 'axios'
import { connect } from 'react-redux'
import { addProfile } from '../action'
const style = {
    position: "relative",
    margin: "50px auto"
}


class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          profile: props.profile
            
        }
    }
  checkRole(role) {
if(role == 1) {
    return true
}
else if(role == 2) {
    return true
}
else if(role == 3) {
    return false
}
  }
    render() {


        return (
            <div>
                <div className="tangkwaTitle"><h4><b>CALENDAR</b></h4></div>
                {
               this.checkRole(this.state.profile.employee[0].role) && <div>
                   
                <Link to='MyCalendarCreateEvent' ><button type="submit" value="event" className="createproj-button">CREATE EVENT</button></Link></div>}
                <div className="App">
                    <Calendar style={style} width="1200px" data = {this.state.data}
                      />
                </div>
            </div>

        );

    }
}


const mapStateToProps = state => {
    console.log('state chaeck stat1',state.profile)
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps)(MyCalendar)