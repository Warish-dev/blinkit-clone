import React from 'react'
import styles from '../styles/signup.module.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formContainer}>
        <p>Register</p>

        {/* first name, last name  */}
        <div className={styles.nameConatiner}>
          <label>
            <p>First name</p>
            <input type="text" placeholder='Enter first name' />
          </label>

          <label>
            <p>Last name</p>
            <input type="text" placeholder='Enter last name' />
          </label>
        </div>

        {/* phone  */}
        <label>
          <p>Phone</p>
          <input type="text" placeholder='Enter phone number' />
        </label>

        {/* email  */}
        <label>
          <p>Email</p>
          <input type="text" placeholder='Enter email' />
        </label>


        {/* password container  */}
        <div className={styles.passConatiner}>
          <label>
            <p>Create password</p>
            <input type="password" placeholder='Enter password' />
          </label>

          <label>
            <p>Confirm password</p>
            <input type="password" placeholder='Enter password' />
          </label>
        </div>


        <button className={styles.signUpButton}>Sign Up</button>
        <span>Already a User? <Link to={'/login'}>login</Link></span>
      </form>

    </div>
  )
}

export default SignUp