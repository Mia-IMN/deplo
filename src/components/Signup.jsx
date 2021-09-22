import React from 'react'
// import Headimage from './Headimage';
// import Tablets from './Tablets';
import Pictures from "./Group525.png";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            
            <Link className='link'to="/signup">Register</Link>
<div className="container">
<div className='logo1' >
 <img src={Pictures}  />                 
 </div>  <br /><br /> 
 
 <div className='head1'>
     <h1>Let's Get Started</h1>
     <p className='continue'>Create a new account</p>
 </div>
<br />
 <div className="inputs">
 <i class="far fa-user"></i> <input placeholder='Full Name' type="password"  />
 <br /> <br />
 <i class="far fa-envelope msg"></i><input placeholder='Your Email' type="email" />  <br />
 <br />
 <i class="fas fa-unlock-alt lock"></i> <input placeholder='Password' type="password" />
 <br /> <br />
 <i class="fas fa-unlock-alt lock"></i> <input placeholder='Password Again' type="password" />
 </div>
 <br />
 <div className="btn btn btn">Sign up</div>
 <br /> <br />
 Have an account? <span> <Link to="/signin">Sign in</Link></span>






















</div>
    </div>
)     
}






export default Signup;
