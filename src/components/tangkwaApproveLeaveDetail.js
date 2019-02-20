import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
class TangkwaApproveLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            set: '',
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
                {this.state.people.map(people => (
                    <div>
                        <div className="tangkwaTitle tangkwa2"><h4><b>APPROVE DETAIL</b></h4></div>
                        <div className="flex-container">
                            <div className="tk1flex-0"></div>
                            <div className="tk1flex-1">
                                <div><p><b>FIRSTNAME : </b>{people.FirstnameEN}</p></div>
                            </div>
                            <div className="tk1flex-1">
                                <div><p><b>LASTNAME : </b>{people.LastnameEN}</p></div>
                            </div>
                            <div className="tk1flex-1">
                                <div><p><b>SATFF ID : </b>{people.StaffID}</p></div>
                            </div>
                            <div className="tkflex-1 tangkwaLeaveFrame">
                                <div><p><b>STATUS : </b>{people.LeaveStatus}</p></div>
                                <div><p><b>MANAGE BY : </b>{people.ApprovedBy}</p></div>
                            </div>
                        </div>
                        <div className="row flex-container">
                            <div className="tk1flex-0">
                                <div><p></p></div></div>
                            <div className="tk1flex-1">
                                <div><p><b>POSITION :</b>{people.Role}</p></div>
                            </div>
                            <div className="tk1flex-1">
                                <div><p><b>LEAVE ID : </b>{people.LeaveID}</p></div>
                            </div>
                            <div className="tk1flex-1">
                                <div><p><b>LEAVE TYPE : </b>{people.LeaveType}</p></div></div>
                            <div className="tk1flex-1">
                                <div><p></p></div></div>
                        </div>
                        <div className="row flex-container">
                            <div className="tk1flex-0">
                                <div><p></p></div></div>
                            <div className="tk1flex-1">
                                <div><p><b>DAY START :</b>{moment(people.LeaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                                <div><p><b>DAY END : </b>{moment(people.LeaveEndDateTime).format('DD-MM-YYYY')}</p></div>
                            </div>
                            <div className="tk1flex-1">
                            </div>
                            <div className="tk1flex-1"><div><p></p></div></div>
                            <div className="tk1flex-1"><div><p></p></div></div>
                        </div>
                        <div className="row flex-container">
                            <div className="tk1flex-0">
                                <div><p></p></div></div>
                            <div className="tk1flex-1">
                                <div><p><b>COMMENT : </b>{people.LeaveComment}</p></div>
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
                        {this.handleCheckSet(people.LeaveStatus) && <div className="tangkwaTitle">
                            <button type="submit" value="Submit" onClick={this.handleSetTrue} className="Submit">APPROVE</button>
                            <button type="submit" value="Cancel" onClick={this.handleSetFalse} className="Cancel">REJECT</button>
                        </div>}
                    </div>))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state chaeck stat', state.history)
    return {
        profile: state.history
    }
}
export default connect(mapStateToProps)(TangkwaApproveLeaveDetail)