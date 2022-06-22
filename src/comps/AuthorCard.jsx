import React from "react";
import { Link } from "react-router-dom";
import { API_IMG } from "../const/API";
import '../style/authorCard.css'
const AuthorCard = ({item}) => {
  return (
    <div>
      <div className="author_card py-4  px-1">
        <div className="author_card_in">
          <div className="author_card_img">
            <img src={item.imgUrl &&  (item.imgUrl.length > 45 ? item.imgUrl:`${API_IMG}/${item.imgUrl}`)} alt="" />
          </div>
          <div className="author_card_title mt-3 d-flex flex-column align-items-center">
            <h4>{item.fullName}</h4>
            <span>Kitoblari soni: {item.bookCount}</span>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
