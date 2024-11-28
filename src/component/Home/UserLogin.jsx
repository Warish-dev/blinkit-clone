import React, { useState, useRef } from 'react';
import axios from 'axios'; // Importing axios
import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

const UserLogin = ({ setIsLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Function to generate a 6-digit OTP
  const generateOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Random 6-digit OTP
    sessionStorage.setItem('otp', otp); // Store OTP in sessionStorage
    console.log('OTP Generated:', otp); // Log OTP for testing purposes
    sendOtpToWhatsApp(otp); // Send OTP via WhatsApp
    return otp;
  };

  // Function to send OTP via WhatsApp API using Axios
  const sendOtpToWhatsApp = async (otp) => {
    const mobileNumber = phoneNumber;
    const message = `Your OTP is: ${otp}`; // OTP message content

    const formattedNumber = mobileNumber.replace(/\s+/g, '').replace(/^0+/, ''); // Clean up phone number

    const whatsappApiUrl = ` https://i.4sd.in/send-message?api_key=pHtA3oH7QTMs0Eta4oSLxijjkjfoAE=917982856964& number=91${formattedNumber}&message=${encodeURIComponent(message)}`;

    try {
      const response = await axios.post(whatsappApiUrl);

      // Check if the OTP was sent successfully
      if (response.status === 200) {
        console.log('OTP sent to WhatsApp successfully:', response.data);
      } else {
        console.error('Failed to send OTP via WhatsApp:', response.data);
      }
    } catch (error) {
      console.error('Error sending OTP via WhatsApp:', error);
    }
  };

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
      generateOtp(); // Generate OTP and send it
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
      setOtp(['', '', '', '']);
    } else {
      setIsLogin(false);
    }
  };

  const resetForm = () => {
    setPhoneNumber('');
    setShowOtpSection(false);
    setOtp(['', '', '', '']);
    setOtpSubmitted(false);
    setErrorMessage('');
    sessionStorage.removeItem('otp');
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
