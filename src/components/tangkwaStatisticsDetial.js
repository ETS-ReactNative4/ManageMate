import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { addHistory } from '../action'
import { connect } from 'react-redux'
import _ from 'lodash';
import axios from 'axios';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import moment from 'moment'
class TangkwaStatisticsDetail extends Component {
    constructor(props) {
        super(props);
        const staffId = _.last(window.location.pathname.split('/'))
        console.log("staff id by split", staffId)
        const person = _.find(props.profile, item => item.staffId == staffId)
        console.log("person by _.find", person)
        console.log("hi", props.staff)
        this.state = {
            person,
            peoplein: [],
            peopleout: [],
            profile : props.person

        }
        if (this.state.profile.role === 2) {
            console.log("login ss")
      
          }
         else if (this.state.profile.role === 1) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }
    }
    componentDidMount() {
       {this.checkRoleForRender(this.state.profile.role) && axios.get(`http://127.0.0.1:8000/employee/getcheckin/?staffId=${this.state.person.staffId}`)
            // axios.get(`http://127.0.0.1:8000/employee/getdetailemployee/?leaveId=${_.last(window.location.pathname.split('/'))}`)
            .then(res => {
                console.log("ddddd",res.data)
                const person1 = res.data.filter(person1 => {
                    return person1.Status === "in"
                })
                this.setState({ peoplein: person1 })
                const person2 = res.data.filter(person2 => {
                    return person2.Status == "out"
                })
                this.setState({ peopleout: person2 })
                console.log("in", this.state.peopleout)

            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }}
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

    handleDelete(staffId) {
        console.log('wwwwwwwwwwwwwwwwwwwww',staffId)
        axios.post("http://127.0.0.1:8000/employee/deleteuser/", {     
            "staffId": staffId,         
        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Delete Successful")
                        browserHistory.push('/statistics')
                    }
                }
            })
            .then(res => {
            })
    }
    checkRole(role){
        console.log("role------>",role === "2")

        if (role === "2") {
            return true
        }
        else {
            return false
        }
    }
    checkRoleForRender(role) {
        console.log("checkRoleForRender",role)
        if (role === 1) {
            return true
        }
        else if(role === 2){
            return true
        }
        else {
            return false
        }
    }
    render() {
        
        const { person } = this.state
        return (
            <div className="App">
               {this.checkRoleForRender(this.state.profile.role) && <div>
                <div className="tangkwaTitle"><h4><b>DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                   { this.checkRole(this.state.profile.employee[0].role) && <div className="tk1flex-1"><Link to= {`EditUserDetail/${this.state.person.staffId}`} > <button type="submit" value="Submit" onClick={this.handleCheck} className="Submit">EDIT</button></Link></div>}
                </div>
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
                    <div className="tkflex-1"><p><b></b>{this.state.person.sickRemain}</p></div>
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
                {this.checkRole(this.state.profile.employee[0].role) && <div className="tangkwaTitle" >

                    <button type="submit" value="Submit" onClick={() => this.handleDelete(this.state.person.staffId)} className="DeleteAccount">DELETE ACCOUNT</button>

                </div>}
               </div>}

            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state in', state.staff)
    return {
        profile: state.history,
        staff: state.staff,
        person : state.profile
    }
}
export default connect(mapStateToProps)(TangkwaStatisticsDetail)
