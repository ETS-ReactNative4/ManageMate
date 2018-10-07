import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaMyWithDrawHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <div>
                    <h3>My Withdraw</h3>
                    <div className="row tangkwaSetTable">
                        <div className="tangkwaSTATUS">STATUS</div>
                        <div className="tangkwaWDID">Withdraw ID</div>
                        <div className="tangkwaNAME">NAME</div>
                        <div className="tangkwaAMOUNT">AMOUNT</div>
                        <div className="tangkwaMANAGE">MANAGE BY</div>
                    </div>
                    <div className="row tangkwaSetData">
                        <div className="tangkwaSTATUSDATA"><div className="tangkwaSetReject">Rejected</div></div>
                        <div className="tangkwaWDIDDATA"><td>WD00001</td></div>
                        <div className="tangkwaNAMEDATA">Putthachart Srisuwankun</div>
                        <div className="tangkwaAMOUNTDATA">500</div>
                        <div className="tangkwaMANAGEDATA">ID000001</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TangkwaMyWithDrawHistory;