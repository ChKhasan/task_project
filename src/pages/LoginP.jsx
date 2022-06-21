import React from 'react'
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { postData } from '../servers/common';
import { TOKEN_USER } from '../const/API';

const LoginP = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
      console.log(values);
      postData("/sign-in",values).then((res) => {
           localStorage.setItem(TOKEN_USER,res.data.data.token)
          window.location.href = '/allcourses'
          navigate("/")
      })
    };
  return (
    <div>
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

                <header>My Portfolio</header>
                <header>My Portfolio</header>
                </div>
            </div>
            <div className="col-lg-6 d-flex  loginRight d-flex justify-content-center align-items-center">
              <div className="col-6 ">
<div className="title_login">
  <span>Log In</span>
</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                className="text_input"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="text_input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
           

            <Form.Item className="d-flex  justify-content-around">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button form_btn_full"
              >
                Login
              </Button>
            <Link className="regis_link"to="/regis">Registration</Link>
            </Form.Item>
          </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default LoginP