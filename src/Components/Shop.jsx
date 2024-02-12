import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
<img src=" https://ir.ebaystatic.com/cr/v/c01/01_P_Aeng.jpg"/>
<p>Parts & accessories </p>
        </div>
        <div>
          <img src="https://ir.ebaystatic.com/cr/v/c01/01_Trading Cards.jpg "/>
          <p>Trading cards</p>
        </div>
        <div>
          <img src="https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved Luxuryeng.jpg"/>
          <p>Pre-loved luxury

</p>
        </div>
      
      </Slider>
    </div>
  );
}

export default MultipleItems;
