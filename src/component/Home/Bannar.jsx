import React from 'react'
import styles from '../../styles/bannar.module.css'
import bannar from '../../assets/images/bannar.png'
import {Link} from 'react-router-dom'

const Bannar= ()=> {
  return (
    <div className={styles.wrapper}>
    <Link to={'category/9'} className={styles.bannar}>
    <img src={bannar} alt="BannarImage" /></Link>
      
    </div>
  )
}

export default Bannar



