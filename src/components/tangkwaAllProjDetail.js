import React, { Component } from 'react';
import '../App.css';
class TangkwaAllProjDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectID: 'Proj00001',
            ProjName: 'Leave Management',
            MemId: '00001 00002 00003',
            Detail: 'Leave 5 types , Check Leave History , Appove by Ceo or HR or  Boss',
            status: 'In Process',
            start: '10/08/2018 16:00',
            end: '13/08/2018 18:00',
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>PROJECT DETAIL</b></h4></div>
                <div className="tangkwaTitle flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2">
                        <div><p><b>PROJECT ID : </b>{this.state.projectID}</p></div>
                        <div><p><b>PROJECT NAME : </b>{this.state.ProjName}</p></div>
                        <div><p><b>MEMBERS :</b>{this.state.MemId}</p></div>
                        <div><p><b>DETAILS :</b>{this.state.Detail}</p></div>
                        <div><p><b>FILES :</b></p></div>
                    </div>
                    <div className="tkflex-1">
                        <div className="pjFrame">
                            <div><p><b>STATUS : </b>{this.state.status}</p></div>
                            <div><p><b>START : </b>{this.state.start}</p></div>
                            <div><p><b>DONE : </b>{this.state.end}</p></div>
                            <div><p><b>TOTAL : </b>30 DAYS 20 HOURS WITH 15 MEMBERS</p></div>
                        </div>
                        <div>
                            <button type="submit" value="Submit" className="pStatusProcess">IN PROCESS</button>
                            <button type="submit" value="Submit" className="pStatusDone">DONE</button></div>
                    </div>
                </div>
                <div className="tangkwaTitle2"><button type="submit" value="Submit" className="joinProject">JOIN PROJECT</button></div>
            </div>
        );
    }
}
export default TangkwaAllProjDetail;
