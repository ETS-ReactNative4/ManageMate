import React, { Component } from 'react'
import '../App.css';

class TangkwaAddUser extends Component {
    render() {
        return (
            <div>
                <div className="tangkwaTitle"><h4><b>ADD USER</b></h4></div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                    </div>
                    <div className="tk1flex-2">
                    </div>
                    <div className="tk1flex-2">
                        <p><b><u>LEAVE QUOTA</u></b></p>
                    </div>
                    <div className="tk1flex-2">
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>FIRSTNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" name="firstname" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>SICK LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" name="sickhoursQuota" className="setHour" />  HOURS</p>
                    </div>
                </div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>LASTNAME : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" name="lastname" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>ANNUAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" name="annualhoursQuota" className="setHour" />  HOURS</p>
                    </div>
</div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>EMAIL : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" name="email" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>LEAVE WITHOUT PAY : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" name="lwphoursQuota" className="setHour" />  HOURS</p>
                    </div>
</div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>TEL NO. : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" name="telNo" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>PERSONAL LEAVE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" name="personalhoursQuota" className="setHour" />  HOURS</p>
                    </div>
</div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>BANK NO. : </p>
                    </div>
                    <div className="tk1flex-2">
                        <input type="text" name="bankNo" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        <p>LEAVE FOR WORK OUTSIDE : </p>
                    </div>
                    <div className="tk1flex-2">
                        <p><input type="text" name="lfwoshoursQuota" className="setHour" />  HOURS</p>
                    </div>
 </div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>BANK NAME : </p>
                    </div>
                    <div className="tk1flex-2">
                    <input type="text" name="bankname" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                        </div>
                    <div className="tk1flex-2">
                        </div>
 </div>
                <div className="flex-container row">
                    <div className="tkflex-2">
                        <p>POSITION : </p>
                    </div>
                    <div className="tk1flex-2">
                    <input type="text" name="position" className="setForAddUser" />
                    </div>
                    <div className="tk1flex-2">
                      </div>
                    <div className="tk1flex-2">
                         </div>
 </div>
 <div>
                    <button type="submit" value="Submit" className="Submit">Submit</button>
                    <button type="submit" value="Cancel" className="Cancel">Cancel</button>
                </div>
            </div>
        );
    }
}

export default TangkwaAddUser;
