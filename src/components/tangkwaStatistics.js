import React, { Component } from 'react';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import { addHistory, setStaffId } from '../action'
import _ from 'lodash';
class TangkwaStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    componentDidMount() {
        axios.get("https://managemate.azurewebsites.net/GetEmployeeInfo")
            .then(res => {
                this.setState({ people: res.data })
                const data = res.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                this.props.addHistory(data)
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>STATISTICS</b></h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STAFF ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-1"><p>POSITION</p></div>
                </div>

                {this.state.people.map(people => (<div className="row flex-container tangkwaSetData">
                    <Link to={`StatisticsDetail/${people.staffID}`} className="tkflex-1" ><div><p>{people.staffID}</p></div></Link>
                    <div className="tkflex-2"><p>{people.firstnameEN} {people.lastnameEN}</p></div>
                    <div className="tkflex-1"><p>{people.role}</p></div>
                </div>))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addHistory: (history) => dispatch(addHistory(history))
})
const mapStateToProps = state => {
    console.log('state', state.history)
    return {
        people: state.history
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaStatistics)