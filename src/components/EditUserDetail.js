import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { addHistory } from '../action'
import { connect } from 'react-redux'
import _ from 'lodash';
import axios from 'axios';
import moment from 'moment'
class EditUserDetail extends Component {
    constructor(props) {
        super(props);
        const staffId = _.last(window.location.pathname.split('/'))
        console.log("staff id by split", staffId)
        const person = _.find(props.profile, item => item.staffId == staffId)
        console.log("person by _.find", person)
        console.log("hi", props.staff)
        this.state = {
            firstnameEN: '',
            lastnameEN: '',
            email: '',
            username: '',
            password: '',
            telNo: '',
            bankNo: '',
            bankName: '',
            role: '',
            staffId: '',
            sick: '',
            sickRemain: '',
            annual: '',
            annualRemain: '',
            lwp: '',
            lwpRemain: '',
            personal: '',
            personalRemain: '',
            lfwos: '',
            lfwosRemain: '',
            staffId: '',

        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeTelNo = this.handleChangeTelNo.bind(this);
        this.handleChangeBankNo = this.handleChangeBankNo.bind(this);
        this.handleChangeBankName = this.handleChangeBankName.bind(this);
        this.handleChangeSick = this.handleChangeSick.bind(this);
        this.handleChangeAnnual = this.handleChangeAnnual.bind(this);
        this.handleChangeLwp = this.handleChangeLwp.bind(this);
        this.handleChangePersonal = this.handleChangePersonal.bind(this);
        this.handleChangeLfwos = this.handleChangeLfwos.bind(this);
        this.handleChangeSickRemain = this.handleChangeSickRemain.bind(this);
        this.handleChangeAnnualRemain = this.handleChangeAnnualRemain.bind(this);
        this.handleChangeLwpRemain = this.handleChangeLwpRemain.bind(this);
        this.handleChangePersonalRemain = this.handleChangePersonalRemain.bind(this);
        this.handleChangeLfwosRemain = this.handleChangeLfwosRemain.bind(this);
        this.handleChangeusername = this.handleChangeusername.bind(this);
        this.handleChangepassword = this.handleChangepassword.bind(this);
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/employee/getemployee/?leaveId=${parseInt(_.last(window.location.pathname.split('/')))}`)
            // axios.get(`http://127.0.0.1:8000/employee/getdetailemployee/?leaveId=${_.last(window.location.pathname.split('/'))}`)
            .then(res => {
                console.log(res.data)
                this.setState({ firstnameEN: res.data[0].firstnameEN })
                this.setState({ lastnameEN: res.data[0].lastnameEN })
                this.setState({ email: res.data[0].email })
                this.setState({ username: res.data[0].username })
                this.setState({ password: res.data[0].password })
                this.setState({ telNo: res.data[0].tellNo })
                this.setState({ bankNo: res.data[0].lastnameEN })
                this.setState({ bankName: res.data[0].lastnameEN })
                this.setState({ role: res.data[0].role })
                this.setState({ staffId: res.data[0].staffID })
                this.setState({ sick: res.data[0].sickQuo })
                this.setState({ sickRemain: res.data[0].sickRemain })
                this.setState({ annual: res.data[0].annualQuo })
                this.setState({ annualRemain: res.data[0].annualRemain })
                this.setState({ lwp: res.data[0].lwpQuo })
                this.setState({ lwpRemain: res.data[0].lwpRemain })
                this.setState({ personal: res.data[0].personalQuo })
                this.setState({ personalRemain: res.data[0].personalRemain })
                this.setState({ lfwos: res.data[0].lfwosQuo })
                this.setState({ lfwosRemain: res.data[0].lfwosRemain })
                this.setState({ staffId: res.data[0].staffID })




            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    handleChangeFirstName(event) {
        this.setState({ firstnameEN: event.target.value });
        console.log("firstname", this.state.firstnameEN)
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
        this.setState({ lastnameEN: event.target.value });
        console.log("LastName", this.state.lastnameEN)
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
    handleChangeSickRemain(event) {
        this.setState({ sickRemain: event.target.value });
        console.log("sickRemain", this.state.sickRemain)
    }
    handleChangeAnnualRemain(event) {
        this.setState({ annualRemain: event.target.value });
        console.log("annualRemain", this.state.annualRemain)
    }
    handleChangeLwpRemain(event) {
        this.setState({ lwpRemain: event.target.value });
        console.log("lwpRemain", this.state.lwpRemain)
    }
    handleChangePersonalRemain(event) {
        this.setState({ personalRemain: event.target.value });
        console.log("personalRemain", this.state.personalRemain)
    }
    handleChangeLfwosRemain(event) {
        this.setState({ lfwosRemain: event.target.value });
        console.log("LfwosRemain", this.state.lfwosRemain)
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

    handleDelete() {
        console.log("Delete Already")
    }

    handleCheck = () => {
        axios.post("http://127.0.0.1:8000/employee/putEmployee/", {
            "firstnameEN": this.state.firstnameEN,
            "lastnameEN": this.state.lastnameEN,
            "email": this.state.email,
            "username": this.state.username,
            "password": this.state.password,
            "telNo": this.state.telNo,
            "bankNo": this.state.bankNo,
            "bankName": this.state.bankName,
            "role": this.state.role,
            "staffId": this.state.staffId,
            "sickQuo": this.state.sick,
            "sickRemain": this.state.sickRemain,
            "annualQuo": this.state.annual,
            "annualRemain": this.state.annualRemain,
            "lwpQuo": this.state.lwp,
            "lwpRemain": this.state.lwpRemain,
            "personalQuo": this.state.personal,
            "personalRemain": this.state.personalRemain,
            "lfwosQuo": this.state.lfwos,
            "lfwosRemain": this.state.lfwosRemain,
            "staffId": this.state.staffId

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Rejected Successfully")
                        // browserHistory.push('/Approve')
                    }
                }
            })
            .then(res => {
                console.log('log approve', res);
                console.log('log approve', res.data);
            })
    }
    render() {
        const { person } = this.state
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"> <button type="submit" value="Submit" onClick={this.handleCheck} className="Submit">SAVE</button></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>USERNAME : </b></p></div>
                    <div className="tk1flex-1"><input type="text" value={this.state.username} onChange={this.handleChangeusername} className="setForAddUser2" /></div>
                    <div className="tk1flex-05"><p><b>PASSWORD : </b></p></div>
                    <div className="tk1flex-1"><input type="text" value={this.state.password} onChange={this.handleChangepassword} className="setForAddUser2" /></div>
                    <div className="tk1flex-1"><p><b></b></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>FIRSTNAME :</b></p></div>
                    <div className="tk1flex-1"><p><input type="text" value={this.state.firstnameEN} onChange={this.handleChangeFirstName} className="setForAddUser2" /></p></div>
                    <div className="tk1flex-05 "><p><b>LASTNAME : </b></p></div>
                    <div className="tk1flex-1"><input type="text" value={this.state.lastnameEN} onChange={this.handleChangeLastName} className="setForAddUser2" /></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.staffId}</p></div>

                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>POSITION :</b></p></div>
                    <div className="tk1flex-1">
                        <select onChange={this.handleChangePosition} value={this.state.role}>
                            <option value="">Please Select</option>
                            <option value="1">Super User</option>
                            <option value="2">HR</option>
                            <option value="3">Normal User</option>
                        </select></div>
                    <div className="tk1flex-05"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>EMAIL :</b></p></div>
                    <div className="tk1flex-1"><p><input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="setForAddUser2" /></p></div>
                    <div className="tk1flex-05"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>BANK NAME :</b></p></div>
                    <div className="tk1flex-1"><p><input type="text" value={this.state.bankName} onChange={this.handleChangeBankName} className="setForAddUser2" /></p></div>
                    <div className="tk1flex-05"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-05"><p><b>BANK NO.</b></p></div>
                    <div className="tk1flex-1"><p><input type="text" value={this.state.bankNo} onChange={this.handleChangeBankNo} className="setForAddUser2" /></p></div>
                    <div className="tk1flex-05"><p></p></div>
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
                    <div className="tkflex-1"><p><input type="number" value={this.state.sick} onChange={this.handleChangeSick} className="setHour2" />  DAYS</p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.sickRemain} onChange={this.handleChangeSickRemain} className="setHour2" />  DAYS</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.annual} onChange={this.handleChangeAnnual} className="setHour2" />  DAYS</p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.annualRemain} onChange={this.handleChangeAnnualRemain} className="setHour2" />  DAYS</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"> <p><input type="number" value={this.state.lwp} onChange={this.handleChangeLwp} className="setHour2" />  DAYS</p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.lwpRemain} onChange={this.handleChangeLwpRemain} className="setHour2" />  DAYS</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.personal} onChange={this.handleChangePersonal} className="setHour2" />  DAYS</p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.personalRemain} onChange={this.handleChangePersonalRemain} className="setHour2" />  DAYS</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.lfwos} onChange={this.handleChangeLfwos} className="setHour2" />  DAYS</p></div>
                    <div className="tkflex-1"><p><input type="number" value={this.state.lfwosRemain} onChange={this.handleChangeLfwosRemain} className="setHour2" />  DAYS</p></div>
                </div>
                <div className="tangkwaTitle" >

                    <button type="submit" value="Submit" onClick={this.handleDelete} className="DeleteAccount">DELETE ACCOUNT</button>

                </div>


            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state in', state.staff)
    return {
        profile: state.history,
        staff: state.staff
    }
}
export default connect(mapStateToProps)(EditUserDetail)
