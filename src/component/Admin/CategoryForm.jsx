
import React, { useState } from "react";
import { BiLeftArrowAlt } from 'react-icons/bi';
import styles from '../../styles/category.module.css';

function CategoryForm({ setIsFormOpen }) {
  // Define the toggleForm function outside the JSX return statement
  const toggleForm = () => {
    setIsFormOpen(false);
  };
       
  

  const [searchTerm, setSearchTerm] = useState('false');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div>
       
      <div className={styles.row}>
        {/* <p className={styles.cross} >
          X
        </p> */}
        <h1 className={styles.heading}>Add Category</h1>
        <div className={styles.formGroup}>
          <label>Category Name</label>
          <input
            type="text"
            className={styles.formControl1}
            name="password"
            id="password"
          />
          {/* <label id="password-error" className={styles.error} htmlFor="password" style={{ display: 'none' }}></label> */}
        </div>


        <div className={styles.formGroup}>
          <label>Category Title</label>
          <input
            type="text"
            className={styles.formControl}
            name="confirm_password"
          />
          <input type='file'
           className={styles.formControl}
           />
          <button type="submit" className={styles.bt}>
            Add
          </button>
          <button type="submit" className={styles.bt1}>
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
