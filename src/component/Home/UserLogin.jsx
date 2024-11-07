import React, { useState } from 'react'
import styles from '../../styles/userLogin.module.css'
import logo from '../../assets/logo.png'
import { BiLeftArrowAlt } from 'react-icons/bi'


const UserLogin = ({ setIsLogin }) => {

    return (
        <div className={styles.wraper}>
            <div className={styles.container}>


                <div className={styles.topContainer}>
                    <div onClick={() => { setIsLogin(false) }} className={styles.backBtnContainer}>
                        <BiLeftArrowAlt className={styles.backBtn} />
                    </div>
                    <img src={logo} />
                </div>

                <h3>India's last minute app</h3>
                <p>Log in or Sign up</p>

                <div className={styles.inputContainer}>
                    <input type="text" placeholder='Enter mobile number'/>
                </div>

                <button className={styles.actionButton}>Continue</button>

            </div>
        </div >
    )
}

export default UserLogin