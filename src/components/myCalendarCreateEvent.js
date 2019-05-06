import React, { Component } from 'react'
import '../App.css';
import EventCalendar from './EventCalendar';
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect, browserHistory } from "react-router";
const FormHeader = props => {
    return (
        <React.Fragment>
            <div className="border-header">
                <div className="show-header">
                    <h4><b>CREATE EVENT : MY CALENDAR</b></h4>
                </div>

            </div>
        </React.Fragment>
    )
}
class MyCalendarCreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            min : '',
            hour:'',
            comment: '',
            date : '',
            profile: props.profile

        }

        if (this.state.profile.role === 1) {
            console.log("login ss")
      
          }
          else if (this.state.profile.role === 2) {
            console.log("login ss")
      
          }
          else {
            alert("คุณไม่สามารถเข้าถึงหน้านี้ได้")
            browserHistory.push('/myCalendar')
          }

        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);

    }

    handleChangeHour(event) {
        this.setState({ hour: event.target.value });
        console.log("Hour",this.state.hour)
    }
    handleChangeMin(event) {
        this.setState({ min: event.target.value });
        console.log("Min",this.state.min)
    }
    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
        console.log("Comment",this.state.comment)
    }

    handleChangeDateTime = (id , value) => {
       this.setState({
           [id] : value
       })
       console.log(this.state.date)
    }

    handleSubmit = () => {
        
            // axios.post('http://managemate.azurewebsites.net/api/Leave/LeaveInfo', {
            axios.post("http://52.168.175.101:8000/employee/addcalendar/",{
            "staffID" : this.state.profile.employee[0].id,
            "datetime" : this.state.date,
            "Month" : this.handleSetMonth(this.state.date.substring(5,7)),
            "date" : this.handleSetDate(this.state.date.substring(8,10)),
            "Hours" :this.state.hour ,
            "Minutes": this.state.min,
            "comment" : this.state.comment,
            "Years" : this.state.date.substring(0,4).toString()

        }, {
                onUploadProgress: ProgressEvent => {
                    if ((ProgressEvent.loaded / ProgressEvent.total * 100) === 100) {
                        alert("Data has been sent!.");
                        browserHistory.push('/myCalendar')

                    }

                }
            })
            .then(function (response) {
            })
    }
    handleSetDate = (date) => {
        if(date === "01") {
            return date = 1
        }
        else if(date === "02") {
          return date = 2
      }
      else if(date === "03") {
          return date = 3
      }
      else if(date === "04") {
          return date = 4
      }
      else if(date === "05") {
          return date = 5
      }
      else if(date === "06") {
          return date = 6
      }
      else if(date === "07") {
          return date = 7
      }
      else if(date === "08") {
          return date = 8
      }
      else if(date === "09") {
          return date = 9
      }
      else if(date === "10") {
          return date = 10
      }
      else if(date === "11") {
          return date = 11
      }
      else if(date === "12") {
          return date = 12
      }
      else if(date === "13") {
          return date = 13
      }
      else if(date === "14") {
          return date = 14
      }
      else if(date === "15") {
          return date = 15
      }
      else if(date === "16") {
          return date = 16
      }
      else if(date === "17") {
          return date = 17
      }
      else if(date === "18") {
          return date = 18
      }
      else if(date === "20") {
          return date = 20
      }
      else if(date === "21") {
          return date = 21
      }
      else if(date === "22") {
          return date = 22
      }
      else if(date === "23") {
          return date = 23
      }
      else if(date === "24") {
          return date = 24
      }
      else if(date === "25") {
          return date = 25
      }
      else if(date === "26") {
          return date = 26
      }
      else if(date === "27") {
          return date = 27
      }
      else if(date === "28") {
          return date = 28
      }
      else if(date === "29") {
          return date = 29
      }
      else if(date === "30") {
          return date = 30
      }
      else if(date === "31") {
          return date = 31
      }

    
    }

    handleSetMonth = (month) => {
        if (month === "01") {
            return month = "January"
        }
        else if (month === "02") {
            return month = "February"
        }
        else if (month === "03") {
            return month = "March"
        }
        else if (month === "04") {
            return month = "April"
        }
        else if (month === "05") {
            return month = "May"
        }
        else if (month === "06") {
            return month = "June"
        }
        else if (month === "07") {
            return month = "July"
        }
        else if (month === "08") {
            return month = "August"
        }
        else if (month === "09") {
            return month = "September"
        }
        else if (month === "10") {
            return month = "October"
        }
        else if (month === "11") {
            return month = "November"
        }
        else if (month === "2") {
            return month = "December"
        }

    }
    


    render() {
        console.log(this.state.date.substring(0,4))
        return (
            <div>
                <FormHeader/>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">TIME : <input type="number" value={this.state.hour} onChange={this.handleChangeHour} className="setTime" /> : <input type="number" value = {this.state.min} onChange={this.handleChangeMin} className="setTime" /> </div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">DATE : <div  className = "Calendarcalendar"><EventCalendar onChange = {this.handleChangeDateTime} id ={'date'}/></div></div>

                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "row flex-container">
                <div className = "tk1flex-0"></div>
                <div className = "tk1flex-3 downdown">COMMENT : <input type="text" value={this.state.comment} maxLength="80" onChange={this.handleChangeComment} className="setForCM" /></div>
                <div className = "tk1flex-1">
                </div>
                </div>
                <div className = "downdown">
                    <button type="submit" value="Submit" onClick= {this.handleSubmit} className = "Submit">Submit</button>
                    <button type="submit" value="Cancel" className = "Cancel-button">Cancel</button>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    console.log('state chaeck stat2', state.profile)
    return {
        profile: state.profile
    }
}
export default connect(mapStateToProps)(MyCalendarCreateEvent)