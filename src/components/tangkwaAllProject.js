import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class TangkwaAllProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId : 'PROJ00001',
            projectName : 'Leave Management software',
            status : 'IN PROCESS'
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4>ALL PROJECT</h4></div>
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
                <div className="flex-container">
                    <div className="tangkwaSetProjectData row">
                        <div className="tkflex-1">
                        <Link to='ProjectsDetail' className="tkflex-2" ><p>{this.state.projectId}</p></Link>
                        </div>
                        <div >
                        <div><p><b>{this.state.projectName}</b></p></div>
                        </div>
                        <div className="tkflex-1">
                            <p>{this.state.status}</p>
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}
export default TangkwaAllProject;