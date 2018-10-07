import React, { Component } from 'react';
import '../App.css';



class TangkwaProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectID: 'Proj00001',
            ProjName: 'Leave Management',
            MemId: ['0001', '0002', '0003'],
            Detail: 'Leave 5 types , Check Leave History , Appove by Ceo or HR or  Boss',
            status: 'In Process',
            start: '10/08/2018 16:00',
            end: '13/08/2018 18:00',
        }
    }
    render() {
        return (
            <div className="App">
                <h4>Project Detail</h4>
                <div className="flex-container">
                    <div className="flex-2">
                        <div className="row tangkwa1"><p>Project ID : {this.state.projectID}</p></div>
                        <div className="row tangkwa1"><p>Project Name : {this.state.ProjName}</p></div>
                        <div className="row tangkwa1"><p>Members : {this.state.MemId + ""}</p></div>
                        <div className="row tangkwa1"><p>Detail : {this.state.Detail}</p></div>
                        <div className="row tangkwa1"><p>File : </p></div>
                    </div>

                    <div className="pjFrame flex-0.5">
                        <div className="row PJDT1"><p>Status : {this.state.status}</p></div>
                        <div className="row PJDT2"><p>Start : {this.state.start}</p></div>
                        <div className="row PJDT3"><p>Done : {this.state.end}</p></div>
                        <div className="row PJDT4"><p>Total : 30 Days 20 Hours with 30 Members</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TangkwaProjectDetail;
