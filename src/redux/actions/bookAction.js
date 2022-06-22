import { API_URL } from "../../const/API";
import { getData } from "../../servers/common";
import { TAKE_BOOK_DATA, TAKE_BOOK_INFO_DATA } from "../constants/action_types";

export const getBookData = (page) => {
  return (dispatch) => {
    getData(API_URL + `/book?page=${page}&limit=6`).then((res) => {
      console.log(res.data.data);
      dispatch({
        type: TAKE_BOOK_DATA,
        payload: { bookData: res.data.data },
      });
    });
  };
};
export const getBookInfoData = (page) => {
  return (dispatch) => {
    getData(API_URL + `/book/${page}`).then((res) => {
      console.log(res.data.data);
      dispatch({
        type: TAKE_BOOK_INFO_DATA,
        payload: { bookInfo: res.data.data },
      });
    });
  };
};
