import React from "react";
import styles from "../../styles/getUserLocation.module.css"
import { BiLeftArrowAlt } from 'react-icons/bi'

const GetUserLocation = ({ setIsLocation }) => {
  const handleManualInput = () => {
    alert("Redirecting to manual input...");
    setIsLocation(true); // Close the popup
  };

  const handleUseCurrentLocation = () => {
    alert("Using current location...");
    setIsLocation(true); // Close the popup
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
      <div onClick={() => { setIsLocation(false) }} className={styles.backBtnContainer}>
           <BiLeftArrowAlt className={styles.backBtn} />
                    </div>
      
                    
        <p className={styles.message}>
          <span className={styles.icon}>📍</span>your current location.
        </p>
        <div className={styles.popupButtons}>
          <button onClick={handleManualInput} className={styles.manualBtn}>
            Type manually
          </button>
          <button onClick={handleUseCurrentLocation} className={styles.currentBtn}>
            Use Current Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetUserLocation;
