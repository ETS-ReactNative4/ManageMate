import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'
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
    render() {
        return (
            <div className="App">
                <FormHeader />
                <div className="flex-container">
                    <div className="tk1flex-02"></div>
                    <div className="tk1flex-2">
                        <div className="tangkwaTitle"><p>PROJECT NAME : <input type="text" value={this.state.projectName} onChange={this.handleChangeProjectName} className="proj" /></p></div>
                        <div><div className="tangkwaTitle1"><p>DETAIL :</p></div><textarea value={this.state.detail} onChange={this.handleChangeDetail} className="textarea1" maxLength="255" type="text" /></div>
                        <div className="tangkwaTitle"><p>FILE :</p></div>
                    </div>
                </div>
                <div>
                    <button type="submit" value="Submit" className="Submit">Submit</button>
                    <button type="submit" value="Cancel" className="Cancel">Cancel</button>

                </div>
            </div>
        );
    }
}
export default TangkwaCreateProj;