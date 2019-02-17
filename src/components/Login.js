import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { Router, Route, IndexRoute,browserHistory, Link } from 'react-router';
import { connect } from 'react-redux'
import { addStaffId } from '../action'
class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            staffId : '5'
        }
    }
    componentDidMount() {
        const data = 5
        this.props.addStaffId(data)  
    }
    render() {
        return (
            <div>
            
                <a href="/Allproject">Login</a>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addStaffId: (staff) => dispatch(addStaffId(staff))
})

const mapStateToProps = state => {
    console.log('state in', state.staff)
    return {
        staff : state.staff
    }
}


export default connect(mapStateToProps,mapDispatchToProps,)(Login)