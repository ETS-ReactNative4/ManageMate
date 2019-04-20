import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment'
import { connect } from 'react-redux'
class TangkwaProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
    people : [],
    profile : props.profile
    
        }
    }
    componentDidMount() {
      axios.get(`http://127.0.0.1:8000/employee/getprojectbyprojectid/?projectId=${parseInt(_.last(window.location.pathname.split('/')))}`)
      .then(res => {
        const person = res.data.map((user) => {
            return {
                MemberInProject : user.MemberInProject+",",
                ProjectDetail : user.ProjectDetail,
                ProjectName : user.ProjectName,
                Staffname : user.Staffname,
                Status : user.Status,
                comment : user.comment,
                projectID : user.projectID

            }
        })
        this.setState({ people: person })
        console.log("person ja =======>",person)
       
      

      
      
    })
    .catch((error) => {
        console.log('this is error', error)
        // handle error here
    })
    }
    onClickChangeStatusDone = () => {
        axios.post("http://127.0.0.1:8000/employee/changeProjectStatus/",{     
            "projectID": this.state.people[0].projectID,
            "status": "Done"
           
        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Join project successful")
                    }
                }
            })
            .then(res => {
                console.log('log approve', res);
                console.log('log approve', res.data);
            })
    }
    onClickChangeStatusInprocess = () => {
        axios.post("http://127.0.0.1:8000/employee/changeProjectStatus/",{     
            "projectID": this.state.people[0].projectID,
            "status": "In process"
           
        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Event Successful")
                    }
                }
            })
            .then(res => {
                console.log('log approve', res);
                console.log('log approve', res.data);
            })
    }
    checkStatus(status) {
        if (status === "Done") {
            return false
        }
        else if (status != "Done") {
            return true
        }
    }
    setRole(role) {
        if (role === "1") {
            return true
        }
        else if (role === "2") {
            return true
        }
        else if (role === "3") {
            return false
        }
    }
    render() {
        return (
            <div className="App">
            {this.state.people.map (people => (<div>
                <div className="tangkwaTitle"><h4><b>PROJECT DETAIL</b></h4></div>
                <div className="tangkwaTitle flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2">
                        <div><p><b>PROJECT ID : </b>{people.projectID}</p></div>
                        <div><p><b>PROJECT NAME : </b>{people.ProjectName}</p></div>
                        <div><p><b>MEMBERS :</b>{people.MemberInProject}</p></div>
                        <div><p><b>DETAILS :</b>{people.comment}</p></div>
                       
                    </div>
                    <div className="tkflex-1 pjFrame">
                        <div><p><b>STATUS : </b>{people.Status}</p></div>
                        {this.checkStatus(people.Status) && this.setRole(this.state.profile.employee[0].role) && <div>
                                <button type="submit" value="Submit" className="pStatusProcess" onClick={this.onClickChangeStatusInprocess}>IN PROCESS</button>
                                <button type="submit" value="Submit" className="pStatusDone" onClick={this.onClickChangeStatusDone}>DONE</button></div>}
                    </div>
                </div>
        </div>))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state chaeck stat2', state.profile)
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps)(TangkwaProjectDetail)