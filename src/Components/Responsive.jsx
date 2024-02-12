import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Responsive() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container">
        <div className="heading">
       <p1 style={{textAlign:"left"}}>Today's Deals – All With Free Shipping</p1>


        </div>
        <Slider {...settings}>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/65UAAOSwjSZj0Kdx/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Arlo VMC4050P-100NAR Pro 4 Spotlight WiFi Camera White -</p>
            <h>$101.00
$269.99</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/k3EAAOSwXT9k1oZ1/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Nikon Z 30 Mirrorless Camera w/ 2 Lens Kit Z DX 16-50mm VR & 50-</p>
            <h>$696.00
$1,199.95</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/npwAAOSwXillwVFx/s-l500.webp" alt="" />
            <div className="card-body">
            <p>DJI Mini 2 SE Camera Drone Bundle - RC , Bag, Extra Battery (DJI-</p>
            <h>$332.00
$499.00</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/RCEAAOSwR0Flr1fJ/s-l500.webp" alt="" />
            <div className="card-body">
            <p>PlayStation 5 Slim Console Marvels Spider-Man 2 Bundle</p>
            <h>$499.99
$559.99</h>
            
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/H6gAAOSwYKZfNtBI/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Bose TV Speaker Home Theater Soundbar, Certified Refurbished</p>
            <h>$138.00
$279.00</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/xL4AAOSwWgRlu-uX/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Pet Stain Eraser™ Duo</p>
            <h>$59.99
$139.99</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/uyIAAOSwffZlnCTq/s-l500.webp" alt="" />
            <div className="card-body">
            <p>400 Thread Count Performance Printed Sheet Set - Threshold</p>
            <h>$15.99
$55.00</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/~KIAAOSwFjllcrKo/s-l500.webp" alt="" />
            <div className="card-body">
          <p>HP 17.3" FHD Notebook AMD Ryzen 5 5500U 8GB RAM 256GB SSD Natural</p>
          <h>$369.99
$599.99</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/rYEAAOSwN9ZkVcf1/s-l500.webp" alt="" />
            <div className="card-body">
             <p>eufy Baby S320 Smart Sock Smart Baby Monitor for Baby 0-18 Months 24</p>
             <h>$69.99
$199.99</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/ZVoAAOSwoV1lQlet/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Samsung Galaxy Watch 5 Pro 45mm R920N - Very Good</p>
            <h>$129.99
$449.99</h>
            </div>
          </div>
          <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/ngcAAOSwy9RhkpBT/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Apple iPhone 12 Pro Max 128GB Unlocked Smartphone - Very Good</p>
            <h>$449.95
$1,099.00</h>
            </div>
            </div>
            <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/ywMAAOSwDLljl75S/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Apple AirPods 3rd Generation Wireless In-Ear</p>
            <h>US $111.99</h>
            </div>
            </div>
            
            <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/L0oAAOSwlDZg-dca/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Citizen Eco-Drive Stiletto Men's Gold-Tone Black Dial Watch 35MM EG6012-</p>
            <h>$151.99
$495.00</h>
            </div>
            </div>
            <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/jw8AAOSw0~Bll55U/s-l500.webp" alt="" />
            <div className="card-body">
            <p>Parfums de Marly Layton by Parfums de Marly, 4.2 oz EDP Spray for Men</p>
            <h>$200.06
$350.00</h>
            </div>
            </div>
            <div className="card">
            <img src="https://i.ebayimg.com/thumbs/images/g/K58AAOSwnrNftL0a/s-l500.webp" alt="" />
            <div className="card-body">
            <p>NAUTICA VOYAGE 3.4 oz EDT Cologne Spray for Men New in Box</p>
            <h>$18.31$59.99</h>
            </div>
            </div>
            <div className="card">
            <img src="https://i.ebayimg.com/images/g/r1wAAOSwLiFh6ImN/s-l225.jpg" alt="" />
            <div className="card-body">
            <p>Apple AirPods 3rd Generation Wireless In-Ear</p>
            <h>US $111.99</h>
            </div>
            </div>
            <div className="card">
            <img src="https://i.ebayimg.com/images/g/060AAOSw4Zlkyxn8/s-l225.jpg" alt="" />
            <div className="card-body">
            <p>PUMA Men's Axelion NXT Running Shoes</p>
            <h>US $36.99</h>
            </div>
          </div>
          
        </Slider>
      </div>
      
    );
  }
  
  export default Responsive;