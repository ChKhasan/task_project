import {
  TAKE_COURSE_DATA,
  TAKE_COURSE_PARTS_DATA,
  TAKE_USER_COURSE_DATA,
} from "../constants/action_types";
const intialState = {
  all_course: [],
  user_course: [],
  course_parts: []
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_COURSE_DATA:
      const allCourse = action.payload.allCourses;
      const userCourse = action.payload.userCourse;
      const partsCourse = action.payload.partsCourse;
      return {
        ...state,
        all_course: allCourse,
      };
    case TAKE_USER_COURSE_DATA:
      return {
        ...state,
        user_course: action.payload.userCourse,
      };
      case TAKE_COURSE_PARTS_DATA:
        return {
          ...state,
          course_parts: action.payload.partsCourse,
        };
    default:
      return state;
  }
}
