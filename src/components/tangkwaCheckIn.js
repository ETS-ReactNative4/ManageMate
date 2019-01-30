import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import check from '../Image/check.png'
import axios from 'axios'




const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h5><b>TODAY DATE : 11/12/2018</b></h5>
                    <div><h5><b>TIME : 9.30 AM</b></h5></div>
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
            address: 'loading'
        }


    }

    componentDidMount() {
        this.setaddress()
    }

    setaddress = () => {
        if (navigator.geolocation) { //check if geolocation is available
            navigator.geolocation.getCurrentPosition((position) => {
                axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyAO5c7iTq4pJLrL8AFRu8z6dIKUu5J05ko")
                    .then(res => {
                        let google = res.data.results[0].formatted_address
                        this.setState({
                            address: google,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude

                        })

                    })
            });
        }
    }


    handleSetTrue = () => {
        this.setState({ showLocated: true })



    }

    render() {
        console.log("this is state", this.state)
        return (
            <div className="App">
                <FormHeader />

                <div ><h4>CHECK IN :</h4><button type="submit" value="Cancel" className="Checkinnn" onClick={this.handleSetTrue} >Click here for Checkin</button></div>
                {this.state.showLocated && <div>
                    <p>{this.state.address}</p>
                    <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + this.state.latitude + "," + this.state.longitude + "&zoom=13&size=800x400&key=AIzaSyAO5c7iTq4pJLrL8AFRu8z6dIKUu5J05ko"} className="MapCheckin" width="300" height="300" ></img>
                    {console.log("la", this.state.latitude)}
                    <div><button type="submit" value="Submit" className="Submit">Submit</button>
                        <button type="submit" value="Cancel" className="Cancel">Cancel</button></div>

                </div>}
                <div>


                </div>
            </div>
        );
    }
}

export default TangkwaCheckIn;