import React from "react";
import GitHub from "../../assets/GitHub-Mark-32px.png";
import linkedin from "../../assets/linkedin.png";

function Footer() {
    return(
        <div className="bg-info p-3 static-bottom">
            <address className="mb-0 ml-2 py-3"style={{ fontWeight: 700, fontSize: "25px" }}>Thank you for visiting! Contact my email at: <a style={{color: "white"}}href="mailto: drake.stephens56@gmail.com">drake.stephens56@gmail.com</a></address>
            <div className="ml-1 pb-2">
                <a  href="https://github.com/DrakeStephens"><img src={GitHub} className="ml-5" alt="..."/></a>
                <a  href="https://www.linkedin.com/in/drake-stephens-32548a1a6/"><img src={linkedin} className="ml-5" alt="..."/></a>
            </div>
        </div>
    )
}

export default Footer;