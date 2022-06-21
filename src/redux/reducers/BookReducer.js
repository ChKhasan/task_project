import {  TAKE_BOOK_DATA } from "../constants/action_types";
const intialState = {
  book_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_BOOK_DATA:
      const dataBook = action.payload;
      return {
        ...state,
        book_data: dataBook,
      };
    default:
      return state;
  }
}
