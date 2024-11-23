import React, { useState } from "react";
import styles from "../../styles/profile.module.css";
import profile from '../../assets/warish.jpg'
import EditProfile from '../WareHouse/EditProfile'

const ProfileDetails = () => {

  const [isFormOpen, setIsFormOpen] = useState(false);

// Function to toggle form visibility
const toggleForm = () => {
  setIsFormOpen(true);
};

  return (
    <div className={styles.profileContainer}>

{
        isFormOpen &&
        <EditProfile setIsFormOpen={setIsFormOpen}/>
      } 

      <h1 className={styles.title}>Profile Details</h1>
      <div className={styles.profileCard}>
        <div className={styles.shopInfo}>
          <div className={styles.shopHeader}>
            <div className={styles.logo}>
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
            </div>
            <div className={styles.shopName}>
              <h2>Easy Life</h2>
              <p>ahmawarish869@gmail.com</p>
              {/* <p>
                <span className={styles.rating}>⭐ 5</span> <span className={styles.review}>|  0 Reviews</span>
              </p> */}
              {/* <button className={styles.viewLiveBtn}>View Live</button> */}
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.shopDetails}>
            <div className={styles.product}>
              <p>
                Total products: <b>16</b>
              </p>
              
              <p>
                Total Orders: <b>3</b>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.infoGroup}>
            <p>Name:</p>
            <b>Joynal</b>
          </div>
          <div className={styles.infoGroup}>
            <p>Phone number:</p>
            <b>01100088800</b>
          </div>
          <div className={styles.infoGroup}>
            <p>Email:</p>
            <b>shop@readyecommerce.com</b>
          </div>
          <div className={styles.infoGroup}>
            <p>Address:</p>
            <b>H-59 H Block Sector 63</b>
          </div>
        </div>
        <button className={styles.editBtn} onClick={toggleForm}>Edit</button>
      </div>
     
      <div className={styles.profileContainer1}>
      <div className={styles.profileCard1}>
      <div className={styles.logo1}>
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
              <img
                src={profile} // Replace with your logo URL
                alt="Easy Life Logo"
              />
             
              </div>
            </div>
      </div>
      
    </div>
    
  );
};

export default ProfileDetails;
