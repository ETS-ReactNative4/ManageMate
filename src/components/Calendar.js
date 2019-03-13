import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import business from 'moment-business';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const { id1, onChange, id2 } = this.props

        this.setState({
            startDate: date
        });
        if (date == null) {
            onChange(id1, 'Invalid dat');
            onChange(id2, 'Invalid dat');
        }
        else if (!business.isWeekDay(date)) {
            alert("You can choose only weekday \n Please try again.")
            onChange(id1, 'Invalid dat');
            onChange(id2, 'Invalid dat');
        }
        else {
            onChange(id1, moment(date).format().toString().substring(0,10), id2);

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

export default Calendar