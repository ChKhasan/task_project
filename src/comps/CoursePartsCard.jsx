import { Button } from "@mui/material";
import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API_IMG } from "../const/API";
import {
  postUserCourseData,
} from "../redux/actions/courseAction";
import CourseCard from "./CourseCard";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const CoursePartsCard = ({ course }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();
  const sendId = (courseId) => {
    dispatch(postUserCourseData(courseId));
  };
  const auth = useAuth();
  console.log(course);
  return (
    <>
      <div>
        <Modal
          title="Courses"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
          footer={[]}
        >
          <div className="row">
            {course.courses &&
              course.courses.map((item, index) => {
                return (
                  <div className="col-xl-4 col-md-6" key={index}>
                    <CourseCard bool={false} course={item} />
                  </div>
                );
              })}
          </div>
        </Modal>
        <div className="course_card mt-3 py-4 px-3">
          <div className="course_card_in">
            <div className="row">
              <div className="course_card_title col-6 mt-3 d-flex flex-column align-items-center">
                <h4> {course.name}</h4>
                <p className="course_desc"> {course.description}</p>
              </div>
              <div className="course_card_img col-6">
                <img
                  src={course.imgUrl &&
                   ( course.imgUrl.length > 50
                      ? course.imgUrl
                      : `${API_IMG}/${course.imgUrl}`)
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="course_info d-flex mt-2 justify-content-center">
              <Button onClick={() => showModal()}>show courses</Button>
              {auth ? (
                <Button onClick={() => sendId(course._id)}>
                  Kursga yozilish
                </Button>
              ) : (
                <Button >
               <Link to="/login">Kursga yozilish</Link>
              </Button>
              )}
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePartsCard;
