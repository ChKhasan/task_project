import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AllCourses from "../comps/AllCourses";
import Books from "../comps/Books";
import Layout from "../comps/Layout";
import ScanAuth from "../comps/ScanAuth";
import ScanAuthUser from "../comps/ScanAuthUser";
import UserCategory from "../comps/UserCategory";
import UserCourse from "../comps/UserCourse";
import HomePage from "./HomePage";
import LoginP from "./LoginP";
import RegistrationP from "./RegistrationP";
import UserCabinet from "./UserCabinet";

const index = () => {
  return (
    <div className="mt-5">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<ScanAuthUser />}>
          <Route
            path="/"
            element={
              <UserCabinet>
                <Outlet />
              </UserCabinet>
            }
          >
            <Route path="allcourses" element={<AllCourses />} />
            <Route path="mycourses" element={<UserCourse />} />
            <Route path="book" element={<Books />} />
            <Route path="category" element={<UserCategory />} />
          </Route>
        </Route>
        <Route path="/" element={<ScanAuth />}>
          <Route path="/login" element={<LoginP />} />
          <Route path="/regis" element={<RegistrationP />} />
        </Route>
      </Routes>
    </div>
  );
};

export default index;
