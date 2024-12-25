// import React, { useState } from 'react';
// import styles from '../../styles/shops.module.css';
// import { FaEye, FaEyeSlash} from 'react-icons/fa';
// import { callAPI } from '../../services/callAPIFunction';
// import { warehouseEndPoints } from '../../services/apiEndPoints';

// // function AddShopForm({ setIsFormOpen }) {
// //     const [showPassword, setShowPassword] = useState(false);
    
// //     const togglePasswordVisibility = () => {
// //         setShowPassword(!showPassword);
// //     }

// //     const toggleForm = () => {
// //         setIsFormOpen(false);
// //     };

// const AddShopForm=({ setIsFormOpen, addShopFromForm }) => {
//     const [showPassword, setShowPassword] = useState(false);

   

//     const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     shopName: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     accountHolderName: '',
//     accountNumber: '',
//     ifscCode: '',
//     bankName: '',
    
//     });
    
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     }
    
//     const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     };
    
//     const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//     const response = await callAPI(
//     'POST',
//     `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
//     formData
//     );
    
//     if (response.status === 200) {
//                // Update Shops table
//                addShopFromForm({
//                 id: Date.now(), // Temporary ID for demonstration
//                 name: formData.shopName,
//                 owner: formData.name,
//                 email: formData.email,
//                 phone: 'N/A', // Replace with a real phone field if needed
//                 totalProducts: 0, // Replace with actual data if applicable
//                 location: `${formData.city}, ${formData.state}`,
//                 registrationDate: new Date().toISOString().split('T')[0], // Current date
//                 status: 'Active',
//                 blocked: false,
//               });
//               alert('Shop added successfully!');
//               setIsFormOpen(false); // Close form
//             } else {
//               alert('Failed to add shop. Please try again.');
//             }
//           } catch (error) {
//             console.error('Error adding shop:', error);
//             alert('An error occurred. Please try again later.');
//           }
//         };
      
//         const toggleForm = () => {
//           setIsFormOpen(false);
//         };
      
//     // Update the Shops table with the new shop data
//     // addShopFromForm(response.data); // Assuming the API returns the shop data
//     // setIsFormOpen(false); // Close the form
//     // } else {
//     // alert('Failed to add shop. Please try again.');
//     // }
//     // } catch (error) {
//     // console.error('Error adding shop:', error);
//     // alert('An error occurred. Please try again later.');
//     // }
//     // };
    
//     // const toggleForm = () => {
//     // setIsFormOpen(false);
//     // };
    
    
//     return (
//         <div className={styles.main}>
//            <h1 className={styles.heading}>Add Shop</h1>
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
//                     <div className={styles.passwordInput}>
//                         <input type={showPassword ? "text" : "password"} id="password" name="password" />
//                         <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>{showPassword ? <FaEye/> :<FaEyeSlash/>}</span>
//                     </div>
//                 </div>
                
//                 <div className={styles.confirmPassword}>
//                     <label className={styles.label}>Confirm Password :</label>
//                     <div className={styles.pass1}>
//                         <input type="password" id="confirmPassword" name="confirmPassword" />
//                     </div>
//                 </div>
//                 </div>
                
                
//             </div>
//             <button className={styles.bt} type="submit">Submit</button>
//         </div>
//     );
// }

// export default AddShopForm;








// import React, { useState } from 'react';
// import styles from '../../styles/shops.module.css';
// import { FaEye, FaEyeSlash} from 'react-icons/fa';
// import { callAPI } from '../../services/callAPIFunction';
// import { warehouseEndPoints } from '../../services/apiEndPoints';


// const AddShopForm=({ setIsFormOpen, addShopFromForm }) => {
// const [showPassword, setShowPassword] = useState(false);



// const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     shopName: '',
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

// });

// const togglePasswordVisibility = () => {
// setShowPassword(!showPassword);
// }

// const handleInputChange = (e) => {
// const { name, value } = e.target;
// setFormData({ ...formData, [name]: value });
// };
// const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files });
//   };

// const handleSubmit = async (e) => {
// e.preventDefault();

// try {
// const response = await callAPI(
// 'POST',
// `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
// formData
// );

// if (response.status === 200) {
// // Update Shops table
// addShopFromForm({
// id: Date.now(), // Temporary ID for demonstration
// name: formData.shopName,
// owner: formData.name,
// email: formData.email,
// phone: 'N/A', // Replace with a real phone field if needed
// totalProducts: 0, // Replace with actual data if applicable
// location: `${formData.city}, ${formData.state}`,
// registrationDate: new Date().toISOString().split('T')[0], // Current date
// status: 'Active',
// blocked: false,
// });
// alert('Shop added successfully!');
// setIsFormOpen(false); // Close form
// } else {
// alert('Failed to add shop. Please try again.');
// }
// } catch (error) {
// console.error('Error adding shop:', error);
// alert('An error occurred. Please try again later.');
// }
// };

// const toggleForm = () => {
// setIsFormOpen(false);
// };




import React, { useState } from 'react';
import styles from '../../styles/shops.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { callAPI } from '../../services/callAPIFunction';
import { warehouseEndPoints } from '../../services/apiEndPoints';

const AddShopForm = ({ setIsFormOpen, addShopFromForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: '',
    ownerEmail: '',
    warehouseName: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    password: '',
    confirmPassword: '',
    longitude:'',
    latitude:'',
    // otp:'',
  });

  const [files, setFiles] = useState({
    image: null,
    warehouseImages: [],
    aadhaarImage: null,
    panImage: null,
    passbookImage: null,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    if (name === 'warehouseImages') {
      // Handle multiple file selection
      setFiles({ ...files, [name]: Array.from(selectedFiles) });
    } else {
      // Handle single file selection
      setFiles({ ...files, [name]: selectedFiles[0] });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare formData for multipart upload
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      Object.entries(files).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => formDataToSend.append(key, file));
        } else if (value) {
          formDataToSend.append(key, value);
        } 
      });

        // Retrieve and parse the token from localStorage
      const token = localStorage.getItem('token'); 
    //   if (token) {
    //       console.log('Token:', token); // Logs the token to the console
    //   } else {  
    //       console.log('No token found in localStorage.');
    //   }
    if (!token){
        alert('Token is missing. Please log in admin');
        return;
    }
    //Send the API request
      
      const response = await callAPI(
        'POST',
        `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
        formDataToSend,
        {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // use the parsed token
        }
      );

      if (response.status === 200) {
        addShopFromForm({
          id: Date.now(), // Temporary ID for demonstration
          name: formData.warehouseName,
          owner: formData.ownerName,
          email: formData.ownerEmail,
          //phone: 'N/A', // Replace with a real phone field if needed
          //totalProducts: 0, // Replace with actual data if applicable
          location: `${formData.city}, ${formData.state}`,
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
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.email}>
            <label className={styles.label}>Shop Owner Email:</label>
            <input
              type="text"
              id="ownerEmail"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.shopName}>
            <label className={styles.label}>Shop Name:</label>
            <input
              type="text"
              id="warehouseName"
              name="warehouseName"
              value={formData.warehouseName}
              onChange={handleInputChange}
            />
          </div>
          
          {/* Add other fields similarly */}
          
{/* Address Inputs */}
<div className={styles.address}>
<label className={styles.label}>Street Address :</label>
<input type="text" id="street" name="street"  value={formData.street}
              onChange={handleInputChange}/>
</div>

<div className={styles.city}>
<label className={styles.label}>City :</label>
<input type="text" id="city" name="city"  value={formData.city}
              onChange={handleInputChange}/>
</div>

<div className={styles.state}>
<label className={styles.label}>State :</label>
<input type="text" id="state" name="state"   value={formData.state}
              onChange={handleInputChange}/>
</div>

<div className={styles.pinCode}>
<label className={styles.label}>Pin Code :</label>
<input type="number" id="pinCode" name="pinCode"  value={formData.pinCode}
              onChange={handleInputChange} />
</div>

{/* Profile Image Upload */}
<div className={styles.profileImage}>
<label className={styles.label}>Profile Image :</label>
<input type="file" id="image" name="image" accept="image/*" 
              onChange={handleFileChange}/>
</div>

{/* Warehouse Images Upload */}
<div className={styles.warehouseImages}>
<label className={styles.label}>Warehouse Images :</label>
<input type="file" id="warehouseImage" name="warehouseImage" accept="image/*" multiple 
              onChange={handleFileChange} />
</div>
</div>
<div className="box2">
{/* Aadhaar Card Upload */}
<div className={styles.aadhaarCard}>
<label className={styles.label}>Aadhaar Card :</label>
<input type="file" id="aadhaarImage" name="aadhaarImage" accept="image/*" 
              onChange={handleFileChange}/>
</div>

{/* PAN Card Upload */}
<div className={styles.panCard}>
<label className={styles.label}>PAN Card :</label>
<input type="file" id="panImage" name="panImage" accept="image/*"
              onChange={handleFileChange}/>
</div>

{/* Passbook Upload */}
<div className={styles.passbook}>
<label className={styles.label}>Passbook Image :</label>
<input type="file" id="passbookImage" name="passbookImage" accept="image/*"  
              onChange={handleFileChange}/>
</div>

{/* Bank Details */}
<div className={styles.accountHolderName}>
<label className={styles.label}>Account Holder Name :</label>
<input type="text" id="accountHolderName" name="accountHolderName"  value={formData.accountHolderName}
              onChange={handleInputChange}/>
</div>

<div className={styles.accountNumber}>
<label className={styles.label}>Account Number :</label>
<input type="text" id="accountNumber" name="accountNumber"  value={formData.accountNumber}
              onChange={handleInputChange}/>
</div>

<div className={styles.ifscCode}>
<label className={styles.label}>IFSC Code :</label>
<input type="text" id="ifscCode" name="ifscCode"  value={formData.ifscCode}
              onChange={handleInputChange}/>
</div>

<div className={styles.bankName}>
<label className={styles.label}>Bank Name :</label>
<input type="text" id="bankName" name="bankName"  value={formData.bankName}
              onChange={handleInputChange}/>
</div>

{/* Password Fields */}
<div className={styles.password}>
<label className={styles.label}>Password :</label>
<div className={styles.passwordInput}>
<input type={showPassword ? "text" : "password"} id="password" name="password"  value={formData.password}
              onChange={handleInputChange}/>
<span className={styles.eyeIcon} onClick={togglePasswordVisibility}>{showPassword ? <FaEye/> :<FaEyeSlash/>}</span>
</div>
</div>

<div className={styles.confirmPassword}>
<label className={styles.label}>Confirm Password :</label>
<div className={styles.pass1}>
<input type="password" id="confirmPassword" name="confirmPassword"  value={formData.confirmPassword}
              onChange={handleInputChange}/>
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







// import { callAPI } from '../../utils/callAPIFunction';
// import { warehouseEndPoints } from '../../utils/apiEndPoints';

// function AddShopForm({ setIsFormOpen, addShopFromForm }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         shopName: '',
//         streetAddress: '',
//         city: '',
//         state: '',
//         pinCode: '',
//         accountHolderName: '',
//         accountNumber: '',
//         ifscCode: '',
//         bankName: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await callAPI(
//                 'POST',
//                 `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.warehouseLogin}`,
//                 formData
//             );

//             if (response.status === 200) {
//                 // Update the Shops table with the new shop data
//                 addShopFromForm(response.data); // Assuming the API returns the shop data
//                 setIsFormOpen(false); // Close the form
//             } else {
//                 alert('Failed to add shop. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error adding shop:', error);
//             alert('An error occurred. Please try again later.');
//         }
//     };

//     const toggleForm = () => {
//         setIsFormOpen(false);
//     };

//     return (
//         <div className={styles.main}>
//             <h1 className={styles.heading}>Add Shop</h1>
//             <div className={styles.box}>
//                 <p className={styles.cross} onClick={toggleForm}>X</p>
//                 <form onSubmit={handleSubmit}>
//                     <div className={styles.box1}>
//                         <div className={styles.name}>
//                             <label className={styles.label}>Shop Owner Name :</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className={styles.email}>
//                             <label className={styles.label}>Shop Owner Email :</label>
//                             <input
//                                 type="text"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className={styles.shopName}>
//                             <label className={styles.label}>Shop Name :</label>
//                             <input
//                                 type="text"
//                                 name="shopName"
//                                 value={formData.shopName}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         {/* Other inputs */}
//                     </div>
//                     <button className={styles.bt} type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default AddShopForm;




// import React, { useState } from 'react';
// import styles from '../../styles/shops.module.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { callAPI } from '../../services/callAPIFunction';
// import { warehouseEndPoints } from '../../services/apiEndPoints';

// const AddShopForm = ({ setIsFormOpen, addShopFromForm }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     ownerName: '',
//     ownerEmail: '',
//     warehouseName: '',
//     street: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     accountHolderName: '',
//     accountNumber: '',
//     ifscCode: '',
//     bankName: '',
//     password: '',
//     confirmPassword: '',
//     longitude: '',
//     latitude: '',
//     // otp: '',
//   });

//   const [files, setFiles] = useState({
//     image: null,
//     warehouseImages: [],
//     aadhaarImage: null,
//     panImage: null,
//     passbookImage: null,
//   });

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files: selectedFiles } = e.target;
//     if (name === 'warehouseImages') {
//       setFiles({ ...files, [name]: Array.from(selectedFiles) });
//     } else {
//       setFiles({ ...files, [name]: selectedFiles[0] });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });
//       Object.entries(files).forEach(([key, value]) => {
//         if (Array.isArray(value)) {
//           value.forEach((file) => formDataToSend.append(key, file));
//         } else if (value) {
//           formDataToSend.append(key, value);
//         }
//       });

//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert('Token is missing. Please log in.');
//         return;
//       }

//       const response = await callAPI(
//         'POST',
//         `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
//         formDataToSend,
//         {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         }
//       );

//       if (response.status === 200) {
//         const newShop = response.data;
//         addShopFromForm({
//           id: newShop.id,
//           name: newShop.warehouseName,
//           owner: newShop.ownerName,
//           email: newShop.ownerEmail,
//           // phone: newShop.phone || 'N/A',
//           // totalProducts: newShop.totalProducts || 0,
//           location: `${newShop.city}, ${newShop.state}`,
//           registrationDate: newShop.registrationDate,
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
//           {/* Owner Details */}
//           <div className={styles.inputGroup}>
//             <label>Owner Name:</label>
//             <input
//               type="text"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Owner Email:</label>
//             <input
//               type="email"
//               name="ownerEmail"
//               value={formData.ownerEmail}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {/* Warehouse Details */}
//           <div className={styles.inputGroup}>
//             <label>Warehouse Name:</label>
//             <input
//               type="text"
//               name="warehouseName"
//               value={formData.warehouseName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Street:</label>
//             <input
//               type="text"
//               name="street"
//               value={formData.street}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>State:</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Pin Code:</label>
//             <input
//               type="text"
//               name="pinCode"
//               value={formData.pinCode}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {/* Bank Details */}
//           <div className={styles.inputGroup}>
//             <label>Account Holder Name:</label>
//             <input
//               type="text"
//               name="accountHolderName"
//               value={formData.accountHolderName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Account Number:</label>
//             <input
//               type="text"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>IFSC Code:</label>
//             <input
//               type="text"
//               name="ifscCode"
//               value={formData.ifscCode}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Bank Name:</label>
//             <input
//               type="text"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* Password */}
//           <div className={styles.inputGroup}>
//             <label>Password:</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             <span onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* Coordinates */}
//           <div className={styles.inputGroup}>
//             <label>Longitude:</label>
//             <input
//               type="text"
//               name="longitude"
//               value={formData.longitude}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Latitude:</label>
//             <input
//               type="text"
//               name="latitude"
//               value={formData.latitude}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* File Uploads */}
//           <div className={styles.inputGroup}>
//             <label>Shop Image:</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Warehouse Images:</label>
//             <input
//               type="file"
//               name="warehouseImages"
//               multiple
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Aadhaar Image:</label>
//             <input
//               type="file"
//               name="aadhaarImage"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>PAN Image:</label>
//             <input
//               type="file"
//               name="panImage"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Passbook Image:</label>
//             <input
//               type="file"
//               name="passbookImage"
//               onChange={handleFileChange}
//             />
//           </div>
          
//           {/* <div className={styles.inputGroup}>
//             <label>OTP:</label>
//             <input
//               type="text"
//               name="otp"
//               value={formData.otp}
//               onChange={handleInputChange}
//             />
//           </div> */}
//           {/* Submit */}
//           <button type="submit" className={styles.bt}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddShopForm;



// import React, { useState } from 'react';
// import styles from '../../styles/shops.module.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { callAPI } from '../../services/callAPIFunction';
// import { warehouseEndPoints } from '../../services/apiEndPoints';

// const AddShopForm = ({ setIsFormOpen, addShopFromForm }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     ownerName: '',
//     ownerEmail: '',
//     warehouseName: '',
//     street: '',
//     city: '',
//     state: '',
//     pinCode: '',
//     accountHolderName: '',
//     accountNumber: '',
//     ifscCode: '',
//     bankName: '',
//     password: '',
//     confirmPassword: '',
//     longitude: '',
//     latitude: '',
//   });

//   const [files, setFiles] = useState({
//     image: null,
//     warehouseImages: [],
//     aadhaarImage: null,
//     panImage: null,
//     passbookImage: null,
//   });

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files: selectedFiles } = e.target;
//     if (name === 'warehouseImages') {
//       setFiles({ ...files, [name]: Array.from(selectedFiles) });
//     } else {
//       setFiles({ ...files, [name]: selectedFiles[0] });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value) formDataToSend.append(key, value);
//       });
//       Object.entries(files).forEach(([key, value]) => {
//         if (Array.isArray(value)) {
//           value.forEach((file) => formDataToSend.append(key, file));
//         } else if (value) {
//           formDataToSend.append(key, value);
//         }
//       });

//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert('Token is missing. Please log in.');
//         return;
//       }

//       const response = await callAPI(
//         'POST',
//         `${import.meta.env.VITE_API_BASE_URL}${warehouseEndPoints.createWarehouse}`,
//         formDataToSend,
//         {
//           Authorization: `Bearer ${token}`,
//         }
//       );

//       if (response.status === 200) {
//         const newShop = response.data;
//         addShopFromForm({
//           id: newShop.id,
//           name: newShop.warehouseName,
//           owner: newShop.ownerName,
//           email: newShop.ownerEmail,
//           location: `${newShop.city}, ${newShop.state}`,
//           registrationDate: newShop.registrationDate,
//           status: 'Active',
//           blocked: false,
//         });
//         alert('Shop added successfully!');
//         setIsFormOpen(false);
//       } else {
//         alert(response.data.message || 'Failed to add shop. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error adding shop:', error);
//       alert(error.response?.data?.message || 'An error occurred. Please try again later.');
//     }
//   };

//   const toggleForm = () => setIsFormOpen(false);

//   return (
//     <div className={styles.main}>
//       <h1 className={styles.heading}>Add Shop</h1>
//       <div className={styles.box}>
//         <p className={styles.cross} onClick={toggleForm}>X</p>
//         <form onSubmit={handleSubmit}>
//           {/* Owner Details */}
//           <div className={styles.inputGroup}>
//             <label>Owner Name:</label>
//             <input
//               type="text"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Owner Email:</label>
//             <input
//               type="email"
//               name="ownerEmail"
//               value={formData.ownerEmail}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {/* Warehouse Details */}
//           <div className={styles.inputGroup}>
//             <label>Warehouse Name:</label>
//             <input
//               type="text"
//               name="warehouseName"
//               value={formData.warehouseName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Street:</label>
//             <input
//               type="text"
//               name="street"
//               value={formData.street}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>State:</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Pin Code:</label>
//             <input
//               type="text"
//               name="pinCode"
//               value={formData.pinCode}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {/* Bank Details */}
//           <div className={styles.inputGroup}>
//             <label>Account Holder Name:</label>
//             <input
//               type="text"
//               name="accountHolderName"
//               value={formData.accountHolderName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Account Number:</label>
//             <input
//               type="text"
//               name="accountNumber"
//               value={formData.accountNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>IFSC Code:</label>
//             <input
//               type="text"
//               name="ifscCode"
//               value={formData.ifscCode}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Bank Name:</label>
//             <input
//               type="text"
//               name="bankName"
//               value={formData.bankName}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* Password */}
//           <div className={styles.inputGroup}>
//             <label>Password:</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             <span onClick={togglePasswordVisibility}>
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* Coordinates */}
//           <div className={styles.inputGroup}>
//             <label>Longitude:</label>
//             <input
//               type="text"
//               name="longitude"
//               value={formData.longitude}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Latitude:</label>
//             <input
//               type="text"
//               name="latitude"
//               value={formData.latitude}
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* File Uploads */}
//           <div className={styles.inputGroup}>
//             <label>Shop Image:</label>
//             <input
//               type="file"
//               name="image"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Warehouse Images:</label>
//             <input
//               type="file"
//               name="warehouseImages"
//               multiple
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Aadhaar Image:</label>
//             <input
//               type="file"
//               name="aadhaarImage"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>PAN Image:</label>
//             <input
//               type="file"
//               name="panImage"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Passbook Image:</label>
//             <input
//               type="file"
//               name="passbookImage"
//               onChange={handleFileChange}
//             />
//           </div>
          
//           {/* <div className={styles.inputGroup}>
//             <label>OTP:</label>
//             <input
//               type="text"
//               name="otp"
//               value={formData.otp}
//               onChange={handleInputChange}
//             />
//           {/* Other Form Inputs */}
//           {/* [Add all the input fields as in your original code here...] */}
//           {/* File Uploads */}
          
//           {/* Submit */}
//           <button type="submit" className={styles.bt}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddShopForm;

