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
            people: []
        }
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/employee/getprojectbyprojectid/?projectId=${parseInt(_.last(window.location.pathname.split('/')))}`)
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("ttt11", this.state.people)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }

    onClickJoinProject = () =>{
        axios.post("http://127.0.0.1:8000/employee/putJoinProject/",{     
                "staffId": 2,
                "projectID": this.state.people.projectID,
               
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
            "projectId": this.state.people.projectID,
            "status": "done"
           
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
            "projectId": this.state.people.projectID,
            "status": "inprocess"
           
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
                            <div><p><b>MEMBERS :</b>{this.state.MemId}</p></div>
                            <div><p><b>DETAILS :</b>{people.ProjectDetail}</p></div>
                            <div><p><b>FILES :</b></p></div>
                        </div>
                        <div className="tkflex-1">
                            <div className="pjFrame">
                                <div><p><b>STATUS : </b>{people.Status}</p></div>
                                <div><p><b>START : </b>{moment(people.startDateTime).format('DD-MM-YYYY')}</p></div>
                                <div><p><b>DONE : </b>{moment(people.endDateTime).format('DD-MM-YYYY')}</p></div>
                                <div><p><b>TOTAL : </b></p></div>
                            </div>
                            <div>
                                <button type="submit" value="Submit" className="pStatusProcess" onClick={this.onClickChangeStatusInprocess}>IN PROCESS</button>
                                <button type="submit" value="Submit" className="pStatusDone" onClick={this.onClickChangeStatusDone}>DONE</button></div>
                        </div>
                    </div>
                    <div className="tangkwaTitle2"><button type="submit" value="Submit" className="joinProject" onClick={this.onClickJoinProject}>JOIN PROJECT</button></div>
                </div>))}
            </div>
        );
    }
}
export default TangkwaAllProjDetail;