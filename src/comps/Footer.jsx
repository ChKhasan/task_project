import React from "react";
import { useSelector } from "react-redux";
import "../style/footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  const store = useSelector((state) => state);

  return (
    <div className="container-fluid footer mt-5">
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h1>Just up with us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 mt-4 d-flex justify-content-between flex-wrap">
            <div className="col-12 d-flex justify-content-between">

<InstagramIcon  color="success" fontSize="large"/>
<TelegramIcon  color="success" fontSize="large"/>
<FacebookIcon  color="success" fontSize="large"/>
<YouTubeIcon  color="success" fontSize="large"/>
<TwitterIcon  color="success" fontSize="large"/>
            </div>
            <div className="col-12">
              <h5>Biz bilan bog'lanish !!! </h5>
            </div>
            <div className="col-12">
              <h3>+ 998 99 730-14-99</h3>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4 ">
            <h3>Category</h3>
            <ul>
              {store.category.category_data.data && store.category.category_data.data.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4 ">
            <h3>Courses</h3>
            <ul>
            {store.course.all_course.data && store.course.all_course.data.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="col-xl-3 col-lg-6 mt-4 ">
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
