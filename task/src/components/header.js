import React from "react";
import { NavLink } from "react-router-dom";

import logo from "./../images/logo.png";
import "./../style/header.css";

//console.log(Logo);

function Header() {
    /*
    const mystyle = {
        width: "600",
        height: "300"
    }
    */
    return(
        <div>
            <img src={logo} alt="Seventeen(*logo)" width="30%" height="20%" className="headerlogo" />
            {/* <img src={logo} alt="Seventeen(*logo)"  style={mystyle} /> */}
            {/* <img src={logo} alt="Seventeen(*logo)" style={{width:"600"} {height: "300"}} /> */}
            {/*
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            */}        
            
            <NavLink className={"navlink"} to="/contact">Contact</NavLink>
            <NavLink className={"navlink"} to="/about">About</NavLink>
            <NavLink className={"navlink"} to="/home">Home</NavLink>
            <hr/>
            
        </div>
    );
}

export default Header;