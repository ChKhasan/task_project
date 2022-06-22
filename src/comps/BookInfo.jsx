import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { API_IMG } from "../const/API";
import { getBookInfoData } from "../redux/actions/bookAction";

const BookInfo = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookInfoData(bookId));
  }, []);
  const bookInfo = useSelector((state) => state.book.info_data);
  console.log(bookInfo);
  return (
    <div className="container mt-5" style={{minHeight: "100vh"}}>
      <div className="row">
        <div className="col-4">
            <img style={{width: "300px"}} src={bookInfo.imgUrl && (bookInfo.imgUrl.length > 50 ? bookInfo.imgUrl:`${API_IMG}/${bookInfo.imgUrl}`)} alt="" />
        </div>
        <div className="col-8 d-flex flex-column">
            <div className="col-12">
                <h1>{bookInfo.name}</h1>
            </div>
            <div className="col-12">
                <p>{bookInfo.description}</p>
            </div>
            <div className="col-12">
                {
                    bookInfo.ebookUrl ? <a href={bookInfo.ebookUrl}>Elektron kitob</a>:""
                }
               
            </div>
        </div>
        </div>
    </div>
  );
};

export default BookInfo;
