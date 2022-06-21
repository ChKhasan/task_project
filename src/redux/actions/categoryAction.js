import { API_URL } from "../../const/API";
import { getData } from "../../servers/common";
import { TAKE_CATEGORY_DATA } from "../constants/action_types";

export const getCategoryData = () => {
  return (dispatch) => {
    getData(API_URL + "/category?page=1&limit=5").then((res) => {
      console.log(res.data.data);
      dispatch({
        type: TAKE_CATEGORY_DATA,
        payload: res.data.data,
      });
    });
  };
};
