import React from "react";
import Slider from "react-slick";
import { GrNext } from "@react-icons/all-files/gr/GrNext";


const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

  };
  return (
    <div className="container mt-5 pt-5 pb-5 slick_carousel_box" style={{height: "400px"}}>
      <div className="row slick_carousel ">
        <Slider {...settings} >
            <div>
              <img style={{ width: "100%" }} src="Images/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg" alt="" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="Images/MustRead21_ListAssets_templateCoreMerch_1200x600.jpg" alt="" />
            </div>
            <div>
              <img style={{ width: "100%" }} src="Images/programming-language-banner.jpg" alt="" />
            </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselBanner;
