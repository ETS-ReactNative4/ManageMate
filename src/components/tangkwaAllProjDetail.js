import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import _ from 'lodash';
import moment from 'moment'
class TangkwaAllProjDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            profile : props.profile
        }
        console.log("ttt11", this.state.profile.employee[0].id)
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

    onClickJoinProject = () =>{
        axios.post("http://127.0.0.1:8000/employee/putJoinProject/",{     
                "staffId": this.state.profile.employee[0].id,
                "projectID": this.state.people[0].projectID,
               
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
    checkToDoProj(status) {
        if (status === "Done") {
            return false
        }
        else if(status === "Ready") {
            return true
        }
        else if (status === "In process" ) {
            return true
        }
    }
    
    render() {
        return (
            <div className="App">
                {this.state.people.map(people => (<div>
                    <div className="tangkwaTitle"><h4><b>PROJECT DETAIL</b></h4></div>
                    <div className="tangkwaTitle flex-container">
                        <div className="tk1flex-0"></div>
                        <div className="tk1flex-2">
                            <div><p><b>PROJECT ID : </b>{people.projectID}</p></div>
                            <div><p><b>PROJECT NAME : </b>{people.ProjectName}</p></div>
                            <div><p><b>MEMBERS :</b>{people.MemberInProject}</p></div>
                            <div><p><b>DETAILS :</b>{people.ProjectDetail}</p></div>
                            <div><p><b>FILES :</b></p></div>
                        </div>
                        <div className="tkflex-1 pjFrame">
                            <div >
                                <div><p><b>STATUS : </b>{people.Status}</p></div>
                            </div>
                            {this.checkStatus(people.Status) && this.setRole(this.state.profile.employee[0].role) && <div>
                                <button type="submit" value="Submit" className="pStatusProcess" onClick={this.onClickChangeStatusInprocess}>IN PROCESS</button>
                                <button type="submit" value="Submit" className="pStatusDone" onClick={this.onClickChangeStatusDone}>DONE</button></div>}
                        </div>
                    </div>
                   {this.checkToDoProj(people.Status) && <div className="tangkwaTitle2"><button type="submit" value="Submit" className="joinProject" onClick={this.onClickJoinProject}>JOIN PROJECT</button></div>}
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
export default connect(mapStateToProps)(TangkwaAllProjDetail)