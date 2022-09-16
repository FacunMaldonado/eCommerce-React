import React, {Suspense}  from 'react'
import back2 from "./img/b1.jpg"
import back1 from "./img/b2.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./slider.css"


/* import '@splidejs/react-splide/css/sea-green'; */

// or only core styles

const Slider = () => {

  const options = {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
    autoplay: true
  };
  return (

    <Suspense fallback={"loading"}>
      <div className="slider">
        <Splide aria-label="My Favorite Images" 
          options={ options } >
          <SplideSlide>

            <Suspense fallback={"loading"}>
              <img src={back2} alt="background Slider 1"/>
            </Suspense>

          </SplideSlide>
          <SplideSlide>

            <Suspense fallback={"loading"}>
              <img src={back1} alt="background Slider 2"/>
            </Suspense>

          </SplideSlide>
        </Splide>
      </div>
    </Suspense>
  )
}

export default Slider