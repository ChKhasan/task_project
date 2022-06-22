import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { API_URL, TOKEN_USER } from "../const/API";
import axios from "axios";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const RegistrationP = () => {
  const onFinish = (values) => {
    axios.post(API_URL + "/sign-up", values).then((res) => {
      localStorage.setItem(TOKEN_USER, res.data.data.token);
      console.log(res);
      window.location.href = "/allcourses";
    });
    console.log(values);
  };
  return (
    <div className="container-fluid backgroud_fluid">
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-12">
            <div className="row login_block">
              <div className="col-lg-6 d-none d-lg-flex login_images loginLeft">
                <h1>Welcome to</h1>
                <div className="header_title">
                <Link to="/">Westco</Link>
                <Link to="/">Westco</Link>

                </div>
              </div>
              <div className="col-lg-6 d-flex loginRight d-flex justify-content-center align-items-center">
                <div className="col-8 ">
                  <div className="title_login">
                    <span>Registration</span>
                  </div>
                  <Form
                    {...layout}
                    layout="vertical"
                    name="nest-messages"
                    onFinish={onFinish}
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 24,
                    }}
                    validateMessages={validateMessages}
                  >
                    <Form.Item
                      className="d-flex justify-content-center"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input className="text_input" placeholder="Full Name" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input
                        type="password"
                        className="text_input"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="form_btn_full"
                      >
                        CREATE ACCOUNT
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationP;
