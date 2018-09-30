import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';



class TangkwaMyWithDrawHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {





        }


    }


    render() {
        return (


            <div className="App">
                <div className="tangkwaSetMargin">
                    <div className="row tangkwaSetTable">
                        <div className="col-md-2">STATUS</div>
                        <div className="col-md-2">Withdraw ID</div>
                        <div className="col-md-4">NAME</div>
                        <div className="col-md-2">AMOUNT</div>
                        <div className="col-md-2">MANAGE BY</div>
                    </div>

                    <div className="row tangkwaSetData">

                        <div className="col-md-2 "><div className="tangkwaSetReject">Rejected</div></div>
                        <div className="col-md-2"><td>WD00001</td></div>

                        <div className="col-md-4">Putthachart Srisuwankun</div>
                        <div className="col-md-2">500</div>
                        <div className="col-md-2">ID000001</div>
                    </div>



                </div>
            </div>
        );
    }
}

export default TangkwaMyWithDrawHistory;