import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { getData } from "../servers/common";
import { API_URL } from "../const/API";
import { Button, Form, Input } from "antd";
import AuthorCard from "../comps/AuthorCard";
import BookCards from "../comps/BookCards";
import { getBookData } from "../redux/actions/bookAction";
const CategoryP = () => {
  const [select, setSelect] = useState([]);
  const [selectId, setSelectId] = useState(true);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState(false);
  const store = useSelector((state) => state);

  const selectCat = (id, sel) => {
    setSearch(false)

    setSelectId(sel);
    sel
      ? getData(API_URL + `/category/${id}`).then((res) => {
          setSelect(res.data.data);
          console.log(res.data.data);
        })
      : setSelect([id]);
  };
  useEffect(() => {
    getData(API_URL + `/book?page=1&limit=49`).then((res) => {
      setBooks(res.data.data.data);
    });
  }, []);
  const onFinish = (values) => {
    setSearch(true)
    setSelect(books.filter(item => item.name.includes(values.name)))
    
    console.log(books.filter(item => item.name.includes(values.name)));
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-fluid bac_color" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-5">
            <Accordion sx={{ background: "#F1FAF4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setSelectId(true)}
              >
                <Typography>Janrlar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {store.category.category_data.data &&
                  store.category.category_data.data.map((item, index) => {
                    return (
                      <Typography
                        style={{ cursor: "pointer" }}
                        onClick={() => selectCat(item._id, true)}
                        key={index}
                      >
                        {item.name}
                      </Typography>
                    );
                  })}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ background: "#F1FAF4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                onClick={() => setSelectId(false)}
              >
                <Typography>Mualliflar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {store.author.author_data.data &&
                  store.author.author_data.data.map((item, index) => {
                    return (
                      <Typography
                        style={{ cursor: "pointer" }}
                        onClick={() => selectCat(item, false)}
                        key={index}
                      >
                        {item.fullName}
                      </Typography>
                    );
                  })}
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-8 px-2 mt-5 ">
            <div className="row">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="row"
              >
                <div className="col-9">
                  <Form.Item name="name" className="search">
                    <Input className="w-100" />
                  </Form.Item>
                </div>
                <div className="col-3">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="search_btn"
                    >
                      Search
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
            <div className="row">
              {search ? select.map((item, index) => {
                    return (
                      <div className="col-xl-4 col-md-6">
                       <BookCards book={item} key={index} />
                      </div>
                    );
                  }):selectId
                ? select.books &&
                  select.books.map((item, index) => {
                    return (
                      <div className="col-xl-4 col-md-6">
                        <BookCards book={item} key={index} />
                      </div>
                    );
                  })
                : select.length == 1 &&
                  select.map((item, index) => {
                    return (
                      <div className="col-xl-4 col-md-6">
                        <AuthorCard item={item} key={index} />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryP;
