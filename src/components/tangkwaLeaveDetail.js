import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Putthachart',
            lastname: 'Srisuwankun',
            position: 'Normal Usre',
            setDay: true,
            leaveID: '672',
            leaveType: 'Sick Leave',
            dayStart: '01/01/2014',
            dayEnd: '02/01/2018',
            note: 'sickkkkkkkkkk',
            time: '09.30 AM',
            hrs: '8'
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                <div className="row">
                    <div className="tangkwa1"><p>Firstname :  {this.state.firstname} </p></div>
                    <div className="tangkwa3"><p>Lastname : {this.state.lastname}</p></div>
                    <div className="tangkwa1"><p>Position : {this.state.position}</p></div>
                </div>
                <div className="row">
                    <div className="tangkwa1"><p>Leave ID : {this.state.leaveID}</p></div>
                    <div className="tangkwa1"><p>Leave Type : {this.state.leaveType}</p></div>
                </div>
                {!this.state.setDay && <div>
                    <div className="row tangkwa1"><p>Day Start : {this.state.dayStart}</p></div>
                    <div className="row tangkwa1"><p>Day End : {this.state.dayEnd}</p></div>
                </div>}
                {this.state.setDay && <div>
                    <div className="row tangkwa1"><p>DATE : {this.state.dayStart}</p></div>
                    <div className="row tangkwa1">  <p>TIME : {this.state.time}</p></div>
                    <div className="row tangkwa1"> <p>TIME : {this.state.hrs} Hrs.</p></div></div>}
                <div className="row tangkwa1"><p>Note/Comments : {this.state.note}</p></div>
                <div className="row tangkwa1"><p>File : </p></div>
            </div>
        );
    }
}
export default TangkwaLeaveDetail;