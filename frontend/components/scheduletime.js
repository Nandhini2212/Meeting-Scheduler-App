import React from "react";
import { Link } from "react-router-dom";
export default function Scheduletimes() {
  return (
    <div className="schedule-container">
      <div className="day-column">
        <h1>Add Your Business hours</h1>
        <ul>
          <li>
            <div className="day-name"><input type="checkbox"/>Monday</div>
            <select id="timingSelect" >
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Tuesday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Wednesday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Thursday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox"/>Friday</div>
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>
                To
            <select id="timingSelect">
              <option value="">choose</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
            </select>   
          </li>
        </ul>
        <div className="finish-button-div">
      <button className="finish-btn" type="submit"><Link to ="/login" className="link-to-finish">Finish</Link></button>
      </div>
      </div>
    </div>
  );
}
