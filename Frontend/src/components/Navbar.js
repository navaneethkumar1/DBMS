import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
function Navbar(){
    return(
        <>
        <div className="header">
            <div className="navbar">
                <ul>
                    <div className="nav">
                        <div className="head">
                            <a>BLOOD CENTER</a>
                        </div>
                    <li><Link to='/'>HOME</Link></li>
                    <li>ABOUT US</li>
                    <li>GALLERY</li>
                    <li><Link to='/Service'>SERVICES</Link></li>
                    <li><Link to='/Contact'>CONTACT</Link></li>
                    </div>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;