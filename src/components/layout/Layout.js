import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import SideBar from "./SideBar"

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <Header />

      {/* <Sidebar /> */}

      {children}

      <Footer />
    </>
  )
}

export default Layout
