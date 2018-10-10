import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
class TangkwaStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="App">
                <div className="tangkwaTitle"><h4><b>STATISTICS</b></h4></div>
                <div className="row flex-container tangkwaSetTable">
                    <div className="tkflex-1"><p>STAFF ID</p></div>
                    <div className="tkflex-2"><p>NAME</p></div>
                    <div className="tkflex-1"><p>POSITION</p></div>
                </div>

                <div className="row flex-container tangkwaSetData">
                    <div className="tkflex-1"><p>000001</p></div>
                    <div className="tkflex-2"><p>Putthachart Srisuwankun</p></div>
                    <div className="tkflex-1"><p>HR</p></div>
                </div>

            </div>
        );
    }
}

export default TangkwaStatistics;