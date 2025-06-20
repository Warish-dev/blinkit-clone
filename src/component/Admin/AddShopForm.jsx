// import React, { useState } from 'react';
// import styles from '../../styles/shops.module.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { callAPI } from '../../services/callAPIFunction';
// import { warehouseEndPoints } from '../../services/apiEndPoints';


// const AddShopForm = ({ setIsFormOpen, addShopFrom }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     warehouseName: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     accountHolderName: '',
//     accountNumber: '',
//     ifscCode: '',
//     bankName: '',
//     profileImage: null,
//     warehouseImages: [],
//     aadhaarCard: null,
//     panCard: null,
//     passbook: null,

//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData();

// form.append("name", formData.name);
// form.append("email", formData.email);
// form.append("warehouseName", formData.warehouseName);
// form.append("streetAddress", formData.streetAddress);
// form.append("city", formData.city);
// form.append("state", formData.state);
// form.append("pinCode", formData.pinCode);
// form.append("accountHolderName", formData.accountHolderName);
// form.append("accountNumber", formData.accountNumber);
// form.append("ifscCode", formData.ifscCode);
// form.append("bankName", formData.bankName);


// if (formData.profileImage) {
//   form.append("profileImage", formData.profileImage);
// }

// if (formData.warehouseImages && formData.warehouseImages.length > 0) {
//   formData.warehouseImages.forEach((image, index) => {
//     form.append(`warehouseImages[${index}]`, image);
//   });
// }

// if (formData.aadhaarCard) {
//   form.append("aadhaarCard", formData.aadhaarCard);
// }

// if (formData.panCard) {
//   form.append("panCard", formData.panCard);
// }

// if (formData.passbook) {
//   form.append("passbook", formData.passbook);
// }


//     try {
//       const response = await callAPI(
//         'POST',
//         `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
//         formData
//       );

//       if (response.status === 200) {

//         addShopFrom({
//           id: Date.now(), 
//           name: formData.warehouseName,
//           owner: formData.name,
//           email: formData.email,
//           // phone: 'N/A', 
//           // totalProducts: 0, 
//           location:  `${formData.city}, ${formData.state}`,
//           registrationDate: new Date().toISOString().split('T')[0], 
//           status: 'Active',
//           blocked: false,
//         });
//         alert('Shop added successfully!');
//         setIsFormOpen(false);
//       } else {
//         alert('Failed to add shop. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error adding shop:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const toggleForm = () => {
//     setIsFormOpen(false);
//   };




//   return (
//     <div className={styles.main}>
//       <h1 className={styles.heading}>Add Shop</h1>
//       <div className={styles.box}>
//         <p className={styles.cross} onClick={toggleForm}>X</p>
//         <form onSubmit={handleSubmit}>
//           <div className="box1">
//             <div className={styles.name}>
//               <label className={styles.label}>Shop Owner Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.email}>
//               <label className={styles.label}>Shop Owner Email:</label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className={styles.warehouseName}>
//               <label className={styles.label}>Shop Name:</label>
//               <input
//                 type="text"
//                 id="warehouseName"
//                 name="warehouseName"
//                 value={formData.warehouseName}
//                 onChange={handleInputChange}
//               />
//             </div>

//             {/* Add other fields similarly */}

//             {/* Address Inputs */}
//             <div className={styles.address}>
//               <label className={styles.label}>Street Address :</label>
//               <input type="text" id="streetAddress" name="streetAddress" value={formData.street}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.city}>
//               <label className={styles.label}>City :</label>
//               <input type="text" id="city" name="city" value={formData.city}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.state}>
//               <label className={styles.label}>State :</label>
//               <input type="text" id="state" name="state" value={formData.state}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.pinCode}>
//               <label className={styles.label}>Pin Code :</label>
//               <input type="number" id="pinCode" name="pinCode" value={formData.pinCode}
//                 onChange={handleInputChange} />
//             </div>

//             {/* Profile Image Upload */}
//             <div className={styles.profileImage}>
//               <label className={styles.label}>Profile Image :</label>
//               <input type="file" id="profileImage" name="profileImage" accept="image/*" value={formData.profileImage}
//                 onChange={handleFileChange} />
//             </div>

//             {/* Warehouse Images Upload */}
//             <div className={styles.warehouseImages}>
//               <label className={styles.label}>Warehouse Images :</label>
//               <input type="file" id="warehouseImages" name="warehouseImages" accept="image/*" multiple value={formData.warehouseImages}
//                 onChange={handleFileChange} />
//             </div>
//           </div>
//           <div className="box2">
//             {/* Aadhaar Card Upload */}
//             <div className={styles.aadhaarCard}>
//               <label className={styles.label}>Aadhaar Card :</label>
//               <input type="file" id="aadhaarCard" name="aadhaarCard" accept="image/*" value={formData.aadhaarCard}
//                 onChange={handleFileChange} />
//             </div>

//             {/* PAN Card Upload */}
//             <div className={styles.panCard}>
//               <label className={styles.label}>PAN Card :</label>
//               <input type="file" id="panCard" name="panCard" accept="image/*" value={formData.panCard}
//                 onChange={handleFileChange} />
//             </div>

//             {/* Passbook Upload */}
//             <div className={styles.passbook}>
//               <label className={styles.label}>Passbook Image :</label>
//               <input type="file" id="passbook" name="passbook" accept="image/*" value={formData.passbook}
//                 onChange={handleFileChange} />
//             </div>

//             {/* Bank Details */}
//             <div className={styles.accountHolderName}>
//               <label className={styles.label}>Account Holder Name :</label>
//               <input type="text" id="accountHolderName" name="accountHolderName" value={formData.accountHolderName}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.accountNumber}>
//               <label className={styles.label}>Account Number :</label>
//               <input type="text" id="accountNumber" name="accountNumber" value={formData.accountNumber}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.ifscCode}>
//               <label className={styles.label}>IFSC Code :</label>
//               <input type="text" id="ifscCode" name="ifscCode" value={formData.ifscCode}
//                 onChange={handleInputChange} />
//             </div>

//             <div className={styles.bankName}>
//               <label className={styles.label}>Bank Name :</label>
//               <input type="text" id="bankName" name="bankName" value={formData.bankName}
//                 onChange={handleInputChange} />
//             </div>

//             {/* Password Fields */}
//             <div className={styles.password}>
//               <label className={styles.label}>Password :</label>
//               <div className={styles.passwordInput}>
//                 <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.warehouseName}
//                   onChange={handleInputChange} />
//                 <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
//               </div>
//             </div>

//             <div className={styles.confirmPassword}>
//               <label className={styles.label}>Confirm Password :</label>
//               <div className={styles.pass1}>
//                 <input type="password" id="confirmPassword" name="confirmPassword" value={formData.warehouseName}
//                   onChange={handleInputChange} />
//               </div>
//             </div>
//           </div>
//           <button className={styles.bt} type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default AddShopForm;












import React, { useState } from 'react';
import styles from '../../styles/shops.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { callAPI } from '../../services/callAPIFunction';
import { warehouseEndPoints } from '../../services/apiEndPoints';

const AddShopForm = ({ setIsFormOpen, addShopFrom }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerEmail: '',
    warehouseName: '',
    streetAddress: '',
    city: '',
    state: '',
    pinCode: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    longitude: '',
    latitude: '',
    profileImage: null,
    warehouseImages: [],
    aadhaarCard: null,
    panCard: null,
    passbook: null,
    password: '',
    confirmPassword: '',
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
    if (name === 'warehouseImages') {
      setFormData({ ...formData, warehouseImages: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password matching
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const form = new FormData();
    form.append("ownerName", formData.ownerName);
    form.append("ownerEmail", formData.ownerEmail);
    form.append("warehouseName", formData.warehouseName);
    form.append("street", formData.streetAddress);
    form.append("city", formData.city);
    form.append("state", formData.state);
    form.append("pinCode", formData.pinCode);
    form.append("accountHolderName", formData.accountHolderName);
    form.append("accountNumber", formData.accountNumber);
    form.append("ifscCode", formData.ifscCode);
    form.append("bankName", formData.bankName);
    form.append("longitude", formData.longitude);
    form.append("latitude", formData.latitude);
    form.append("password", formData.password);
    form.append("confirmPassword", formData.confirmPassword);

    // Append files if they exist
    if (formData.profileImage) form.append("image", formData.profileImage);

    // if (Array.isArray(formData.warehouseImages)) {
    //   formData.warehouseImages.forEach((image, index) => {
    //     form.append(`warehouseImages[${index}]`, image);
    //   });
    // }

    if (Array.isArray(formData.warehouseImages)) {
      formData.warehouseImages.forEach((image) => {
        form.append('warehouseImages', image); // Use the same key for each image
      });
    }
    

    if (formData.aadhaarCard) form.append("aadharImage", formData.aadhaarCard);
    if (formData.panCard) form.append("panImage", formData.panCard);
    if (formData.passbook) form.append("passbookImage", formData.passbook);

    try {


      
      const response = await callAPI(
        'POST',
        `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
        form
      );
    
      console.log('Response:', response);
    
      if (response.status === 200) {
        // Success logic
        addShopFrom({
          id: Date.now(),
          name: formData.warehouseName,
          owner: formData.ownerName,
          email: formData.ownerEmail,
          location: `${formData.city}, ${formData.state}`,
          registrationDate: new Date().toISOString().split('T')[0],
          status: 'Active',
          blocked: false,
        });
        alert('Shop added successfully!');
        setIsFormOpen(false);
      } else {
        console.error('Server error:', response);
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
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.email}>
              <label className={styles.label}>Shop Owner Email:</label>
              <input
                type="email"
                id="ownerEmail"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.warehouseName}>
              <label className={styles.label}>Shop Name:</label>
              <input
                type="text"
                id="warehouseName"
                name="warehouseName"
                value={formData.warehouseName}
                onChange={handleInputChange}
              />
            </div>

            {/* Address Inputs */}
            <div className={styles.address}>
              <label className={styles.label}>Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.city}>
              <label className={styles.label}>City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.state}>
              <label className={styles.label}>State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.pinCode}>
              <label className={styles.label}>Pin Code:</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </div>

            {/* Profile Image Upload */}
            <div className={styles.profileImage}>
              <label className={styles.label}>Profile Image:</label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Warehouse Images Upload */}
            <div className={styles.warehouseImages}>
              <label className={styles.label}>Warehouse Images:</label>
              <input
                type="file"
                id="warehouseImages"
                name="warehouseImages"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="box2">
            {/* Aadhaar Card Upload */}
            <div className={styles.aadhaarCard}>
              <label className={styles.label}>Aadhaar Card:</label>
              <input
                type="file"
                id="aadhaarCard"
                name="aadhaarCard"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* PAN Card Upload */}
            <div className={styles.panCard}>
              <label className={styles.label}>PAN Card:</label>
              <input
                type="file"
                id="panCard"
                name="panCard"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Passbook Upload */}
            <div className={styles.passbook}>
              <label className={styles.label}>Passbook Image:</label>
              <input
                type="file"
                id="passbook"
                name="passbook"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Bank Details */}
            <div className={styles.accountHolderName}>
              <label className={styles.label}>Account Holder Name:</label>
              <input
                type="text"
                id="accountHolderName"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.accountNumber}>
              <label className={styles.label}>Account Number:</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.ifscCode}>
              <label className={styles.label}>IFSC Code:</label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.bankName}>
              <label className={styles.label}>Bank Name:</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.bankName}>
              <label className={styles.label}>Longitude:</label>
              <input
                type="number"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.bankName}>
              <label className={styles.label}>Latitude:</label>
              <input
                type="number"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleInputChange}
              />
            </div>

            {/* Password Fields */}
            <div className={styles.password}>
              <label className={styles.label}>Password:</label>
              <div className={styles.passwordInput}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className={styles.confirmPassword}>
              <label className={styles.label}>Confirm Password:</label>
              <input
                 type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
               <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
            </div>
          </div>

          <button className={styles.bt} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddShopForm;

