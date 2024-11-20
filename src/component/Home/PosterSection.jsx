
import React from 'react'
import styles from '../../styles/poster.module.css'
import baked from '../../assets/images/baked.png';
import dairy from '../../assets/images/dairy.png';
import health from '../../assets/images/health.png';
import pet from '../../assets/images/pet.png'
import snakes from '../../assets/images/snakes.png'
import vegies from '../../assets/images/vegies.png'
import { Link } from 'react-router-dom';

const PosterSection = () => {
    return (
        <div className={styles.main}>
            <Link to={'PosterItem'}className={styles.image}>
                <img src={baked} alt="dairy" />
            </Link>
            <Link to={'/'} className={styles.image}>
                <img src={dairy} alt="dairy" />
            </Link>
            <Link to={'/'} className={styles.image}>
                <img src={health} alt="Brownies" />
            </Link>
            <Link to={'/'} className={styles.image}>
                <img src={pet} alt="pet" />
            </Link>
            <Link to={'/'} className={styles.image}>
                <img src={snakes} alt="snakes" />
            </Link>
            <Link to={'/'} className={styles.image}>
                <img src={vegies} alt="vegies" />
            </Link>
        </div>       
    )
}
export default PosterSection