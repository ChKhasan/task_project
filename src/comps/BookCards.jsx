import React from "react";
import { Link } from "react-router-dom";
import { API_IMG } from "../const/API";
import '../style/bookCard.css'
const BookCards = ({book}) => {
  return (
    <div>
      <div className="book_card py-4 px-1 mb-4">
        <div className="book_card_in">
          <div className="book_card_img">
            <img src={book.imgUrl.length > 50 ? book.imgUrl:book.imgUrl && `${API_IMG}/${book.imgUrl}`} alt="" />
          </div>
          <div className="book_card_title mt-3 d-flex flex-column align-items-center">
            <h4>{book.name}</h4>
            <span>{book.author ? book.author.fullName:"..."}</span>
          </div>
          <div className="book_info d-flex mt-2 justify-content-center">
            <Link to={`/bookinfo/${book._id}`} >INFO</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCards;
