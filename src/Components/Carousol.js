import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg from "../Images/bg.jpg";
import island1 from "../Images/island1.jpg";
import island2 from "../Images/island2.jpg";
import island3 from "../Images/island3.jpg"

const Carousol =()=> {
    
        return (
            <Carousel showArrows={false} autoPlay={true} >
                <div>
                    <img src={bg} alt="pic" height="700px"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={island1} alt="pic" height="700px"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={island2} alt="pic" height="700px"/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={island3} alt="pic" height="700px"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }


export default Carousol
