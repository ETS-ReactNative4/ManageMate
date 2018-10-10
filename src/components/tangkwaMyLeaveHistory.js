import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaMyLeaveHistory extends Component {
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4>MY LEAVE HISTORY</h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STATUS</p></div>
                    <div className="tkflex-1"><p>LEAVE ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-2"><p>LEAVING DATE</p></div>
                    <div className="tkflex-1"><p>MANAGE BY</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetApprove"><p>Approved</p></div>
                    <div className="tkflex-1"><p>LEAV00001</p></div>
                    <div className="tkflex-2"><p>Putthachart Srisuwankun</p></div>
                    <div className="tkflex-2"><p>28/12/2018-30/12/2018</p></div>
                    <div className="tkflex-1"><p>000000002</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetPending"><p>Pending</p></div>
                    <div className="tkflex-1"><p>LEAV00008</p></div>
                    <div className="tkflex-2"><p>Putthachart Srisuwankun</p></div>
                    <div className="tkflex-2"><p>28/12/2018-30/12/2018</p></div>
                    <div className="tkflex-1"><p>000000002</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetReject"><p>Rejected</p></div>
                    <div className="tkflex-1"><p>LEAV00010</p></div>
                    <div className="tkflex-2"><p>Putthachart Srisuwankun</p></div>
                    <div className="tkflex-2"><p>28/12/2018-30/12/2018</p></div>
                    <div className="tkflex-1"><p>000000002</p></div>
                </div>

            </div>
        );
    }
}

export default TangkwaMyLeaveHistory;
