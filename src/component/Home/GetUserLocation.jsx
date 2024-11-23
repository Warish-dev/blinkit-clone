// import React from "react";
// import styles from "../../styles/getUserLocation.module.css"
// import { BiLeftArrowAlt } from 'react-icons/bi'

// const GetUserLocation = ({ setIsLocation }) => {
//   const handleManualInput = () => {
//     alert("Redirecting to manual input...");
//     setIsLocation(true); 
//   };

//   const handleUseCurrentLocation = () => {
//     alert("Using current location...");
//     setIsLocation(true); 
//   };

//   return (
//     <div className={styles.popupOverlay}>
//       <div className={styles.popupContent}>
//       <div onClick={() => { setIsLocation(false) }} className={styles.backBtnContainer}>
//            <BiLeftArrowAlt className={styles.backBtn} />
//                     </div>
      
                    
//         <p className={styles.message}>
//           <span className={styles.icon}>📍</span>your current location.
//         </p>
//         <div className={styles.popupButtons}>
//           <button onClick={handleManualInput} className={styles.manualBtn}>
//             Type manually
//           </button>
//           <button onClick={handleUseCurrentLocation} className={styles.currentBtn}>
//             Use Current Location
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetUserLocation;


import React from "react";
import styles from "../../styles/getUserLocation.module.css";


const GetUserLocation = ({ setIsLocation }) => {
  const handleManualInput = () => {
   alert("Redirecting to manual input...");
    setIsLocation(false); 
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Location fetched! Latitude: ${latitude}, Longitude: ${longitude}`);
          setIsLocation(false);
        },
        (error) => {
          alert("Failed to fetch location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
       
        <p className={styles.message}>
          <span className={styles.icon}>📍</span>Your current location.
        </p>
        <div className={styles.popupButtons}>
        <button onClick={handleUseCurrentLocation} className={styles.currentBtn}>
            Use Current Location
          </button>
          <input type="text" 
          onClick={handleManualInput} placeholder="Type Manually" className={styles.manualBtn}/>
          {/* <button onClick={handleManualInput} className={styles.manualBtn}>
            Type manually
          </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default GetUserLocation;

