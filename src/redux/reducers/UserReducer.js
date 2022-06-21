import {  TAKE_USER_DATA } from "../constants/action_types";
const intialState = {
  user_data: [],
};

export default function (state = intialState, action) {
  switch (action.type) {
    case TAKE_USER_DATA:
      const dataUser = action.payload;
      return {
        ...state,
        user_data: dataUser,
      };
    default:
      return state;
  }
}
