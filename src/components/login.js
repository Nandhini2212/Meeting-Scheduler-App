import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/store";

const LoginForm=()=>{
    const [pname, setPname] = useState('');
    const dispatch = useDispatch();
  
  
    const handleChange = (e) => {
      setPname(e.target.value);
    }


    const[username,setName]=useState("");
   
    const[password,setPassword]=useState('');
    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const register={username,password}
        if (username === '' || password === '') {
            setError(true);
        } else {
            
            setError(false);
        }

  
        fetch('http://localhost:8080/checkuserdetails/${encodeURIComponent(username)}/${encodeURIComponent(password)}',{
       
        
        
    }).then(response=>response.text())
    .then(data=>{
        console.log(data);
    })
    .then(()=>{
        console.log(register);
    })
    
    };
    const handleName = (e) => {
        setName(e.target.value);
      
    };
   
    const handlePassword = (e) => {
        setPassword(e.target.value);
        
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
                    <div className="register-name-div"><h1>Login</h1></div>
                    <div className="input-div">
                    <input onChange={handleChange} className="input-username" value={pname} type="text" placeholder="Username"/>
                    <br></br>
                    
                    <input onChange={handlePassword} className="input-password" value={password} type="password" placeholder="Password"/><br></br><br></br>
                    </div>
                    <Link to="/user" className="link-to-log"><button onClick={()=>dispatch(login({ name: pname }))} className="continue-btn" type="submit">Log Me In</button></Link>
                </form>
                
            </div>
        </div>
    );
}
export default LoginForm;