import React from "react";
import Project from '../components/Project'

function Portfolio() {
    return(
        <div>
            <div className="bg-light">
                <h4 style={{ fontWeight: 700, fontSize: "25px" }} className="ml-5 py-3">My Projects</h4>
                <p style={{ fontWeight: 600, fontSize: "20px" }} className="ml-5 mb-0 pb-3">                    
                    Here are some of the exerts from my Portfolio. Feel free to ask me about my other skills that aren't displayed here.
                </p>
            </div>
            <div className="bg-dark pb-5 row text-center">
                <Project />
            </div>
            <div className="bg-dark pb-5">

            </div>
        </div>
    )
}

export default Portfolio;