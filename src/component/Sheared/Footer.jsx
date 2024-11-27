import React from "react";
import logo from "../../assets/images/logo.png"
import styles from '../../styles/footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footertop}>
        <div className={styles.footeroutintro}>
          <img
            src={logo}
            alt="Bijli Logo"
            className="footer-logo"
          />
          <p>
            Bijli provides fast and reliable delivery services to meet all your
            needs. Our platform ensures instant deliveries, offering a seamless
            experience from order to doorstep. Whether it's essentials or
            special items, we guarantee speed and efficiency with every
            delivery.
          </p>
          <div className={styles.socialicons}>
            <a href="#" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className={styles.footersection}>
          <h4>Company</h4>
          <ul>
            <li><a href="aboutUs">About Us</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h4>Partners</h4>
          <ul>
            <li><a href="/franchise">Franchise</a></li>
            <li><a href="/seller">Seller</a></li>
            <li><a href="/warehouse">Warehouse</a></li>
            <li><a href="/deliver">Deliver</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h4>Categories</h4>
          <ul>
            <li><a href="/vegetables">Vegetables & Fruits</a></li>
            <li><a href="/cold-drinks">Cold Drinks & Juices</a></li>
            <li><a href="/bakery">Bakery & Biscuits</a></li>
            <li><a href="/pharma">Pharma & Wellness</a></li>
            <li><a href="/cleaning">Cleaning Essentials</a></li>
          </ul>
        </div>
        <div className={styles.footersection}>
          <h4>More</h4>
          <ul>
            <li><a href="/dairy">Dairy and Breakfast</a></li>
            <li><a href="/frozen-food">Frozen Food</a></li>
            <li><a href="/sweet-tooth">Sweet Tooth</a></li>
            <li><a href="/sauces">Sauces & Spreads</a></li>
            <li><a href="/books">Books</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerbottom}>
        <p>
          &copy; 2024 - Bijli by BCLOUD <a href="/terms">Terms & Conditions</a>{" "}
          | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

