import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthorCard from "../comps/AuthorCard";
import BookCards from "../comps/BookCards";
import CarouselBanner from "../comps/CarouselBanner";
import ForUs from "../comps/ForUs";
import SliderTemplate from "../comps/SliderTemplate";

const HomePage = () => {
  const book = useSelector((state) => state.book.book_data);
  const author = useSelector((state) => state.author.author_data);

  return (
    <div className="container-fluid bac_color">
      <CarouselBanner />
      <SliderTemplate name="Books">
        {" "}
        {book.data &&
          book.data.map((item, index) => {
            return <BookCards book={item} key={index} />;
          })}
      </SliderTemplate>
      <ForUs />
      <SliderTemplate name="Authors">
        {" "}
        {author.data &&
          author.data.map((item, index) => {
            return <AuthorCard item={item} key={index} />;
          })}
      </SliderTemplate>
    </div>
  );
};

export default HomePage;
