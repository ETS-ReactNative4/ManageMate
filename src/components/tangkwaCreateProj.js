import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import add from '../Image/add1.jpg'
const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>CREATE PROJECT</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}

class TangkwaCreateProj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Addstaff : ''
        }
    }

Addstaff = (boo) => {
    this.setState({Addstaff : boo})
console.log("add staff --->",this.state.Addstaff)

}
AddFalse = (boo) => {
    this.setState({Addstaff : false})
    console.log("set false --->",this.state.Addstaff)

}
    render() {
        return (
            <div className="App">
                <FormHeader/>
                <div className="flex-container">
                    <div className="tk1flex-02"></div>
                    <div className="tk1flex-2">
                        <div className="tangkwaTitle"><p>PROJECT NAME : <input type="text" name="amount" className="proj" /></p></div>
                        <div><div className="tangkwaTitle1"><p>DETAIL :</p></div><textarea className="textarea1" maxLength="255" type="text" /></div>
                        <div className="tangkwaTitle"><p>MEMBER ID : <input type="text" name="amount" className="memid" /><img src={add}  width="30" height="30" className = "addpng" onClick={() => this.Addstaff(true)}/></p></div>
                        {this.state.Addstaff && <div>
                            <input type="text" name="amount" className="memid1" />
                           
                            </div>}
                        <div className="tangkwaTitle"><p>FILE :</p></div>
                    </div>
                    
                </div>
                <div>
                    <button type="submit" value="Submit" className = "Submit">Submit</button>
                    <button type="submit" value="Cancel" className = "Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}
export default TangkwaCreateProj;