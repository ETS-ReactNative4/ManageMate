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

class Example extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick() {
        this.setState(this.getInitialState());
    }
    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                        to &&
                        `Selected from ${from.toLocaleDateString()} to
                  ${to.toLocaleDateString()}`}{' '}
                    {from &&
                        to && (
                            <button className="link" onClick={this.handleResetClick}>
                                Reset
                </button>
                        )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <Helmet>
                    <style>{`
    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff !important;
      color: #4a90e2;
    }
    .Selectable .DayPicker-Day {
      border-radius: 0 !important;
    }
    .Selectable .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .Selectable .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }
  `}</style>
                </Helmet>
            </div>
        );
    }
}

const isOnedayQuestion = () => {

}

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOneday: true,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <FormHeader />
                </div>
                <div className="dayquestion">
                    <h5>Select your leave types</h5>
                    <label className="container">DAYS
  <input type="radio" checked="checked" className="radio1" onChange={() => this.isOnedayQuestion(true)} checked={this.state.isOneday} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">HOURS
  <input type="radio" className="radio" onChange={() => this.isOnedayQuestion(false)} checked={this.state.isOneday === false} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div className="dropdown-custom">
                    <h5 className="h5-config">Select your leave types</h5>
                    <select className="dropbut" >
                        <option value={0}>select hour</option>
                        <option value={2}>1 hour</option>
                        <option value={4}>2 hour</option>
                        <option value={6}>3 hour</option>
                        <option value={8}>4 hour</option>
                    </select>
                </div>

                <div>
                    <Example />
                </div>
            </div>
        );
    }
}

export default RequestForm;