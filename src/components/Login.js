import React, { Component } from 'react'
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import moment from 'moment'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux'
import { addProfile } from '../action'
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffId: '5',
            username : '',
            password : '',
            profile : ''
        }
        this.handleChangeUsername= this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
        console.log("username", this.state.username)
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
        console.log("password", this.state.password)
    }
    handleSubmit = () => {
        axios.post('http://127.0.0.1:8000/user/login/', {
          "username" : this.state.username,
          "password" : this.state.password


        }, {
            
            })
            .then( (response) => {
               this.setState({profile : response.data})
               console.log("log in",this.state.profile)
               const data = this.state.profile
                this.props.addProfile(data)
                this.props.router.push('/myCalendar')
            })
            .catch((error) => {
                console.log("this error",error)
                alert("Username or Password Incorrect")
            })

            
    }


    render() {
        return (
            <div>
 <div className="App"> 
        <header className="background">
          <h1 className="hero-logo">MANAGEMATE</h1>
                <div className="borderLogin">
                <div><p> </p></div>
                <div><h4>LOGIN</h4></div>
                <div><p> </p></div>
                <div><p>USERNAME : <input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="log-in" /></p></div>
                    <div><p>PASSWORD : <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="log-in" /></p></div>
                   <button type="submit" value="Submit" className="LoginButton" onClick={this.handleSubmit}>Login</button>
                   <div><p> </p></div>
                </div>
          </header> 
           </div>
            </div>


        );
    }
}

const mapDispatchToProps = dispatch => ({
    addProfile: (profile) => dispatch(addProfile(profile))
})
const mapStateToProps = state => {
    console.log('state55555 ----->', state.profile)
    return {
        people: state.profile
        
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(Login)