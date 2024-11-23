import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import image from'../assets/images/logo.png'

// import { AiOutlineEyeInvisible } from 'react-icons/ai';
// import resturant from '../assets/logo3.png'

const preventRefresh = (e) => {
  e.preventDefault();
};

export default function Login() {
  // State to track selected button (Admin or Warehouse)
  const [selectedRole, setSelectedRole] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Hook to track window size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={`${styles.wrapped} ${styles.signIn}`}>
        <div className={styles.form2}>
          {/* Conditional rendering of the logo or heading */}
          {isMobile ? (
            <img src={image} alt="Logo" className={styles.logo} />
          ) : (
            <div className={styles.heading2}>LOGIN</div>
          )}

          <div className={styles.btnbox}>
            {/* Admin button */}
            <p 
              className={`${styles.btn2} ${selectedRole === 'Admin' ? styles.selected : styles.unselected}`} 
              onClick={() => handleRoleSelect('Admin')}
            >
              Admin
            </p>
            {/* Warehouse button */}
            <p 
              className={`${styles.btn2} ${selectedRole === 'Warehouse' ? styles.selected : styles.unselected}`} 
              onClick={() => handleRoleSelect('Warehouse')}
            >
              Warehouse
            </p>
          </div>

          <form>
            <div className={styles.input_container}>
              <label htmlFor="name">
                <IoMdMail />
              </label>
              <input 
                className={styles.input} 
                type="email" 
                required  
                id="name" 
                placeholder="Enter your E-Mail" 
              />
            </div>
            <div>
              <label htmlFor="e-mail">
                <RiLockPasswordFill />
              </label>
              <input 
                className={styles.input} 
                type="Password" 
                required  
                id="e-mail" 
                placeholder="Enter your password" 
              />
            </div>
            <button className={styles.btn} type="submit" onClick={preventRefresh}>
              Submit
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup2">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
