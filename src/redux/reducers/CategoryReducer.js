import {  TAKE_CATEGORY_DATA } from "../constants/action_types";
const intialState = {
  category_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_CATEGORY_DATA:
      const dataCategory = action.payload;
      return {
        ...state,
        category_data: dataCategory,
      };
    default:
      return state;
  }
}
