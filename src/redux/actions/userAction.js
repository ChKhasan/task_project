import { API_URL } from '../../const/API';
import { getData } from '../../servers/common';
import { TAKE_USER_DATA } from '../constants/action_types';

export const getUserData = () => {
  return (dispatch) => {
    getData(API_URL + "/getProfile").then((res) => {
        console.log(res.data.data);
        dispatch({
            type: TAKE_USER_DATA,
            payload: res.data.data
        })
      });
}
}

