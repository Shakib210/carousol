import React from 'react'
import BackgroundSlider from 'react-background-slider'
import bg from "../Images/bg.jpg";
import island1 from "../Images/island1.jpg";
import island2 from "../Images/island2.jpg";
import island3 from "../Images/island3.jpg"

const BackgroundCarousol = () => {

    return (
        <div>
            <BackgroundSlider
  images={[bg, island1, island2, island3]}
  duration={10} transition={2} />
  hello world
        </div>
    )
}

export default BackgroundCarousol
