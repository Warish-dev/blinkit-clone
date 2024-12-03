import React, { useState } from 'react';
import styles from '../../styles/shops.module.css';

function AddShopForm({ setIsFormOpen }) {
    const toggleForm = () => {
        setIsFormOpen(false);
    };
    
    return (
        <div className={styles.main}>
           <h1 className={styles.heading}>Add Shop</h1>
            <div className={styles.box}>
            
                <p className={styles.cross} onClick={toggleForm}>X</p>
               
                <div className="box1">
                <div className={styles.name}>
                    <label className={styles.label}>Shop Owner Name :</label>
                    <input type="text" id="name" name="name" />
                </div>
                
                <div className={styles.email}>
                    <label className={styles.label}>Shop Owner Email :</label>
                    <input type="text" id="email" name="email" />
                </div>
                
                <div className={styles.shopName}>
                    <label className={styles.label}>Shop Name :</label>
                    <input type="text" id="shopName" name="shopName" />
                </div>
                
                {/* Address Inputs */}
                <div className={styles.address}>
                    <label className={styles.label}>Street Address :</label>
                    <input type="text" id="streetAddress" name="streetAddress" />
                </div>
                
                <div className={styles.city}>
                    <label className={styles.label}>City :</label>
                    <input type="text" id="city" name="city" />
                </div>
                
                <div className={styles.state}>
                    <label className={styles.label}>State :</label>
                    <input type="text" id="state" name="state" />
                </div>
                
                <div className={styles.pinCode}>
                    <label className={styles.label}>Pin Code :</label>
                    <input type="number" id="pinCode" name="pinCode" />
                </div>
                
                {/* Profile Image Upload */}
                <div className={styles.profileImage}>
                    <label className={styles.label}>Profile Image :</label>
                    <input type="file" id="profileImage" name="profileImage" accept="image/*" />
                </div>
                
                {/* Warehouse Images Upload */}
                <div className={styles.warehouseImages}>
                    <label className={styles.label}>Warehouse Images :</label>
                    <input type="file" id="warehouseImages" name="warehouseImages" accept="image/*" multiple />
                </div>
                </div>
                <div className="box2">
                {/* Aadhaar Card Upload */}
                <div className={styles.aadhaarCard}>
                    <label className={styles.label}>Aadhaar Card :</label>
                    <input type="file" id="aadhaarCard" name="aadhaarCard" accept="image/*" />
                </div>
                
                {/* PAN Card Upload */}
                <div className={styles.panCard}>
                    <label className={styles.label}>PAN Card :</label>
                    <input type="file" id="panCard" name="panCard" accept="image/*" />
                </div>
                
                {/* Passbook Upload */}
                <div className={styles.passbook}>
                    <label className={styles.label}>Passbook Image :</label>
                    <input type="file" id="passbook" name="passbook" accept="image/*" />
                </div>
                
                {/* Bank Details */}
                <div className={styles.accountHolderName}>
                    <label className={styles.label}>Account Holder Name :</label>
                    <input type="text" id="accountHolderName" name="accountHolderName" />
                </div>
                
                <div className={styles.accountNumber}>
                    <label className={styles.label}>Account Number :</label>
                    <input type="text" id="accountNumber" name="accountNumber" />
                </div>
                
                <div className={styles.ifscCode}>
                    <label className={styles.label}>IFSC Code :</label>
                    <input type="text" id="ifscCode" name="ifscCode" />
                </div>
                
                <div className={styles.bankName}>
                    <label className={styles.label}>Bank Name :</label>
                    <input type="text" id="bankName" name="bankName" />
                </div>
                
                {/* Password Fields */}
                <div className={styles.password}>
                    <label className={styles.label}>Password :</label>
                    <div className={styles.pass1}>
                        <input type="password" id="password" name="password" />
                    </div>
                </div>
                
                <div className={styles.confirmPassword}>
                    <label className={styles.label}>Confirm Password :</label>
                    <div className={styles.pass1}>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                </div>
                </div>
                
                
            </div>
            {/* <button className={styles.bt} type="submit">Submit</button> */}
        </div>
    );
}

export default AddShopForm;
