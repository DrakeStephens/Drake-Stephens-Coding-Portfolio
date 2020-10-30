import React from "react";
import ImgCar from "../components/ImageCar"

function AboutMe() {
    return(
        <div className="bg-dark">
            <h2 className="p-5 text-white" style={{ fontWeight: 700 }}>About Me</h2>
            {/* <div className="m-5" style={{ width: "312px" }}>
                <img src={drake} className="card-img-top" alt="..."/>
            </div> */}
            <div className="bg-light mb-0">
            <div className="row col-12">
                <div className="m-5 col-7">
                    <ImgCar />
                </div>
                <div className="col-4">
                    <p className="mt-5" style={{ fontWeight: 700, fontSize: "35px", textIndent: "10%" }}>
                            Drake Stephens was born in Utah in 1999. His interests include competing and organizing local competitive tournaments for the game Super Smash Bros. Melee. He attended Salt Lake Community College as well as The University of Utah’s Coding Bootcamp in 2020. Through that program, he became proficient in HTML/CSS3, Javascript / JQuery / Node.js, PHP, Express.js / React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and MERN. His professional interest is web development as a full stack developer. Reference the footer for contact information.                    
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;