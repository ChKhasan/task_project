import {  TAKE_BOOK_DATA, TAKE_BOOK_INFO_DATA } from "../constants/action_types";
const intialState = {
  book_data: [],
  info_data: {},
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_BOOK_DATA:
      const dataBook = action.payload.bookData;
      return {
        ...state,
        book_data: dataBook,
      };
      case TAKE_BOOK_INFO_DATA:
      const infoBook = action.payload.bookInfo;
      return {
        ...state,
        info_data: action.payload.bookInfo,
      };
    default:
      return state;
  }
}
