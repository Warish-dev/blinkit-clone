import React from 'react'
import styles from '../styles/login.module.css'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.formContainer}>
                    <p>Welcome back!</p>
                    <label>
                        <p>Email</p>
                        <input type="text" placeholder='Enter email' />
                    </label>

                    <label>
                        <p>Password</p>
                        <input type="password" placeholder='Enter password' />
                    </label>

                    <button className={styles.loginButton}>Login</button>
                    

                    <span>Don't have an account? <Link to={'/signup'}>Signup</Link></span>

            </form>

        </div>
    )
}

export default Login