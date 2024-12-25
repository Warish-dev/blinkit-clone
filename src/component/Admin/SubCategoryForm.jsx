import React, { useState } from "react";
import styles from "../../styles/subcategory.module.css";
import { callAPI } from "../../services/callAPIFunction";
import { subCategoryEndPoints } from "../../services/apiEndPoints";

const { VITE_API_BASE_URL } = import.meta.env;

function SubCategoryForm({ setIsFormOpen, addSubCategory }) {
  const [formData, setFormData] = useState({
    categoryId: "",
    name: "",
    description: "",
    images: null,
  });
//  console.log("formData",formData)

  const toggleForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `${VITE_API_BASE_URL}${subCategoryEndPoints.craeteSubCategory}`;
    console.log("API URL:", apiUrl);

    const form = new FormData();
    form.append("categoryId", formData.categoryId);
    form.append("name", formData.name);
    form.append("description", formData.description);
    if (formData.images) {
      form.append("images", formData.images);
    }
    // console.log("form",form);
    
    try {
      const response = await callAPI("POST", apiUrl, form);

      // Log the response for debugging
      console.log("Response:", response);

      if (response.status === 200 || response.status === 201) {
        alert("Subcategory created successfully!");

        // Update the parent state with the new subcategory
        addSubCategory({
          id: Date.now(), // Simulate unique ID for now
          categoryId: formData.categoryId,
          name: formData.name,
          description: formData.description,
          images: formData.images ? URL.createObjectURL(formData.images) : null,
        });

        // Clear the form data
        setFormData({
          categoryId: "",
          name: "",
          description: "",
          images: null,
        });
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create subcategory!");
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <p className={styles.cross} onClick={toggleForm}>
          X
        </p>
        <h1 className={styles.heading}>Sub Category</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>CategoryId</label>
            <input
              type="text"
              className={styles.formControl}
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Sub Category Name</label>
            <input
              type="text"
              className={styles.formControl}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <input
              type="text"
              className={styles.formControl}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Image</label>
            <input
              type="file"
              className={styles.formControl}
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className={styles.bt}>
            Add
          </button>
          <button
            type="button"
            className={styles.bt1}
            onClick={() =>
              setFormData({
                categoryId: "",
                name: "",
                description: "",
                images: null,
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

export default SubCategoryForm;




