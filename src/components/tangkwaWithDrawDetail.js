import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';



class TangkwaWithDrawDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iD: 'WD00001',
            firstname: 'สิรภพ',
            lastname: 'มีชูเวท',
            position: 'Normal user',
            amount: '500',
            bankNo: '029930382823',
            bankName: 'กรุงเทพ',
            comment: '-',
            status: 'pending',
            manageBy: '-'
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwa2"><h4><b>Withdraw Detail</b></h4></div>
                <div className="row">
                    <div className="tangkwa1"><p>Firstname : {this.state.firstname}</p></div>
                    <div className="tangkwa1"><p>Lastname : {this.state.lastname}</p></div>
                    <div className="tangkwa1"><p>Position : {this.state.position}</p></div>
                </div>
                <div className="row tangkwa1"><div><p>จำนวนเงิน : {this.state.amount}</p></div></div>
                <div className="row tangkwa1"><div><p>เลขที่บัญชี : {this.state.bankNo}</p></div></div>
                <div className="row tangkwa1"><div><p>ธนาคาร : {this.state.bankName}</p></div></div>
                <div className="row tangkwa1"><div><p>Comment : {this.state.comment}</p></div></div>
                <div className="row tangkwa1"><div><p>File :</p></div></div>
                <div className="row tangkwa1"><div><p>status : {this.state.status}</p></div></div>
                <div className="row tangkwa1"><div><p>Manage by : {this.state.manageBy}</p></div></div>
            </div>
        );
    }
}

export default TangkwaWithDrawDetail;