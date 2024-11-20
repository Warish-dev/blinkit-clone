import React from 'react'
import styles from '../../styles/shops.module.css';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";


  
function AddShopForm({setIsFormOpen}) {
    
    const toggleForm = () => {
        setIsFormOpen(false);
      };


    
    return (
        <div className={styles.main}>
        <div className={styles.box}>
            {/* <RxCross2 className={styles.cross} /> */}
            <p className={styles.cross} onClick={toggleForm} >X</p>

            <h1 className={styles.heading}>Add Shop</h1>
            <div className={styles.name}>
                <label>Shop Owner Name  :</label>
                <input
                    type="text"
                    id="name"
                    name="name" />
            </div>
            <div className={styles.email}>
                <label>Shop Owner Email  :</label>
                <input
                    type="text"
                    id="email"
                    name="email" />
            </div>
            <div className={styles.ShopName}>
                <label>Shop Name  :</label>
                <input
                    type="text"
                    id="name"
                    name="name" />

            </div>

            <div className={styles.Address}>
                <label>Street Address  :</label>
                <input
                    type="text"
                    id="address"
                    name="address" />
            </div>
            <div className={styles.Address1}>
                <label>City  :</label>
                <input
                    type="text"
                    id="address"
                    name="address" />
            </div>
            <div className={styles.Address2}>
                <label>State  :</label>
                <input
                    type="text"
                    id="address"
                    name="address" />
            </div>
            <div className={styles.Address3}>
                <label>Pin Code  :</label>
                <input
                    type="number"
                    id="address"
                    name="address" />
            </div>
            
            <div className={styles.password}>
                <label>Password  :</label>
                <div className={styles.pass1}>
                    <input
                        type="password"
                        id="password"
                        name="password" />
                    <div className={styles.icon}>
                        {/* <IoMdEye />
                        <IoIosEyeOff /> */}
                    </div>
                </div>

            </div>
            <div className={styles.ConfirmPassword}>
                <label>Confirm Password  :</label>
                <div className={styles.pass1}>
                    <input
                        type="password"
                        id="password"
                        name="password" />
                    <div className={styles.icon1}>
                        
                    </div>
                </div>

            </div>

            <button className={styles.bt} type='submit'>Submit</button>

        </div>
        </div>
    )
}



export default AddShopForm