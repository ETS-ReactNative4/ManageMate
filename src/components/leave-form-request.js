import React, { Component } from 'react';
import '../App.css';
import DateComponent from './DateComponent';
import clock from '../Image/circular-clock.png';
// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Redirect, browserHistory } from "react-router";
import { Link } from 'react-router';
import moment from 'moment';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Calendar from './Calendar';

const FormHeader = props => {
    return (

        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    LEAVE REQUEST FORM
            </div>
                <div className='header1'>
                    <div className='date-header'>
                        <img src={clock} width="30px" height="30px" className="icon-clock" />Today Date :
                    <DateComponent />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Comment = props => {
    const { onChange, textlimit } = props
    return (
        <div className="flex-container">

            <div className="text-note flex2">
                Note/comments :
                </div>
            <div className="text-area flex6">

                <textarea className="textarea" maxLength="255" type="text" onChange={(event) => onChange('note', event.target.value, event.target.value.length)} />
            </div>

            <p className="text-limit flex2">{textlimit}/255</p>

        </div>
    )
}


class RequestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leavetype: "",
            isOneday: undefined,
            len: 0,
            note: '',

        }
    };
    typehandler = (value) => {
        this.setState({
            leavetype: value
        })
        console.log('this is leave type', this.state.leavetype)
    }
    DayQuestionSetup = (value) => {
        this.setState({
            isOneday: value
        })
    }

    handleChangeOneDay = (id, value) => {
        this.setState({ [id]: value })
    }

    handleChangeMoreDay = (id, value) => {
        this.setState({ [id]: value })
    }

    handleChangeComment = (id, value, count) => {

        this.setState({ [id]: value })
        this.setState({ len: count })
    }



    render() {

        return (

            <div>
                <FormHeader />
                <div className='flex-container'>

                    <div className='select-livetype-text flex2'>
                        Select your live type
                </div>
                    <div className="flex6">
                        <div className="dropdown-oneday">
                            <select className="option-time" onChange={(event) => this.typehandler(event.target.value)} >
                                <option value={'SICK LEAVE'}>SICK LEAVE</option>
                                <option value={'ANNUAL LEAVE'}>ANNUAL LEAVE</option>
                                <option value={'LEAVE WITH OUT PAY'}>LEAVE WITH OUT PAY</option>
                                <option value={'ETC'}>ETC</option>
                                <option value={'ETC'}>ETC</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="row-DayQuestion">
                    <div className="flex-container">

                        <div className=" dayrequest-text flex2">
                            Day Requested
                        </div>
                        <div className="flex6">
                            <input className='form-check-input1' type="radio" onChange={() => this.DayQuestionSetup(true)} checked={this.state.isOneday === true} />
                            <label className="form-check-label-Oneday">
                                One day
                         </label>
                            <input className="form-check-input2" type="radio" onChange={() => this.DayQuestionSetup(false)} checked={this.state.isOneday === false} />
                            <label className="form-check-label-Moreday">
                                More than one day
                         </label>
                        </div>
                    </div>
                </div>


                <div className="flex-container">
                    <div className="text-date flex2">
                        Date
                            <Calendar />
                    </div>

                    <div className="time-text flex6">
                        Time
                        </div>
                </div>

                <div className='flex-container'>
                    <Comment value={this.state.note} onChange={this.handleChangeComment} textlimit={this.state.len} />
                </div>
            </div>



        );
    }
}

export default RequestForm;