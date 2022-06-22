import React from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import BookCards from "./BookCards";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const SliderTemplate = ({ children ,name}) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };


  return (
    <div className="container mt-5 ">
      <div className="template_slider">
        <div className="row">
          <div className="col-6 d-flex align-items-end">
            <h6 style={{fontSize: "2rem"}}>{name}</h6>
          </div>
          <div className="col-6 d-flex align-items-end justify-content-end">
            <Link to="/" className="show_all">Barchasini ko'rish <NavigateNextIcon /></Link>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-12 d-none d-lg-block">
            <Slider {...settings}>{children}</Slider>
          </div>
          <div className="col-12 d-lg-none">
            <ScrollContainer className="scroll-container d-flex flex-row">
              {children}
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTemplate;
