import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookData } from "../redux/actions/bookAction";
import { getCoursePartsData } from "../redux/actions/courseAction";
import AuthorCard from "./AuthorCard";
import BookCards from "./BookCards";
import CourseCard from "./CourseCard";
import CoursePartsCard from "./CoursePartsCard";

const ForUs = () => {
  const course = useSelector((state) => state.course.course_parts.data);
  const author = useSelector((state) => state.author.author_data.data);
  const book = useSelector((state) => state.book.book_data.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookData(1));
    dispatch(getCoursePartsData(1));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Biz haqimizda</h1>
      </div>
      <div className="row for_us">
        <div className="col-12  px-4 py-4"></div>
        <div className="col-12 row">
          <div className="col-xl-3 col-lg-6 mt-4 position-relative">
            <img style={{ width: "100%" }} src="/Images/2560.webp" alt="" />
          </div>
          <div className="col-xl-6 col-lg-6 mt-4">
            <span>
              Siz uzingizga kerak bo'lgan kurs va kitoblarni topishingiz ,
              kitoblardan elektron foydalanish va kurslarga yozilish
              imkoniyatlari bor
            </span>
          </div>
          <div className="col-xl-3 mt-4 position-relative">
            <img
              style={{ width: "100%" }}
              src="/Images/70s-authors.jpg"
              alt=""
            />
          </div>
          <div className="col-12 mt-4 position-relative">
            <img
              style={{ width: "100%" }}
              src="/Images/depositphotos_155833828-stock-photo-set-of-colored-balls-with.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForUs;
