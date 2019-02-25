import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment'
class TangkwaProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
    people : []
    
        }
    }
    componentDidMount() {
        axios.get(`https://managemate.azurewebsites.net/GetProjectInfoByProjectID?projectId=${parseInt(_.last(window.location.pathname.split('/')))}`)
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
    render() {
        return (
            <div className="App">
            {this.state.people.map (people => (<div>
                <div className="tangkwaTitle"><h4><b>PROJECT DETAIL</b></h4></div>
                <div className="tangkwaTitle flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-2">
                        <div><p><b>PROJECT ID : </b>{people.projectID}</p></div>
                        <div><p><b>PROJECT NAME : </b>{people.projectName}</p></div>
                        <div><p><b>MEMBERS :</b></p></div>
                        <div><p><b>DETAILS :</b>{people.projectDetail}</p></div>
                        <div><p><b>FILES :</b></p></div>
                    </div>
                    <div className="tkflex-1 pjFrame">
                        <div><p><b>STATUS : </b>{people.projectStatus}</p></div>
                        <div><p><b>START : </b>{moment(people.startDateTime).format('DD-MM-YYYY')}</p></div>
                        <div><p><b>DONE : </b>{moment(people.endDateTime).format('DD-MM-YYYY')}</p></div>
                        <div><p><b>TOTAL : </b></p></div>
                    </div>
                </div>
        </div>))}
            </div>
        );
    }
}
export default TangkwaProjectDetail;
