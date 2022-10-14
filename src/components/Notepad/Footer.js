import React from "react";
import './notepad.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const Footer = ()=> {
    const year = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="footer text-center p-3 text-white" style={{backgroundColor: '#2f5aa2'}}>
                Copyright © {year}
            </div>

        </React.Fragment>
    )
}

export default Footer;