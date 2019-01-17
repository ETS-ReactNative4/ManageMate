import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaStatisticsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: 'Putthachart',
            lastname: 'Srisuwankun',
            staffId: '000001',
            position: 'Normal user',
            projectRes: 'Rush,Leave Management,LaundryApp',
            sickQuota :'10 Days 6 Hours',
            annualQuota :'10 Days 6 Hours',
            lwpQuota :'-',
            personalQuota :'10 Days 6 Hours',
            lfwosQuota :'-',
            sickRemain :'10 Days 4 Hours',
            annualRemain :'10 Days 4 Hours',
            lwpRemain :'-',
            personalRemain :'10 Days 4 Hours',
            lfwosRemain :'-',




        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME :</b> {this.state.firstname}</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>{this.state.lastname}</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>{this.state.staffId}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION :</b> {this.state.position}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>v
</div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>PROJECTS :</b> {this.state.projectRes}</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container tangkwaSetTable ">
                    <div className="tkflex-1"><p><b>LEAVE TYPE</b></p></div>
                    <div className="tkflex-1"><p><b>QUOTA</b></p></div>
                    <div className="tkflex-1"><p><b>REMAINING</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData ">
                    <div className="tkflex-1"><p><b>SICK LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.sickQuota}</p></div>
                    <div className="tkflex-1"><p><b>{this.state.sickRemain}</b></p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.annualQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.annualRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lwpQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.personalQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>{this.state.lfwosQuota}</p></div>
                    <div className="tkflex-1"><p>{this.state.lwpRemain}</p></div>
                </div>
            </div>
        );
    }
}

export default TangkwaStatisticsDetail;