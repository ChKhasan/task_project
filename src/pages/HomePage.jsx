import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthorCard from "../comps/AuthorCard";
import BookCards from "../comps/BookCards";
import CarouselBanner from "../comps/CarouselBanner";
import ForUs from "../comps/ForUs";
import SliderTemplate from "../comps/SliderTemplate";
import CourseCard from "../comps/CourseCard";
import CoursePartsCard from "../comps/CoursePartsCard";

const HomePage = () => {
  const book = useSelector((state) => state.book.book_data);
  const author = useSelector((state) => state.author.author_data);
  const course = useSelector((state) => state.course.course_parts);

  return (
    <div className="container-fluid bac_color">
      <CarouselBanner />
      <SliderTemplate name="Books">
        {" "}
        {book.data &&
          book.data.map((item, index) => {
            return <BookCards book={item} key={index} />;
          })}
      </SliderTemplate>
      <ForUs />
      <SliderTemplate name="Authors">
        {" "}
        {author.data &&
          author.data.map((item, index) => {
            return <AuthorCard item={item} key={index} />;
          })}
      </SliderTemplate>
      <SliderTemplate name="Course">
        {" "}
        {course.data &&
          course.data.map((item, index) => {
            return (
              <div className="col-xl-4 col-md- " key={index}>
                <CoursePartsCard
                  course={item}
                  className="d-flex justify-content-between"
                />
              </div>
            );
          })}
      </SliderTemplate>
    </div>
  );
};

export default HomePage;
