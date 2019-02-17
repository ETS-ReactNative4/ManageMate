import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: {}

        }
    }
    componentDidMount() {
        axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByLeaveID?leaveId=${parseInt(_.last(window.location.pathname.split('/')))}`)
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("ttt", this.state.people)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>FIRSTNAME :</b> {this.state.firstname}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LASTNAME :</b> {this.state.lastname}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>POSITION :</b> {this.state.position}</p></div>
                    </div>
                    <div className="tkflex-1 tangkwaLeaveFrame">
                        <div><p><b>STATUS : </b>{this.state.people.LeaveStatus}</p></div>
                        <div><p><b>MANAGE BY : </b>{this.state.people.ApprovedBy}</p></div>
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>LEAVE ID : </b> {this.state.people.LeaveID}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{this.state.people.LeaveType}</p></div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tkflex-1">
                    </div>
                </div>
                {this.state.setDay && <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>DATE : </b>{this.state.dayStart}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>TIME : </b>{this.state.time}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>TIME : </b>{this.state.hrs} HOURS</p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>}
                {!this.state.setDay && <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>DAY START :</b>{moment(this.state.people.leaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                        <div><p><b>DAY END : </b>{moment(this.state.people.LeaveEndDateTime).format('DD-MM-YYYY')}</p></div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>}
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-3"><div><p>COMMENT : {this.state.people.LeaveComment}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
            </div >
        );
    }
}
export default TangkwaLeaveDetail;