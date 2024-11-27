import React, { useState } from "react";
import styles from "../../styles/withdraw.module.css";

const WithdrawRequestModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Withdraw Request</h3>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Withdraw Amount <span className={styles.required}>*</span></label>
            <input type="number" placeholder="Enter amount" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Name <span className={styles.required}>*</span></label>
            <input type="text" placeholder="Name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Contact Number <span className={styles.required}>*</span></label>
            <input type="text" placeholder="Enter contact number" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label>Any message</label>
            <textarea placeholder="Any message" className={styles.textarea}></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.closeButtonSecondary} onClick={onClose}>
              Close
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawRequestModal;
