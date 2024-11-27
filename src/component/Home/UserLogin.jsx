import React, { useState, useRef } from 'react';
import styles from '../../styles/userLogin.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

const UserLogin = ({ setIsLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpSubmitted, setOtpSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  // Refs for OTP inputs
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Function to generate a 6-digit OTP
  const generateOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Random 6-digit OTP
    sessionStorage.setItem('otp', otp); // Store OTP in sessionStorage
    console.log('OTP Generated:', otp); // You can log it for testing or simulate sending it
    sendOtpToWhatsApp(otp); // Send OTP via WhatsApp after generation
    return otp;
  };

  // Function to send OTP via WhatsApp API
  const sendOtpToWhatsApp = async (otp) => {
    const mobileNumber = phoneNumber; // Using entered phone number
    const message = `Your OTP is: ${otp}`; // OTP message content
  
    // Ensure that the mobile number entered does not contain any spaces or extra characters
    const formattedNumber = mobileNumber.replace(/\s+/g, '').replace(/^0+/, ''); // Remove spaces and leading zeros
  
    // WhatsApp API URL: using the correct number format
    const whatsappApiUrl = `https://i.4sd.in/send-message?/send?api_key=pHtA3oH7QTMs0Eta4oSLxijjkjfoAE&sender=917982856964&number=91${formattedNumber}&message=${encodeURIComponent(message)}`;
  
    try {
      const response = await fetch(whatsappApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('OTP sent to WhatsApp successfully:', data);
      } else {
        console.error('Failed to send OTP via WhatsApp:', data);
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
      
      // Generate OTP and store it in sessionStorage
      generateOtp();
    } else {
      setErrorMessage('Please enter a correct mobile number');
    }
  };

  const handleConfirmOtp = () => {
    const otpEntered = otp.join('');
    const storedOtp = sessionStorage.getItem('otp'); // Retrieve OTP from sessionStorage

    if (otpEntered === storedOtp) {
      console.log('OTP Verified:', otpEntered);

      // Simulate OTP confirmation
      setOtpSubmitted(true);
      setIsLogin(false); // Close login page after successful OTP
    } else {
      setErrorMessage('Incorrect OTP entered. Please try again.'); // Show error if OTP is incorrect
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
    sessionStorage.removeItem('otp'); // Clear OTP from sessionStorage when resetting form
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

            {/* Conditionally render the error message for incorrect OTP */}
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
