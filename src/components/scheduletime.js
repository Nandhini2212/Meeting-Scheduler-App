import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Scheduletimes() {
  const location=useLocation();
  const username =location.state && location.state.username;

  const navigate=useNavigate();
  const [businesshours,setBusinessHours]=useState([]);
  const handleCheckBox=(day,checked)=>{
    const updatedata=[...businesshours];
    const dayindex=updatedata.findIndex((data)=>data.day===day);
    if(dayindex===-1 && checked){
      updatedata.push({day,start:"",end:""})
    }
    else if(dayindex!==-1 && !checked){
      updatedata.splice(dayindex,1);
    }
    setBusinessHours(updatedata);
  }

  const handletimeChange=(day,field,value)=>{
    const updatetime=[...businesshours];
    const dayindex=updatetime.findIndex((data)=>data.day===day);
    if(dayindex!==-1){
      updatetime[dayindex][field]=value;
    }
    setBusinessHours(updatetime);
  }

  const handlesubmit =async(e)=>{
    e.preventDefault();
    const tosend=businesshours.map((data)=>({
      schedulername:username,
      dayofweek:data.day,
      start:data.start,
      end:data.end
    
      
    }));
    console.log(tosend);
    const config = {
        headers: {'Content-Type': 'application/json'},
        'Accept' : 'application/json'
    }
    const bh = JSON.stringify({bh: tosend})
    tosend.map((send)=>{

      try{
        const response = axios.post("http://localhost:8181/postbusinesshour",send,config)
        // {username: 'tr', dayofweek: 'Tuesday', start: '10:00:00', end: '11:00:00'}
      .then(res=>{
        console.log(bh);
        console.log(res.data);
        console.log("bh added");
        navigate("/login")
      })
    }
    catch(error){
      console.log("Error response:", error.response);
    console.log("Error message:", error.message);
    }
    })
  }
  return (
    <div className="schedule-container">
      <div className="day-column">
        <h1>Add Your Business hours</h1>
        <ul>
          <li>
            <div className="day-name"><input type="checkbox" onChange={(e)=>handleCheckBox("Monday",e.target.checked)}/>Monday</div>
            <select id="timingSelect" onChange={(e)=>handletimeChange("Monday","start",e.target.value)} >
              <option value="">choose</option>
              <option value="09:00:00">09:00:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="11:00:00">11:00:00</option>
              <option value="12:00:00">12:00:00</option>
              <option value="13:00:00">13:00:00</option>
              <option value="14:00:00">14:00:00</option>
              <option value="15:00:00">15:00:00</option>
              <option value="16:00:00">16:00:00</option>
              <option value="17:00:00">17:00:00</option>
              <option value="18:00:00">18:00:00</option>
            </select>
                To
            <select id="timingSelect" onChange={(e)=>handletimeChange("Monday","end",e.target.value)}>
            <option value="">choose</option>
            <option value="09:00:00">09:00:00</option>
            <option value="10:00:00">10:00:00</option>
            <option value="11:00:00">11:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="13:00:00">13:00:00</option>
            <option value="14:00:00">14:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="16:00:00">16:00:00</option>
            <option value="17:00:00">17:00:00</option>
            <option value="18:00:00">18:00:00</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox" onChange={(e)=>handleCheckBox("Tuesday",e.target.checked)}/>Tuesday</div>
            <select id="timingSelect" onChange={(e)=>handletimeChange("Tuesday","start",e.target.value)} >
              <option value="">choose</option>
              <option value="09:00:00">09:00:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="11:00:00">11:00:00</option>
              <option value="12:00:00">12:00:00</option>
              <option value="13:00:00">13:00:00</option>
              <option value="14:00:00">14:00:00</option>
              <option value="15:00:00">15:00:00</option>
              <option value="16:00:00">16:00:00</option>
              <option value="17:00:00">17:00:00</option>
              <option value="18:00:00">18:00:00</option>
            </select>
                To
            <select id="timingSelect" onChange={(e)=>handletimeChange("Tuesday","end",e.target.value)}>
            <option value="">choose</option>
            <option value="09:00:00">09:00:00</option>
            <option value="10:00:00">10:00:00</option>
            <option value="11:00:00">11:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="13:00:00">13:00:00</option>
            <option value="14:00:00">14:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="16:00:00">16:00:00</option>
            <option value="17:00:00">17:00:00</option>
            <option value="18:00:00">18:00:00</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox" onChange={(e)=>handleCheckBox("Wednesday",e.target.checked)}/>Wednesday</div>
            <select id="timingSelect" onChange={(e)=>handletimeChange("Wednesday","start",e.target.value)} >
              <option value="">choose</option>
              <option value="09:00:00">09:00:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="11:00:00">11:00:00</option>
              <option value="12:00:00">12:00:00</option>
              <option value="13:00:00">13:00:00</option>
              <option value="14:00:00">14:00:00</option>
              <option value="15:00:00">15:00:00</option>
              <option value="16:00:00">16:00:00</option>
              <option value="17:00:00">17:00:00</option>
              <option value="18:00:00">18:00:00</option>
            </select>
                To
            <select id="timingSelect" onChange={(e)=>handletimeChange("Wednesday","end",e.target.value)}>
            <option value="">choose</option>
            <option value="09:00:00">09:00:00</option>
            <option value="10:00:00">10:00:00</option>
            <option value="11:00:00">11:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="13:00:00">13:00:00</option>
            <option value="14:00:00">14:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="16:00:00">16:00:00</option>
            <option value="17:00:00">17:00:00</option>
            <option value="18:00:00">18:00:00</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox" onChange={(e)=>handleCheckBox("Thursday",e.target.checked)}/>Thursday</div>
            <select id="timingSelect" onChange={(e)=>handletimeChange("Thursday","start",e.target.value)} >
              <option value="">choose</option>
              <option value="09:00:00">09:00:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="11:00:00">11:00:00</option>
              <option value="12:00:00">12:00:00</option>
              <option value="13:00:00">13:00:00</option>
              <option value="14:00:00">14:00:00</option>
              <option value="15:00:00">15:00:00</option>
              <option value="16:00:00">16:00:00</option>
              <option value="17:00:00">17:00:00</option>
              <option value="18:00:00">18:00:00</option>
            </select>
                To
            <select id="timingSelect" onChange={(e)=>handletimeChange("Thursday","end",e.target.value)}>
            <option value="">choose</option>
            <option value="09:00:00">09:00:00</option>
            <option value="10:00:00">10:00:00</option>
            <option value="11:00:00">11:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="13:00:00">13:00:00</option>
            <option value="14:00:00">14:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="16:00:00">16:00:00</option>
            <option value="17:00:00">17:00:00</option>
            <option value="18:00:00">18:00:00</option>
            </select>
          </li>
          <li>
          <div className="day-name"><input type="checkbox" onChange={(e)=>handleCheckBox("Friday",e.target.checked)}/>Friday</div>
            <select id="timingSelect" onChange={(e)=>handletimeChange("Friday","start",e.target.value)} >
              <option value="">choose</option>
              <option value="09:00:00">09:00:00</option>
              <option value="10:00:00">10:00:00</option>
              <option value="11:00:00">11:00:00</option>
              <option value="12:00:00">12:00:00</option>
              <option value="13:00:00">13:00:00</option>
              <option value="14:00:00">14:00:00</option>
              <option value="15:00:00">15:00:00</option>
              <option value="16:00:00">16:00:00</option>
              <option value="17:00:00">17:00:00</option>
              <option value="18:00:00">18:00:00</option>
            </select>
                To
            <select id="timingSelect" onChange={(e)=>handletimeChange("Friday","end",e.target.value)}>
            <option value="">choose</option>
            <option value="09:00:00">09:00:00</option>
            <option value="10:00:00">10:00:00</option>
            <option value="11:00:00">11:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="13:00:00">13:00:00</option>
            <option value="14:00:00">14:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="16:00:00">16:00:00</option>
            <option value="17:00:00">17:00:00</option>
            <option value="18:00:00">18:00:00</option>
            </select>
          </li>
          
        </ul>
        <div className="finish-button-div">
      <button className="finish-btn" type="submit" onClick={handlesubmit}><Link to ="/login" className="link-to-finish">Finish</Link></button>
      </div>
      </div>
    </div>
  );
}
