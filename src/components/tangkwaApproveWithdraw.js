import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class TangkwaApproveWithdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4>MY WITHDRAW</h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p><b>STATUS</b></p></div>
                    <div className="tkflex-1"><p><b>WITHDRAW ID</b></p></div>
                    <div className="tkflex-2"><p><b>NAME</b></p></div>
                    <div className="tkflex-1"><p><b>AMOUNT</b></p></div>
                    <div className="tkflex-1"><p><b>MANAGE BY</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetApprove"><p><b>APPROVED</b></p></div>
                    <Link to='ApproveWithdrawDetail' className="tkflex-1" ><div><p><b>WTHDRW00001</b></p></div></Link>
                    <div className="tkflex-2"><p><b>Putthachart Srisuwankun</b></p></div>
                    <div className="tkflex-1"><p><b>5000</b></p></div>
                    <div className="tkflex-1"><p><b>000001</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetReject"><p><b>Rejected</b></p></div>
                    <div className="tkflex-1"><p><b>WTHDRW00001</b></p></div>
                    <div className="tkflex-2"><p><b>Putthachart Srisuwankun</b></p></div>
                    <div className="tkflex-1"><p><b>5000</b></p></div>
                    <div className="tkflex-1"><p><b>000001</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1 tangkwaSetPending"><p><b>Pending</b></p></div>
                    <div className="tkflex-1"><p><b>WTHDRW00001</b></p></div>
                    <div className="tkflex-2"><p><b>Putthachart Srisuwankun</b></p></div>
                    <div className="tkflex-1"><p><b>12346579</b></p></div>
                    <div className="tkflex-1"><p><b>000001</b></p></div>
                </div>
            </div>
        );
    }
}

export default TangkwaApproveWithdraw;