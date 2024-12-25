import React, { useState } from "react";
import styles from "../../styles/category.module.css";
import { callAPI } from "../../services/callAPIFunction";
import { categoryEndPoints } from "../../services/apiEndPoints";

const { VITE_API_BASE_URL } = import.meta.env;


function CategoryForm({ setIsFormOpen, addCategory }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryImage: null,
  });

  const toggleForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, categoryImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCategory = {
      id: Date.now(), // Generate a unique ID
      name: formData.name,
      description: formData.description,
      image: formData.categoryImage ? URL.createObjectURL(formData.categoryImage) : null,
    };

    // Add the category locally
    addCategory(newCategory);

    // Optionally make an API call to save the category7
    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    if (formData.categoryImage) {
      form.append("categoryImage", formData.categoryImage);
    }
    console.log("form",form)
    
    try {
      const response = await callAPI(
        "POST",
        `${VITE_API_BASE_URL}${categoryEndPoints.createCategory}`,
        form
      );

      if (response.status === 200 || response.status === 201) {
        alert("Category created successfully!");
      } else {
        alert(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create category!");
    }

    toggleForm(); // Close the form after submission
  };

  return (
    <div className={styles.row}>
      <p className={styles.cross} onClick={toggleForm}>
        X
      </p>
      <h1 className={styles.heading}>Add Category</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Category Name</label>
          <input
            type="text"
            className={styles.formControl1}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Category Title</label>
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
            setFormData({ name: "", description: "", categoryImage: null })
          }
        >
          Clear
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;





