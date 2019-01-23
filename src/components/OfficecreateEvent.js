import React, { Component } from 'react'
import '../App.css';

const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>CREATE EVENT : OFFICE CALENDAR</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class OfficeCreateEvent extends Component {
    render() {
        return (
            
            <div>
                <FormHeader/>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">TIME : <input type="text" name="hour" className="setTime" /> : <input type="text" name="minute" className="setTime" /> </div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">DATE : </div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">COMMENT : <input type="text" name="hour" className="setForCM" /></div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "downdown">
                    <button type="submit" value="Submit" className = "Submit">Submit</button>
                    <button type="submit" value="Cancel" className = "Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default OfficeCreateEvent;
