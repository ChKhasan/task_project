import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../style/layout.css'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout