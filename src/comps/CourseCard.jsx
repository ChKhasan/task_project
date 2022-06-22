import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postUserCourseData } from "../redux/actions/courseAction";
import { API_IMG } from "../const/API";
import "../style/courseCard.css"

const CourseCard = ({ bool, course }) => {
  const dispatch = useDispatch();
  const sendId = (courseId) => {
    dispatch(postUserCourseData(courseId));
  };
  return (
    <>
      {" "}
      <div>
        <div className="course_card mt-3 py-4 px-1">
          <div className="course_card_in">
            <div className="row">

            <div className="course_card_title col-6 mt-3 d-flex flex-column align-items-center">
              <h4> {course.name}</h4>
              <p className="course_desc"> {course.description}</p>
            </div>
            <div className="course_card_img col-6">
              <img
                src={course.imgUrl.length > 50 ? course.imgUrl:(course.imgUrl && `${API_IMG}/${course.imgUrl}`)}
                alt=""
              />
            </div>
            </div>
            <div className="course_info d-flex mt-2 justify-content-center">
              {bool ? (
                <Button>{course.createdAt}</Button>
              ) : (<>
            
                <Button>{course.createdAt}</Button>
                <br/>
           
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Card
      sx={{ display: "flex" }}
      className="mt-4 justify-content-between "
      style={{ height: "200px" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {course.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ textOverflow: "ellipsis", height: "20px" }}
          >
            {course.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
        {course.createdAt ? (
          <Button>{course.createdAt}</Button>
        ) : (
          <Button onClick={() => sendId(course._id)}>enroll in a course</Button>
        )}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={course.imgUrl}
        alt="Live from space album cover"
      />
    </Card> */}
    </>
  );
};

export default CourseCard;
