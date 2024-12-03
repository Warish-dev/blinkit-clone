import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Importing axios
// import react,{Route,Routes}
// import { Route, Routes } from 'react-router-dom';

import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

import OtpInput from 'react-otp-input';
import { callAPI } from '../../services/callAPIFunction';
import { otpEndPoints } from '../../services/apiEndPoints';
import FullScreenLoader from './FullScreenLoader.jsx';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import { error } from 'console';
const { VITE_API_BASE_URL } = import.meta.env;

const UserLogin = ({ setIsLogin }) => {

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to control loader visibility


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user');
    if (isLoggedIn) {
      setIsLogin(false);
    }
  }, []);
  
  
  
  const handleLoginLogout = () => {
    if (isLoggedIn) {
        // Handle logout logic here (e.g., clearing auth data, tokens, etc.)
        setIsLoggedIn(false);
    } else {
        // Handle login logic here
        setIsLoggedIn(true);
    }
};


  const handleContinue = async () => {
    if (phoneNumber.length === 10 && /^[0-9]{10}$/.test(phoneNumber)) {
      setLoading(true);
 
      const data = {
        phone : phoneNumber
      }
      
      const response = await callAPI('post', `${VITE_API_BASE_URL}${otpEndPoints.sendOtpOnWhatsapp}`, data);

      if(response.status == 200){
        const data ={phone:phoneNumber}
        sessionStorage.setItem('otp', response.data.otp);
        setShowOtpSection(true);
        setErrorMessage('');
        setLoading(false);
      }

    } else {
      setErrorMessage('Please enter a correct mobile number');
      setLoading(false);
    }
  };

  const handleConfirmOtp = () => {

    console.log("object")
    const storedOtp = sessionStorage.getItem('otp') // Retrieve OTP from sessionStorage
    
    if(storedOtp === otp){
      toast.success("Login Successful")
      setErrorMessage('')
      setIsLogin(false); // Close login page after successful OTP
    } else {
      // setErrorMessage('Incorrect OTP entered. Please try again.');
      toast.error("incorrect OTP")
    }

  };

  const handleGoBack = () => {
    if (showOtpSection) {
      setShowOtpSection(false);
      setOtp('');
    } else {
      setIsLogin(false);
    }
  };

  return (
    
    <div className={styles.wraper}>
              {/* <FullScreenLoader/> */}

      <div className={styles.container}>

        <div className={styles.topContainer}>

          <div onClick={handleGoBack} className={styles.backBtnContainer}>
            <BiLeftArrowAlt className={styles.backBtn} />
          </div>
          <img src={logo} alt="Logo" />
        </div>

        <h3>India's last minute app</h3>
        <p>Log in or Sign up</p>

        {loading && <FullScreenLoader />} {/* Display loader when loading */}

        {!showOtpSection && !otpSubmitted ? (
          <>
            <div className={styles.inputContainer}>
              <div className={styles.countryCode}>+91</div>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength="10"
                pattern="[0-9]{10}"
              />
            </div>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

            <button className={styles.actionButton} onClick={handleContinue}>
              Continue
            </button>
          </>
        ) : showOtpSection && !otpSubmitted ? (
          <div className={styles.otpContainer}>
            <p className={styles.otpSentMessage}>
              OTP has been sent on your WhatsApp No: <strong>({phoneNumber})</strong>
            </p>

            <div className={styles.otpFields}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} className={styles.otpInput} />}
              />
            </div>
            {/* {errorMessage && <p className={styles.otperrorMessage}>{errorMessage}</p>} */}

            <button className={styles.actionButton} onClick={handleConfirmOtp}>
              Confirm OTP
            </button>

          </div>
        ) : (
          <div className={styles.otpSubmitted}>
            <p>OTP Verified Successfully!</p>

            {/* <button className={styles.actionButton} onClick={handleGoBack}>
              Go Back
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogin;