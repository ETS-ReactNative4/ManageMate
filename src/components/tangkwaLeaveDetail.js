import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import axios from 'axios';
import _ from 'lodash'
import Lightbox from 'react-lightbox-component';
import moment from 'moment'
class TangkwaLeaveDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            photoIndex: 0,
            isOpen: false,

        }
    }
    componentDidMount() {
        axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByLeaveID?leaveId=${parseInt(_.last(window.location.pathname.split('/')))}`)
            .then(res => {
                const person = res.data
                this.setState({ people: person })
                console.log("ttt", this.state.people)
               
            })
            .catch((error) => {
                console.log('this is error', error)
                // handle error here
            })
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

    
    render() {
        const { photoIndex, isOpen } = this.state;
        let images = [this.state.people.LeaveFile1, this.state.people.LeaveFile2, this.state.people.LeaveFile3]
        console.log("pic ===> ",this.state.people.LeaveFile1)

        

        
        return (
            <div className="App">
            {this.state.people.map(people => (<div>
                <div className="tangkwaTitle tangkwa2"><h4><b>LEAVE DETAIL</b></h4></div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>FIRSTNAME :</b> {people.FirstnameEN}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LASTNAME :</b> {people.LastnameEN}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>STAFF ID : </b>{people.StaffID}</p></div>
                    </div>
                    <div className="tkflex-1 tangkwaLeaveFrame">
                        <div><p><b>STATUS : </b>{people.LeaveStatus}</p></div>
                        <div><p><b>MANAGE BY : </b>{people.ApprovedBy}</p></div>
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1"><div><p><b>POSITION :</b> {this.setRole(people.Role)}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE ID : </b> {people.LeaveID}</p></div>
                    </div>
                    <div className="tk1flex-1"><div><p><b>LEAVE TYPE : </b>{people.LeaveType}</p></div>
                    </div>
                    <div className="tkflex-1">
                    </div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p><b>DAY START :</b>{moment(people.leaveStartDateTime).format('DD-MM-YYYY')}</p></div>
                        <div><p><b>DAY END : </b>{moment(people.LeaveEndDateTime).format('DD-MM-YYYY')}</p></div>
                    </div>
                    <div className="tk1flex-1">
                    </div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                    <div className="tk1flex-1"><div><p></p></div></div>
                </div>
                <div className="row flex-container">
                    <div className="tk1flex-0"><div><p></p></div></div>
                    <div className="tk1flex-3"><div><p>COMMENT : {people.LeaveComment}</p></div>
                    </div>
                    <div className="tk1flex-1">
                            <div className="tkpicture">

                                <div className="tklink">
                                   
                                    <div className="mickeymouse">
                                        {this.handleImg(people.LeaveFile1) && <div>
                                           
                                            <p><img src={people.LeaveFile1} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(people.LeaveFile2) && <div>
                                            
                                            <p><img src={people.LeaveFile2} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} /></p>
                                        </div>

                                        }
                                        {this.handleImg(people.LeaveFile3) && <div>
                                            
                                            <p><img src={people.LeaveFile3} width="75" height="52" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} /></p>
                                        </div>

                                        }

                                    </div>
                                    {isOpen && (
                                     
                                     <Lightbox
                                        
                                     mainSrc={images[photoIndex]}
                                     nextSrc={images[(photoIndex + 1) % images.length]}
                                     prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                     onCloseRequest={() => this.setState({ isOpen: false })}
                                     onMovePrevRequest={() =>
                                         this.setState({
                                             photoIndex: (photoIndex + images.length - 1) % images.length,
                                         })
                                     }
                                     onMoveNextRequest={() =>
                                         this.setState({
                                             photoIndex: (photoIndex + 1) % images.length,
                                         })
                                     }
                                 />
                             )
                                        
                                     }
                                </div>


                            </div><div>
   
  </div><div><p></p></div></div>
                </div>
            </div>))}
            </div>
            
        );
    }
}
export default TangkwaLeaveDetail;