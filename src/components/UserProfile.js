import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import BigPicture from "react-bigpicture";
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            set: '',
        }
    }
   
  
    
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>MY PROFILE รอดึงข้อมูลทั้งหมดต้องลอคอิน</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"></div>
                    <div className="tk1flex-1"><button type="submit" value="Submit" onClick={this.handleDelete} className="DeleteAccount">LOG OUT</button></div>
                   </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>FIRSTNAME :</b>22</p></div>
                    <div className="tk1flex-1"><p><b>LASTNAME : </b>22</p></div>
                    <div className="tk1flex-1"><p><b>STAFF ID : </b>22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><p><b>POSITION :</b>22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>PROJECTS :</b>22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>EMAIL :</b> 22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NAME :</b>22</p></div>
                    <div className="tk1flex-1"><p></p></div>
                    <div className="tk1flex-1"><p></p></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2"><p><b>BANK NO.</b>22</p></div>
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
                    <div className="tkflex-1"><p>22</p></div>
                    <div className="tkflex-1"><p>22</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>ANNUAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>22</p></div>
                    <div className="tkflex-1"><p>22</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE WITHOUT PAY</b></p></div>
                    <div className="tkflex-1"><p>22</p></div>
                    <div className="tkflex-1"><p>22</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>PERSONAL LEAVE</b></p></div>
                    <div className="tkflex-1"><p>22</p></div>
                    <div className="tkflex-1"><p>22</p></div>
                </div>
                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p><b>LEAVE FOR WORK OUTSIDE</b></p></div>
                    <div className="tkflex-1"><p>22</p></div>
                    <div className="tkflex-1"><p>22</p></div>
                </div>

                {/* <div className="flex-container row margindetail">
                    <div className="tkflex-1">

                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK IN</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div> */}
                        {/* {this.state.peoplein.map(peoplein => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peoplein.time).format('HH:')}</p></div>
                            <div className="tkflex-1"><p>{peoplein.place}</p></div>
                        </div>))}
                    </div>
                    <div className="tkflex-1">

                        <div className="row flex-container tangkwaSetTable">
                            <div className="tkflex-1"><p><b>DATE</b></p></div>
                            <div className="tkflex-1"><p><b>CLOCK OUT</b></p></div>
                            <div className="tkflex-1"><p><b>GPS</b></p></div>
                        </div>
                        {this.state.peopleout.map(peopleout => (<div className="row flex-container tangkwaSetData">
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('DD-MM-YYYY')}</p></div>
                            <div className="tkflex-1"><p>{moment(peopleout.time).format('HH:mm')}</p></div>
                            <div className="tkflex-1"><p>{peopleout.place}</p></div>
                        </div>))}
                    </div> */}
                {/* </div> */}
               

            </div>
        );
    }
}

export default UserProfile