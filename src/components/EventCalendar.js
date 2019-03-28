import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EventCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const { id, onChange } = this.props

        this.setState({
            startDate: date
        });
        if (date == null) {
            onChange(id, 'Invalid dat') 
        }
        else {
            onChange(id, moment(date).format().toString().substring(0,10));

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

export default EventCalendar