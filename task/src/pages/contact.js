import React from "react";
import contactimg from "./../images/contact.webp";

class Contact extends React.Component{
    render(){
        return(
            <div>
                <img src={contactimg} alt="Welcome to contact page" width="100%" />
            </div>
        );
    }
}

export default Contact;