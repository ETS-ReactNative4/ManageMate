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

import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FilePond, registerPlugin } from 'react-filepond';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

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



class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOneday: true,
            files: ['index.html'],
        };
    }
    isOnedayQuestion = (isOneday) => {
        this.setState({
            isOneday
        })


    }

    render() {
        return (
            <div>
                <div>
                    <FormHeader />
                </div>
                <div className="dayquestion">
                    <h5>Select your leave types</h5>
                    <div className="select-types">
                        <select >
                            <option value={0}>select type</option>
                            <option value={2}>type1</option>
                            <option value={4}>type2</option>
                            <option value={6}>type3</option>
                            <option value={8}>type4</option>
                        </select>
                    </div>
                    <label className="container">DAYS
  <input type="radio" className="radio1" onChange={() => this.isOnedayQuestion(true)} checked={this.state.isOneday == true} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">HOURS
  <input type="radio" className="radio" onChange={() => this.isOnedayQuestion(false)} checked={this.state.isOneday == false} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                {!this.state.isOneday && <div className="dropdown-custom">
                    <h5 className="h5-config">Select hours</h5>
                    <select className="dropbut" >
                        <option value={0}>select hour</option>
                        <option value={2}>1 hour</option>
                        <option value={4}>2 hour</option>
                        <option value={6}>3 hour</option>
                        <option value={8}>4 hour</option>
                    </select>
                </div>}

                {this.state.isOneday && <div>
                    <Example />
                </div>}

                <div className="comment">
                    <p className="tp">Comment :</p><textarea className="textarea" maxLength="255" type="text" />
                </div>
                <div className="filepond-react">
                    {/* Pass FilePond properties as attributes */}
                    <FilePond ref={ref => this.pond = ref}
                        allowMultiple={true}
                        maxFiles={3}
                        server="/api"
                        onupdatefiles={(fileItems) => {
                            // Set current file objects to this.state
                            this.setState({
                                files: fileItems.map(fileItem => fileItem.file)
                            });
                        }}>
                    </FilePond>

                </div>
            </div>
        );
    }
}

export default RequestForm;