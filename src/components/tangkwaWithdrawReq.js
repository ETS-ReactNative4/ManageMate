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
            amount : '',
            bankNo : '',
            bankName : '',
            comment : ''
        }
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeBankNo = this.handleChangeBankNo.bind(this);
        this.handleChangeBankName = this.handleChangeBankName.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
    }
    handleChangeAmount(event) {
        this.setState({ amount: event.target.value });
        console.log("amount",this.state.amount)
    }
    handleChangeBankNo(event) {
        this.setState({ bankNo: event.target.value });
        console.log("bankNo",this.state.bankNo)
    }
    handleChangeBankName(event) {
        this.setState({ bankName: event.target.value });
        console.log("bankName",this.state.bankName)
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
        console.log("Comment",this.state.comment)
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
                        <div className="tangkwaTitle"><input type="text" value={this.state.amount} onChange={this.handleChangeAmount} className="amount" /></div>
                        <div className="tangkwaTitle" ><input type="text" value={this.state.bankName} onChange={this.handleChangeBankName} className="bookname" /></div>
                        <div className="tangkwaTitle"><input type="text" value={this.state.bankNo} onChange={this.handleChangeBankNo} className="bookno" /></div>
                        <div className="tangkwaTitle"><textarea value={this.state.comment} onChange={this.handleChangeComment} className="textarea" maxLength="255" type="text" /></div>
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