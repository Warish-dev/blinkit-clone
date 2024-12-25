import React, { useState } from 'react';
import styles from '../../styles/shops.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { callAPI } from '../../services/callAPIFunction';
import { warehouseEndPoints } from '../../services/apiEndPoints';


const AddShopForm = ({ setIsFormOpen, addShopFromForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    streetAddress: '',
    city: '',
    state: '',
    pinCode: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    profileImage: null,
    warehouseImages: [],
    aadhaarCard: null,
    panCard: null,
    passbook: null,

  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await callAPI(
        'POST',
        `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
        formData
      );

      if (response.status === 200) {
        // Update Shops table
        addShopFromForm({
          id: Date.now(), // Temporary ID for demonstration
          name: formData.shopName,
          owner: formData.name,
          email: formData.email,
          phone: 'N/A', // Replace with a real phone field if needed
          totalProducts: 0, // Replace with actual data if applicable
          location:  `${formData.city}, ${formData.state}`,
          registrationDate: new Date().toISOString().split('T')[0], // Current date
          status: 'Active',
          blocked: false,
        });
        alert('Shop added successfully!');
        setIsFormOpen(false); // Close form
      } else {
        alert('Failed to add shop. Please try again.');
      }
    } catch (error) {
      console.error('Error adding shop:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const toggleForm = () => {
    setIsFormOpen(false);
  };




  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Add Shop</h1>
      <div className={styles.box}>
        <p className={styles.cross} onClick={toggleForm}>X</p>
        <form onSubmit={handleSubmit}>
          <div className="box1">
            <div className={styles.name}>
              <label className={styles.label}>Shop Owner Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.email}>
              <label className={styles.label}>Shop Owner Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.shopName}>
              <label className={styles.label}>Shop Name:</label>
              <input
                type="text"
                id="shopName"
                name="shopName"
                value={formData.shopName}
                onChange={handleInputChange}
              />
            </div>

            {/* Add other fields similarly */}

            {/* Address Inputs */}
            <div className={styles.address}>
              <label className={styles.label}>Street Address :</label>
              <input type="text" id="streetAddress" name="streetAddress" value={formData.street}
                onChange={handleInputChange} />
            </div>

            <div className={styles.city}>
              <label className={styles.label}>City :</label>
              <input type="text" id="city" name="city" value={formData.city}
                onChange={handleInputChange} />
            </div>

            <div className={styles.state}>
              <label className={styles.label}>State :</label>
              <input type="text" id="state" name="state" value={formData.state}
                onChange={handleInputChange} />
            </div>

            <div className={styles.pinCode}>
              <label className={styles.label}>Pin Code :</label>
              <input type="number" id="pinCode" name="pinCode" value={formData.pinCode}
                onChange={handleInputChange} />
            </div>

            {/* Profile Image Upload */}
            <div className={styles.profileImage}>
              <label className={styles.label}>Profile Image :</label>
              <input type="file" id="profileImage" name="profileImage" accept="image/*" value={formData.profileImage}
                onChange={handleFileChange} />
            </div>

            {/* Warehouse Images Upload */}
            <div className={styles.warehouseImages}>
              <label className={styles.label}>Warehouse Images :</label>
              <input type="file" id="warehouseImages" name="warehouseImages" accept="image/*" multiple value={formData.warehouseImages}
                onChange={handleFileChange} />
            </div>
          </div>
          <div className="box2">
            {/* Aadhaar Card Upload */}
            <div className={styles.aadhaarCard}>
              <label className={styles.label}>Aadhaar Card :</label>
              <input type="file" id="aadhaarCard" name="aadhaarCard" accept="image/*" value={formData.aadhaarCard}
                onChange={handleFileChange} />
            </div>

            {/* PAN Card Upload */}
            <div className={styles.panCard}>
              <label className={styles.label}>PAN Card :</label>
              <input type="file" id="panCard" name="panCard" accept="image/*" value={formData.panCard}
                onChange={handleFileChange} />
            </div>

            {/* Passbook Upload */}
            <div className={styles.passbook}>
              <label className={styles.label}>Passbook Image :</label>
              <input type="file" id="passbook" name="passbook" accept="image/*" value={formData.passbook}
                onChange={handleFileChange} />
            </div>

            {/* Bank Details */}
            <div className={styles.accountHolderName}>
              <label className={styles.label}>Account Holder Name :</label>
              <input type="text" id="accountHolderName" name="accountHolderName" value={formData.accountHolderName}
                onChange={handleInputChange} />
            </div>

            <div className={styles.accountNumber}>
              <label className={styles.label}>Account Number :</label>
              <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber}
                onChange={handleInputChange} />
            </div>

            <div className={styles.ifscCode}>
              <label className={styles.label}>IFSC Code :</label>
              <input type="text" id="ifscCode" name="ifscCode" value={formData.ifscCode}
                onChange={handleInputChange} />
            </div>

            <div className={styles.bankName}>
              <label className={styles.label}>Bank Name :</label>
              <input type="text" id="bankName" name="bankName" value={formData.bankName}
                onChange={handleInputChange} />
            </div>

            {/* Password Fields */}
            <div className={styles.password}>
              <label className={styles.label}>Password :</label>
              <div className={styles.passwordInput}>
                <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.shopName}
                  onChange={handleInputChange} />
                <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
              </div>
            </div>

            <div className={styles.confirmPassword}>
              <label className={styles.label}>Confirm Password :</label>
              <div className={styles.pass1}>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.shopName}
                  onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <button className={styles.bt} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};


export default AddShopForm;

