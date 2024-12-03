import React, { useState } from 'react';
import styles from '../../styles/deliveryBoy.module.css';

function DeliveryBoyForm({ setIsFormOpen }) {
  const toggleForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className={styles.boxBody}>
        <p className={styles.cross} onClick={toggleForm}>
          X
        </p>
        <h1 className={styles.heading1}>Delivery Boys</h1>
        <div className={styles.row}>
          {/* Name */}
          <div className={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              className={styles.formControl}
              name="name"
              required
              aria-required="true"
            />
          </div>
          {/* Mobile */}
          <div className={styles.formGroup}>
            <label>Mobile</label>
            <input
              type="number"
              className={styles.formControl}
              name="mobile"
              minLength="10"
              maxLength="10"
            />
            
          </div>
          {/* Date of Birth */}
          <div className={styles.formGroup}>
            <label>Date Of Birth</label>
            <input
              type="date"
              className={styles.formControl}
              name="dob"
              id="dob"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className={styles.row}>
          {/* Email */}
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              className={styles.formControl}
              name="email"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* Password */}
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              className={styles.formControl1}
              name="password"
            />
          </div>
          {/* Confirm Password */}
          <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              className={styles.formControl}
              name="confirm_password"
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* Bonus */}
          <div className={styles.formGroup}>
            <label>Bonus</label>
            <input
              type="number"
              className={styles.formControl}
              name="bonus"
              id="bonus"
              defaultValue="10"
              aria-invalid="false"
            />
          </div>
          {/* Bonus Method */}
          <div className={styles.formGroup}>
            <label>Delivery Boy Bonus Method</label>
            <select
              name="bonus_method"
              className={styles.formControl}
              aria-invalid="false"
            >
              <option value="percentage">Percentage</option>
              <option value="rupees">Rupees</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          {/* Bank Name */}
          <div className={styles.formGroup}>
            <label>Bank Name</label>
            <input
              type="text"
              className={styles.formControl}
              name="bank_name"
              required
              aria-required="true"
            />
          </div>
          {/* Account Number */}
          <div className={styles.formGroup}>
            <label>Account Number</label>
            <input
              type="number"
              className={styles.formControl}
              name="account_number"
              required
              aria-required="true"
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* Bank Account Name */}
          <div className={styles.formGroup}>
            <label>Bank Account Name</label>
            <input
              type="text"
              className={styles.formControl}
              name="account_name"
              required
              aria-required="true"
            />
          </div>
          {/* IFSC Code */}
          <div className={styles.formGroup}>
            <label>Bank's IFSC Code</label>
            <input
              type="text"
              className={styles.formControl}
              name="ifsc_code"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div className={styles.row}>
          {/* Vehicle Type */}
          <div className={styles.formGroup}>
            <label>Vehicle Type</label>
            <select
              name="vehicle_type"
              className={styles.formControl}
              required
            >
              <option value="bike">Bike</option>
              <option value="truck">Truck</option>
              <option value="scooty">Scooty</option>
            </select>
          </div>
          {/* License Number */}
          <div className={styles.formGroup}>
            <label>License Number</label>
            <input
              type="text"
              className={styles.formControl}
              name="license_number"
              required
            />
          </div>
          {/* Vehicle Number */}
          <div className={styles.formGroup}>
            <label>Vehicle Number</label>
            <input
              type="text"
              className={styles.formControl}
              name="vehicle_number"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* Driving License */}
          <div className={styles.formGroup}>
            <label htmlFor="driving_license">Driving License</label>
            <input
              type="file"
              name="driving_license"
              id="driving_license"
              required
              aria-required="true"
            />
          </div>
          {/* National Identity Card */}
          <div className={styles.formGroup}>
            <label htmlFor="national_identity_card">National Identity Card</label>
            <input
              type="file"
              name="national_identity_card"
              id="national_identity_card"
              required
              aria-required="true"
            />
          </div>
        </div>

        <div className={styles.row}>
          {/* Address */}
          <div className={styles.formGroup}>
            <label>Address</label>
            <textarea
              name="address"
              id="address"
              rows="5"
              className={styles.formControl}
            ></textarea>
          </div>
          {/* Other Payment Information */}
          <div className={styles.formGroup}>
            <label>Other Payment Information</label>
            <textarea
              name="other_payment_info"
              id="other_payment_info"
              rows="5"
              className={styles.formControl}
            ></textarea>
          </div>
        </div>

        {/* New Fields */}
       

       

        <button type="submit" className={styles.but}>
          Add
        </button>
        <button type="reset" className={styles.but1}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default DeliveryBoyForm;
