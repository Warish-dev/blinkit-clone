// FullScreenLoader.js
import React from 'react';
import styles from '../../styles/FullScreenLoader.module.css'

const FullScreenLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      {/* <div className={styles.loader1}></div> Add your loader styling */}
      <span className={styles.loader}></span>   
       </div>
  );
};

export default FullScreenLoader;
