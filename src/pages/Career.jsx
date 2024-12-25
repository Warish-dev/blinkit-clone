import React from 'react'
import TopBar from '../component/Sheared/TopBar.jsx'
import Footer from '../component/Sheared/Footer.jsx'
import styles from '../styles/Career.module.css'
import img1 from '../assets/aboutUs/pic1.jpeg'
import img2 from '../assets/aboutUs/pic2.jpeg'

import image2 from '../assets/aboutUs/img4.jpeg'
import banner from '../assets/images/banner2.jpeg'


function Career() {
  return (
    <div>
      <TopBar />
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
          <div className={styles.youtubesection}>
            <h2>What sets us apart</h2>
            <div className={styles.video}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/DxDU7QBNEbM?si=IzRozMOnPkDpxaCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe></div>
          </div>
        <div className={styles.philosophy}>
          <div className={styles.philosophyHeading}><h2>Our shared philosophy</h2></div>
          <div className={styles.philodiv}>
            <div className={styles.philosophyimg}>
              <img src={img1} alt="" /> <h4>Mindsets & leverage points</h4>
              <p>We believe that being a leader is a mindset, much more than it is a title. And
                are codifying the operating principles that leaders at Blinkit follow at all
                times. Learn about how we lead here</p>
            </div>
            <div className={styles.philosophyimg}>
              <img src={img2} alt="" /> <h4>Learning organisation</h4>
              <p>We are a group of people who are constantly learning the skills we need, and
                continuously improving upon ourselves to create the future we desire. Learn about what we value here</p>
            </div>
          </div>
        </div>
        <div className={styles.careerBanner}>
          <img src={banner} alt="" />
        </div>

      </div>
      {/* <div className={styles.careerBanner}></div> */}
      </div>


      <Footer />
    </div>
  )
}

export default Career
