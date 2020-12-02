import React, { useState } from 'react';
import GitHub from "../../assets/GitHub-Mark-32px.png";
import url from "../../assets/url.png";

const ProjectList = () => {
    const [photos] = useState([
        {
            name: 'Date Night',
            url: 'https://drakestephens.github.io/Date-Night/',
            repository: 'https://github.com/DrakeStephens/Date-Night',
            description: 'Date Night Shows off my ability and know how to use APIs.',
            pic: 'popcorn'
        },
        {
            name: 'Timed-Out',
            url: 'https://protected-caverns-67219.herokuapp.com/',
            repository: 'https://github.com/mhans19/timed-out',
            description: 'Timed-Out is a perfect example of using SQL to manage databases, It also shows my compentancy with handlebars.',
            pic: 'timedOut'
        },
        // {
        //     name: '',
        //     url: '',
        //     repository: '',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        //     pic: 'timedOut'
        // },
    ])
    return (
        <div className="row mx-auto bg-dark">
            {photos &&
                photos.map(photo => (
            <div className="card m-5" style={{ width: "18rem"}}>
              <img 
                src={require(`../../assets/projects/${photo.pic}.png`)}
                className="card-img-top"
                alt={'...'}
                key={photo.picture}
              />
              <div className="card-body bg-info">
              <h5 className="card-title">{photo.name}</h5>
              <p className="card-text">{photo.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="m-5"
                href={photo.url}
              ><img src={url} alt={'...'}/>
              </a>
              <a
                href={photo.repository}
                target="_blank"
                rel="noopener noreferrer"
              ><img src={GitHub} alt={'...'}/>
              </a>
              </div>
            </div>
        ))}
        </div>
    );
};

export default ProjectList;