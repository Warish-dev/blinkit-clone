import React from 'react'
import TopBar from '../component/Sheared/TopBar.jsx'
import Footer from '../component/Sheared/Footer.jsx'
import styles from'../styles/Career.module.css'
import image2 from '../assets/aboutUs/img4.jpeg'


function Career() {
  return (
    <div>
    <TopBar/>  
    <div className={styles.CareerHero}>
        <img src={image2} alt="Career Hero" className={styles.CareerImage} />
      </div>
      <div className={styles.mainSection}>
        <div className={styles.section1}>
            <div className={styles.careerheading}>
                <h2>Better lives for more people </h2>
                <p>To actualize our vision of better lives for more people, we use proprietary technology to empower Indians – by creating increased convenience, more savings, flourishing businesses, and stronger communities. All this, while making everyday shopping a smoother, happier experience for India. We are always looking for driven individuals to join us in making instant commerce indistinguishable from magic. 

</p>

            </div>
        </div>

      </div>

    <Footer/>    
    </div>
  )
}

export default Career
