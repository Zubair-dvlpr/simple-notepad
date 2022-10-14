import React from "react";
import './notepad.css';

const Header = ()=> {
    return (
        <React.Fragment>
            <div className="header p-2">
                <h1 className="text-white ms-5">Notepad</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;