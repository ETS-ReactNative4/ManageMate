import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import b1 from '../Image/b1.jpg';
import b2 from '../Image/b2.jpg';
import b3 from '../Image/b3.jpg';
class TangkwaApproveWithDrawDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iD: 'WD00001',
            firstname: 'Sirapob',
            lastname: 'Meechuvet',
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
                <div className="tangkwaTitle"><h4>WITHDRAW DETAIL</h4></div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p><b>WITHDRAW NO. : {this.state.iD}</b></p></div></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>FIRSTNAME : {this.state.firstname}</p></div></div>
                    <div className="tk1flex-1"><p>LASTNAME : {this.state.lastname}</p></div>
                    <div className="tk1flex-1"><p>POSITION : {this.state.position}</p></div>
                    <div className="tkflex-1 tangkwaWDFrame"><div>STATUS : {this.state.status}</div>
                        <div>MANAGE BY : {this.state.manageBy}</div>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>AMOUNT : {this.state.amount}</p></div>
                        <div><p>BANK NO. : {this.state.bankNo}</p></div>
                        <div><p>BANK NAME : {this.state.bankName}</p></div>
                        <div><p>COMMENT : {this.state.comment}</p></div>
                        <div> <p>FILE : </p>
                            <img src={b1} width="100" />
                            <img src={b1} width="100" />
                            <img src={b1} width="100" />
                        </div>
                    </div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1">
                    </div>
                </div>
                <div className="tangkwaTitle">
                    <button type="submit" value="Submit" className="Submit">APPROVE</button>
                    <button type="submit" value="Cancel" className="Cancel">REJECT</button>
                </div>
            </div >
        );
    }
}
export default TangkwaApproveWithDrawDetail;