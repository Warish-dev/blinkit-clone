import React from "react";
import styles from "../../styles/profile.module.css";

const ProfileDetails = () => {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>Profile Details</h1>
      <div className={styles.profileCard}>
        <div className={styles.shopInfo}>
          <div className={styles.shopHeader}>
            <div className={styles.logo}>
              <img
                src="https://via.placeholder.com/100" // Replace with your logo URL
                alt="Easy Life Logo"
              />
            </div>
            <div className={styles.shopName}>
              <h2>Easy Life</h2>
              <p>
                <span className={styles.rating}>⭐ 5</span> <span className={styles.review}>|  0 Reviews</span>
              </p>
              <button className={styles.viewLiveBtn}>View Live</button>
            </div>
          </div>
          <div className={styles.shopDetails}>
            <div>
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
        </div>
        <button className={styles.editBtn}>Edit</button>
      </div>
    </div>
  );
};

export default ProfileDetails;
