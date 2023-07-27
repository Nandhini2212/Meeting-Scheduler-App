import React, { Component, useCallback, useState,useEffect } from 'react';
import {useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const accessToken="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqaGIiLCJpYXQiOjE2OTAxMjUxNjMsImV4cCI6MTY5MDEyNjYwM30.yNvsOPHBeSeFhhrRsRGZj_hHYrCpSmsMETFSM_hxsAM"
// const authAxios =axios.create({
//   baseURL:"",
//   ,
// });
function Userpage(){
    const user=useSelector(state => state.user.value)

  const openNav=()=>{
    document.getElementById("sidenav").style.width="250px";
    document.getElementById("welcome").style.transform = "translateX(120px)";
  }
  const closeNav=()=>{
    document.getElementById("sidenav").style.width="0";
    document.getElementById("welcome").style.transform = "translateX(0)";
  }
  const [scheduledData, setScheduledData]=useState([]);
 
  const name={username:user.name};
  console.log(name);
  // const fetchScheduledData = async () => {
  //   try {
    useEffect(() => {
      const fetchScheduledData = async () => {
        try {
          const response = await axios.get(`http://localhost:8181/getclientinfo/${user.name}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          });
          setScheduledData(response.data);
          console.log(localStorage.getItem("token"));
          console.log(response.data);
        } catch (error) {
          console.log('Error fetching scheduled data:', error);
          console.log(error.response?.data);
          console.log(error.response?.status);
          console.log(error.response?.headers);
        }
      };
  
      fetchScheduledData();
    }, []);
      return (
            // fetchScheduledData()
          <div>
      <nav className='user-nav'>
          <button className="menu-button" onClick={openNav}>
          &#9776;
          </button>
          <div className='create-new-meeting'>
            


          </div>

        <div className="user-navbar" id='sidenav'>
      
         <nav class="user-side-bar">
            
         <button className="close-button" onClick={closeNav}>x</button>
           <ul>
            <li style={{color:"red"}}>{user.name} </li>
           <li>Profile</li>
           <li><Link to='/url' state={name} className="link-text">URL</Link></li>
             <li><Link to='/feedback'className="link-text">Feedback</Link></li>
             <li><Link to='/'className="link-text">Logout</Link></li>
             <li>Statistics</li>
           </ul>
         </nav>
        </div>

      </nav>
          
        <div id='welcome' className='user-content'>
                <h1>Welcome Back! {user.name}</h1>
                <div className='your-meetings'>You have {scheduledData.length} meetings to Attend:</div>
                {scheduledData.map((meeting, index) => (
          <div key={index} className='meeting-info-div'>
            <div className='service-name'>Client Name : {meeting.username}</div>
            <div className='service-name'>Gender : {meeting.gender}</div>
            <div className='booked-time'>Time: {meeting.time}</div>
            {/* Add other details based on your data structure */}
            <div className='participant-profile'>
              <div className='participant-profile-pic'>
                <img className='participant-profile-pic' src={require("../photo/participant-profile.png")} alt="pic not found" />
              </div>
              <div className='participant-name'>{meeting.participantName}</div>
              <div className='user-choices'>
                <div className='user-reschedule'>Approve</div>
                <div className='user-cancel'>cancel</div>
              </div>
            </div>
          </div>
        ))}

                {/* <div className='meeting-info-div'>
                    <div className='service-name'>Education</div>
                    <div className='booked-time'>Time: 12:00AM - 12:30AM</div>
                    <div className='participant-profile'>
                    <div className='participant-profile-pic'><img className='participant-profile-pic' src={require("../photo/participant-profile.png")} alt="pic not found" /></div>
                        <div className='participant-name'>ANONYMOUS</div>
                        <div className='user-choices'> 
                                <div className='user-reschedule'>reschedule</div>
                                <div className='user-cancel'>cancel</div>
                        </div>

                    </div>
                </div> */}
        </div>

      
   

      {/* Add the rest of your website content here */}
    </div>
  );
}


export default Userpage
