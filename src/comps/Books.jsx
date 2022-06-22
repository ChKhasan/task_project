import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookData } from "../redux/actions/bookAction";
import BookCard from "./BookCard";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import BookCards from "./BookCards";

const Books = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const book = useSelector((state) => state.book.book_data);
  useEffect(() => {
    dispatch(getBookData(page));
  }, []);
  const handleChange = (_, value) => {
    setPage(value);
    dispatch(getBookData(value));

  };
  console.log(book);
  return (
    <div className="row">
      <div className="row">
        <h1>Books</h1>
      </div>
      <div className="row">
        {book.data &&
          book.data.map((item, index) => {
            return (
              <div className="col-xl-4 col-md-6 d-flex d-md-block justify-content-center" key={index}>
                <BookCards
                  book={item}
                  className="d-flex justify-content-between"
                />
              </div>
            );
          })}
      </div>
      <div className="row">
      <Stack spacing={2}>
      <Pagination count={Math.ceil(book.total/6)} page={page} onChange={handleChange} />
    </Stack>
      </div>
    </div>
  );
};

export default Books;
