import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { addHistory } from '../action'
import { connect } from 'react-redux'
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment'
class TangkwaStatisticsDetail extends Component {
    constructor(props) {
        super(props);
        const staffId = _.last(window.location.pathname.split('/'))
        console.log("staff id by split", staffId)
        const person = _.find(props.profile, item => item.staffId == staffId)
        console.log("person by _.find", person)
        console.log("hi",props.staff)
        this.state = {
            person,
            peoplein : [],
            peopleout : []
            
        }
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/employee/getemployee/?leaveId=${parseInt(_.last(window.location.pathname.split('/')))}`)
        // axios.get(`http://127.0.0.1:8000/employee/getdetailemployee/?leaveId=${_.last(window.location.pathname.split('/'))}`)
            .then(res => {
                console.log(res.data)
                const person1 = res.data.filter(person1 => {
                    return person1.Status === "in"
                })
                this.setState({ peoplein: person1 })
                const person2 = res.data.filter(person2 => {
                    return person2.Status == "out"
                })
                this.setState({ peopleout: person2 })
                console.log("in",this.state.peopleout)

})
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    setRole = (role) => {
        if (role === "1") {
            return role = "Super User"
        }
        else if (role === "2") {
            return role = "HR"
        }
        if (role === "3") {
            return role = "Normal User"
        }
    }
    render() {
        const { person } = this.state
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME :</b> {this.state.person.firstnameEn}</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>{this.state.person.lastnameEn}</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.person.staffId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION :</b> {this.setRole(this.state.person.role)}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>PROJECTS :</b> {this.state.person.projectId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>EMAIL :</b> {this.state.person.email}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NAME :</b> {this.state.person.bankName}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NO.</b> {this.state.person.bankNo}</p></div>
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
                    <div className="tkflex-1"><p>{this.state.person.sickQuo}</p></div>
                    <div className="tkflex-1"><p><b>{this.state.person.sickRemain}</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.person.annualQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.person.annualRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>{this.state.person.lwpQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.person.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.person.personalQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.person.personalRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.person.lfwosQuo}</p></div>
                    <div className="tkflex-1"><p>{this.state.person.lfwosRemain}</p></div>
                </div>

                <div className="flex-container row margindetail">
                    <div className="tkflex-1">
                        
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                       {this.state.peoplein.map (peoplein => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('HH:')}</p></div>
                            <div className="tkflex-1"><p>{peoplein.place}</p></div>
                       </div>))}
                    </div>
                    <div className="tkflex-1">
                        
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peopleout.map (peopleout => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('HH:mm')}</p></div>
                            <div className="tkflex-1"><p>{peopleout.place}</p></div>
                        </div>))}
                    </div>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state in', state.staff)
    return {
        profile: state.history,
        staff : state.staff
    }
}
export default connect(mapStateToProps)(TangkwaStatisticsDetail)
