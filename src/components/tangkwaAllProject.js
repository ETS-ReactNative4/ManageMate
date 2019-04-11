import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProject } from '../action'
class TangkwaAllProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            profile : props.profile
        }
        console.log("Profile ----->",this.state.profile)
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/employee/getproject/')
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("ttt", this.state.people)
                this.props.addProject(person)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    checkRole(role) {
        console.log("checktype ---->",typeof(role))
        if (role === "1"){
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
                <div className="tangkwaTitle"><h4>ALL PROJECT</h4></div>
                {this.checkRole(this.state.profile.employee[0].role) && <Link to ='/createProject'><button className = "createproj-button">CREATE NEW PROJECT</button></Link>}
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
                {this.state.people.map(people => (<div className="flex-container">
                    <div className="tangkwaSetProjectData row">
                        <div className="tkflex-1">
                            <Link to={`ProjectsDetail/${people.projectID}`}  ><p>{people.projectID}</p></Link>
                        </div>
                        <div className="tkflex-2">
                            <div><p><b>{people.ProjectName}</b></p></div>
                        </div>
                        <div className={`${people.projectStatus == 'Done' ? 'tangkwaSetApprove tkflex-1' : people.projectStatus == 'Ready' ? 'tangkwaSetPending tkflex-1' : 'tangkwaSetReady tkflex-1'}`}>
                            <p>{people.Status}</p>
                        </div>
                    </div>
                </div>))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addProject: (project) => dispatch(addProject(project))
})
const mapStateToProps = state => {
    console.log('state...', state.project)
    return {
        people: state.project,
        profile : state.profile
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaAllProject)