import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import _ from 'lodash'
import moment from 'moment'
import axios from 'axios';
import { connect } from 'react-redux'
import BigPicture from "react-bigpicture";
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            set: '',
            profile : props.profile,
            peoplein : [],
            peopleout : []
        }
        console.log("log",this.state.profile)
    }
   
  setRole(role){
      if (role === "1") {
          return "Super User"
      }
      else if(role === "2"){
          return "HR"
      }
      else if (role === "3") {
          return "Normal User"
      }
  }
  componentDidMount() {
    // axios.get('https://managemate.azurewebsites.net/GetCheckinByStaffID?leaveId=1')
    axios.get(`http://127.0.0.1:8000/employee/getcheckin/?staffId=${this.state.profile.employee[0].id}`) //this.state.profile.employee[0].id
        .then(res => {
            const person = res.data
            this.setState({ people: person })
            console.log("clock in", this.state.people)
            const person1 = res.data.filter(person1 => {
                return person1.Status === 'in'
            })
            this.setState({ peoplein: person1 })
            console.log("peoplein",this.state.peoplein)
            const person2 = res.data.filter(person2 => {
                return person2.Status === 'out'
            })
            this.setState({ peopleout: person2 })
            console.log("peopleout",this.state.peopleout)
        })
        .catch((error) => {
            console.log('this is error', error)
            // handle error here
        })
}
    
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>MY PROFILE</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"><Link to = '/login'><button type="submit" value="Submit" onClick={this.handleDelete} className="Logout_Account">LOG OUT</button></Link></div>
                   </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME : </b>{this.state.profile.employee[0].first_name_EN}</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>{this.state.profile.employee[0].last_name_EN}</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.profile.employee[0].id}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION : </b>{this.setRole(this.state.profile.employee[0].role)}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>PROJECTS : </b>22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>EMAIL : </b>{this.state.profile.employee[0].email}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NAME : </b>{this.state.profile.employee[0].bank_name}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NO. : </b>{this.state.profile.employee[0].bank_no}</p></div>
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
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].sick_quo}</p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].sick_remain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].annual_quo}</p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].annual_remain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].lwp_quo}</p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].lwp_remain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].personal_quo}</p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].personal_remain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].lfwos_quo}</p></div>
                    <div className="tkflex-1"><p>{this.state.profile.employee[0].lfwos_remain}</p></div>
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
    console.log('state chaeck stat', state.profile)
    return {
        profile: state.history,
        profile: state.profile
    }
}
export default connect(mapStateToProps)(UserProfile)