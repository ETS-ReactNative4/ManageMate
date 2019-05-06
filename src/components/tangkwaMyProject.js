import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
class TangkwaMyProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            profile : props.profile
        }
    }
    componentDidMount() {
        // axios.get('http://managemate.azurewebsites.net/GetProjectInfoByStaffID?staffId=1')
        axios.get(`https://managemate.eastus.cloudapp.azure.com:8000/employee/myproject/?staffId=${this.state.profile.employee[0].id}`)
            .then(res => {
                console.log("My Project ----->", res.data)
                this.setState({people : res.data})
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
                            <div><p><b>{user.ProjectName}</b></p></div>
                        </div>
                        <div className={`${user.projectStatus == 'Done' ? 'tangkwaSetApprove tkflex-1' : user.projectStatus == 'Ready' ? 'tangkwaSetPending tkflex-1' : 'tangkwaSetReady tkflex-1'}`}>
                            <p>{user.Status}</p>
                        </div>
                    </div>
                </div>))}
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
export default connect(mapStateToProps)(TangkwaMyProject)