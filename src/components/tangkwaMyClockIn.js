import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
class TangkwaMyClockIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            peoplein: [],
            peopleout: []
        }
    }
    componentDidMount() {
        axios.get('https://managemate.azurewebsites.net/GetCheckinInfo')
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("clock in", this.state.people)
                const person1 = res.data.filter(person1 => {
                    return person1.status === 'in'
                })
                this.setState({ peoplein: person1 })
                const person2 = res.data.filter(person2 => {
                    return person2.status === 'out'
                })
                this.setState({ peopleout: person2 })

            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h3><b>MY TIME IN/OUT</b></h3></div>
                <div className="flex-container row">
                    <div className="tkflex-1">
                        <h4>TIME IN</h4>
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peoplein.map(peoplein => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('HH:MM')}</p></div>
                            <div className="tkflex-1"><p>{peoplein.place}</p></div>
                        </div>))}
                    </div>
                    <div className="tkflex-1">
                        <h4>TIME OUT</h4>
                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peopleout.map(peopleout => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('HH:MM')}</p></div>
                            <div className="tkflex-1"><p>{peopleout.place}</p></div>
                        </div>))}
                    </div>
                </div>
            </div>
        );
    }
}
export default TangkwaMyClockIn;