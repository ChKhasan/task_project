import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourseData } from "../redux/actions/courseAction";
import CourseCard from "./CourseCard";

const UserCourse = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.user_course);
  useEffect(() => {
    dispatch(getUserCourseData());
  }, []);
  return (
    <div className="row">
      <div className="row">
        <h1>My Courses</h1>
      </div>
      <div className="row">
        {course.length > 0 &&
          course.map((item, index) => {
            return (
              <div className="col-xl-4 col-md-6" key={index}>
                <CourseCard
                  course={item}
                  className="d-flex justify-content-between"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserCourse;
