import React, { useState, useRef } from 'react';
import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

const UserLogin = ({ setIsLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Refs for OTP inputs
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < otp.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        otpRefs[index - 1].current.focus();
      }
    }
  };

  const handleContinue = () => {
    if (phoneNumber.length === 10 && /^[0-9]{10}$/.test(phoneNumber)) {
      setShowOtpSection(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a correct mobile number');
    }
  };

  const handleConfirmOtp = () => {
    const otpEntered = otp.join('');
    console.log('OTP Entered: ', otpEntered);

    // Simulate OTP confirmation
    setOtpSubmitted(true);

    // Simulate successful OTP verification and close login
    setIsLogin(false); // Close login page after successful OTP
  };

  const handleGoBack = () => {
    // If on the OTP page, go back to the phone number page
    if (showOtpSection) {
      setShowOtpSection(false);
      setOtp(['', '', '', '']); // Reset OTP inputs
    } else {
      // If on the phone number page, close the login modal or page
      setIsLogin(false); // Close the login page
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setShowOtpSection(false);
    setOtp(['', '', '', '']);
    setOtpSubmitted(false);
    setErrorMessage('');
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
            {/* Display OTP message along with the entered phone number */}
            <p className={styles.otpSentMessage}>
              OTP has been sent on your WhatsApp No: <strong>({phoneNumber})</strong>
            </p>

            <div className={styles.otpFields}>
              {otp.map((digit, index) => (
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
