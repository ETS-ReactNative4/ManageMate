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
import TangkwaAllProjDetail from './components/tangkwaAllProjDetail'
import CheckInchoice from './components/checkinchoice'
import EditUserDetail from './components/EditUserDetail'
import Login from './components/Login'
import UserProfile from './components/UserProfile'

import MainLayout from './components/homepage'

class App extends Component {

  render() {
    
    return (
      
      <div>
      
      <Router history={browserHistory}>
      <Route path='Login' component={Login} />
        <Route path='/' component={MainLayout} >
        <Route path='userProfile' component={UserProfile} />
          <Route path='MyleaveHistory' component={TangkwaMyLeaveHistory} />
          <Route path='MywithdrawHistory' component={TangkwaMyWithDrawHistory} />
          <Route path='withdrawDetail/:formId' component={TangkwaWithDrawDetail} />
          <Route path='Myprojects' component={TangkwaMyProject} />
          <Route path='Allproject' component={TangkwaAllProject} />
          <Route path='LeaveDetail/:formId' component={TangkwaLeaveDetail} />
          <Route path='ProjectDetail/:formId' component={TangkwaProjectDetail} />
          <Route path='ProjectsDetail/:formId' component={TangkwaAllProjDetail} />
          <Route path='calendar' component={OfficeCalendar} />
          <Route path='requestform' component={RequestForm}></Route>
          <Route path='myCalendar' component={MyCalendar}/>
            <Route path='Statistics' component={TangkwaStatistics} />
            <Route path='StatisticsDetail/:staffid' component={TangkwaStatisticsDetail} />
            <Route path='WithdrawRequest' component={TangkwaWithdrawReq} />
            <Route path='createProject' component={TangkwaCreateProj} />
            <Route path='leaveApprove' component={TangkwaApproveLeave} />
            <Route path='Approve' component={TangkwaApproveLeave} />
            <Route path='ApproveLeaveDetail/:fromId' component={TangkwaApproveLeaveDetail} />
            <Route path='withdrawApprove' component={TangkwaApproveWithdraw} />
            <Route path='ApproveWithdrawDetail/:formId' component={TangkwaApproveWithDrawDetail} />
            <Route path='MyClockIn' component={TangkwaMyClockIn} />
            <Route path='CheckIn' component={TangkwaCheckIn} />
            <Route path='AddUser' component={TangkwaAddUser} />
            <Route path='OfficecreateEvent' component={OfficeCreateEvent}/>
            <Route path='MyCalendarCreateEvent' component={MyCalendarCreateEvent}/>
            <Route path='checkInChoice' component={CheckInchoice}/>
            <Route path='EditUserDetail/:formId' component={EditUserDetail}/>
          
            
          </Route>
      </Router>
      
      </div>
        );
      }
    }
  
export default App