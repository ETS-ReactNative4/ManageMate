import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import business from 'moment-business';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class StartdateCalendar  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        console.log('this is More Day Start function')
        const { id1, onChange } = this.props

        this.setState({
            startDate: date
        });
        if (date == null) {
            onChange(id1, 'Invalid dat');
            
        }
        else if (!business.isWeekDay(date)) {
            alert("You can choose only weekday \n Please try again.")
            onChange(id1, 'Invalid dat');
            
        }
        else {
            onChange(id1, moment(date).format().toString());

        }
        
    }

    render() {
        return <DatePicker
            className="input-date"
            selected={this.state.startDate}
            onChange={this.handleChange}
            showDisabledMonthNavigation
            dateFormat="DD/MM/YY"
            placeholderText="  DD/MM/YY"
            disabledKeyboardNavigation
        />;
    }
}

export default StartdateCalendar