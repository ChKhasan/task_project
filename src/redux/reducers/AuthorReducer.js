import {  TAKE_AUTHOR_DATA } from "../constants/action_types";
const intialState = {
  author_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_AUTHOR_DATA:
      const dataAuthor = action.payload;
      return {
        ...state,
        author_data: dataAuthor,
      };
    default:
      return state;
  }
}
