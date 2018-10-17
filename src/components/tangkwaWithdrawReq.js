import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
const FormHeader = props => {
    return (
<React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>WITHDRAW REQUEST FORM</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class TangkwaWithdrawReq extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <FormHeader />
                <div className="flex-container">
                    <div className="tk1flex-0"></div>
                    <div className="tk1flex-1">
                        <div className="tangkwaTitle"><p>AMOUNT :</p></div>
                        <div className="tangkwaTitle"><p>BANK NAME :</p></div>
                        <div className="tangkwaTitle"><p>BANK NO. :</p></div>
                        <div className="tangkwaTitle"><p><span>COMMENT :</span></p></div>
                        <div className="tangkwaFile"><p>FILE :</p></div>
                    </div>
                    <div className="tk1flex-8">
                        <div className="tangkwaTitle"><input type="text" name="amount" className="amount" /></div>
                        <div className="tangkwaTitle" ><input type="text" name="amount" className="bookname" /></div>
                        <div className="tangkwaTitle"><input type="text" name="amount" className="bookno" /></div>
                        <div className="tangkwaTitle"><textarea className="textarea" maxLength="255" type="text" /></div>
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
export default TangkwaWithdrawReq;