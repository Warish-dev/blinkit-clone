import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import image from '../assets/login.jpeg';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { callAPI } from '../services/callAPIFunction';
import { adminEndPoints, warehouseEndPoints } from '../services/apiEndPoints';
import toast from 'react-hot-toast';

const { VITE_API_BASE_URL } = import.meta.env;



export default function Login() {

  const [selectedRole, setSelectedRole] = useState('Admin');
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // Handle role selection
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

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password
      }

      if (selectedRole === 'Admin'){
        const response = await callAPI('post', `${VITE_API_BASE_URL}${adminEndPoints.login}`, data)
        if(response.status == 200){
          localStorage.setItem("user", JSON.stringify(response?.data?.admin));
          toast.success('Login Succesful', {
            duration: 1500
          });
          navigate('/admin/dashboard');
        }

      }else{
        const response = await callAPI('post', `${VITE_API_BASE_URL}${warehouseEndPoints.warehouseLogin}`, data);
        console.log(response)
        if (response.status == 200){
          localStorage.setItem("user", JSON.stringify(response?.data?.user));
          toast.success('Login Succesfull', {
            duration: 1500
          });
          navigate('/warehouse/dashboard');
        }
      }
      
    } catch (error) {
      console.log(error)
      console.log(error.message);
    }
  }


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
              className={`${styles.btn2} ${
                selectedRole === 'Admin' ? styles.selected : styles.unselected
              }`}
              onClick={() => handleRoleSelect('Admin')}
            >
              Admin
            </p>
            {/* Warehouse button */}
            <p
              className={`${styles.btn2} ${
                selectedRole === 'Warehouse' ? styles.selected : styles.unselected
              }`}
              onClick={() => handleRoleSelect('Warehouse')}
            >
              Warehouse
            </p>
          </div>

          <form onSubmit={login}>
            <div className={styles.input_container}><IoMdMail className={styles.logo1}/>

              {/* <label className={styles.lbl} htmlFor="email">
              </label> */}
               <input
                className={styles.input1}
                type="email"
                id="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
           </div>
            <div className={styles.input_container}><RiLockPasswordFill className={styles.logo}/>

              {/* <label className={styles.lbl} htmlFor="password">
              </label> */}
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className={styles.btn} type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

