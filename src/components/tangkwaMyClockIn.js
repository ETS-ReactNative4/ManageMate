import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'
class TangkwaMyClockIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            peoplein: [],
            peopleout: [],
            profile : props.profile
        }
    }
    componentDidMount() {
        // axios.get('http://managemate.azurewebsites.net/GetCheckinByStaffID?leaveId=1')
        axios.get(`http://52.168.175.101:8000/employee/getcheckin/?staffId=${this.state.profile.employee[0].id}`) //this.state.profile.employee[0].id
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("clock in", this.state.people)
                const person1 = res.data.filter(person1 => {
                    return person1.Status === 'in'
                })
                this.setState({ peoplein: person1 })
                const person2 = res.data.filter(person2 => {
                    return person2.Status === 'out'
                })
                this.setState({ peopleout: person2 })

            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h3><b>MY TIME IN/OUT</b></h3></div>
                <div className="flex-container row">
                    <div className="tkflex-1">
                        <h4>TIME IN</h4>
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peoplein.map(peoplein => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{peoplein.Date}</p></div>
                            <div className="tkflex-1"><p>{peoplein.Time}</p></div>
                            <div className="tkflex-1"><p>{peoplein.place}</p></div>
                        </div>))}
                    </div>
                    <div className="tkflex-1">
                        <h4>TIME OUT</h4>
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peopleout.map(peopleout => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{peopleout.Date}</p></div>
                            <div className="tkflex-1"><p>{peopleout.Time}</p></div>
                            <div className="tkflex-1"><p>{peopleout.place}</p></div>
                        </div>))}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state chaeck stat', state.profile)
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps)(TangkwaMyClockIn)