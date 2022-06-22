import { API_URL } from '../../const/API';
import { getData } from '../../servers/common';
import { TAKE_AUTHOR_DATA } from '../constants/action_types';

export const getAuthorData = () => {
  return (dispatch) => {
    getData(API_URL + "/author?limit=5&page=1").then((res) => {
        dispatch({
            type: TAKE_AUTHOR_DATA,
            payload: res.data.data
        })
      });
}
}

