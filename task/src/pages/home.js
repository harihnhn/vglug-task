import React from "react";
import homeimg from "./../images/home.webp";

class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={homeimg} alt="Welcome to home page" width="100%" height="" />
            </div>
        );
    }
}

export default Home;