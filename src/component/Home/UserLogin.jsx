import React, { useState, useRef } from 'react';
import axios from 'axios'; // Importing axios
import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

import OtpInput from 'react-otp-input';
import { callAPI } from '../../services/callAPIFunction';
import { otpEndPoints } from '../../services/apiEndPoints';
const { VITE_API_BASE_URL } = import.meta.env;

const UserLogin = ({ setIsLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleContinue = async () => {
    if (phoneNumber.length === 10 && /^[0-9]{10}$/.test(phoneNumber)) {

      const data = {
        phone : phoneNumber
      }
      
      const response = await callAPI('post', `${VITE_API_BASE_URL}${otpEndPoints.sendOtpOnWhatsapp}`, data);

      console.log(response)

      if(response.status == 200){
        setShowOtpSection(true);
        setErrorMessage('');
      }

    } else {
      setErrorMessage('Please enter a correct mobile number');
    }
  };

  const handleConfirmOtp = () => {
    const otpEntered = otp.join('');
    const storedOtp = sessionStorage.getItem('otp'); // Retrieve OTP from sessionStorage

    if (otpEntered === storedOtp) {
      console.log('OTP Verified:', otpEntered);
      setOtpSubmitted(true);
      setIsLogin(false); // Close login page after successful OTP
    } else {
      setErrorMessage('Incorrect OTP entered. Please try again.');
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
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div onClick={handleGoBack} className={styles.backBtnContainer}>
            <BiLeftArrowAlt className={styles.backBtn} />
          </div>
          <img src={logo} alt="Logo" />
        </div>

        <h3>India's last minute app</h3>
        <p>Log in or Sign up</p>

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
              {/* {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={otpRefs[index]}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className={styles.otpInput}
                />
              ))} */}

                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} className={styles.otpInput}/>}
                />
            </div>

            <button className={styles.actionButton} onClick={handleConfirmOtp}>
              Confirm OTP
            </button>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </div>
        ) : (
          <div className={styles.otpSubmitted}>
            <p>OTP Verified Successfully!</p>
           

            <button className={styles.actionButton} onClick={resetForm}>
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
