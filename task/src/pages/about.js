import React from "react";
import aboutimg from "./../images/about.jpg";

class About extends React.Component{
    render(){
        return(
            <div>
                <img src={aboutimg} alt="Welcome to about page" width="100%" />
            </div>
        );
    }
}

export default About;