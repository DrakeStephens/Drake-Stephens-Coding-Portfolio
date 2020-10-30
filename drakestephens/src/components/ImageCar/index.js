import React from 'react';
import drake from "../../assets/slides/drake.jpg"
import car from "../../assets/slides/car.png"
import family from "../../assets/slides/family.jpg"
import amsterdam from "../../assets/slides/amsterdam.jpg"

function imageCar() {
    return(
        <div>
            <div className="row text-center">
                <div className="px-3 pt-3">
                    <img 
                        src={drake}
                        alt={'...'}
                        style={{width: "500px"}}
                    />
                </div>
                <div className="px-3 pt-3">
                    <img 
                        src={car}
                        alt={'...'}
                        style={{width: "500px"}}
                    />
                </div>
            </div>
            <div className="row text-center">
                <div className="px-3 pt-3">
                    <img 
                        src={family}
                        alt={'...'}
                        style={{width: "500px"}}
                    />
                </div>
                <div className="px-3 pt-3">
                    <img 
                        src={amsterdam}
                        alt={'...'}
                        style={{width: "500px"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default imageCar;