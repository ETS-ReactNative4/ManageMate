import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import check from '../Image/check.png'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
          latitude: '',
          longitude: '',
          showLocated: false
        }
    
        this.getMyLocation = this.getMyLocation.bind(this)
      }
      
      componentDidMount() {
        this.getMyLocation()
      }
    
      getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          }, (error) => {
            this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
          })
        }
    
      }    
      handleSetTrue = () => {
this.setState({showLocated:true})
console.log("onclick",this.state.showLocated)

    }

    render() {
        return (
            <div className="App">
                <FormHeader />
                <div className="tangkwaTitle"><h4>CHECK IN : <img src={check} width="50" height="50" className="checkpng"  onClick={this.handleSetTrue}/></h4></div>
                {this.state.showLocated && <div>
                    <p>Latitude is {this.state.latitude}</p>
                    <p>Longitude is {this.state.longitude}</p>
                    {console.log("la",this.state.latitude)}

                </div>}
                <div>

                    <button type="submit" value="Submit" className="Submit">Submit</button>
                    <button type="submit" value="Cancel" className="Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default TangkwaCheckIn;