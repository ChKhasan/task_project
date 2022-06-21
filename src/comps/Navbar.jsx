import React from 'react'
import { Button, Dropdown, Menu } from "antd";
import { StickyNav } from "react-js-stickynav";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Navbar = () => {
    const style = () => {
        return (
          <style jsx>{`
            .nav {
              transition: all 0.1s linear;
              position: fixed;
              z-index: 2000;
              padding: 20px;
              top: 0;
            }
            .scrollNav {
              transition: all 0.5s ease-in;
              z-index: 2000;
              background: #F1FAF4;
              width: 100%;
              border-bottom: 1px solid #dddddd;
            }
            .styl {
              padding-top: 80px;
            }
          `}</style>
        )
      }
      const auth = useAuth()
  return (
    <div className="navbar">
       {style()}
      <StickyNav length='0' className="container">
     
        <div className="row w-100 ">
            <div className="col-9"></div>
          <div className="col-3 d-flex justify-content-center">
           {auth ? <Link to='/allcourses'>Cabinet</Link>:<Link to='/login'>Sign In</Link>} 
    
          </div>
        </div>
      </StickyNav>
     
    </div>
  )
}

export default Navbar
