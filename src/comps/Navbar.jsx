import React, { useEffect } from "react";
import { Button, Dropdown, Menu } from "antd";
import { StickyNav } from "react-js-stickynav";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { UserOutlined } from "@ant-design/icons";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { getAuthorData } from "../redux/actions/authorAction";
import { getBookData } from "../redux/actions/bookAction";
import { getCategoryData } from "../redux/actions/categoryAction";
import {
  getCourseData,
  getUserCourseData,
} from "../redux/actions/courseAction";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from '@mui/icons-material/Category';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawer_link">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/categoryp">Janrlar</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <Link to="/authorp">Mualliflar</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CollectionsBookmarkIcon />
            </ListItemIcon>
            <Link to="/coursep">Kurslar</Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          position: fixed;
          z-index: 20;
          padding: 20px;
          background: #f1faf4;

          top: 0;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 20;
          background: #f1faf4;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    );
  };
  const auth = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseData());
    dispatch(getUserCourseData());
    dispatch(getCategoryData());
    dispatch(getAuthorData());
    dispatch(getBookData(1));
  }, []);
  return (
    <div className="navbar">
      {style()}
      <StickyNav length="0" className="container">
        <div className="row w-100 ">
          <div className="col-9 col-md-3 d-flex align-items-center ">
            <div className=" d-md-none" style={{ marginRight: "20px" }}>
              <React.Fragment key={"left"}>
                <MenuIcon onClick={toggleDrawer("left", true)} />

                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </React.Fragment>
            </div>
            <Link to="/">
              <FaCanadianMapleLeaf
                style={{ fontSize: "40px", color: "#24AA49" }}
              />
            </Link>
          </div>
          <div className="col-6 d-none d-md-flex justify-content-end">
            <ul>
              <li>
                <Link to="/categoryp">Janrlar</Link>
              </li>
              <li>
                <Link to="/authorp">Mualliflar</Link>
              </li>
              <li>
                <Link to="/coursep">Kurslar</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-center">
            {auth ? (
              <Link to="/allcourses">
                <UserOutlined style={{ fontSize: "20px", color: "grey" }} />
              </Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </div>
        </div>
      </StickyNav>
    </div>
  );
};

export default Navbar;
