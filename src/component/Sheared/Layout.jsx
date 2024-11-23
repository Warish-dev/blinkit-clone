import React from 'react'
import Header from './Header'
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{maxWidth: 1440, margin: "0 auto"}}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;