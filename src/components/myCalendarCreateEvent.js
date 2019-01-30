import React, { Component } from 'react'
import '../App.css';

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
            comment: ''

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
    render() {
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
                <div className = "tk1flex-3 downdown">DATE : </div>
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
                    <button type="submit" value="Submit" className = "Submit">Submit</button>
                    <button type="submit" value="Cancel" className = "Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default MyCalendarCreateEvent;
