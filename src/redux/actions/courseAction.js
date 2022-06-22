import { API_URL } from "../../const/API";
import { getData, postData } from "../../servers/common";
import {
  TAKE_COURSE_DATA,
  TAKE_COURSE_PARTS_DATA,
  TAKE_USER_COURSE_DATA,
} from "../constants/action_types";

export const getCourseData = () => {
  return (dispatch) => {
    getData(API_URL + "/course?limit=5&page=1").then((res) => {
      console.log(res.data.data);
      dispatch({
        type: TAKE_COURSE_DATA,
        payload: { allCourses: res.data.data },
      });
    });
  };
};

export const postUserCourseData = (course) => {
  return (dispatch) => {
    postData(API_URL + "/coursesUser", {
      courseId: course,
    }).then((res) => {
      dispatch(getCourseData());
    });
  };
};

export const getUserCourseData = () => {
  return (dispatch) => {
    getData(API_URL + "/coursesUser").then((res) => {
      dispatch({
        type: TAKE_USER_COURSE_DATA,
        payload: { userCourse: res.data.data },
      });
    });
  };
};
export const getCoursePartsData = (page) => {
  return (dispatch) => {
    getData(API_URL + `/course/courseParts?page=${page}&limit=5`).then((res) => {
      dispatch({
        type: TAKE_COURSE_PARTS_DATA,
        payload: { partsCourse: res.data.data },
      });
    });
  };
};