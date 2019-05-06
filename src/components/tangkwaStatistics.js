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
            people: [],
            profile : props.profile
        }
        if (this.state.profile.role === 2) {
            console.log("login ss")
      
          }
          else  if (this.state.profile.role === 1) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }
    }
    componentDidMount() {
        // axios.get("http://managemate.azurewebsites.net/GetEmployeeInfo")
        axios.get("http://52.168.175.101:8000/employee/getemployee/")
            .then(res => {
                console.log(res.data)
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
    setRole = (role) => {
        if (role === "1") {
            return role = "Super User"
        }
        else if (role === "2") {
            return role = "HR"
        }
        if (role === "3") {
            return role = "Normal User"
        }
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
                    <div className="tkflex-1"><p>{this.setRole(people.role)}</p></div>
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
        people: state.history,
        profile : state.profile
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaStatistics)