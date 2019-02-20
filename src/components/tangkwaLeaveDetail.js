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
            people: []

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
            {this.state.people.map(people => (<div>
                <div className="tangkwaTitle tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>FIRSTNAME :</b> {people.FirstnameEN}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LASTNAME :</b> {people.LastnameEN}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>STAFF ID : </b>{people.StaffID}</p></div>
                    </div>
                    <div className="tkflex-1 tangkwaLeaveFrame">
                        <div><p><b>STATUS : </b>{people.LeaveStatus}</p></div>
                        <div><p><b>MANAGE BY : </b>{people.ApprovedBy}</p></div>
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p><b>POSITION :</b> {people.Role}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE ID : </b> {people.LeaveID}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{people.LeaveType}</p></div>
                    </div>
                    <div className="tkflex-1">
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>DAY START :</b>{moment(people.leaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                        <div><p><b>DAY END : </b>{moment(people.LeaveEndDateTime).format('DD-MM-YYYY')}</p></div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-3"><div><p>COMMENT : {people.LeaveComment}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
            </div>))}
            </div>
            
        );
    }
}
export default TangkwaLeaveDetail;