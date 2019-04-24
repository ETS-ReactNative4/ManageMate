import React from 'react';
import moment from 'moment';
import './calendar.css';
import left from '../../Image/left-arrow.png'
import right from '../../Image/arrow-point-to-right.png'
import _ from 'lodash';
import axios from 'axios';
import swal from 'sweetalert'
export default class Calendar extends React.Component {
    state = {

        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null,
        data: []
    }
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
       
    }
    async componentDidMount() {
        // axios.get(`https://managemate.azurewebsites.net/api/Leave/GetLeaveInfoByStaffID?staffId=${this.state.staffid}`)
          axios.get(`http://127.0.0.1:8000/employee/getcalendar/`)
         
            .then(res => {
                console.log("data",res.data)
             this.setState({data : res.data});
            
            })
          
         
    }
   
    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();
   
    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {

        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {

        return this.state.dateContext.format("D");
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }
    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }
    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }
    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }
    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    }
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="#" onClick={(e) => { this.onSelectChange(e, data) }}>
                        {data}
                    </a>
                </div>
            );
        });
        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }
    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }
    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        );
        
    }
    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }
    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }
    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }
    YearNav = () => {
        return (
            this.state.showYearNav ?
                <input
                    defaultValue={this.year()}
                    className="editor-year"
                    ref={(yearInput) => { this.yearInput = yearInput }}
                    onKeyUp={(e) => this.onKeyUpYear(e)}
                    onChange={(e) => this.onYearChange(e)}
                    type="number"
                    placeholder="year" />
                :
                <span
                    className="label-year"
                    onDoubleClick={(e) => { this.showYearEditor() }}>
                    {this.year()}
                </span>
        );
    }
    onDayClick = (e, day,data) => {
        this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        });
        var today = day;
        var n = today.toString();

        this.props.onDayClick && this.props.onDayClick(e, day);
        const dataFilter = data.filter((data) => {
            if (n == data.date && data.Month == this.month() && data.Years === this.year()) {
                return data
            }
            else {
                return ""
            }
           
        })
        console.log("dataffff",dataFilter)
        if (dataFilter == "") {
            swal("No event on this day")
        }
        else {
            dataFilter.map((dataFilter) => {
               return   swal("date : "+ dataFilter.datetime+
               " time : "+dataFilter.Hours+":"+dataFilter.Minutes+
               " detail : "+dataFilter.comment+
             " by : "+dataFilter.FirstnameEN);
            
           })
           
        }
       
    }
    mapDay = (today, data) => {
        var num = today;
        var n = num.toString();
        console.log("month111",data.Years === this.year())
        //console.log("Map data",data)
        const dateSelect = data.filter((data) => {
            if (n == data.date && data.Month == this.month() && data.Years === this.year()) {
                // console.log("check same type", (typeof (n) === typeof (data.date)))
                // console.log("check same value", (n === data.date))
                // console.log('filter ')
                return data.date;
            }
           
        });
        // console.log(dateSelect)
        return dateSelect[0] !== undefined ? dateSelect[0].date : '';
    }
    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
            </td>
            );
        }
        console.log("Year---->",this.year())
       
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (d == this.mapDay(d, this.state.data) ? " selected-day " : " ");
            daysInMonth.push(
                <td key={d} className={className + selectedClass} onClick={(e) => { this.onDayClick(e, d,this.state.data) }}>
                    <span onClick={(e) => { this.onDayClick(e, d,this.state.data) }} >{d}</span>
                </td>
            );
        }
        //console.log("days: ", daysInMonth);
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });
        let trElems = rows.map((d, i) => {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            );
        })
        return (
            <div className="calendar-container" style={this.style}>
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.MonthNav />
                                {" "}
                                <this.YearNav />
                            </td>
                            <td colSpan="2" className="nav-month">
                                <img src={left} height="25px" onClick={(e) => { this.prevMonth() }} />

                                <img src={right} height="25px" onClick={(e) => { this.nextMonth() }} />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>

            </div>

        );
    }
}
