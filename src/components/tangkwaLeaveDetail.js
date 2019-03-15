import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import BigPicture from "react-bigpicture";
import moment from 'moment'
class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            arrImage: [],
            photoIndex: 0,
            isOpen: false,

        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByLeaveID?leaveId=${parseInt(_.last(window.location.pathname.split('/')))}`);
            await this.setState({ people: response.data });
            console.log("1234", this.state.people)
        } catch (error) {
            console.log(error);
        }
    }
    setRole(role) {
        if (role === 0) {
            console.log("55555")
            return role = 'Normal User'
        }
        if (role === 1) {
            return role = 'HR'
        }
        if (role === 2) {
            return role = 'Super User'
        }

    }
    handleImg = (pic) => {
        if (pic === '') {
            return false
        }
        return true
    }
    CheckPic = (pic) => {
        if (pic === "") {
            return false
        }
        else {
            return true
        }
    }
    setDay = (start,end) => {
        if (start == end) {
            return true
        }
        else {
            return false
        }
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="App">
                {this.state.people.map(people => (<div>
                    <div className="tangkwaTitle tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                    <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-1 fffont"><div><p>LEAVE ID : {people.LeaveID}</p></div>
                        </div>
                        <div className="tk1flex-1"><div></div>
                        </div>
                        <div className="tk1flex-1"><div></div>
                        </div>
                        <div className="tkflex-1 tangkwaLeaveFrame">
                            <div><p><b>STATUS : </b>{people.LeaveStatus}</p></div>
                            <div><p><b>MANAGE BY : </b>{people.ApprovedBy}</p></div>
                        </div>
                    </div>
                    <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        
                        <div className="tk1flex-1"><div><p>STAFF ID : {people.StaffID}</p></div>
                        </div>
                        <div className="tk1flex-1"><div><p></p></div>
                        </div>
                        <div className="tk1flex-1"><div><p></p></div>
                        </div>
                        <div className="tk1flex-1 ">
                            <div><p></p></div>
                        
                        </div>
                    
                    </div>
                    <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        
                        <div className="tk1flex-1"><div><p>FIRSTNAME : {people.FirstnameEN}</p></div>
                        </div>
                        <div className="tk1flex-1"><div><p>LASTNAME : {people.LastnameEN}</p></div>
                        </div>
                        <div className="tk1flex-1"><div><p>POSITION : {this.setRole(people.Role)}</p></div>
                        </div>
                        <div className="tk1flex-1 ">
                            <div><p></p></div>
                        
                        </div>
                    
                    </div>
                    <div className = "line"></div>
                    <div className="row flex-container">
                        <div className="tk1flex-0"></div>
                        
                        <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{people.LeaveType}</p></div>
                        </div>
                        <div className="tk1flex-1"><div></div>
                        </div>
                        <div className="tk1flex-1"><div></div>
                        </div>
                        <div className="tkflex-1">
                        </div>
                    </div>
                    {this.setDay(people.LeaveStartDateTime,people.LeaveEndDateTime) && <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p><b>DATE :</b>{moment(people.LeaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div></div>
                        </div>
                        <div className="tk1flex-1">
                        </div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                    </div>}
                    {!this.setDay(people.LeaveStartDateTime,people.LeaveEndDateTime) && <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p><b>DAY START :</b>{moment(people.LeaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                            <div><p><b>DAY END : </b>{moment(people.LeaveEndDateTime).format('DD-MM-YYYY')}</p></div>
                        </div>
                        <div className="tk1flex-1">
                        </div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                        <div className="tk1flex-1"><div><p></p></div></div>
                    </div>}
                    <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-3"><div><p>COMMENT : {people.LeaveComment}</p></div>
                        </div>
                        <div className="tk1flex-1"><div></div><div><p></p></div></div>
                    </div>
                    <div className="row flex-container">
                        <div className="tk1flex-0"><div><p></p></div></div>
                        <div className="tk1flex-3"><div><p>FILE : </p>
                            {this.CheckPic(people.LeaveFile1) && <BigPicture
                            
                               
                                img src = {people.LeaveFile1}
                            >
                                <img src={people.LeaveFile1} width = "80" height = "80"/>
                            </BigPicture>}</div>
                        </div>
                        <div className="tk1flex-1"><div></div><div><p></p></div></div>
                    </div>
                </div>))}
            </div>

        );
    }
}
export default TangkwaLeaveDetail;