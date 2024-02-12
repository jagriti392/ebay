import React from 'react'
import './Slider2.css'

import{Carousel} from 'react-bootstrap'
const Slider2 = ()=> {
    return (
    <>

<Carousel>
      <Carousel.Item interval={1000}>
        <img 
      className="d-block w-100"
      src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
         alt="First slide"/>

</Carousel.Item>
</Carousel>


</>

    )
}
    export default Slider2;


