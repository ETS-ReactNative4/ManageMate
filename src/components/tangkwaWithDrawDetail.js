import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import b1 from '../Image/b1.jpg';
import b2 from '../Image/b2.jpg';
import b3 from '../Image/b3.jpg';
import { connect } from 'react-redux'
import _ from 'lodash';
class TangkwaWithDrawDetail extends Component {
    constructor(props) {
        super(props);
        const withdrawId = _.last(window.location.pathname.split('/'))
        const person = _.find(props.people, item => item.withdrawID == withdrawId)
        console.log("kor du noi", person)
        this.state = {
            person
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4>WITHDRAW DETAIL</h4></div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p><b>WITHDRAW NO. : {this.state.person.withdrawID}</b></p></div></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                    <div className="tkflex-1"></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>FIRSTNAME : {this.state.person.firstnameEN}</p></div></div>
                    <div className="tk1flex-1"><p>LASTNAME : {this.state.person.lastnameEN}</p></div>
                    <div className="tk1flex-1"><p>POSITION : {this.state.person.Role}</p></div>
                    <div className="tkflex-1 tangkwaWDFrame"><div>STATUS : {this.state.person.withdrawStatus}</div>
                        <div>MANAGE BY : {this.state.manageBy}</div>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p>AMOUNT : {this.state.person.amount}</p></div>
                        <div><p>BANK NO. : {this.state.person.bankNo}</p></div>
                        <div><p>BANK NAME : {this.state.person.bankName}</p></div>
                        <div><p>COMMENT : {this.state.person.withdrawComment}</p></div>
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
               
            </div >
        );
    }
}
const mapStateToProps = state => {
    console.log("gg", state.withdraw)
    return {
        people: state.withdraw
    }
}
export default connect(mapStateToProps)(TangkwaWithDrawDetail)