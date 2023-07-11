import React from "react";
import { Link } from 'react-router-dom';
// import "./side-pc2.png";
export default function Home(){
    return(
        <div>
            
            <div className="home-nav-bar">
                
                <nav className="home-nav">
                    <div className="home-nav-logo"></div>
                    <div className="home-nav-list">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="home-content">
                <div className="home-intro-content">
                “Scheduling with ease,productivity with breeze."<br></br>
                    
                    Do more with CatchUp!
                    <div><Link to="/register" className="continue-btn-home" >Get Started</Link></div>
                </div>
                
                <div className="home-side-image">
                    {/* <img src={require("./photo/side-pc2.png")} alt="pic not found" /> */}
                </div>
                
            </div>
        </div>
    );
}