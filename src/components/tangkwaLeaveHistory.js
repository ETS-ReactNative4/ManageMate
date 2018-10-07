import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaLeaveHistory extends Component {
    render() {
        return (
            <div className="App">
                <div className="tangkwaSetMargin">
                    <div className="row tangkwaSetTable">
                        <div className="tangkwaStatus">STATUS</div>
                        <div className="tangkwaLeaveId">LEAVE ID</div>
                        <div className="tangkwaName">NAME</div>
                        <div className="tangkwaLeaveDate">LEAVEING DATE</div>
                        <div className="tangkwaManage">MANAGE BY</div>
                    </div>
                    <div className="row tangkwaSetData">

                        <div className="tangkwaStatusData"><div className="tangkwaSetReject">Rejected</div></div>
                        <div className="tangkwaLeaveIdData"><div><td>LEA00001</td></div>
                            <div><td>Sick Leave</td></div></div>
                        <div className="tangkwaNameData">Putthachart Srisuwankun</div>
                        <div className="tangkwaLeaveDateData">02/07/2018-20/04/2018</div>
                        <div className="tangkwaManageData">ID000001</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default TangkwaLeaveHistory;
