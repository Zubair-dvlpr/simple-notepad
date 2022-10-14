import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <div>
                <a href="#"><img src="logo512.png" width="100" alt="logo" /></a>
                <ul>
                    <li><NavLink to='/First'>First</NavLink></li>
                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;