import React from 'react'
import { Link } from 'react-router-dom';
// import Header from './Header';
import Pictures from "./Group525.png";
import google from "./google.png";
import facebook from "./fb2.png";

const Login = () => {
    return (
        <div className="Login">
            {/* <Header /> */}
            <Link to="/login">Login</Link>
            <br /> <br />
<div className="container">
 <div className='logo1' >
 <img src={Pictures}  />  <br /><br />                
 </div>
 <h3> Welcome to E-com</h3> 
                <p className='continue'>sign in to continue</p> <br /><br />
 <div className="inputs">
 <i class="far fa-envelope msg"></i><input placeholder='Your Email' type="email" />  <br />
 <br />
 <i class="fas fa-unlock-alt lock"></i> <input placeholder='Password' type="password" className='pass' />
 <div>
     <br /> <br />
            <div className="btn btn btn">Sign in</div>
            <p>OR</p> <br /> <br />

            <img  className='gimage' src={google} />
            <Link to="#">login with Google</Link>
     
            <br />
            
            <img  className='fimage'src={facebook}  />
            <Link to="#">login with Facebook</Link>
     
        </div>
<br /> 
        <div className="forgot">
            <span><Link to="#">Forgot Password?</Link></span> <br />
            Don't have an account? <span> <Link to="/signup">Register</Link></span>
        </div>    
 </div>










</div>        
</div>
    )
    
}



export default Login;
