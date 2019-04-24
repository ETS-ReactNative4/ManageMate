import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'
import axios from 'axios';
import { connect } from 'react-redux'
const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>CREATE PROJECT</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class TangkwaCreateProj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            detail: '',
            profile : props.profile
        }
        if (this.state.profile.role === 1) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }
        
        this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
        this.handleChangeDetail = this.handleChangeDetail.bind(this);
    }
    handleChangeProjectName(event) {
        this.setState({ projectName: event.target.value });
        console.log("projectName", this.state.projectName)
    }
    handleChangeDetail(event) {
        this.setState({ detail: event.target.value });
        console.log("detail", this.state.detail)
    }
    handleSubmit = async event => {
        if (window.confirm("Are you sure to create new Project?")) {
            axios.post('http://127.0.0.1:8000/employee/addproject/', {
                "staffID": this.state.profile.employee[0].id,
                "ProjectName": this.state.projectName,
                "Comment": this.state.detail,
                "Status": "Ready",
                "member": "string",
            }, {
                    onUploadProgress: ProgressEvent => {
                        if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                            alert("Data has been sent!.");
                            browserHistory.push('/Allproject')
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
        browserHistory.push('/Allproject')}
    }

    handleCheck = () => {
        if (this.state.projectName== ''||
        this.state.detail== '' ) {
            alert('Incorrect or incomplete information!.')
        }
        else {
             this.handleSubmit()
        }
    }
    render() {
        return (
            <div className="App">
                <FormHeader />
                <div className="flex-container">
                    <div className="tk1flex-02"></div>
                    <div className="tk1flex-2">
                        <div className="tangkwaTitle"><p>PROJECT NAME : <input type="text" value={this.state.projectName} onChange={this.handleChangeProjectName} className="proj" /></p></div>
                        <div><div className="tangkwaTitle1"><p>DETAIL :</p></div><textarea value={this.state.detail} onChange={this.handleChangeDetail} className="textarea1" maxLength="80" type="text" /></div>
                      
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
export default connect(mapStateToProps)(TangkwaCreateProj)