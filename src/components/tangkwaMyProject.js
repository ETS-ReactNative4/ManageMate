import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaMyProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <h4>My Project</h4>
                <div className="tangkwaSetProjectTable">
                    <div className="row">
                        <div className="tangkwaPJID"><p>PROJECT ID</p></div>
                        <div className="tangkwaPJNAME"><p>PROJECT NAME</p></div>
                        <div className="tangkwaPJSTATUS"><p>STATUS</p></div>
                    </div></div>
                <div className="tangkwaSetProjectData">
                    <div className="row">
                        <div className="tangkwaPJIDDATA"><p>PJ00001</p></div>
                        <div className="tangkwaPJNAMEDATA"><p>Leave Management</p></div>
                        <div className="tangkwaPJSTATUSDATA"><p>Done</p></div>
                    </div></div>
            </div>
        );
    }
}

export default TangkwaMyProject;