  import React, { useState } from 'react';
import styles from '../../styles/addProduct.module.css';

const AddProduct = ({ setIsFormOpen }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen(false);
  };

  // Handle image selection
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);

    // Generate previews for the selected images
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(imagePreviews);
  };

  // Handle image upload
  const uploadImages = async () => {
    if (selectedImages.length === 0) {
      alert('Please select images to upload.');
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert('Upload successful!');
        console.log(data);
      } else {
        alert('Upload failed.');
      }
    } catch (error) {
      alert('Upload failed.');
      console.error(error);
    }
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with additional product details.');
  };

  return (
    <div className={styles.container}>
      <p className={styles.cross} onClick={toggleForm}>
        X
      </p>
      <h2 className={styles.header}>Add New Product</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {/* Product Details */}
        <div className={styles.section}>
          <label className={styles.lable}>Product Name:</label>
          <input type="text" className={styles.input} required />
          <label className={styles.lable}>Product Description:</label>
          <textarea className={styles.textarea} required></textarea>
        </div>

        {/* General Information */}
        <div className={styles.section}>
          <h3>General Information</h3>
          <div className={styles.grid}>
            <div>
              <label className={styles.lable}>Category:</label>
              <select className={styles.select} required>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
              </select>
            </div>
            <div>
              <label className={styles.lable}>Brand:</label>
              <select className={styles.select} required>
                <option value="">Select Brand</option>
                <option value="brandA">Brand A</option>
                <option value="brandB">Brand B</option>
              </select>
            </div>
            <div>
              <label className={styles.lable}>SKU:</label>
              <input type="text" className={styles.input} required />
            </div>
          </div>
        </div>

        {/* Price Information */}
        <div className={styles.section}>
          <h3>Price Information</h3>
          <div className={styles.grid}>
            <div>
              <label className={styles.lable}>Buying Price:</label>
              <input type="number" className={styles.input} required />
            </div>
            <div>
              <label className={styles.lable}>Selling Price:</label>
              <input type="number" className={styles.input} required />
            </div>
          </div>
        </div>

        {/* Image Upload */}
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
                style={{ width: '100px', margin: '5px', borderRadius: '8px' }}
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className={styles.actions}>
          <button type="reset" className={styles.buttonReset}>
            Reset
          </button>
          <button type="submit" className={styles.buttonSubmit}>
            Submit
          </button>
          <button
            type="button"
            className={styles.buttonUpload}
            onClick={uploadImages}
          >
            Upload Images
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

