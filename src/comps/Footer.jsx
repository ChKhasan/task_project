import React from "react";
import { useSelector } from "react-redux";
import "../style/footer.css";

const Footer = () => {
  const store = useSelector((state) => state);

  console.log(store);
  return (
    <div className="container-fluid footer">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h1>Just up with us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h3>Category</h3>
            <ul>
              {store.category.category_data.data && store.category.category_data.data.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h3>Courses</h3>
            <ul>
            {store.course.all_course.data && store.course.all_course.data.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="col-3">
            <h3>Authors</h3>
            <ul>
            {store.author.author_data.data && store.author.author_data.data.map((item, index) => {
                return <li key={index}>{item.fullName}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
