import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class TangkwaMyWithDrawHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : 'APPROVED',
            withdrawId : 'WTHDRW00001',
            firstName : 'Putthachart',
            lastName : 'Srisuwankun',
            amount : '50000',
            manageBy : '000001'
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
                    <div className="tkflex-1"><div className = "tangkwaSetApprove"><p><b>{this.state.status}</b></p></div></div>
                    <Link to='withdrawDetail' className="tkflex-1" ><div><p><b>{this.state.withdrawId}</b></p></div></Link>
                    <div className="tkflex-2"><p><b>{this.state.firstName} {this.state.lastName}</b></p></div>
                    <div className="tkflex-1"><p><b>{this.state.amount}</b></p></div>
                    <div className="tkflex-1"><p><b>{this.state.manageBy}</b></p></div>
                </div>
               
            </div>
        );
    }
}

export default TangkwaMyWithDrawHistory;