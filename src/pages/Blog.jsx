import React from 'react';
import TopBar from '../component/Sheared/TopBar';
import Footer from '../component/Sheared/Footer';
import image from '../assets/aboutUs/img4.jpeg';
import styles from '../styles/blog.module.css';
import img1 from '../assets/aboutUs/phil3.jpeg';
import img2 from '../assets/aboutUs/phil1.jpeg';

function Career() {
  return (
    <div>
      <TopBar />
      
      {/* Hero Section */}
      <div className={styles.BlogHero}>
        <img src={image} alt="Career Hero" className={styles.heroImage} />
      </div>

      {/* Main Content */}
      <div className={styles.container2}>
        <div className={styles.blogContainer}>
          
          {/* Blog Content Section */}
          <div className={styles.blogdiv}>
            
            {/* Blog Post 1 */}
            <div className={styles.blogItem}>
              <img src={img1} alt="Mindsets & leverage points" className={styles.blogImage} />
              <h4 className={styles.blogTitle}>Mindsets & Leverage Points</h4>
              <p className={styles.blogDescription}>
                We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at Blinkit follow at all times. Learn about how we lead here.
              </p>
            </div>

            {/* Blog Post 2 */}
            <div className={styles.blogItem}>
              <img src={img2} alt="Learning Organisation" className={styles.blogImage} />
              <h4 className={styles.blogTitle}>Learning Organisation</h4>
              <p className={styles.blogDescription}>
                We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire. Learn about what we value here.
              </p>
            </div>
            
          </div>
          <div className={styles.blogdiv}>
            
            {/* Blog Post 1 */}
            <div className={styles.blogItem}>
              <img src={img1} alt="Mindsets & leverage points" className={styles.blogImage} />
              <h4 className={styles.blogTitle}>Mindsets & Leverage Points</h4>
              <p className={styles.blogDescription}>
                We believe that being a leader is a mindset, much more than it is a title. And are codifying the operating principles that leaders at Blinkit follow at all times. Learn about how we lead here.
              </p>
            </div>

            {/* Blog Post 2 */}
            <div className={styles.blogItem}>
              <img src={img2} alt="Learning Organisation" className={styles.blogImage} />
              <h4 className={styles.blogTitle}>Learning Organisation</h4>
              <p className={styles.blogDescription}>
                We are a group of people who are constantly learning the skills we need, and continuously improving upon ourselves to create the future we desire. Learn about what we value here.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Career;
