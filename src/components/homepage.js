import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
class MainLayout extends Component {

  constructor(props) {
super(props);
    this.state = {
      profile: props.profile

    }
    console.log("tanggkwaaa", (this.state.profile))
    if (this.state.profile) {
      console.log("login ss")

    }
    else {
      alert("please login")
      browserHistory.push('/Login')
    }
}
authenSuperUser = (value) => {
    // console.log("in func authenSUper",value)
    if (value == "1") {
      return true
    }
  }

  authenHR = (value) => {
    // console.log("in func authenSUper",value)
    if (value == "2") {
      return true
    }
  }
  checkProfile() {
    if (this.state.profile) {
      return true

    }
    else {
      return false
    }
  }


  render() {
    return (
      <div className="App">
     
        {this.checkProfile() &&
          <div>
            <header className="background">
              <div className="Userprofile"><Link to='/userProfile'><p>Hello {this.state.profile.employee[0].first_name_EN}</p></Link></div>
              <h1 className="hero-logo">
                MANAGEMATE
            </h1>
              <div className="main-nav">
                <div className="row flex-container">
                  <div className="dropdown">
                    <button className="dropbtn">LEAVE</button>
                    <div className="dropdown-content">
                      <a href="/requestform">LEAVE</a>
                      <a href="/MyleaveHistory">MY LEAVE</a>
                      {this.authenSuperUser(this.state.profile.employee[0].role) && <a href="/Approve">APPROVE</a>}
                    </div>
                  </div>
                  <div className="dropdown2">
                    <button className="dropbtn2">CALENDAR</button>
                    <div className="dropdown-content2">
                      <a href="/myCalendar">OFFICE CALENDAR</a>
                    </div>
                  </div>
                  <div className="dropdown4">
                    <button className="dropbtn4">CLOCK IN</button>
                    <div className="dropdown-content4">
                      <a href="/CheckIn">CLOCK IN,OUT</a>
                      <a href="/MyClockIn">MY CLOCK IN</a>
                    </div>
                  </div>
                  <div className="dropdown5">
                    {(this.authenSuperUser(this.state.profile.employee[0].role) || this.authenHR(this.state.profile.employee[0].role)) && <button className="dropbtn5">STATISTICS</button>}
                    <div className="dropdown-content5">
                      <a href="/Statistics">STATISTICS</a>
                      {this.authenHR(this.state.profile.employee[0].role) && <a href="/AddUser">ADD USERS</a>}
                    </div>
                  </div>
                  <div className="dropdown6">
                    <button className="dropbtn6">PROJECTS</button>
                    <div className="dropdown-content6">
                      <a href="/Allproject">ALL PROJECTS</a>
                      <a href="/Myprojects">MY PROJECTS</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mini-background">
                {this.props.children}

              </div>
            </header>
            <header className="background">

            </header>
            <header className="background">

            </header>

          </div>}
        <header className="background">

        </header>
        <header className="background">

        </header>
        <header className="background">

        </header>

      </div>
    );
  }
}
const mapStateToProps = state => {

  console.log('APPJS555555', state.profile)
  return {
    profile: state.profile
  }

}
export default connect(mapStateToProps)(MainLayout)