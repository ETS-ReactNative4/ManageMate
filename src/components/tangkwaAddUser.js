import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'
class TangkwaAddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastName: '',
            email: '',
            telNo: '',
            bankNo: '',
            bankName: '',
            position: '',
            sick: '',
            annual: '',
            lwp: '',
            personal: '',
            lfwos: '',
            username : "",
            password : '',
            profile : props.profile
        }
        if (this.state.profile.role === 2) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelNo = this.handleChangeTelNo.bind(this);
        this.handleChangeBankNo = this.handleChangeBankNo.bind(this);
        this.handleChangeBankName = this.handleChangeBankName.bind(this);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleChangeSick = this.handleChangeSick.bind(this);
        this.handleChangeAnnual = this.handleChangeAnnual.bind(this);
        this.handleChangeLwp = this.handleChangeLwp.bind(this);
        this.handleChangePersonal = this.handleChangePersonal.bind(this);
        this.handleChangeLfwos = this.handleChangeLfwos.bind(this);
        this.handleChangeusername = this.handleChangeusername.bind(this);
        this.handleChangepassword = this.handleChangepassword.bind(this);
    }
    handleChangeFirstName(event) {
        this.setState({ firstname: event.target.value });
        console.log("Firstname", this.state.firstname)
    }
    handleChangeusername(event) {
        this.setState({ username: event.target.value });
        console.log("username", this.state.username)
    }
    handleChangepassword(event) {
        this.setState({ password: event.target.value });
        console.log("password", this.state.password)
    }
    handleChangeLastName(event) {
        this.setState({ lastName: event.target.value });
        console.log("LastName", this.state.lastName)
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
        console.log("email", this.state.email)
    }
    handleChangeTelNo(event) {
        this.setState({ telNo: event.target.value });
        console.log("telNo", this.state.telNo)
    }
    handleChangeBankNo(event) {
        this.setState({ bankNo: event.target.value });
        console.log("bankNo", this.state.bankNo)
    }
    handleChangeBankName(event) {
        this.setState({ bankName: event.target.value });
        console.log("bankName", this.state.bankName)
    }
    handleChangePosition(event) {
        this.setState({ position: event.target.value });
        console.log("position", this.state.position)
    }
    handleChangeSick(event) {
        this.setState({ sick: event.target.value });
        console.log("sick", this.state.sick)
    }
    handleChangeAnnual(event) {
        this.setState({ annual: event.target.value });
        console.log("annual", this.state.annual)
    }
    handleChangeLwp(event) {
        this.setState({ lwp: event.target.value });
        console.log("lwp", this.state.lwp)
    }
    handleChangePersonal(event) {
        this.setState({ personal: event.target.value });
        console.log("personal", this.state.personal)
    }
    handleChangeLfwos(event) {
        this.setState({ lfwos: event.target.value });
        console.log("Lfwos", this.state.lfwos)
    }
    handleSubmit = async event => {
        if (window.confirm("Are you sure to add new user?")) {
            // axios.post('http://managemate.azurewebsites.net/AddEmployee', {
                axios.post('http://52.168.175.101:8000/employee/addemployee/', {
                // "withdrawID": 0, 
                // "staffID": 1,
                // "bankNo": "this.state.bankNo",
                // "bankNumber": 0,
                // "firstnameEN": "string",
                // "lastnameEN": "string",
                // "role": this.state.position ,
                // "amount": 0,
                "user":{
                    "username":this.state.username,
                    "password":this.state.password,
                    "user_type": this.state.position,
                },
                "data":{
                    "staffID": 0,
                    "projectID": 0,
                    "firstnameEN": this.state.firstname ,
                    "lastnameEN": this.state.lastName,
                    "firstnameTH": "string",
                    "lastnameTH": "string",
                    "email": this.state.email,
                    "role": this.state.position,
                    "bankNO": this.state.bankNo,
                    "bankName": this.state.bankName,
                    "tellNO": this.state.telNo ,
                    "sickQuo": this.state.sick,
                    "sickRemain": this.state.sick,
                    "annualQuo": this.state.annual,
                    "annualRemain": this.state.annual,
                    "lwpQuo": this.state.lwp ,
                    "lwpRemain": this.state.lwp,
                    "personalQuo": this.state.personal ,
                    "personalRemain": this.state.personal ,
                    "lfwosQuo": this.state.lfwos ,
                    "lfwosRemain": this.state.lfwos
                }

            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Data has been sent!.");
                            browserHistory.push('/Statistics')
                        }
                    }
                })
                .then(function (response) {
                })
                .catch((error) => {
                    console.log('this is error', error)
                    // handle error here
                })
        }
    }
    handleCancel = () => {
        if (window.confirm("Are you Cancel")) {
        browserHistory.push('/Statistics')}
    }

    handleCheck = () => {
        console.log("log in check")
        if (this.state.firstname == '' ||
        this.state.lastName== '' ||
        this.state.email== ''||
        this.state.telNo== ''||
        this.state.bankNo== ''||
        this.state.bankName== ''||
        this.state.position== '' ||
        this.state.sick== '' || 
        this.state.sick < 0 ||
        this.state.annual== ''||
        this.state.lwp== ''||
        this.state.personal== '' ||
        this.state.lfwos== '' ){
            alert('Incorrect or incomplete information!')
        }
        else{
            this.handleSubmit()
        }
    }
    render() {
        return (
            <div>
                <div className="tangkwaTitle"><h4><b>ADD USER</b></h4></div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                    </div>
                    <div className="tk1flex-2">
                    </div>
                    <div className="tk1flex-2">
                        <p><b><u>LEAVE QUOTA</u></b></p>
                    </div>
                    <div className="tk1flex-2">
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>USERNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.username} onChange={this.handleChangeusername} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>SICK LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="number" value={this.state.sick} onChange={this.handleChangeSick} className="setHour" />  DAYS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>PASSWORD : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="password" value={this.state.password} onChange={this.handleChangepassword} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>ANNUAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="number" value={this.state.annual} onChange={this.handleChangeAnnual} className="setHour" />  DAYS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>FIRSTNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.firstname} onChange={this.handleChangeFirstName} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>LEAVE WITHOUT PAY : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="number" value={this.state.lwp} onChange={this.handleChangeLwp} className="setHour" />  DAYS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>LASTNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.lastname} onChange={this.handleChangeLastName} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>PERSONAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="number" value={this.state.personal} onChange={this.handleChangePersonal} className="setHour" />  DAYS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>EMAIL : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>LEAVE FOR WORK OUTSIDE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="number" value={this.state.lfwos} onChange={this.handleChangeLfwos} className="setHour" />  DAYS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>TEL NO. : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.telNo} onChange={this.handleChangeTelNo} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                       
                    </div>
                    <div className="tk1flex-2">
                     
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>BANK NO. : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.bankNo} onChange={this.handleChangeBankNo} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        
                    </div>
                    <div className="tk1flex-2">
                       
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>BANK NAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.bankname} onChange={this.handleChangeBankName} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                    </div>
                    <div className="tk1flex-2">
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-22">
                        <p>POSITION : </p>
                    </div>
                    <div className="tk1flex-2">
                       
                            <select onChange={this.handleChangePosition} >
                                <option value="">Please Select</option>
                                <option value="1">Super User</option>
                                <option value="2">HR</option>
                                <option value="3">Normal User</option>
                            </select>
                        
                    </div>
                    <div className="tk1flex-2">
                    </div>
                    <div className="tk1flex-2">
                    </div>
                </div>
                
                <div>
                    <button type="submit" value="Submit" onClick={this.handleCheck} className="Submit">Submit</button>
                    <button type="submit" value="Cancel" onClick={this.handleCancel}className="Cancel-button">Cancel</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log('state chaeck stat1', state.profile)
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps)(TangkwaAddUser)