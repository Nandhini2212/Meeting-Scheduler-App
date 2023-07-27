import React from "react";
import { Link } from 'react-router-dom';
import Foot from "./footer";
// import "./side-pc2.png";
export default function Home(){
    return(
      
        <div className="main-home">
            
            <div className="home-nav-bar">
                
                <nav className="home-nav">
                    <div className="home-nav-logo"></div>
                    <div className="home-nav-list">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/register"></Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="home-content">
                <div className="home-intro-content">
                <h1>“Scheduling with ease,productivity with breeze."</h1><br></br>
                    
                <div className="home-intro-content-2"> 
            Welcome to CatchUp, the ultimate scheduling app that simplifies the way you manage your meetings and appointments. With CatchUp, you can say goodbye to the hassle of coordinating schedules and enjoy a breeze of productivity.
            </div> 
                    <div><Link to="/register" className="continue-btn-home" >Get Started</Link></div>
                </div>
                <div className="home-side-image">
      
                 <div><img className="main-img-home" src={require("../photo/mainpic.png")} alt="pic not found" /></div>
                </div>
                
            </div>
            <div className="home-content-two">
            
                <div class="step-heading">
                    <h1>HOW DOES OUR APP WORK?</h1>
                </div>
                <div className="step-about">
                    <div class="step-left">
                        <h2>1. Register and Set Up your Profile</h2>
                        <div className="img-home"><img className="img-home" src={require("../photo/setup.png")} alt="pic not found" /></div>
                 
                    </div>
                    <div class="step-right">
                        <h2>2.Create Meeting: Provide meeting details and set up your availability.</h2>
                        <div className="img-home"><img className="img-home" src={require("../photo/meetingpic.png")} alt="pic not found" /></div>
                    </div>
                    {/* <svg className="curved-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 C 40 0, 60 0, 100 50" />
        </svg> */}
                    <div class="step-left">
                        <h2>3.Select Time: Participants choose their preferred meeting time from the options you provided.</h2>
                        <div className="img-home"><img className="img-home" src={require("../photo/calender.png")} alt="pic not found" /></div>

                    </div>
                
                    <div class="step-right">
                        <h2>4.Send Invitations: App sends meeting invitations to participants with all the necessary details.</h2>
                        <div className="img-home"><img className="img-home" src={require("../photo/sendpic.png")} alt="pic not found" /></div>
                    </div>
                    {/* <svg className="curved-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 C 40 0, 60 0, 100 50" />
        </svg> */}
                </div>
            </div>

{/*                     
            <footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-heading">Company</h3>
        <ul class="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Support</h3>
        <ul class="footer-links">
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="footer-heading">Connect</h3>
        <ul class="footer-social-links">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer> */} 

<Foot/>

        </div>
    );
}