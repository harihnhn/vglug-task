import React from "react";
import pagenotfound from "./../images/page_not_found.gif";

class Pagenotfound extends React.Component{
    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1>404 error page not found</h1>
                <img src={pagenotfound} alt="page not found" width="80%" height="50%"/>
            </div>
        );
    }
}

export default Pagenotfound;