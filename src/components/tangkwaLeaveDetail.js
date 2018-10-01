import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';



class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <h2>LEAVE DETAIL</h2>
                <p>LEAVE ID : {this.state.leaveID} LEAVE TYPE : {this.state.leaveType}</p>

                {!this.state.setDay && <div>
                    <p>Day Start : {this.state.dayStart}</p>
                    <p>Day End : {this.state.dayEnd}</p>



                </div>}
                {this.state.setDay && <div>
                    <p>DATE : {this.state.dayStart} TIME : {this.state.time} TIME : {this.state.hrs} Hrs.</p></div>}

                <p>Note/Comments : {this.state.note}</p>
                <p>File : </p>



            </div>
        );
    }
}

export default TangkwaLeaveDetail;