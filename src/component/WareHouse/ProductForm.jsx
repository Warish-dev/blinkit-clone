// import React, { useState } from 'react';
// import styles from '../../styles/addProduct.module.css';

// const AddProduct = ({ setIsFormOpen }) => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [previews, setPreviews] = useState([]);

//   // Toggle form visibility
//   const toggleForm = () => {
//     setIsFormOpen(false);
//   };

//   // Handle image selection
//   const handleImageChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedImages(files);

//     // Generate previews for the selected images
//     const imagePreviews = files.map((file) => URL.createObjectURL(file));
//     setPreviews(imagePreviews);
//   };

//   // Handle image upload
//   const uploadImages = async () => {
//     if (selectedImages.length === 0) {
//       alert('Please select images to upload.');
//       return;
//     }

//     const formData = new FormData();
//     selectedImages.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await fetch('/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert('Upload successful!');
//         console.log(data);
//       } else {
//         alert('Upload failed.');
//       }
//     } catch (error) {
//       alert('Upload failed.');
//       console.error(error);
//     }
//   };

//   // Handle form submission
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     alert('Form submitted with additional product details.');
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.cross} onClick={toggleForm}>
//         X
//       </p>
//       <h2 className={styles.header}>Add New Product</h2>
//       <form className={styles.form} onSubmit={handleFormSubmit}>
//         {/* Product Details */}
//         <div className={styles.section}>
//           <label className={styles.lable}>Product Name:</label>
//           <input type="text" className={styles.input} required />
//           <label className={styles.lable}>Product Description:</label>
//           <textarea className={styles.textarea} required></textarea>
//         </div>

//         {/* General Information */}
//         <div className={styles.section}>
//           <h3>General Information</h3>
//           <div className={styles.grid}>
//             <div>
//               <label className={styles.lable}>Category ID:</label>
//               <input type="text" className={styles.select}/>
//               {/* <select className={styles.select} required>
//                 <option value="">Select Category</option>
//                 <option value="electronics">Electronics</option>
//                 <option value="clothing">Clothing</option>
//               </select> */}
//             </div>
//             <div>
//               <label className={styles.lable}>SubCategory ID:</label>
//               <input type="text" className={styles.select} />
//               {/* <select className={styles.select} required>
//                 <option value="">Select Brand</option>
//                 <option value="brandA">Brand A</option>
//                 <option value="brandB">Brand B</option>
//               </select> */}

//             </div>
//             <div>
//               {/* <label className={styles.lable}>SKU:</label>
//               <input type="text" className={styles.input} required /> */}
//                <label className={styles.lable}>Unit ID:</label>
//               <input type="text" className={styles.input} required />
//             </div>
//             <div>
//               {/* <label className={styles.lable}>SKU:</label>
//               <input type="text" className={styles.input} required /> */}
//                <label className={styles.lable}>Stock:</label>
//               <input type="text" className={styles.input} required />
//             </div>
//           </div>
//         </div>

//         {/* Price Information */}
//         <div className={styles.section}>
//           <h3>Price Information</h3>
//           <div className={styles.grid}>
//             <div>
//               <label className={styles.lable}>Price:</label>
//               <input type="number" className={styles.input} required />
//             </div>
//             <div>
//               <label className={styles.lable}>Weight:</label>
//               <input type="number" className={styles.input} required />
//             </div>
//           </div>
//         </div>

//         {/* Image Upload */}
//         <div className={styles.section}>
//           <h3>Upload Multiple Images</h3>
//           <input
//             type="file"
//             id="imageUpload"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className={styles.preview}>
//             {previews.map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`preview-${index}`}
//                 style={{ width: '100px', margin: '5px', borderRadius: '8px' }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Submit */}
//         <div className={styles.actions}>
//           <button type="reset" className={styles.buttonReset}>
//             Reset
//           </button>
//           <button type="submit" className={styles.buttonSubmit}>
//             Submit
//           </button>
//           <button
//             type="button"
//             className={styles.buttonUpload}
//             onClick={uploadImages}
//           >
//             Upload Images
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;













import React, { useState } from "react";
import styles from "../../styles/addProduct.module.css";

import { callAPI } from "../../services/callAPIFunction"; // Import API call function
import { productEndPoints } from "../../services/apiEndPoints"; // Import endpoint config

const { VITE_API_BASE_URL } = import.meta.env;

const AddProduct = ({ setIsFormOpen, addProduct }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: "",
    subCategoryId: "",
    unitId: "",
    price: "",
    weight: "",
    stock: "",
    images: [],
  });
  const [previews, setPreviews] = useState([]);

  const toggleForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(imagePreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("categoryId", formData.categoryId);
    form.append("subCategoryId", formData.subCategoryId);
    form.append("unitId", formData.unitId);
    form.append("price", formData.price);
    form.append("weight", formData.weight);
    form.append("stock", formData.stock);
    formData.images.forEach((images) => {
      form.append("images", images);
    });

    // Log FormData content for debugging
  for (let [key, value] of form.entries()) {
    console.log(key, value);
  }

    try {
      const response = await callAPI(
        "POST",
        `${VITE_API_BASE_URL}${productEndPoints.addProduct}`,
        form
      );
      
    //   const token = localStorage.getItem("token"); // Retrieve token
    // const response = await callAPI("POST",
    //   `${VITE_API_BASE_URL}${productEndPoints.addProduct}`,
    //   form,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
        
    //   }
      
    // );
    // console.log("Request Headers:", headers);
    

      if (response.status === 200 || response.status === 201) {
        addProduct({
          id: Date.now(),
          title: formData.title,
          description: formData.description,
          categoryId: formData.categoryId,
          subCategoryId: formData.subCategoryId,
          unitId: formData.unitId,
          price: formData.price,
          weight: formData.weight,
          stock: formData.stock,
          images: previews,
        });

        alert("Product added successfully!");
        setFormData({
          title: "",
          description: "",
          categoryId: "",
          subCategoryId: "",
          unitId: "",
          price: "",
          weight: "",
          stock: "",
          images: [],
        });
        setPreviews([]);
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      // console.error("Error:", error);
      console.error("Error:",error.response?.data || error.message);
      alert("Failed to add product!");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.cross} onClick={toggleForm}>
        X
      </p>
      <h2 className={styles.header}>Add New Product</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.section}>
          <label className={styles.label}>Product Name:</label>
          <input
            type="text"
            className={styles.input}
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <label className={styles.label}>Product Description:</label>
          <textarea
            className={styles.textarea}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className={styles.section}>
          <h3>General Information</h3>
          <div className={styles.grid}>
            <div>
              <label className={styles.label}>Category ID:</label>
              {/* <select className={styles.select}name="categoryId" value={formData.categoryId} onChange={handleInputChange} required>
                <option value="">Category ID</option>
                <option value="category1">category 1</option>
                <option value="category1">category 2</option>
                <option value="category1">category 3</option>
              </select> */}
              <input
                type="text"
                className={styles.select}
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={styles.label}>SubCategory ID:</label>
              {/* <select className={styles.select}name="categoryId" value={formData.categoryId} onChange={handleInputChange} required>
                <option value="">SubCategory ID</option>
                <option value="category1">category 1</option>
                <option value="category1">category 2</option>
                <option value="category1">category 3</option>
              </select> */}
              <input
                type="text"
                className={styles.select}
                name="subCategoryId"
                value={formData.subCategoryId}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className={styles.label}>Unit ID:</label>
              {/* <select className={styles.select}name="categoryId" value={formData.categoryId} onChange={handleInputChange} required>
                <option value="">Unit ID</option>
                <option value="category1">Unit 1</option>
                <option value="category1">Unit 2</option>
                <option value="category1">Unit 3</option>
              </select> */}
              <input
                type="text"
                className={styles.input}
                name="unitId"
                value={formData.unitId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={styles.label}>Stock:</label>
              <input
                type="text"
                className={styles.input}
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Price Information</h3>
          <div className={styles.grid}>
            <div>
              <label className={styles.label}>Price:</label>
              <input
                type="number"
                className={styles.input}
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className={styles.label}>Weight:</label>
              <input
                type="number"
                className={styles.input}
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Upload Multiple Images</h3>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <div className={styles.preview}>
            {previews.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`preview-${index}`}
                style={{ width: "100px", margin: "5px", borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button type="reset" className={styles.buttonReset}>
            Reset
          </button>
          <button type="submit" className={styles.buttonSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct