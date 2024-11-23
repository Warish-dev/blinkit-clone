import React, { useState } from "react";
import styles from "../../styles/profileform.module.css";

const ProfileForm = ({setIsFormOpen}) => {


    const toggleForm = () => {
        setIsFormOpen(false);
      };


  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Profile updated: \n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className={styles.container}>
        <p className={styles.cross} onClick={toggleForm} >X</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Edit Profile</h1>

        {/* Profile Photo */}
        <div className={styles.profilePhotoContainer}>
          <label htmlFor="profilePhoto" className={styles.photoLabel}>
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile Preview"
                className={styles.profilePhoto}
              />
            ) : (
              <div className={styles.photoPlaceholder}>Upload Photo</div>
            )}
          </label>
          <input
            id="profilePhoto"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
        </div>

        {/* Name Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Address Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
