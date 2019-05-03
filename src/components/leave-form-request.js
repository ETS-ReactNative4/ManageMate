import React, { Component } from 'react';
import '../App.css';
import DateComponent from './DateComponent';
import clock from '../Image/circular-clock.png';
// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import StartdateCalendar from './StartdateCalendar';
import EnddateCalendar from './EnddateCalendar';
import { Redirect, browserHistory } from "react-router";
import { Link } from 'react-router';
import moment from 'moment';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Calendar from './Calendar';
import axios from 'axios';
import { addProfile } from '../action'
import { connect } from 'react-redux'

const FormHeader = props => {
    return (

        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    LEAVE REQUEST FORM
            </div>
                <div className='header1'>
                    <div className='date-header'>
                        <img src={clock} width="30px" height="30px" className="icon-clock" />Today Date :
                    <DateComponent />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}



const Comment = props => {
    const { onChange, textlimit } = props
    return (
        <div className="row-of-comment">
            <div className="flex-container">

                <div className="text-note flex2">
                    Note/comments
                </div>
                <div className="text-area flex6">

                    <textarea className="textarea" maxLength="80" type="text" onChange={(event) => onChange('note', event.target.value, event.target.value.length)} />
                    
                    
                </div>
                <div className="flex2">
                    <p className="text-limit">{textlimit}/80</p>
                </div>
            </div>
        </div>
    )
}

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result)
            };
            reader.onerror = function (error) {
                reject(error)
            };
        } catch (error) {
            reject(error)
        }
    })
}


class RequestForm extends React.Component {
  
    constructor(props) {
        
        super(props);
        this.state = {
            leavetype: "",
            isOneday: true,
            dayStart: '',
            dayEnd: '',
            len: 0,
            note: '',
            error : false,
            selectedFile : [] ,
            CheckTypeFile : false,
            profile : props.profile

        }
       
    };
    typehandler = (value) => {
        this.setState({
            leavetype: value
        })
        console.log('this is leave type', this.state.leavetype)
    }
    DayQuestionSetup = (value) => {
        this.setState({
            isOneday: value
        })
    }

    handleChangeOneDay = (id1, value, id2) => {
        console.log("value",value)
        this.setState({ [id1]: value })
        this.setState({ [id2]: value })
        console.log("this is date", this.state.dayEnd, this.state.dayStart)
    }

    handleChangeMoreDayStart = (id, value) => {
        this.setState({ [id]: value })
        console.log("this is date start",this.state.dayStart)
    }
    handleChangeMoreDayEnd = (id, value) => {
        this.setState({ [id]: value })
        console.log("this is date end ", this.state.dayEnd, this.state.dayStart) 
    }

    handleChangeComment = (id, value, count) => {

        this.setState({ [id]: value })
        this.setState({ len: count })

        console.log(this.state.note)
    }

    fileChangedHandler = (event) => {
        this.setState({ selectedFile: Array.from(event.target.files) })
        console.log(this.state.selectedFile)

    }
    checkTypeofFile = () => {
        let i = 0
        for (i = 0; i < (this.state.selectedFile.length); i++) {
            var ext = this.state.selectedFile[i].type
            if (ext != "image/jpeg") {
                this.setState({ CheckTypeFile: false })
                alert('You can only use .jpg file!')
                break;
            }
            else {
                this.setState({ CheckTypeFile: true })
            }
        }
        console.log('number of i', i)
        if (i > 3) {
            alert("You can only upload up to 3 images! \n please try again")
        }
    }

    handleCheckSubmit = () => {

        var isAfter = moment(this.state.dayEnd).isAfter(moment(this.state.dayStart).format());
      console.log("isAfter",isAfter)
      console.log("Start-End",this.state.dayStart,this.state.dayEnd)
        if (this.state.isOneday == true ) {
            var isAfter = moment(this.state.dayEnd).isAfter(moment(this.state.dayStart).format());
            console.log(isAfter)
            if (this.state.dayStart == 'Invalid dat' || this.state.dayEnd == 'Invalid dat' || this.checkTypeofFile == false || this.state.leavetype =='') {
                alert('Incorrect or incomplete information!.')
                
            }
            else {
                this.handleSendData()
            }
        
        }
        else {
            if (isAfter == false || this.state.dayStart == 'Invalid dat' || this.state.dayEnd == 'Invalid dat' || this.checkTypeofFile == false || this.state.leavetype =='') {
                alert('Incorrect or incomplete information!.')
                
            }
            else {
                this.handleSendData()
            }
            
        }

    }
    getBase64 = (file) => {
        console.log("in base64 format")
        return new Promise((resolve, reject) => {
            try {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    resolve(reader.result)
                };
                reader.onerror = function (error) {
                    reject(error)
                };
            } catch (error) {
                reject(error)
            }
        })
    }

    handleSendData = async event => {
       
        if (this.state.selectedFile.length == 0){
            console.log("this is send fuction")
            // axios.post('https://managemate.azurewebsites.net/api/Leave/LeaveInfo', {
            axios.post("http://52.168.175.101:8000/employee/addleave/",{
            "staffID" : this.state.profile.employee[0].id,
            "firstnameEN" : this.state.profile.employee[0].first_name_EN,
            "lastnameEN" : this.state.profile.employee[0].last_name_EN,
            "role" : this.state.profile.employee[0].role,
            "leaveType" : this.state.leavetype,
            "leaveStartDateTime" : this.state.dayStart,
            "leaveEndDateTime" : this.state.dayEnd,
            "leaveStatus" : "Pending",
            "leaveComment" : this.state.note,
            "approvedBy" : "-",
            "approvedTime" : "2019-02-25T11:55:50.106Z",
            "leaveFile1" : "",
            "leaveFile2" : "",    
            "leaveFile3" : "",

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Data has been sent!.");
                         browserHistory.push('/MyleaveHistory')

                    }

                }
            })
            .then(function (response) {
            })
        }
        else {
        let Base64File =  await this.getBase64(this.state.selectedFile[0])
        // axios.post('https://managemate.azurewebsites.net/api/Leave/LeaveInfo', {
        axios.post("http://52.168.175.101:8000/employee/addleave/",{
            "staffID" : this.state.profile.employee[0].id,
            "firstnameEN" : this.state.profile.employee[0].first_name_EN,
            "lastnameEN" : this.state.profile.employee[0].last_name_EN,
            "role" : this.state.profile.employee[0].role,
            "leaveType" : this.state.leavetype,
            "leaveStartDateTime" : this.state.dayStart,
            "leaveEndDateTime" : this.state.dayEnd,
            "leaveStatus" : "Pending",
            "leaveComment" : this.state.note,
            "approvedBy" : "-",
            "approvedTime" : "2019-02-25T11:55:50.106Z",
            "leaveFile1" : Base64File,
            "leaveFile2" : "",    
            "leaveFile3" : "",

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Data has been sent!.");
                        browserHistory.push('/MyleaveHistory')

                    }

                }
            })
            .then(function (response) {
            })
        }
    }

    
    render() {
        return (

            <div>
                <FormHeader />
                <div className='flex-container'>

                    <div className='select-livetype-text flex2'>
                        Select your live type
                </div>
                    <div className="TypeSelect">
                        <div className="dropdown-oneday">
                            <select className="option-time" onChange={(event) => this.typehandler(event.target.value)} >
                            <option value={''}>Please Select LeaveType</option>
                                <option value={'SICK LEAVE'}>SICK LEAVE</option>
                                <option value={'ANNUAL LEAVE'}>ANNUAL LEAVE</option>
                                <option value={'LEAVE WITH OUT PAY'}>LEAVE WITH OUT PAY</option>
                                <option value={'PERSONAL LEAVE'}>PERSONAL LEAVE</option>
                                <option value={'LEAVE FOR WORK OUTSIDE'}>LEAVE FOR WORK OUTSIDE</option>
                            </select>
                    </div>
                    </div>
                    
                </div>
                <div className="row-DayQuestion">
                    <div className="flex-container">

                        <div className=" dayrequest-text flex2">
                            Day Requested
                        </div>
                        <div className="DayTypeSelect">
                            <input className='form-check-input1' type="radio" onChange={() => this.DayQuestionSetup(true)} checked={this.state.isOneday === true} />
                            <label className="form-check-label-Oneday">
                                One day
                         </label>
                            <input className="form-check-input2" type="radio" onChange={() => this.DayQuestionSetup(false)} checked={this.state.isOneday === false} />
                            <label className="form-check-label-Moreday">
                                More than one day
                         </label>
                        </div>
                    </div>
                </div>


                <div className="flex-container">
                    {this.state.isOneday && <div className="text-date">
                        Date
                            <Calendar onChange={this.handleChangeOneDay} id1={'dayStart'} id2={'dayEnd'} />
                    </div>}

                    {!this.state.isOneday && <div className="text-date">
                        Date
                            <StartdateCalendar  onChange={this.handleChangeMoreDayStart} id1={'dayStart'} />
                    </div>}
                    {!this.state.isOneday && <div className='text-date2 dateEnd'>
                        Date end
                            <EnddateCalendar onChange={this.handleChangeMoreDayEnd} id1={'dayEnd'}/>
                    </div>}

                </div>

                <div className='flex-container'>
                    <Comment value={this.state.note} onChange={this.handleChangeComment} textlimit={this.state.len} />
                </div>

                <div className='flex-container'>
                    <div className="input-file flex2">

                    <input type="file" onChange={this.fileChangedHandler}  size="2MB" accept="image" required multiple />
                    </div>
                </div>

                <div className="confirm-row">
                        <button className="submit-button" onClick={this.handleCheckSubmit} className ="Submit">SEND</button>
                        <Link to={'/'}><button  className ="Cancel-button">CANCEL</button></Link>
                </div>


            </div>



        );
    }
}
const mapStateToProps = state => {
    console.log('state in', state.profile)
    return {
        profile: state.profile,
       
    }
    
}
export default connect(mapStateToProps)(RequestForm)
