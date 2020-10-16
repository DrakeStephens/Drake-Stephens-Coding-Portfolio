import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <h1  style={{ fontWeight: 700, fontSize: "20px" }} className="navbar-brand pl-3 py-auto">Drake Stephens</h1>
            <div className="navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link style={{ fontWeight: 700, fontSize: "15px" }} className="nav-link" to="/">AboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ fontWeight: 700, fontSize: "15px" }} className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ fontWeight: 700, fontSize: "15px" }} className="nav-link" to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ fontWeight: 700, fontSize: "15px" }} className="nav-link" to="/Resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
      );
}

export default Nav;