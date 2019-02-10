import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
//import logo from './logo.svg';
import '../App.css';
class TangkwaMyLeaveHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status :'APPROVED',
            leaveId : 'LEA000005',
            firstName : 'Putthachart',
            lastName :'Srisuwankun',
            leaveDate : '28/12/2018-30/12/2018',
            manageBy : '000001'


        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>MY LEAVE </b></h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STATUS</p></div>
                    <div className="tkflex-1"><p>LEAVE ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-2"><p>LEAVING DATE</p></div>
                    <div className="tkflex-1"><p>MANAGE BY</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><div className = "tangkwaSetApprove"><p><b>{this.state.status}</b></p></div></div>
                    <Link to='TangkwaLeaveDetail' className="tkflex-1"><div><p>{this.state.leaveId}</p></div></Link>
                    <div className="tkflex-2"><p>{this.state.firstName} {this.state.lastName}</p></div>
                    <div className="tkflex-2"><p>{this.state.leaveDate}</p></div>
                    <div className="tkflex-1"><p>{this.state.manageBy}</p></div>
                </div>
               

            </div>
        );
    }
}

export default TangkwaMyLeaveHistory;
