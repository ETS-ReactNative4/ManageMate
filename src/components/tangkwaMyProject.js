import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import axios from 'axios';
class TangkwaMyProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        // axios.get('https://managemate.azurewebsites.net/GetProjectInfoByStaffID?staffId=1')
        axios.get(`http://127.0.0.1:8000/employee/getprojectbystaffid/?staffId=1`)
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("ttt", this.state.people)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4>MY PROJECT</h4></div>
                <div className="flex-container">
                    <div className="tangkwaSetProjectTable row">
                        <div className="tkflex-1">
                            <p>PROJECT ID</p>
                        </div>
                        <div className="tkflex-2">
                            <p>PROJECT NAME</p>
                        </div>
                        <div className="tkflex-1">
                            <p>STATUS</p>
                        </div>
                    </div>
                </div>
                {this.state.people.map(user => (<div className="flex-container">
                    <div className="tangkwaSetProjectData row">
                        <div className="tkflex-1">
                            <Link to={`ProjectDetail/${user.projectID}`} className="tkflex-2 p" ><p>{user.projectID}</p></Link>
                        </div>
                        <div className="tkflex-2 p">
                            <div><p><b>{user.projectName}</b></p></div>
                        </div>
                        <div className={`${user.projectStatus == 'Done' ? 'tangkwaSetApprove tkflex-1' : user.projectStatus == 'Ready' ? 'tangkwaSetPending tkflex-1' : 'tangkwaSetReady tkflex-1'}`}>
                            <p>{user.projectStatus}</p>
                        </div>
                    </div>
                </div>))}
            </div>
        );
    }
}
export default TangkwaMyProject;