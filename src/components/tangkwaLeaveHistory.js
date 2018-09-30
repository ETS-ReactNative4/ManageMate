import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

const people = [
    {
        status: 'Pending',
        leaveID: 'LEAVE672',

        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: '-'
    },
    {
        status: 'Pending',
        leaveID: 'LEAVE672',
        leaveType: 'Annual Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '03/07/2018',
        approver: '-'
    },
    {
        status: 'Approve',
        leaveID: 'LEAVE672',
        leaveType: 'Leave with out pay',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'ข้าวโอ๊ต'
    },
    {
        status: 'Approve',
        leaveID: 'LEAVE672',
        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'พี่นิว'
    },
    {
        status: 'Reject',
        leaveID: 'LEAVE672',
        leaveType: 'Sick Leave',
        staffID: '23097',
        reqDate: '20/06/2018',
        leaveDate: '01/07/2018-03/07/2018',
        approver: 'พี่เก่ง'
    },
]

class LeaveHistory extends Component {
    render() {
        return (
            <div className="App">
                <div className="tangkwaSetMargin">
                    <div className="row tangkwaSetTable">
                        <div className="col-md-2">STATUS</div>
                        <div className="col-md-2">LEAVE ID</div>
                        <div className="col-md-3">NAME</div>
                        <div className="col-md-3">LEAVEING DATE</div>
                        <div className="col-md-2">MANAGE BY</div>
                    </div>
                    <div className="row tangkwaSetData">

                        <div className="col-md-2 "><div className="tangkwaSetReject">Rejected</div></div>
                        <div className="col-md-2"><div><td>LEA00001</td></div>
                            <div><td>Sick Leave</td></div></div>
                        <div className="col-md-3">Putthachart Srisuwankun</div>
                        <div className="col-md-3">02/07/2018-20/04/2018</div>
                        <div className="col-md-2">ID000001</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default LeaveHistory;
