import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { addAllLeave } from '../action'
import _ from 'lodash';
import moment from 'moment'
class TangkwaApproveLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            staff : ''
        }
    }
    componentDidMount() {
        axios.get('https://managemate.azurewebsites.net/api/Leave/GetLeaveInfo')
            .then(res => {
                this.setState({ people: res.data })
                console.log("kkk",this.state.people)
                const data = res.data.map(p => {
                    return _.reduce(p, (result, val, key) => {
                        return {
                            ...result,
                            [_.camelCase(key)]: val
                        }
                    }, {})
                })
                this.props.addAllLeave(data)
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
    }
    render() {
        const {staff} = this.props
        console.log("give me",staff)
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>APPROVE</b></h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STATUS</p></div>
                    <div className="tkflex-1"><p>LEAVE ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-2"><p>LEAVING DATE</p></div>
                    <div className="tkflex-1"><p>MANAGE BY</p></div>
                </div>
                {this.state.people.map(people => (
                    <div className="row flex-container tangkwaSetData">
                        <div className="tkflex-1 "><div className="tangkwaSetApprove"><p>{people.leaveStatus}</p></div></div>
                        <Link to={`/ApproveLeaveDetail/${people.leaveID}`} className="tkflex-1"><div><p>LEV{_.padStart(people.leaveID, 5, '0')}</p></div></Link>
                        <div className="tkflex-2"><p>{people.firstnameEN} {people.lastnameEN}</p></div>
                        <div className="tkflex-2"><p>{moment(people.leaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                        <div className="tkflex-1"><p>{people.approvedBy}</p></div>
                    </div>))}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addAllLeave: (add) => dispatch(addAllLeave(add))
})
const mapStateToProps = state => {
    console.log('state',state)
    return {
        people: state.add,
    
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaApproveLeave)