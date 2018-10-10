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
                <div className="tangkwaTitle"><h4>My Project</h4></div>

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
                            <p>PROJ000001</p>
                        </div>
                        <div className="tkflex-2">
                            <p>Leave Management</p>
                        </div>
                        <div className="tkflex-1">
                            <p>In Process</p>
                        </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="tangkwaSetProjectData row">
                        <div className="tkflex-1">
                            <p>PROJ000002</p>
                        </div>
                        <div className="tkflex-2">
                            <p>SCB</p>
                        </div>
                        <div className="tkflex-1">
                            <p>In Process</p>
                        </div>
                    </div>
                </div>
                <div className="flex-container">
                    <div className="tangkwaSetProjectData row">
                        <div className="tkflex-1">
                            <p>PROJ000003</p>
                        </div>
                        <div className="tkflex-2">
                            <p>Leave Management APPMAN.co.ltd</p>
                        </div>
                        <div className="tkflex-1">
                            <p>In Process</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TangkwaMyProject;