import React from "react";
import drake from "../assets/drake.jpg";
import GitHub from "../assets/GitHub-Mark-32px.png";
import linkedin from "../assets/linkedin.png";


function AboutMe() {
    return(
        <div className="bg-dark">
            <h2 className="p-5 text-white" style={{ fontWeight: 700 }}>About Me</h2>
            <div className="m-5" style={{ width: "312px" }}>
                <img src={drake} className="card-img-top" alt="..."/>
            </div>
            <div className="bg-light mb-0">
            <div>
                <p className="m-5" style={{ fontWeight: 700, fontSize: "20px" }}>
                    Drake Stephens Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, id quae mollitia voluptatibus pariatur praesentium qui consequatur porro minima incidunt cum nobis repellat asperiores harum fuga ratione corrupti doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem nesciunt, mollitia earum iusto dignissimos ipsam. Adipisci velit harum commodi. Modi, beatae consequatur numquam eligendi odio odit temporibus fugiat rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, id quae mollitia voluptatibus pariatur praesentium qui consequatur porro minima incidunt cum nobis repellat asperiores harum fuga ratione corrupti doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem nesciunt, mollitia earum iusto dignissimos ipsam. Adipisci velit harum commodi. Modi, beatae consequatur numquam eligendi odio odit temporibus fugiat rerum. Drake Stephens Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, id quae mollitia voluptatibus pariatur praesentium qui consequatur porro minima incidunt cum nobis repellat asperiores harum fuga ratione corrupti doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem nesciunt, mollitia earum iusto dignissimos ipsam. Adipisci velit harum commodi. Modi, beatae consequatur numquam eligendi odio odit temporibus fugiat rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur, id quae mollitia voluptatibus pariatur praesentium qui consequatur porro minima incidunt cum nobis repellat asperiores harum fuga ratione corrupti doloremque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt autem nesciunt, mollitia earum iusto dignissimos ipsam. Adipisci velit harum commodi. Modi, beatae consequatur numquam eligendi odio odit temporibus fugiat rerum. 
                </p>
                <div className="row text-center ml-1 pb-2">
                    <a  href="https://github.com/DrakeStephens"><img src={GitHub} className="ml-5" alt="..."/></a>
                    <a  href="https://www.linkedin.com/in/drake-stephens-32548a1a6/"><img src={linkedin} className="ml-5" alt="..."/></a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;