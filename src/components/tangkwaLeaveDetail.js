import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Putthachart',
            lastname: 'Srisuwankun',
            position: 'Normal User',
            setDay: false,
            leaveID: 'LEA672',
            leaveType: 'Sick Leave',
            dayStart: '01/01/2014',
            dayEnd: '02/01/2018',
            note: 'sickkkkkkkkkk',
            time: '09.30 AM',
            hrs: '8',
            status: 'Approved',
            manageby: '000031464'
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                <div className="flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>FIRSTNAME :</b> {this.state.firstname}</p></div>

                    </div>
                    <div className="tk1flex-1"><div><p><b>LASTNAME :</b> {this.state.lastname}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>POSITION :</b> {this.state.position}</p></div>
                    </div>
                    <div className="tkflex-1 tangkwaLeaveFrame">
                        <div><p><b>STATUS : </b>{this.state.status}</p></div>
                        <div><p><b>MANAGE BY : </b>{this.state.manageby}</p></div>
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>LEAVE ID : </b>{this.state.leaveID}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{this.state.leaveType}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
                {this.state.setDay && <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>DATE : </b>{this.state.dayStart}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>TIME : </b>{this.state.time}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>TIME : </b>{this.state.hrs} HOURS</p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>}
                {!
                    this.state.setDay && <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p><b>DAY START :</b> {this.state.dayStart}</p></div>
                            <div><p><b>DAY END : </b>{this.state.dayEnd}</p></div>
                        </div>
                        <div className="tk1flex-1">
                        </div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                    </div>}
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>COMMENT : </b>{this.state.note}</p></div>
                        <div><p><b>FILE : </b></p></div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
            </div >
        );
    }
}
export default TangkwaLeaveDetail;