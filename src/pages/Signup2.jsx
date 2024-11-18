import React from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";
import resturant from '../assets/logo3.png'




export default function Signup() {
  return (

  <div className={styles.main}>
      <div className={styles.main2}>
      {/* <img  src={logo} alt=""/>   */}


		 <div className={`${styles.wrapped} ${styles.Signup}`}>
      <div className={styles.illustration}>
      {/* <img src={img} /> */}

      </div>
      <div className={styles.form2}>
        <div className={styles.heading2}>CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input className={styles.input} type="text" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label  htmlFor="password">Password</label>
            <input className={styles.input}
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/Login2"> Login </Link>
        </p>
      </div>
      </div>
    </div>
    <div className={styles.main3}>   
    <img src={resturant} alt="" />
  
    </div>

    </div>

      
  );
}
