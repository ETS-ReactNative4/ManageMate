import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import TangkwaMyLeaveHistory from './components/tangkwaMyLeaveHistory';
import TangkwaMyWithDrawHistory from './components/tangkwaMyWithDrawHistory';
import TangkwaMyProject from './components/tangkwaMyProject';
import TangkwaLeaveDetail from './components/tangkwaLeaveDetail';
import TangkwaProjectDetail from './components/tangkwaProjectDetail'
import TangkwaStatistics from './components/tangkwaStatistics'
import TangkwaStatisticsDetail from './components/tangkwaStatisticsDetial'
import TangkwaWithDrawDetail from './components/tangkwaWithDrawDetail';
import RequestForm from './components/leave-form-request';
import TangkwaWithdrawReq from './components/tangkwaWithdrawReq'
import TangkwaCreateProj from './components/tangkwaCreateProj'
import TangkwaApproveLeave from './components/tangkwaApproveLeave'
import TangkwaApproveLeaveDetail from './components/tangkwaApproveLeaveDetail'
import TangkwaApproveWithdraw from './components/tangkwaApproveWithdraw'
import TangkwaApproveWithDrawDetail from './components/tangkwaApproveWithdrawDetail'
import TangkwaAllProject from './components/tangkwaAllProject'
import TangkwaMyClockIn from './components/tangkwaMyClockIn'
import TangkwaCheckIn from './components/tangkwaCheckIn'
import TangkwaAddUser from './components/tangkwaAddUser'
import OfficeCalendar from './components/officeCalendar'
import MyCalendar from './components/MyCalendar'
import OfficeCreateEvent from './components/OfficecreateEvent'
import MyCalendarCreateEvent from './components/myCalendarCreateEvent'
class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <header className="background">
          <h1 className="hero-logo">
            MANAGEMATE
          </h1>
          <div className="main-nav">
            <div className="row flex-container">
              <div className="dropdown">
                <button className="dropbtn">LEAVE</button>
                <div className="dropdown-content">
                  <a href="requestform">LEAVE</a>
                  <a href="/MyleaveHistory">MY LEAVE</a>
                  <a href="leaveApprove">APPROVE</a>
                </div>
              </div>
              <div className="dropdown2">
                <button className="dropbtn2">CALENDAR</button>
                <div className="dropdown-content2">
                  <a href="calendar">CALENDAR</a>
                  <a href="myCalendar">MY CALENDAR</a>
                </div>
              </div>

              <div className="dropdown3">
                <button className="dropbtn3">WITHDRAW</button>
                <div className="dropdown-content3">
                  <a href="WithdrawRequest">WITHDRAW</a>
                  <a href="MywithdrawHistory">MY WITHDRAW</a>
                  <a href="withdrawApprove">APPROVE</a>
                </div>
              </div>

              <div className="dropdown4">
                <button className="dropbtn4">CLOCK IN</button>
                <div className="dropdown-content4">
                  <a href="CheckIn">CLOCK IN,OUT</a>
                  <a href="MyClockIn">MY CLOCK IN</a>

                </div>
              </div>

              <div className="dropdown5">
                <button className="dropbtn5">STATISTICS</button>
                <div className="dropdown-content5">
                  <a href="Statistics">STATISTICS</a>
                  <a href="AddUser">ADD USERS</a>
                </div>
              </div>

              <div className="dropdown6">
                <button className="dropbtn6">PROJECTS</button>
                <div className="dropdown-content6">
                  <a href="Allproject">ALL PROJECTS</a>
                  <a href="Myprojects">MY PROJECTS</a>
                  <a href="createProject">CREATE PROJECTS</a>
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

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout} >
          <Route path='MyleaveHistory' component={TangkwaMyLeaveHistory} />
          <Route path='MywithdrawHistory' component={TangkwaMyWithDrawHistory} />
          <Route path='withdrawDetail' component={TangkwaWithDrawDetail} />
          <Route path='Myprojects' component={TangkwaMyProject} />
          <Route path='Allproject' component={TangkwaAllProject} />
          <Route path='TangkwaLeaveDetail' component={TangkwaLeaveDetail} />
          <Route path='ProjectDetail' component={TangkwaProjectDetail} />
          <Route path='calendar' component={OfficeCalendar} />
          <Route path='requestform' component={RequestForm}></Route>
          <Route path='myCalendar' component={MyCalendar}/>
            <Route path='Statistics' component={TangkwaStatistics} />
            <Route path='StatisticsDetail' component={TangkwaStatisticsDetail} />
            <Route path='WithdrawRequest' component={TangkwaWithdrawReq} />
            <Route path='createProject' component={TangkwaCreateProj} />
            <Route path='leaveApprove' component={TangkwaApproveLeave} />
            <Route path='ApproveLeaveDetail' component={TangkwaApproveLeaveDetail} />
            <Route path='withdrawApprove' component={TangkwaApproveWithdraw} />
            <Route path='ApproveWithdrawDetail' component={TangkwaApproveWithDrawDetail} />
            <Route path='MyClockIn' component={TangkwaMyClockIn} />
            <Route path='CheckIn' component={TangkwaCheckIn} />
            <Route path='AddUser' component={TangkwaAddUser} />
            <Route path='OfficecreateEvent' component={OfficeCreateEvent}/>
            <Route path='MyCalendarCreateEvent' component={MyCalendarCreateEvent}/>



          </Route>
      </Router>
        );
      }
    }
    
    export default App;
