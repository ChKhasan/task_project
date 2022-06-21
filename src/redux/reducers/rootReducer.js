import { combineReducers } from "redux";
import AuthorReducer from "./AuthorReducer";
import BookReducer from "./BookReducer";
import CategoryReducer from "./CategoryReducer";
import CourseReducer from "./CourseReducer";
import UserReducer from "./UserReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  book: BookReducer,
  category: CategoryReducer,
  course: CourseReducer,
  author: AuthorReducer,
});
