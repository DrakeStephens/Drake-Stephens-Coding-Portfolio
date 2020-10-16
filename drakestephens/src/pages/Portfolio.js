import React from "react";
import Project from '../components/Project'

function Portfolio() {
    return(
        <div>
            <div className="bg-light">
                <h4 style={{ fontWeight: 700, fontSize: "25px" }} className="ml-5 py-3">My Projects</h4>
                <p style={{ fontWeight: 600, fontSize: "20px" }} className="ml-5 mb-0 pb-3">                    
                    Drake Stephens Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, id quae mollitia voluptatibus pariatur praesentium qui consequatur porro minima incidunt cum nobis repellat asperiores harum fuga ratione corrupti doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem nesciunt, mollitia earum iusto dignissimos ipsam. Adipisci velit harum commodi. Modi, beatae consequatur numquam eligendi odio odit temporibus fugiat rerum.
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