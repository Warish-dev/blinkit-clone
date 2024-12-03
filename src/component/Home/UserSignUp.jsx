import React, { useState } from 'react';
import styles from '../../styles/UserSignUp.module.css';
import logo from '../../assets/images/logo.png';
import { BiLeftArrowAlt } from 'react-icons/bi';

function UserSignUp() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('male'); // Default gender is male

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <div className={styles.backBtnContainer}>
                        <BiLeftArrowAlt className={styles.backBtn} />
                    </div>
                    <img src={logo} alt="Logo" />
                </div>
                <h3 className={styles.heading}>Sign Up</h3>
                
                <div className={styles.formContainer}>
                    {/* Name Input */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>

                    {/* Phone Number Input */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="phoneNumber">Contact Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="Enter mobile number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            maxLength="10"
                            pattern="[0-9]{10}"
                            className={styles.inputField}
                        />
                    </div>

                    {/* Email Input */}
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>

                    {/* Gender Selection */}
                    <div className={styles.genderGroup}>
                        <span>Gender</span>
                        <div className={styles.genderOptions}>
                            <label>
                                <input 
                                    type="radio" 
                                    value="male" 
                                    checked={gender === 'male'} 
                                    onChange={() => setGender('male')} 
                                    className={styles.radioButton}
                                />
                                Male
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="female" 
                                    checked={gender === 'female'} 
                                    onChange={() => setGender('female')} 
                                    className={styles.radioButton}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <button className={styles.actionButton}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserSignUp;
