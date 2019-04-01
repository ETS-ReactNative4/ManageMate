import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import check from '../Image/check.png'
import axios from 'axios';
import loading from '../Image/lg.rotating-balls-spinner.gif'
import moment from 'moment';
import clock from '../Image/circular-clock.png';
import DateComponent from './DateComponent';
const FormHeader = props => {
    return (

        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    CLOCK IN,OUT
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
class TangkwaCheckIn extends Component {
    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            showLocated: false,
            address: <img src={loading} />,
            status : ''
        }
    }
    componentDidMount() {
        this.setaddress()
    }
    handleSubmitClick = () => {

       let  date = moment().format('L'),
            time = moment().format('LT')
            console.log("this is check in date",date , time)

      
        // axios.post('https://managemate.azurewebsites.net/CheckInRequest', {
        // axios.post('http://172.20.10.4:8000/employee/checkin/', {
        axios.post('http://127.0.0.1:8000/employee/checkin/', {    
            "staffID": 1,
            "staffName": `Tangkwa`,
            "date" : date,
            "time" : time,
            "status": this.state.status,
            "place": this.state.address

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Data has been sent!.");
                        browserHistory.push('/MyClockIn')
                    }
                }
            })
            .then(function (response) {
            })
    }
    setaddress = () => {
        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition((position) => {
                axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyAT-CDzRnWD-A28ZTrwheqtprVitpvDKlw")
                    .then(res => {
                        let google = res.data.results[0].formatted_address
                        this.setState({
                            address: google,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        })
                        console.log('this is from google', res)
                    })
            });
        }
    }
    handleSetIn = () => {
        this.setState({ showLocated: true })
        this.setState({ status: "in" })
    }
    handleSetOut = () => {
        this.setState({ showLocated: true })
        this.setState({ status: "out" })
    }
    render() {
        console.log("this is state", moment().format())
        return (
            <div className="App">
                <FormHeader />
                <div className ="checkin-row">
                <div className="tangkwaTitle"><h4>CHECK IN : <img src={check} width="1000" height="200" className="checkpng" onClick={this.handleSetIn} /></h4></div>
                <div className="tangkwaTitle"><h4>CHECK OUT : <img src={check} width="200" height="200" className="checkpng" onClick={this.handleSetOut} /></h4></div>
                </div>
                {this.state.showLocated && <div>
                    <p>{this.state.address}</p>
                    <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.state.latitude + "," + this.state.longitude + "&zoom=13&size=800x400&key=AIzaSyAT-CDzRnWD-A28ZTrwheqtprVitpvDKlw"} className="googleMap" ></img>
                </div>}
                <div>
                    <button type="submit" value="Check in" className="Submit" onClick={this.handleSubmitClick}>Submit</button>
                    <button type="submit" value="Check out" className="Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}
export default TangkwaCheckIn;