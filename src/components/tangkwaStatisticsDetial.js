import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { addHistory } from '../action'
import { connect } from 'react-redux'
import _ from 'lodash';
import tangkwaMyClockIn from './tangkwaMyClockIn'
class TangkwaStatisticsDetail extends Component {
    constructor(props) {
        super(props);
        const staffId = _.last(window.location.pathname.split('/'))
        console.log("staff id by split", staffId)
        const person = _.find(props.profile, item => item.staffId == staffId)
        console.log("person by _.find", person)
        console.log("hi",props.staff)
        this.state = {
            person,
            
        }
    }
    render() {
        const { person } = this.state
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME :</b> {this.state.person.firstnameEn}</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>{this.state.person.lastnameEn}</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.person.staffId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION :</b> {this.state.person.role}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>PROJECTS :</b> {this.state.person.projectId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>EMAIL :</b> {this.state.person.projectId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NAME :</b> {this.state.person.bankName}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NO.</b> {this.state.person.bankNo}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container tangkwaSetTable ">
                    <div className="tkflex-1"><p><b>LEAVE TYPE</b></p></div>
                    <div className="tkflex-1"><p><b>QUOTA</b></p></div>
                    <div className="tkflex-1"><p><b>REMAINING</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData ">
                    <div className="tkflex-1"><p><b>SICK LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.sickQuota}</p></div>
                    <div className="tkflex-1"><p><b>{this.state.sickRemain}</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.annualQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.annualRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lwpQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.personalQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lfwosQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state in', state.staff)
    return {
        profile: state.history,
        staff : state.staff
    }
}
export default connect(mapStateToProps)(TangkwaStatisticsDetail)
