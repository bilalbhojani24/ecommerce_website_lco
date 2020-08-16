

import React from "react"
import PropTypes from "prop-types"
import Navbar from './Reuseable/Navbar'
import Footer from './Reuseable/Footer'

import "./bootstrap.min.css"
import "./layout.css"


const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
