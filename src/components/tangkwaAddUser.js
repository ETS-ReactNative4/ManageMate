import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router';
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
            lfwos: ''
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
    }
    handleChangeFirstName(event) {
        this.setState({ firstname: event.target.value });
        console.log("Firstname", this.state.firstname)
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
            axios.post('https://managemate.azurewebsites.net/AddEmployee', {
                staffID: 0,
                projectID: 0,
                firstnameEN: this.state.firstname,
                lastnameEN: this.state.lastName,
                firstnameTH: this.state.firstname,
                lastnameTH: this.state.lastName,
                email: this.state.email,
                role: this.state.position,
                bankNO: this.state.bankNo,
                bankName: this.state.bankName,
                tellNO: this.state.telNo
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Data has been sent!.");
                            browserHistory.push('/Leave')
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
                        <p>FIRSTNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" value={this.state.firstname} onChange={this.handleChangeFirstName} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>SICK LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" value={this.state.sick} onChange={this.handleChangeSick} className="setHour" />  HOURS</p>
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
                        <p>ANNUAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" value={this.state.annual} onChange={this.handleChangeAnnual} className="setHour" />  HOURS</p>
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
                        <p>LEAVE WITHOUT PAY : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" value={this.state.lwp} onChange={this.handleChangeLwp} className="setHour" />  HOURS</p>
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
                        <p>PERSONAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" value={this.state.personal} onChange={this.handleChangePersonal} className="setHour" />  HOURS</p>
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
                        <p>LEAVE FOR WORK OUTSIDE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" value={this.state.lfwos} onChange={this.handleChangeLfwos} className="setHour" />  HOURS</p>
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
                        <input type="text" value={this.state.position} onChange={this.handleChangePosition} className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                    </div>
                    <div className="tk1flex-2">
                    </div>
                </div>
                <div>
                    <button type="submit" value="Submit" onClick={this.handleSubmit} className="Submit">Submit</button>
                    <button type="submit" value="Cancel" className="Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}
export default TangkwaAddUser;
