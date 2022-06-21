import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryData } from "../redux/actions/categoryAction";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BookCard from "./BookCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const UserCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category_data);
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="row">
      <div className="row">
        <h1>Category</h1>
      </div>
      <div className="row">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {category.data && category.data.map((item, index) => {
                return (
                  <Tab key={index} label={item.name} {...a11yProps(index)} />
                );
              })}
            </Tabs>
          </Box>
          {category.data && category.data.map((item, index) => {
            return (
              <TabPanel value={value} index={index} >
              <div className="row">
              {item.books.map((book, bookIndex) => {
                  return (
                    <div className="col-xl-4 col-md-6  d-md-block justify-content-center">
                      <BookCard book={book} key={bookIndex} />
                    </div>
                  );
                })}
                </div> 
              </TabPanel>
            );
          })}
        </Box>
        {/* {course.length > 0 &&
          course.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <CourseCard
                  course={item}
                  className="d-flex justify-content-between"
                />
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default UserCategory;
