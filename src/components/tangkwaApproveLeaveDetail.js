import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router';
class TangkwaApproveLeaveDetail extends Component {
    constructor(props) {
        super(props);
        const LeaveId = parseInt(_.last(window.location.pathname.split('/')))
        console.log("ID", LeaveId)
        this.state = {
            people: {},
            set: ''
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
    handleSetTrue = () => {
        this.setState({ set: true })
        console.log("set", this.state.set)
        if (window.confirm("Are you sure you want to Approve?")) {
            axios.put(`https://managemate.azurewebsites.net/api/Leave/SetStatus?status=Approved&leaveId=1&approverId=1`, {
                "status": 'Approved',
                "leaveId": parseInt(_.last(window.location.pathname.split('/'))),
                "approverId": "5",
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Approve Successfully")
                            browserHistory.push('/Approve')
                        }
                    }
                })
                .then(res => {
                    console.log('log approve', res);
                    console.log('log approve', res.data);
                })
        }
    }
    handleSetFalse = () => {
        this.setState({ set: false })
        console.log("set", this.state.set)
        if (window.confirm("Are you sure you want to Approve?")) {
            axios.put(`https://managemate.azurewebsites.net/api/Leave/SetStatus?status=Approved&leaveId=1&approverId=1`, {
                "status": 'Rejected',
                "leaveId": parseInt(_.last(window.location.pathname.split('/'))),
                "approverId": "5",
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Rejected Successfully")
                            browserHistory.push('/Approve')
                        }
                    }
                })
                .then(res => {
                    console.log('log approve', res);
                    console.log('log approve', res.data);
                })
        }
    }
    handleCheckSet = (status) => {
        if (status === "pending") {
            return true
        }
        return false
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle tangkwa2"><h4><b>APPROVE DETAIL</b></h4></div>
                <div className="flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>FIRSTNAME :</b> {this.state.people.LeaveID}</p></div>
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
                    <div className="tk1flex-1"><div><p><b>LEAVE ID : </b>{this.state.people.LeaveID}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{this.state.people.LeaveType}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
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
                    <div className="tk1flex-1"><div><p><b>COMMENT : </b>{this.state.people.LeaveComment}</p></div>
                        <div><p><b>FILE : </b></p>
                            <img src width="100" />
                            <img src width="100" />
                            <img src width="100" />
                        </div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
                {this.handleCheckSet(this.state.people.leaveStatus) && <div className="tangkwaTitle">
                    <button type="submit" value="Submit" onClick={this.handleSetTrue} className="Submit">APPROVE</button>
                    <button type="submit" value="Cancel" onClick={this.handleSetFalse} className="Cancel">REJECT</button>
                </div>}
            </div >
        );
    }
}
export default TangkwaApproveLeaveDetail;