import React, { useEffect, useState } from "react";
import { Dropdown, Layout, Menu, Switch, Table } from "antd";
import {
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import "../style/adminPanel.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "../style/adminPanel.css";
import { TOKEN_USER } from "../const/API";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/actions/userAction";
import { getAuthorData } from "../redux/actions/authorAction";
import { getCourseData } from "../redux/actions/courseAction";
import { getBookData } from "../redux/actions/bookAction";
import { getCategoryData } from "../redux/actions/categoryAction";

const logOut = () => {
  localStorage.removeItem(TOKEN_USER);
  window.location.href = "/";
};

const menu = (
  <Menu
    items={[
      {
        label: <Link to="/">Home</Link>,
      },
      {
        label: <Button onClick={logOut}>Log out</Button>,
      },
    ]}
  />
);

const UserCabinet = ({ children }) => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const user = useSelector(state => state)
  console.log(user);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <div className="background"></div>

      <Layout>
        <div
          style={{
            width: collapsed ? "80px" : "200px",
            transition: "color 0.3s",
          }}
        ></div>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
            theme: "light",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{ background: "white", height: "100px" }}
            defaultSelectedKeys={["1"]}
            className="d-flex justify-content-center align-items-center flex-column"
          ></Menu>
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              <Link to="/allcourses">All Courses</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/mycourses">My Courses</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to="/book">Books</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
              <Link to="/category">Category</Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background " style={{ padding: 0 }}>
            <div className="d-flex layout-header justify-content-between align-items-center  ">
              <Button onClick={toggle}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>

              <Dropdown className="werwerert" overlay={menu} placement="bottom">
                <Button>
                  {" "}
                  <Stack direction="row" spacing={2}>
                    <Dropdown
                      overlay={menu}
                      placement="bottom"
                      arrow={{ pointAtCenter: true }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="./Images/IMG_20211115_234554.jpg"
                      />
                    </Dropdown>
                  </Stack>
                </Button>
              </Dropdown>
            </div>
          </Header>
          <div style={{ padding: "20px" }}>{children}</div>
          {/* <Users  /> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default UserCabinet;
