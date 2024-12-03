// FullScreenLoader.js
import React from 'react';
// import styles from './FullScreenLoader.module.css'; // Add your styles
import styles from '../../styles/FullScreenLoader.module.css'

const FullScreenLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader1}></div> {/* Add your loader styling */}
      <span class="loader"></span>    </div>
  );
};

export default FullScreenLoader;
