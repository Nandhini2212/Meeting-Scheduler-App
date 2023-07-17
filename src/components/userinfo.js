import { useState } from "react";
import { Link } from "react-router-dom";
export default function Userinfo(){

    const[Username,setusername]=useState("");
    const[usermobileno,setuserMobileno]=useState('');
    const[userGender,setuserGender]=useState('');
    const[useremail,setuseremail]=useState('');
    // const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    //     window.alert('Registered successfully!');
    //     const register={username,email,country,password}
    //     if (username === '' || email === '' || password === '') {
    //         setError(true);
    //     } else {
            
    //         setError(false);
    //     }
    //     console.log(register);

    //     fetch("http://localhost:8080/postuserdetails",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(register)
        
    // }).then(()=>{
    //     console.log(register)
    // })
    };
    const handleuserName = (e) => {
        setusername(e.target.value);
      
    };
    const handleuserEmail = (e) => {
        setuseremail(e.target.value);
       
    };
    const handleuserGender = (e) => {
        setuserGender(e.target.value);
        
    };
    const handleusermobileno = (e) => {
        setuserMobileno(e.target.value);
     
    };
    // const errorMessage = () => {
    //     return (
    //         <div
    //             className="error"
    //             style={{
    //                 display: error ? '' : 'none',
    //             }}>
    //             <h1>Please enter all the fields</h1>
    //         </div>
    //     );
    // };
 
    return(
        <div className="entire-register-div">
            {/* <div className="register-div-left">
                <div className="pic"></div>
                <div className="register-div-about">
                <h2>Trust CatchUp to grow Your business</h2>
                <p>Our free plan is free forever. No credit card required.</p>

                <ul class="feature-list">
                <li>Offer clients the convenience of a 24x7 Online booking portal.</li><br></br>
                <li>Integration with Google Calender.</li><br></br>
                <li>Reduce no shows with automatic text/email reminders.</li><br></br>
                <li>Accept credit cards anywhere with Square Payments.</li><br></br>
                </ul>
                </div>
            </div> */}
            {/* <div className="messages">
                {errorMessage()}
            </div> */}
            <div className="register-div">
                <form name="register-form-1">
                    <div className="userinfo-name-div"><h1>Please fill your details:</h1></div>
                    <div className="input-div">
                    <input onChange={handleuserName} className="input-username" value={Username} type="text" placeholder="Full Name"/>
                    <br></br>
                    <input onChange={handleuserEmail} className="input-email" value={useremail} type="text" placeholder="email"/><br></br>
                    <input onChange={handleuserGender} className="input-country" value={userGender} type="text" placeholder="Gender"/><br></br>
                    <input onChange={handleusermobileno} className="input-password" value={usermobileno} placeholder="Mobile No"/><br></br><br></br>
                    </div>
                    {/* <div ><Link to="#" className="sign-in-click">NEXT</Link></div> */}
                    <button onClick={handleSubmit} className="continue-btn" type="submit"><Link to="/calender" className="link-to-log">NEXT</Link></button>
                </form>
            </div>  
        </div>
    );
}