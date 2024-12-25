// import React, { useState } from 'react';

// import styles from '../../styles/shops.module.css';

// function AddShopForm({ setIsFormOpen }) {
//     const toggleForm = () => {
//         setIsFormOpen(false);
//     };

//     return (
//         <div className={styles.main}>
           
          

//             <h1 className={styles.heading}>Add Shop</h1>

//             <div className={styles.box}>
//                 <p className={styles.cross} onClick={toggleForm}>X</p>
                

//                 <div className="box1">
//                 <div className={styles.name}>
//                     <label className={styles.label}>Shop Owner Name :</label>
//                     <input type="text" id="name" name="name" />
//                 </div>

//                 <div className={styles.email}>
//                     <label className={styles.label}>Shop Owner Email :</label>
//                     <input type="text" id="email" name="email" />
//                 </div>

//                 <div className={styles.shopName}>
//                     <label className={styles.label}>Shop Name :</label>
//                     <input type="text" id="shopName" name="shopName" />
//                 </div>

//                 {/* Address Inputs */}
//                 <div className={styles.address}>
//                     <label className={styles.label}>Street Address :</label>
//                     <input type="text" id="streetAddress" name="streetAddress" />
//                 </div>

//                 <div className={styles.city}>
//                     <label className={styles.label}>City :</label>
//                     <input type="text" id="city" name="city" />
//                 </div>

//                 <div className={styles.state}>
//                     <label className={styles.label}>State :</label>
//                     <input type="text" id="state" name="state" />
//                 </div>

//                 <div className={styles.pinCode}>
//                     <label className={styles.label}>Pin Code :</label>
//                     <input type="number" id="pinCode" name="pinCode" />
//                 </div>

//                 <div className={styles.state}>
//                     <label className={styles.label}>Longitude</label>
//                     <input type="number" id="longitude" name="longitude" />
//                 </div>

//                 <div className={styles.pinCode}>
//                     <label className={styles.label}>Latitude</label>
//                     <input type="number" id="latitude" name="latitude" />
//                 </div>


//                 {/* Profile Image Upload */}
//                 <div className={styles.profileImage}>
//                     <label className={styles.label}>Profile Image :</label>
//                     <input type="file" id="profileImage" name="profileImage" accept="image/*" />
//                 </div>

//                 {/* Warehouse Images Upload */}
//                 <div className={styles.warehouseImages}>
//                     <label className={styles.label}>Warehouse Images :</label>
//                     <input type="file" id="warehouseImages" name="warehouseImages" accept="image/*" multiple />
//                 </div>
//                 </div>
//                 <div className="box2">
//                 {/* Aadhaar Card Upload */}
//                 <div className={styles.aadhaarCard}>
//                     <label className={styles.label}>Aadhaar Card :</label>
//                     <input type="file" id="aadhaarCard" name="aadhaarCard" accept="image/*" />
//                 </div>

//                 {/* PAN Card Upload */}
//                 <div className={styles.panCard}>
//                     <label className={styles.label}>PAN Card :</label>
//                     <input type="file" id="panCard" name="panCard" accept="image/*" />
//                 </div>

//                 {/* Passbook Upload */}
//                 <div className={styles.passbook}>
//                     <label className={styles.label}>Passbook Image :</label>
//                     <input type="file" id="passbook" name="passbook" accept="image/*" />
//                 </div>

//                 {/* Bank Details */}
//                 <div className={styles.accountHolderName}>
//                     <label className={styles.label}>Account Holder Name :</label>
//                     <input type="text" id="accountHolderName" name="accountHolderName" />
//                 </div>

//                 <div className={styles.accountNumber}>
//                     <label className={styles.label}>Account Number :</label>
//                     <input type="text" id="accountNumber" name="accountNumber" />
//                 </div>

//                 <div className={styles.ifscCode}>
//                     <label className={styles.label}>IFSC Code :</label>
//                     <input type="text" id="ifscCode" name="ifscCode" />
//                 </div>

//                 <div className={styles.bankName}>
//                     <label className={styles.label}>Bank Name :</label>
//                     <input type="text" id="bankName" name="bankName" />
//                 </div>

//                 {/* Password Fields */}
//                 <div className={styles.password}>
//                     <label className={styles.label}>Password :</label>
//                     <div className={styles.pass1}>
//                         <input type="password" id="password" name="password" />
//                     </div>
//                 </div>

//                 <div className={styles.confirmPassword}>
//                     <label className={styles.label}>Confirm Password :</label>
//                     <div className={styles.pass1}>
//                         <input type="password" id="confirmPassword" name="confirmPassword" />
//                     </div>
//                 </div>
//                 <button type="submit" className={styles.but}>
//                          Add
//                        </button>
//                        <button type="reset" className={styles.but1}>
//                          Clear
//                        </button>
//                 </div>


//             </div>
            
//         </div>
//     );
// }

// export default AddShopForm;















import React, { useState } from "react";
import styles from "../../styles/shops.module.css";
import  {callAPI}  from "../../services/callAPIFunction"; // Assuming you have this function
import { warehouseEndPoints } from "../../services/apiEndPoints"; // Assuming you have these endpoints
// import { Axios } from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

function AddShopForm({ setIsFormOpen, addWarehouse }) {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerEmail: "",
    shopName: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    longitude: "",
    latitude: "",
    profileImage: null,
    warehouseImages: [],
    aadhaarCard: null,
    panCard: null,
    passbook: null,
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsFormOpen(false);
  };

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

    const apiUrl = `${VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`;


    const newWarehouse = {  
      ownerName: formData.ownerName,
      ownerEmail: formData.ownerEmail,
      shopName: formData.shopName,
      streetAddress: formData.streetAddress,
      city: formData.city,
      state: formData.state,
      pinCode: formData.pinCode,
      longitude: formData.longitude,
      latitude: formData.latitude,
      profileImage: formData.profileImage
        ? formData.profileImage[0]
        : null,
      warehouseImages: formData.warehouseImages
        ? Array.from(formData.warehouseImages).map((file) => file)
        : null,
      aadhaarCard: formData.aadhaarCard
        ? formData.aadhaarCard[0]
        : null,
      panCard: formData.panCard
        ? formData.panCard[0]
        : null,
      passbook: formData.passbook
        ? formData.passbook[0]
        : null,
      accountHolderName: formData.accountHolderName,
      accountNumber: formData.accountNumber,
      ifscCode: formData.ifscCode,
      bankName: formData.bankName,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };


    // addWarehouse(newWarehouse);

    if (typeof addWarehouse === "function") {
      addWarehouse(newWarehouse);
    } else {
      alert("addWarehouse is not a function or not passed as a prop.");
    }

    const form = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (value instanceof FileList) {
        Array.from(value).forEach((file) => form.append(key, file));
      } else {
        form.append(key, value);
      }
    }
    console.log("form", form);

    
    

    try {
      const response = await callAPI("POST", apiUrl, form);

      console.log("response",response);
      

      console.log("Response:", response);

      if (response.status === 200 || response.status === 201) {
        alert("Shop added successfully!");
        setFormData({
          ownerName: "",
          ownerEmail: "",
          shopName: "",
          streetAddress: "",
          city: "",
          state: "",
          pinCode: "",
          longitude: "",
          latitude: "",
          profileImage: null,
          warehouseImages: [],
          aadhaarCard: null,
          panCard: null,  
          passbook: null,
          accountHolderName: "",
          accountNumber: "",
          ifscCode: "",
          bankName: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add shop!");
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Add Shop</h1>
      <div className={styles.box}>
        <p className={styles.cross} onClick={toggleForm}>
          X
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Owner Name:</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Owner Email:</label>
            <input
              type="email"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Shop Name:</label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Street Address:</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>PIN Code:</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Longitude:</label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Latitude:</label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Profile Image:</label>
            <input
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Warehouse Images:</label>
            <input
              type="file"
              name="warehouseImages"
              onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Aadhaar Card:</label>
            <input
              type="file"
              name="aadhaarCard"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>PAN Card:</label>
            <input
              type="file"
              name="panCard"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Passbook:</label>
            <input
              type="file"
              name="passbook"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Account Holder Name:</label>
            <input
              type="text"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Account Number:</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>IFSC Code:</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Bank Name:</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add Shop
          </button>
          <button
            type="reset"
            className={styles.resetButton}
            onClick={() =>
              setFormData({
                ownerName: "",
                ownerEmail: "",
                shopName: "",
                streetAddress: "",
                city: "",
                state: "",
                pinCode: "",
                longitude: "",
                latitude: "",
                profileImage: null,
                warehouseImages: null,
                aadhaarCard: null,
                panCard: null,
                passbook: null,
                accountHolderName: "",
                accountNumber: "",
                ifscCode: "",
                bankName: "",
                password: "",
                confirmPassword: "",
              })
            }
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddShopForm;







// import React, { useState } from "react";
// import styles from "../../styles/shops.module.css";
// import { callAPI } from "../../services/callAPIFunction";
// import { warehouseEndPoints } from "../../services/apiEndPoints";

// const { VITE_API_BASE_URL } = import.meta.env;

// function AddShopForm({ setIsFormOpen, addWarehouse }) {
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     ownerEmail: "",
//     shopName: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     pinCode: "",
//     longitude: "",
//     latitude: "",
//     profileImage: null,
//     warehouseImages: null,
//     aadhaarCard: null,
//     panCard: null,
//     passbook: null,
//     accountHolderName: "",
//     accountNumber: "",
//     ifscCode: "",
//     bankName: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const toggleForm = () => {
//     setIsFormOpen(false);
//   };

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

//     const apiUrl = `${VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`;
//     const form = new FormData();
//     for (const [key, value] of Object.entries(formData)) {
//       if (value instanceof FileList) {
//         Array.from(value).forEach((file) => form.append(key, file));
//       } else if (value) {
//         form.append(key, value);
//       }
//     }

//     try {
//       const response = await callAPI("POST", apiUrl, form, {
//         "Content-Type": "multipart/form-data",
//       });

//       if (response.status === 200 || response.status === 201) {
//         alert("Shop added successfully!");
//         setFormData({
//           ownerName: "",
//           ownerEmail: "",
//           shopName: "",
//           streetAddress: "",
//           city: "",
//           state: "",
//           pinCode: "",
//           longitude: "",
//           latitude: "",
//           profileImage: null,
//           warehouseImages: null,
//           aadhaarCard: null,
//           panCard: null,
//           passbook: null,
//           accountHolderName: "",
//           accountNumber: "",
//           ifscCode: "",
//           bankName: "",
//           password: "",
//           confirmPassword: "",
//         });
//         if (typeof addWarehouse === "function") {
//           addWarehouse(formData);
//         }
//       } else {
//         alert(`Error: ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add shop!");
//     }
//   };

//   return (
//     <div className={styles.main}>
//       <h1 className={styles.heading}>Add Shop</h1>
//       <div className={styles.box}>
//         <p className={styles.cross} onClick={toggleForm}>
//           X
//         </p>
//         <form onSubmit={handleSubmit}>
//           {[
//             { label: "Owner Name", name: "ownerName", type: "text" },
//             { label: "Owner Email", name: "ownerEmail", type: "email" },
//             { label: "Shop Name", name: "shopName", type: "text" },
//             { label: "Street Address", name: "streetAddress", type: "text" },
//             { label: "City", name: "city", type: "text" },
//             { label: "State", name: "state", type: "text" },
//             { label: "PIN Code", name: "pinCode", type: "text" },
//             { label: "Longitude", name: "longitude", type: "text" },
//             { label: "Latitude", name: "latitude", type: "text" },
//             { label: "Account Holder Name", name: "accountHolderName", type: "text" },
//             { label: "Account Number", name: "accountNumber", type: "text" },
//             { label: "IFSC Code", name: "ifscCode", type: "text" },
//             { label: "Bank Name", name: "bankName", type: "text" },
//             { label: "Password", name: "password", type: "password" },
//             { label: "Confirm Password", name: "confirmPassword", type: "password" },
//           ].map(({ label, name, type }) => (
//             <div className={styles.inputGroup} key={name}>
//               <label>{label}:</label>
//               <input
//                 type={type}
//                 name={name}
//                 value={formData[name]}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           ))}
//           {[
//             { label: "Profile Image", name: "profileImage" },
//             { label: "Warehouse Images", name: "warehouseImages", multiple: true },
//             { label: "Aadhaar Card", name: "aadhaarCard" },
//             { label: "PAN Card", name: "panCard" },
//             { label: "Passbook", name: "passbook" },
//           ].map(({ label, name, multiple }) => (
//             <div className={styles.inputGroup} key={name}>
//               <label>{label}:</label>
//               <input
//                 type="file"
//                 name={name}
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 multiple={multiple || false}
//               />
//             </div>
//           ))}
//           <button type="submit" className={styles.submitButton}>
//             Add Shop
//           </button>
//           <button
//             type="reset"
//             className={styles.resetButton}
//             onClick={() =>
//               setFormData({
//                 ownerName: "",
//                 ownerEmail: "",
//                 shopName: "",
//                 streetAddress: "",
//                 city: "",
//                 state: "",
//                 pinCode: "",
//                 longitude: "",
//                 latitude: "",
//                 profileImage: null,
//                 warehouseImages: null,
//                 aadhaarCard: null,
//                 panCard: null,
//                 passbook: null,
//                 accountHolderName: "",
//                 accountNumber: "",
//                 ifscCode: "",
//                 bankName: "",
//                 password: "",
//                 confirmPassword: "",
//               })
//             }
//           >
//             Clear
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddShopForm;

