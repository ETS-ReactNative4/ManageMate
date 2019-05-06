import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import _ from 'lodash'
import axios from 'axios';
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { setLogout } from '../action';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: props.history,
            set: '',
            profile: props.profile,
            peoplein: [],
            peopleout: [],
            user: [],
            first: "",
            last: "",
            ID: "",
            annualQuo: "",
            annualRemain: "",
            bankName: "",
            bankNo: "",
            email: "",
            lfwosQuo: "",
            lfwosRemain: "",
            lwpQuo: "",
            lwpRemain: "",
            personalQuo: "",
            personalRemain: "",
            projectID: "",
            role: "",
            sickQuo: "",
            sickRemain: "",
            staffID: "",
            tellno: "",

        }

    }

    setRole(role) {
        if (role === "1") {
            return "Super User"
        }
        else if (role === "2") {
            return "HR"
        }
        else if (role === "3") {
            return "Normal User"
        }
    }
     componentDidMount() {
        // axios.get('http://managemate.azurewebsites.net/GetCheckinByStaffID?leaveId=1')
        axios.get(`https://managemate.eastus.cloudapp.azure.com:8000/employee/Statistic/?staffId=${this.state.profile.employee[0].id}`) //this.state.profile.employee[0].id
            .then(res => {
                console.log("datda", res.data[1])
             const a = res.data[2].map((user) => {
                    return this.setState({
                        first: user.firstnameEN,
                        last: user.lastnameEN,
                        ID: user.staffID,
                        annualQuo:  user.annualQuo,
                        annualRemain: user.annualRemain,
                        bankName: user.bankName,
                        bankNo: user.bankNo,
                        email: user.email,
                        lfwosQuo: user.lfwosQuo,
                        lfwosRemain: user.lfwosRemain,
                        lwpQuo: user.  lwpQuo,
                        lwpRemain: user.lwpRemain,
                        personalQuo: user.personalQuo,
                        personalRemain: user.personalRemain,
                        projectID: user.projectID,
                        role: user.role,
                        sickQuo: user.sickQuo,
                        sickRemain: user.sickRemain,
                        staffID: user. staffID,
                        tellno: user. tellno,
                    })


                })
                const person = res.data[1]
                this.setState({ people: person })
                console.log("clock in", this.state.people)
                const person1 = res.data[1].filter(person1 => {
                    return person1.Status === 'in'
                })
                this.setState({ peoplein: person1 })
                const person2 = res.data[1].filter(person2 => {
                    return person2.Status === 'out'
                })
                this.setState({ peopleout: person2 })
                console.log("first", this.state.first, this.state.last)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })


    }
    handleLogout = () => {
        this.props.setLogout()
        browserHistory.push('/Login')


    }

    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>MY PROFILE</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"><button type="submit" value="Submit" onClick={this.handleLogout} className="Logout_Account">LOG OUT</button></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME : </b>{this.state.first}</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>{this.state.last}</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.ID}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION : </b>{this.setRole(this.state.role)}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>EMAIL : </b>{this.state.email}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NAME : </b>{this.state.bankName}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NO. : </b>{this.state.bankNo}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container tangkwaSetTable ">
                    <div className="tkflex-1"><p><b>LEAVE TYPE</b></p></div>
                    <div className="tkflex-1"><p><b>QUOTA</b></p></div>
                    <div className="tkflex-1"><p><b>REMAINING</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData ">
                    <div className="tkflex-1"><p><b>SICK LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.sickQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.sickRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.annualQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.annualRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lwpQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.personalQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.personalRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lfwosQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.lfwosRemain}</p></div>
                </div>

                <div className="flex-container row margindetail">
                    <div className="tkflex-1">

                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peoplein.map(peoplein => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{peoplein.Date}</p></div>
                            <div className="tkflex-1"><p>{peoplein.Time}</p></div>
                            <div className="tkflex-1"><p>{peoplein.place}</p></div>
                        </div>))}
                    </div>
                    <div className="tkflex-1">

                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peopleout.map(peopleout => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{peopleout.Date}</p></div>
                            <div className="tkflex-1"><p>{peopleout.Time}</p></div>
                            <div className="tkflex-1"><p>{peopleout.place}</p></div>
                        </div>))}
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state chaeck stat', state.history)
    return {
        people: state.history,
        profile: state.profile
    }
}

const mapDispatchToProps = dispatch => ({
    setLogout: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)