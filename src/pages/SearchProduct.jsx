import React from 'react'
import styles from '../styles/searchProduct.module.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { FaCartShopping } from "react-icons/fa6";


const SearchProduct = () => {
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.header}>

        <div className={styles.container}>
          <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="Logo" />
          </Link>

          <div className={styles.searchContainer}>
            <input type="text" placeholder='Search product here...' />
          </div>
        </div>

        <button className={styles.cartButton}><FaCartShopping /> My Cart</button>

      </div>
    </div>
  )
}

export default SearchProduct