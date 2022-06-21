import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postUserCourseData } from "../redux/actions/courseAction";

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  const sendId = (courseId) => {
    dispatch(postUserCourseData(courseId));
    console.log(courseId);
  };
  return (
    <Card
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
    </Card>
  );
};

export default CourseCard;
