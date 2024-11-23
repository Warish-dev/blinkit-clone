import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom';
import styles from '../../styles/topBar.module.css'

function TopBar() {
    const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile menu toggle

    // Function to toggle navbar visibility
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };  return (
        <>

        <div className={styles.AboutUsnavbar}>
        <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.navToggle} onClick={toggleNav}>
            <span className={isNavOpen ? styles.open : ''}></span>
            <span className={isNavOpen ? styles.open : ''}></span>
            <span className={isNavOpen ? styles.open : ''}></span>
        </div>

        <ul className={`${styles.navul} ${isNavOpen ? styles.navOpen : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/partner">Partner</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </div>
      
    </>
  )
}

export default TopBar
