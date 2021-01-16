import React from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import bg from "../Images/bg.jpg";
import island1 from "../Images/island1.jpg";
import island2 from "../Images/island2.jpg";
import island3 from "../Images/island3.jpg"
import '../App.css'

const DesignedBackgroundCarousol = () => {
    return (
        <div>
            <BackgroundSlideshow images={[ bg, island1, island2, island3 ]} />
            <div className='div'>
                 Hello world
            </div>
        </div>
    )
}

export default DesignedBackgroundCarousol
