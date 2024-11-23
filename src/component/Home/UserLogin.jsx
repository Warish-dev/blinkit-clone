import React, { useState } from 'react';
import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

const UserLogin = ({ setIsLogin }) => {
  // State to manage the mobile number input and OTP section visibility
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSubmitted, setOtpSubmitted] = useState(false);

  // Handle OTP input
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      setShowOtpSection(true);
    } else {
      alert("Please enter a valid mobile number.");
    }
  };

  const handleConfirmOtp = () => {
    const otpEntered = otp.join('');
    console.log('OTP Entered: ', otpEntered);
    // Here you would verify the OTP entered by the user
    // For now, let's just simulate OTP confirmation:
    setOtpSubmitted(true);
  };

  const resetForm = () => {
    setPhoneNumber('');
    setShowOtpSection(false);
    setOtp(['', '', '', '']);
    setOtpSubmitted(false);
  };

  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div onClick={() => { setIsLogin(false) }} className={styles.backBtnContainer}>
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
                type="text"
                placeholder="  Enter mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength="10"
                pattern="[0-9]{10}"
              />
            </div>
            <button className={styles.actionButton} onClick={handleContinue}>
              Continue
            </button>
          </>
        ) : showOtpSection && !otpSubmitted ? (
          <div className={styles.otpContainer}>
            {/* OTP sent message */}
            <p className={styles.otpSentMessage}>OTP sent on your WhatsApp</p>
            
            <div className={styles.otpFields}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  maxLength="1"
                  className={styles.otpInput}
                />
              ))}
            </div>
            <button className={styles.actionButton} onClick={handleConfirmOtp}>
              Confirm OTP
            </button>
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
