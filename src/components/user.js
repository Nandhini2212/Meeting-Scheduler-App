import React, { Component, useState } from 'react';
import {useSelector } from 'react-redux';
function Userpage(){
    const user=useSelector(state => state.user.value)
    // [isSidebarVisible, setSidebarVisibility] = useState(false);
//     user=useSelector(selectUser);

//   handleMouseEnter(){
//     setSidebarVisibility(true);
//   };
//   setSidebarVisibility(){
//     this.setState({});
//   }

//   handleMouseLeave(){
//     setSidebarVisibility(false);
//   };
    // state = {
    //     currentDate: '',
    //   };
    
    //   componentDidMount() {
    //     const currentDate = new Date().toLocaleDateString();
    //     this.setState({ currentDate });
    //   }
    

  const openNav=()=>{
    document.getElementById("sidenav").style.width="250px";
    document.getElementById("welcome").style.transform = "translateX(120px)";
  }
  const closeNav=()=>{
    document.getElementById("sidenav").style.width="0";
    document.getElementById("welcome").style.transform = "translateX(0)";
  }

      return (
          <div>
      <nav className='user-nav'>
          <button className="menu-button" onClick={openNav}>
          &#9776;
          </button>
          <div className='create-new-meeting'>
            


          </div>
           {/* <div className="user-date">{currentDate}</div> */}
        <div className="user-navbar" id='sidenav'>
      
         <nav class="user-side-bar">
            
         <button className="close-button" onClick={closeNav}>x</button>
           <ul>
            <li style={{color:"red"}}>{user.name} </li>
           <li>Profile</li>
           <li>URL</li>
             <li>Contact</li>
             <li>Settings</li>
             <li>Statistics</li>
           </ul>
         </nav>
        </div>

      </nav>
          
        <div id='welcome' className='user-content'>
                <h1>Welcome Back! {user.name}</h1>
                <div className='your-meetings'>You have 2 meeting to Attend:</div>
                <div className='meeting-info-div'>
                    <div className='service-name'>Education</div>
                    <div className='booked-time'>Time: 12:00AM - 12:30AM</div>
                    <div className='participant-profile'>
                        <div className='participant-profile-pic'>pic</div>
                        <div className='participant-name'>ANONYMOUS</div>
                        <div className='user-choices'> 
                                <div className='user-reschedule'>reschedule</div>
                                <div className='user-cancel'>cancel</div>
                        </div>

                    </div>
                </div>

                <div className='meeting-info-div'>
                    <div className='service-name'>Education</div>
                    <div className='booked-time'>Time: 12:00AM - 12:30AM</div>
                    <div className='participant-profile'>
                        <div className='participant-profile-pic'>pic</div>
                        <div className='participant-name'>ANONYMOUS</div>
                        <div className='user-choices'> 
                                <div className='user-reschedule'>reschedule</div>
                                <div className='user-cancel'>cancel</div>
                        </div>

                    </div>
                </div>
        </div>

      
   

      {/* Add the rest of your website content here */}
    </div>
  );
}


export default Userpage
