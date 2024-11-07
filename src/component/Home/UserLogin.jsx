import React, { useState } from 'react'
import styles from '../../styles/userLogin.module.css'
import logo from '../../assets/logo.png'
import { BiLeftArrowAlt } from 'react-icons/bi'


const UserLogin = () => {

    return (
        <div className={styles.wraper}>
            <div className={styles.container}>


                <div className={styles.imgContainer}>
                    <div onClick={() => { }} className={styles.backBtnContainer}>
                        <BiLeftArrowAlt className={styles.backBtn} />
                    </div>
                    <img src={logo} />
                </div>
                <h3>India's last minute app</h3>
                <p>Log in or Sign up</p>

                <div>
                    <input type="text" />
                </div>

                <button>Continue</button>

            </div>
        </div >
    )
}

export default UserLogin