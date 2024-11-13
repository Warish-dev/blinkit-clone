import React from 'react'
import styles from "../../styles/footer.module.css"
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
      <footer className={`${styles.sectiondark} `}>
        <div className={styles.container}>
          <div className={`${styles.rowgxfive}`}>
            {/* Column 1 */}
            <div className="collgcolsm">
  
              <img src={`${process.env.PUBLIC_URL}/bijli_logo.png`} alt="Bijli Logo" />
  
              <div className={`${styles.spacestwenty}`}></div>
              <p>
                Bijli provides fast and reliable delivery services to meet all your needs. Our platform ensures instant deliveries, offering a seamless experience from order to doorstep. Whether it’s essentials or special items, we guarantee speed and efficiency with every delivery            </p>
              <div className={`${socialicons}`}>
                <img src={`${process.env.PUBLIC_URL}/twitter.png`} alt="X_logo" />
                <img src={`${process.env.PUBLIC_URL}/whatsapp.png`} alt="WhatsApp_logo" />
                <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="instagram" />
                <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="facebook" />
                
              </div>
  
            </div>
  
            {/* Column 2 */}
            <div className={`${collgcolsmorderlgordersm}`}>
              <div className={`${row}`}>
                <div className={`${collgcolsm}`}>
                  <div className={`${widget}`}>
                    <h5>Company</h5>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="history.html">History</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li><a href="careers.html">Careers</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
  
                <div className={`${collgcolsm}`}>
                  <div className={`${widget}`}>
                    <h5>Partners</h5>
                    <ul>
                      {/* <li><a href="about.html">Partners</a></li> */}
                      <li><a href="history.html">Franchise</a></li>
                      <li><a href="history.html">Seller</a></li>
                      <li><a href="testimonials.html">Warehouse</a></li>
                      <li><a href="careers.html">Deliver</a></li>
                      <li><a href="contact.html">Resourses</a></li>
                    </ul>
                  </div>
                </div>
  
                <div className={`${collgcolsm}`}>
                  <div className={`${widget}`}>
                    <h5>Categories</h5>
                    <ul>
                      <li><a href="vehicle-single-1.html">Vegetables & Fruits</a></li>
                      <li><a href="vehicle-single-2.html">Cold Drinks & Juices</a></li>
                      <li><a href="vehicle-single-3.html">Bakery & Biscuits</a></li>
                      <li><a href="vehicles.html">Pharma & Wellness</a></li>
                      <li><a href="review.html">Cleaning Essentials</a></li>
                      <li><a href="vehicle-single-3.html">Atta, Coffee & Health Drinks</a></li>
                      <li><a href="vehicles.html">Baby Care</a></li>
  
                    </ul>
                  </div>
                </div>
  
                <div className={`${collgcolsm}`}>
                  <div className={`${widget}`}>
                    <h5>More</h5>
                    <ul>
                      <li><a href="vehicle-single-1.html">Dairy & and Breakfast</a></li>
                      <li><a href="vehicle-single-2.html">Frozen Food</a></li>
                      <li><a href="vehicle-single-3.html">Sweeth Tooth</a></li>
                      <li><a href="vehicles.html">Sauces & Spreads</a></li>
                      <li><a href="review.html">Organic & Premium</a></li>
                      <li><a href="vehicle-single-3.html">Personal Care</a></li>
                      <li><a href="vehicles.html">Books</a></li>
  
  
                    </ul>
                  </div>
                </div>
  
              </div>
            </div>
  
            {/* Column 3 */}
  
          </div>
        </div>
  
        {/* Subfooter */}
        <div className={`${subfooter}`}>
          <div className={`${container}`}>
            <div className={`${row}`}>
              <div className={`${colmd12}`}>
                <div className={`${deflex}`}>
                  <div className= {`${deflexcol}`}>
                    Copyright 2024 - Bijli by Designesia
                  </div>
                  <ul className={`${menusimple}`}>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;