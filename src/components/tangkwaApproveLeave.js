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
            staff : '',
            Save : "All",
            profile : props.profile
        }
        if (this.state.profile.role === 1) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }
    }
    handleSetValue = (event) => {
        console.log(this.state.Save)
        this.setState({ Save: event.target.value })


    }
    componentDidMount() {
        // axios.get('https://managemate.azurewebsites.net/api/Leave/GetLeaveInfo')
        axios.get("http://127.0.0.1:8000/employee/getleaveall/")
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
                <div className="selecttype">
             
             <select onChange={this.handleSetValue} >
                 <option value="All">Show All</option>
                 <option value="Approved">APPROVED</option>
                 <option value="Pending">PENDING</option>
                 <option value="Rejected">REJECTED</option>

             </select>
         </div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STATUS</p></div>
                    <div className="tkflex-1"><p>LEAVE ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-1"><p>MANAGE BY</p></div>
                </div>
                {
                    this.state.people.filter((people) => {
                        if (this.state.Save === 'All') {
                            return true
                        }
                        return people.leaveStatus === this.state.Save
                    }).map((people) =>
                        <div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><div className={`${people.leaveStatus == 'Approved' ? 'tangkwaSetApprove' : people.leaveStatus == 'Pending' ? 'tangkwaSetPending' : 'tangkwaSetReject'}`}><p><b>{people.leaveStatus}</b></p></div></div>
                            <Link to={`/ApproveLeaveDetail/${people.leaveID}`} className="tkflex-1"><div><p>LEV{_.padStart(people.leaveID, 5, '0')}</p></div></Link>
                            <div className="tkflex-2"><p>{people.firstnameEN} {people.lastnameEN}</p></div>
                            <div className="tkflex-1"><p>{people.approvedBy}</p></div>
                        </div>)}
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
        profile : state.profile
    
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(TangkwaApproveLeave)