import { useState } from "react";
import { Link } from "react-router-dom";
export default function Form(){

    const[username,setName]=useState("");
    const[email,setEmail]=useState('');
    const[country,setCountry]=useState('');
    const[password,setPassword]=useState('');
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert('Registered successfully!');
        const register={username,email,country,password}
        if (username === '' || email === '' || password === '') {
            setError(true);
        } else {
            
            setError(false);
        }
        console.log(register);

        fetch("http://localhost:8080/postuserdetails",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(register)
        
    }).then(()=>{
        console.log(register)
    })
    };
    const handleName = (e) => {
        setName(e.target.value);
      
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
       
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        
    };
    const handleCountry = (e) => {
        setCountry(e.target.value);
     
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
            <div className="register-div-left">
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
            </div>
            {/* <div className="messages">
                {errorMessage()}
            </div> */}
            <div className="register-div">
                <form name="register-form-1">
                    <div className="register-name-div"><h1>Register</h1></div>
                    <div className="input-div">
                    <input onChange={handleName} className="input-username" value={username} type="text" placeholder="Username"/>
                    <br></br>
                    <input onChange={handleEmail} className="input-email" value={email} type="text" placeholder="email"/><br></br>
                    <input onChange={handleCountry} className="input-country" value={country} type="text" placeholder="Country"/><br></br>
                    <input onChange={handlePassword} className="input-password" value={password} type="password" placeholder="Password"/><br></br><br></br>
                    </div>
                    <div ><Link to="/login" className="sign-in-click">or Login here</Link></div>
                    <button onClick={handleSubmit} className="continue-btn" type="submit"><Link to="/details" className="link-to-log">Continue</Link></button>
                </form>
            </div>  
        </div>
    );
}