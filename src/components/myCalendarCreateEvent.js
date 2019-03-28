import React, { Component } from 'react'
import '../App.css';
import EventCalendar from './EventCalendar';
import axios from 'axios'

const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>CREATE EVENT : MY CALENDAR</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class MyCalendarCreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            min : '',
            hour:'',
            comment: '',
            date : ''

        }

        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);

    }

    handleChangeHour(event) {
        this.setState({ hour: event.target.value });
        console.log("Hour",this.state.hour)
    }
    handleChangeMin(event) {
        this.setState({ min: event.target.value });
        console.log("Min",this.state.min)
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
        console.log("Comment",this.state.comment)
    }

    handleChangeDateTime = (id , value) => {
       this.setState({
           [id] : value
       })
    }

    handleSubmit = () => {
            // axios.post('https://managemate.azurewebsites.net/api/Leave/LeaveInfo', {
            axios.post("http://127.0.0.1:8000/employee/addcalendar/",{
            "staffID" : 1,
            "datetime" : this.state.date,
            "date" : this.state.date.substring(8,10),
            "time" :`${this.state.hour}` + `${this.state.min}`,
            "comment" : this.state.comment

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Data has been sent!.");
                        // browserHistory.push('/MyleaveHistory')

                    }

                }
            })
            .then(function (response) {
            })
    }
    


    render() {
        console.log("this is date ",this.state.date.substring(8,10))
        return (
            <div>
                <FormHeader/>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">TIME : <input type="text" value={this.state.hour} onChange={this.handleChangeHour} className="setTime" /> : <input type="text" value = {this.state.min} onChange={this.handleChangeMin} className="setTime" /> </div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">DATE : <EventCalendar onChange = {this.handleChangeDateTime} id ={'date'}/></div>

                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">COMMENT : <input type="text" value={this.state.comment} onChange={this.handleChangeComment} className="setForCM" /></div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "downdown">
                    <button type="submit" value="Submit" onClick= {this.handleSubmit} className = "Submit">Submit</button>
                    <button type="submit" value="Cancel" className = "Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default MyCalendarCreateEvent;
