import React from 'react'
import styles from '../../styles/subcategory.module.css';
function SubCategoryForm({ setIsFormOpen }) {

    const toggleForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div>
             <div className={styles.row}>
        <p className={styles.cross} onClick={toggleForm}>
          X
        </p>
        <h1 className={styles.heading}> Sub Category</h1>
        <div className={styles.formGroup}>
          <label className={styles.label}>Main Category</label>
          
           <select  className={styles.formControl} name="category">
           <option className={styles.option} value="cake">Select a Category</option>
        <option value="cake">Cake</option>
        <option value="drink">Drink</option>
        <option value="snack">Snack</option>
        <option value="fruits">Fruits</option>
    </select> 
          {/* <label id="password-error" className={styles.error} htmlFor="password" style={{ display: 'none' }}></label> */}
        </div>


        <div className={styles.formGroup}>
          <label className={styles.label}>Sub Category Name</label>
          <input
            type="text"
            className={styles.formControl}
            name="confirm_password"
          /> 
           <label className={styles.label}>Sub Category Title</label>
          <input type='text'
           className={styles.formControl}
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
    )
}

export default SubCategoryForm


