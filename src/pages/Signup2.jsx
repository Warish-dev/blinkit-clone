import React from "react";
import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

import { FaUser } from "react-icons/fa";

// import resturant from '../assets/logo3.png'




export default function Signup() {
  return (

  <div className={styles.main}>


		 <div className={`${styles.wrapped} ${styles.Signup}`}>
      <div className={styles.illustration}>

      </div>
      <div className={styles.form2}>
        <div className={styles.heading2}>CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name"><FaUser /></label>
            <input className={styles.input} type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name"><IoMdMail />
            </label>
            <input className={styles.input} type="email" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label  htmlFor="password"><RiLockPasswordFill />
            </label>
            <input className={styles.input}
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button className={styles.btn} type="submit">Submit</button>
          {/* <h2 align="center" class="or">
            OR
          </h2> */}
        </form>
        <p className="forgot">
          Have an account ? <Link to="/Login2"> Login </Link>
        </p>
      </div>
      </div>
    </div>
    


      
  );
}
