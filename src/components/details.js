import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function ServiceMenu() {
  const [servicetitle, setServiceTitle] = useState("");
  const [duration, setDuration] = useState("");
 
  const [servicecapacity, setCapacity] = useState("");
  const [userdetail1, setUserDetail] = useState(false);
  const [nullError,setNullError]=useState('');
  const location = useLocation();
  const username = location.state && location.state.username;
  const navigate=useNavigate();
  const handleServiceName = (e) => {
    setServiceTitle(e.target.value);
  };

  const handleServiceDuration = (e) => {
    setDuration(e.target.value);
  };



  const handleServiceCapacity = (e) => {
    setCapacity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (servicetitle && duration && servicecapacity) {
      setUserDetail(true);
      console.log("Form submitted");
      
    } 
    else {
     
      setUserDetail(false);
      console.log("Please fill in all fields");
      setNullError('Please fill all the fields')
    }
    const info={
      "username": username,
        // "url": "www.paul.com",
        "url":`http://localhost:3000/userinfo/${username}`,
        "service": servicetitle,
        "duration": duration,
        "capacity": servicecapacity
    }
    console.log(info);
    axios.post("http://localhost:8181/postschedulerinfo",info)
    .then(res=>{
      console.log(res.data);
      localStorage.getItem("token",res.data.token);
      navigate("/schedule",{state:{username:username}});
      
    })
      
    
    
  }
  
  const isFormValid = servicetitle && duration && servicecapacity;
  
  return (
    <div className="service-info">
      <div className="service-menu-title">
        <h1>Create your service Menu</h1>
      </div>
      <div className="input-div-service">
        <input
          onChange={handleServiceName}
          className="input-service-title"
          value={servicetitle}
          type="text"
          placeholder="Service Title"
          required
        />
        
        <br />
        <input
          onChange={handleServiceDuration}
          className="input-service-title"
          value={duration}
          type="text"
          placeholder="Duration"
          required
        />
        <br />
       
        <input
          onChange={handleServiceCapacity}
          className="input-service-title"
          value={servicecapacity}
          type="text"
          placeholder="Capacity"
          required
        />
        <br />
        {nullError && <p>{nullError}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="continue-btn"
        type="submit"
       
      >
        <Link to={isFormValid ? "/schedule" : "#" }>NEXT</Link>
      </button>
    </div>
  );
}
