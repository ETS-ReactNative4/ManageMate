import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import '../App.css';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux'
import { addMyHistory } from '../action'
import moment from 'moment'
class TangkwaMyLeaveHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            staffid : '2'
        }
    }
    componentDidMount() {
        axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByStaffID?staffId=${this.state.staffid}`)
            .then(res => {
                this.setState({ people: res.data })
                console.log("tk", this.state.people)
                this.props.addMyHistory(res.data)
            })
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>MY LEAVE </b></h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STATUS</p></div>
                    <div className="tkflex-1"><p>LEAVE ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-2"><p>LEAVING DATE</p></div>
                    <div className="tkflex-1"><p>MANAGE BY</p></div>
                </div>
                {this.state.people.map(people => (
                    <div className="row flex-container tangkwaSetData">
                        <div className="tkflex-1"><div className="tangkwaSetApprove"><p><b>{people.leaveStatus}</b></p></div></div>
                        <Link to={`/LeaveDetail/${people.leaveID}`} className="tkflex-1"><div><p>LEV{_.padStart(people.leaveID, 5, '0')}</p></div></Link>
                        <div className="tkflex-2"><p>{people.firstnameEN} {people.lastnameEN}</p></div>
                        <div className="tkflex-2"><p>{moment(people.leaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="tkflex-1"><p>{people.approvedBy}</p></div>
                    </div>))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addMyHistory: (myhistory) => dispatch(addMyHistory(myhistory))
})
const mapStateToProps = state => {
    console.log('state444', state.myhistory)
    return {
        people: state.myhistory
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaMyLeaveHistory)