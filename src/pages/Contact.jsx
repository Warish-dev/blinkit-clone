import React from 'react'
// import logo from '../assets/images/conlogo.jpeg'
// import styles from '../../styles/contact.module.css'
// import Layout from '../component/Sheared/Layout'

import styles from '../styles/contact.module.css'
import logo from '../assets/images/conlogo2.jpeg'
import Layout from '../component/Sheared/Layout'
function Contact() {
  return (
    <Layout>
    <div>
        <h1 className={styles.heading}>CONTACT US</h1>
        <hr className={styles.line}/>
    <div className={styles.OuterBox}>
       <div className={styles.imgBox}>
        <img src={logo} />
       </div>
       <div className={styles.contactBox}>
        <input type="text" className={styles.input} placeholder='Name' />
        <input type="text" className={styles.input}  placeholder='Email'/>
        <input type="number" className={styles.input}  placeholder='Contact Number' />
        <textarea  className={styles.text}  placeholder='Message' />
        <button type='submit' className={styles.button}>SEND</button>
       </div>
    </div>
    </div>
        </Layout>

  )
}

export default Contact