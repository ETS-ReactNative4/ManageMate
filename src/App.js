import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import TangkwaMyLeaveHistory from './components/tangkwaMyLeaveHistory';
import TangkwaMyWithDrawHistory from './components/tangkwaMyWithDrawHistory';
import TangkwaMyProject from './components/tangkwaMyProject';
import TangkwaLeaveDetail from './components/tangkwaLeaveDetail';
import TangkwaProjectDetail from './components/tangkwaWithDrawDetail'
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
                  <a href="#">CALENDAR</a>
                  <a href="#">MY CALENDAR</a>
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
                <button className="dropbtn4">ATTENDANCE</button>
                <div className="dropdown-content4">
                  <a href="#">Link 10</a>
                  <a href="#">Link 11</a>
                  <a href="#">Link 12</a>
                </div>
              </div>

              <div className="dropdown5">
                <button className="dropbtn5">STATISTICS</button>
                <div className="dropdown-content5">
                  <a href="Statistics">STATISTICS</a>
                  <a href="#">ADD USERS</a>
                </div>
              </div>

              <div className="dropdown6">
                <button className="dropbtn6">PROJECTS</button>
                <div className="dropdown-content6">
                  <a href="#">ALL PROJECTS</a>
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
          <Route path='Myprojects' component={TangkwaMyProject} />
          <Route path='TangkwaLeaveDetail' component={TangkwaLeaveDetail} />
          <Route path='ProjectDetail' component={TangkwaProjectDetail} />

          <Route path='requestform' component={RequestForm}></Route>

          <Route path='Statistics' component={TangkwaStatistics} />
          <Route path='StatisticsDetail' component={TangkwaStatisticsDetail} />
          <Route path='WithdrawRequest' component={TangkwaWithdrawReq} />
          <Route path='createProject' component={TangkwaCreateProj} />
          <Route path='leaveApprove' component={TangkwaApproveLeave} />
          <Route path='ApproveLeaveDetail' component={TangkwaApproveLeaveDetail} />
          <Route path='withdrawApprove' component={TangkwaApproveWithdraw} />
          <Route path='ApproveWithdrawDetail' component={TangkwaApproveWithDrawDetail} />



        </Route>
      </Router>
    );
  }
}

export default App;
