import React from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
const SliderTemplate = () => {
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

  const book = useSelector((state) => state.book.book_data);

  return (
    <div className="container mt-5 ">
      <div className="template_slider">
        <div className="row">
          <div className="col-6 d-flex align-items-end">
            <h6>Books</h6>
          </div>
          <div className="col-6">
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                className="d-flex justify-content-end"
              >
                {/* <Tab value="one" label="Item One" />
                <Tab value="two" label="Item Two" />
                <Tab value="three" label="Item Three" /> */}
              </Tabs>
            </Box>
          </div>
        </div>
        <div className="row m-4">
          <div className="col-12 d-none d-lg-block">
            <Slider {...settings}>
              {book.data &&
                book.data.map((item, index) => {
                  return <BookCard book={item} key={index} />
                })}
            </Slider>
          </div>
          <div className="col-12 d-lg-none">
            <ScrollContainer className="scroll-container d-flex flex-row">
            {book.data &&
                book.data.map((item, index) => {
                  return <BookCard book={item} key={index} />
                })}
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTemplate;
