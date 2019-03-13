import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import b1 from '../Image/b1.jpg';
import b2 from '../Image/b2.jpg';
import b3 from '../Image/b3.jpg';
import _ from 'lodash';
import axios from 'axios';
class TangkwaWithDrawDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people : []
        }
    }
    componentDidMount() {
        axios.get(`https://managemate.azurewebsites.net/GetWithdrawInfoByWithDrawID?withdrawId=${parseInt(_.last(window.location.pathname.split('/')))}`)
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("tk", this.state.people)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        return (
            <div className="App">
            {this.state.people.map(people => (<div>
                <div className="tangkwaTitle"><h4>WITHDRAW DETAIL</h4></div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p><b>WITHDRAW NO. : {people.withdrawID}</b></p></div></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>FIRSTNAME : {people.firstnameEN}</p></div></div>
                    <div className="tk1flex-1"><p>LASTNAME : {people.lastnameEN}</p></div>
                    <div className="tk1flex-1"><p>POSITION : {people.role}</p></div>
                    <div className="tkflex-1 tangkwaWDFrame"><div>STATUS : {people.status}</div>
                        <div>MANAGE BY : </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>AMOUNT : {people.amount}</p></div>
                        <div><p>BANK NO. : {people.bankNo}</p></div>
                        <div><p>BANK NAME : {people.bankName}</p></div>
                        <div><p>COMMENT : {people.withdrawComment}</p></div>
                        <div> <p>FILE : </p>
                            <img src width="100" />
                            <img src width="100" />
                            <img src width="100" />
                        </div>
                    </div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1">
                    </div>
                </div>
               </div>))}
            </div >
        );
    }
}

export default TangkwaWithDrawDetail;