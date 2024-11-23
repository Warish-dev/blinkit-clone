import React from 'react'
import styles from '../../styles/hero.module.css'
import HeroSecImg from '../../assets/HeroSec.png'

import bgHomeImg from '../../assets/bghome.svg'

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
        

            <div className={styles.heroContainer}>

                <div className={styles.textSection}>
                    <h1 className={styles.heading}>
                        Get groceries delivered in minutes!
                    </h1>


                    <p className={styles.subheading}>
                        Quick, fresh, and right at your doorstep.
                    </p>

                    <p className={styles.description}>
                        We offer a wide range of grocery items, snacks, and essentials at your convenience. Our fast delivery service ensures you get what you need, when you need it—whether you're at home or at work.
                    </p>


                    <button className={styles.actionButton}>
                        Order Now
                    </button>
                </div>

                <div className={styles.imageSection}>
                    <img
                        src={HeroSecImg}
                        alt="Groceries"
                        className={styles.heroImage}
                    />
                </div>
                
            </div>

            <img src={bgHomeImg} className={styles.bgImg}/>
       
            

        </div>
    )
}

export default HeroSection