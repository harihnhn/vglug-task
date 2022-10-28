import React from "react";
import "./../style/footer.css";

import footerlogo from "./../images/footer_logo.png";
import youtubelogo from "./../images/youtube_logo.png";
import instagramlogo from "./../images/instagram_logo.png";
import maillogo from "./../images/mail_logo.png";
import phonelogo from "./../images/phone_logo.png";


function Footer(){
    return(
        <div className="footer">
            <hr/>
            {/* <img src="./../images/footer_logo.png"  alt="logo"/> */}
            <img src={footerlogo} alt="footer_logo.png" className="footerimage" width="10%" height="100%"/>

            <table border="0px">
                <tr>
                    <th className="c1">FOLLOW US</th>
                    <th>CONTACT</th>
                </tr>
                <tr>
                    <td className="c1">
                        <a href="https://www.youtube.com/channel/UC_QFpdLwFsUqPY5a1BidXzg" title="Visit our Youtube channel">
                            <img src={youtubelogo} alt="Youtube logo" width="15%" height="15%" />
                            Youtube
                        </a>
                    </td>
                    <td>
                        
                        <a href="mailto:hari2005999@gmail.com" title="hari2005999@gmail.com">
                            <img src={maillogo} alt="mail logo" width="15%" height="15%" />
                            Mail
                        </a>
                    </td>
                </tr>
                <tr>
                    <td className="c1">
                        <a href="https://www.instagram.com/accounts/login/" title="Click to Visit our Instagram page">
                            <img src={instagramlogo} alt="instagram logo" width="15%" height="15%" />
                            Instagram
                        </a>
                    </td>
                    <td>
                        <a href="tel:+919003700826" title="Click to call us">
                            <img src={phonelogo} alt="phone logo" width="15%" height="15%" />
                            +91 9003700826
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Footer