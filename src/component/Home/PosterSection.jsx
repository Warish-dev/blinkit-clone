
import React from 'react'
import styles from '../../styles/poster.module.css'
import baked from '../../assets/images/baked.png';
import babycare from '../../assets/images/babycare.png';
import pharma from '../../assets/images/health.png';
import pet from '../../assets/images/pet.png'
import { Link } from 'react-router-dom';

const PosterSection = () => {
    return (
        <div className={styles.main}>
            <Link to={'category/1'}className={styles.image}>
                <img src={baked} alt="dairy" />
            </Link>
            <Link to={'category/2'} className={styles.image}>
                <img src={pharma} alt="" />
            </Link>
            <Link to={'category/3'} className={styles.image}>
                <img src={babycare} alt="Brownies" />
            </Link>
            <Link to={'category/4'} className={styles.image}>
                <img src={pet} alt="pet" />
            </Link>
          
        </div>       
    )
}
export default PosterSection