import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { DarkModeProvider } from '../Sheared/DarkModeContext';
import '../../App.css'


const Layout = ({ children }) => {
  return (
    <DarkModeProvider>
    <div>
      <Header />

    
      <div style={{maxWidth: 1440, margin: "0 auto"}}>
        {children}
      </div>
      <Footer/>
    </div>
    </DarkModeProvider>
  )
}

export default Layout;