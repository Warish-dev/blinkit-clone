
import React, { useState } from "react";
import styles from "../../styles/category.module.css";

import { callAPI } from "../../services/callAPIFunction"; // Import API call function

import { categoryEndPoints } from "../../services/apiEndPoints"; // Import endpoint config

const {VITE_API_BASE_URL} = import.meta.env 

function CategoryForm({ setIsFormOpen }) {
  const [formData, setFormData] = useState({
    categoryName: "",
    categoryTitle: "",
    categoryImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, categoryImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)
    const form = new FormData();
    form.append("name", formData.categoryName);
    form.append("description", formData.categoryTitle);
    if (formData.categoryImage) form.append("categoryImage", formData.categoryImage);

    try {
      const response = await callAPI(
        "POST",
        `${VITE_API_BASE_URL}${categoryEndPoints.createCategory}`,
        form,
      );

      console.log(response)

      if (response.status === 200 || response.status === 201) {
        alert("Category created successfully!");
        console.log(response.data);
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create category!");
    }
  };

  return (
    <div>
      <div className={styles.row}>

        <p className={styles.cross} onClick={toggleForm} >
          X
        </p>

        <h1 className={styles.heading}>Add Category</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Category Name</label>
            <input
              type="text"
              className={styles.formControl1}
              name="categoryName"
              value={formData.categoryName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category Title</label>
            <input
              type="text"
              className={styles.formControl}
              name="categoryTitle"
              value={formData.categoryTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Category Image</label>
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
              setFormData({ categoryName: "", categoryTitle: "", categoryImage: null })
            }
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
