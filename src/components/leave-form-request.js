import React, { Component } from 'react';
import '../App.css';
import DateComponent from './DateComponent';
import clock from '../Image/circular-clock.png';
import { Redirect, browserHistory } from "react-router";
import { Link } from 'react-router';
import moment from 'moment';

const FormHeader = props => {
    return (

        <React.Fragment>
            <div className="show-header">
                LEAVE REQUEST FORM
            </div>
            <div className='header1'>
                <div className='date-header'>
                    <img src={clock} width="30px" height="30px" className="icon-clock" />Today Date :
                    <DateComponent />
                </div>
            </div>
        </React.Fragment>
    )
}

class RequestForm extends Component {
    render() {
        return (
            <div>
                <FormHeader />
            </div>
        );
    }
}

export default RequestForm;