import React from 'react'
import styles from "../../styles/footer.module.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';



const Footer = () => {
    return (
        
      <footer className={`${styles.main} `}>
        <div className={`${styles.container}`}>
            
          <div className={`${styles.containerone}`}>
            {/* Column 1 */}
            <div className={`${styles.columnone}`}>    
              <div className={`${styles.logo}`}>
              <img src={logo} alt="Bijli Logo" />
              </div>
                    
              <p>
                Bijli provides fast and reliable delivery services to meet all your needs. Our platform ensures instant deliveries, offering a seamless experience from order to doorstep. Whether it’s essentials or special items, we guarantee speed and efficiency with every delivery.          </p>

              <div className={`${styles.socialicons}`}> 
                 <img src={facebook} alt="facebook" />
                 <img src={twitter} alt="twitter" />
                 <img src={whatsapp} alt="whatsapp" />
                 <img src={instagram} alt="instagram" />   
              </div>
  
            </div>
  
            {/* Column 2 */}
            <div className={`${styles.columntwo}`}>
              
                
                 
                  <div className={`${styles.columncompany}`}>
                    <h5>Company</h5>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="history.html">History</a></li>
                      <li><a href="testimonials.html">Testimonials</a></li>
                      <li><a href="careers.html">Careers</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>

                
  
                
                  <div className={`${styles.columncompany}`}>
                    <h5>Partners</h5>
                    <ul>
                      <li><a href="history.html">Franchise</a></li>
                      <li><a href="history.html">Seller</a></li>
                      <li><a href="testimonials.html">Warehouse</a></li>
                      <li><a href="careers.html">Deliver</a></li>
                      <li><a href="contact.html">Resourses</a></li>
                    </ul>
                  </div>
                
                  <div className={`${styles.columncompany}`}>
                    <h5>Categories</h5>
                    <ul>
                      <li><a href="vehicle-single-1.html">Vegetables & Fruits</a></li>
                      <li><a href="vehicle-single-2.html">Cold Drinks & Juices</a></li>
                      <li><a href="vehicle-single-3.html">Bakery & Biscuits</a></li>
                      <li><a href="vehicles.html">Pharma & Wellness</a></li>
                      <li><a href="review.html">Cleaning Essentials</a></li>
                      <li><a href="vehicle-single-3.html">Coffee & Health Drinks</a></li>
                      <li><a href="vehicles.html">Baby Care</a></li>
                    </ul>
                  </div>
              
                  <div className={`${styles.columncompany}`}>
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
  
        {/* Subfooter */}
        
                <div className={`${styles.subfooter}`}>
                  <div className= {`${styles.copyright}`}>
                    Copyright 2024 - Bijli by Designesia
                  </div>
                  <ul className={`${styles.subpolicy}`}>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;