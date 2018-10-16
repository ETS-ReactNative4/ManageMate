import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>WITHDRAW REQUEST FORM</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class TangkwaCreateProj extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                5555555
            </div>
        );
    }
}
export default TangkwaCreateProj;