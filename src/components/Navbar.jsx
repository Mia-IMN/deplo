// import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Pictures from './Group525.png';
console.log(Pictures)

const Navbar = () => {
    return (
        <div className="Navbar">
                <p className="e-comm"><img src={Pictures} className="logo" /><pre><span>  E-Comm</span></pre></p>
                <li ><Link className="contact" to="/">Home</Link></li>
                <li><Link className="contact" to="/about">About</Link></li>
                <li><Link className="contact" to="/bags">Bags</Link></li>
                <li><Link className="contact" to="/Sneakers">Sneakers</Link></li>
                <li><Link className="contact" to="/belts">Belts</Link></li>
                <li>  <Link className="contact" to="/contact">Contact</Link></li>
               
        </div>
    )
}

export default Navbar
