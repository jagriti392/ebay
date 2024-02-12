import React from 'react'
import './Slider.css'

import{Carousel} from 'react-bootstrap'
const Slider = ()=> {
    return (
    <>

<Carousel>
      <Carousel.Item interval={1000}>
        <img 
      className="d-block w-100"
      src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/Y5wAAOSwkl5lrlRm/$_57.JPG"
         alt="First slide"/>


<Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src= "https://www.ebaystoredesign.org/images/slide-1.jpg"
                        alt="Second slide"
              
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ebayimg.com/images/g/jfYAAOSw6rhlbyzM/s-l960.webp" 
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src="https://ebayshopdesign.org/images/banner3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div class="container">
    <div class="left-content">
        <h1>Luxury brands for your luxury lovers</h1>
        <p>Discover luxury bags, jewelry, watches and more</p>
    </div>
    <div class="right-content">
        <button>Shop luxry</button>
    </div>
</div>




   

         
    </>
    )
}
    export default Slider;




