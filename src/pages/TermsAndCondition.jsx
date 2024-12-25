import React from "react";
import styles from "../styles/terms.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>blink<span className={styles.highlight}>it</span></div>
        <nav className={styles.nav}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#careers" className={styles.link}>Careers</a>
          <a href="#partner" className={styles.link}>Partner</a>
          <a href="#blog" className={styles.link}>Blog</a>
        </nav>
      </header>
      <main className={styles.content}>
        <h1 className={styles.title}>Acceptance of terms</h1>
        <ul className={styles.list}>
          <li>
            These Terms are intended to make you aware of your legal rights and responsibilities
            with respect to your access to and use of the Blinkit’s website{" "}
            <a href="https://www.blinkit.com" className={styles.link}>www.blinkit.com</a> (“Site”)
            and/or any related mobile or software applications (collectively referred to as,
            “Blinkit Platform”) including but not limited to the services offered by Blinkit via the
            Blinkit Platform or otherwise (“Services”).
          </li>
          <li>
            Your use/ access of the Blinkit Platform shall be governed by these Terms and the
            Privacy Policy of Blinkit as available at{" "}
            <a href="https://blinkit.com/privacy" className={styles.link}>https://blinkit.com/privacy</a>{" "}
            (“Privacy Policy”). By accessing the Blinkit Platform and/ or undertaking any sale-purchase
            transaction, you agree to be bound by the Terms including any additional terms and
            conditions and policies referenced herein and/or available by hyperlink on the Blinkit
            Platform and acknowledge that it constitutes an agreement between you and Blinkit. You
            may not access the Blinkit Platform and use the Services if you do not accept the Terms
            or are unable to be bound by the Terms/ the Privacy Policy.
          </li>
          <li>
            These Terms may be updated from time to time by Blinkit without notice. It is therefore
            strongly recommended that you review these Terms, as available on the Blinkit Platform,
            each time you access and/or use the Blinkit Platform. In the event there is any conflict
            or inconsistency between these Terms and any other terms of use that appear on the
            Blinkit Platform, these Terms will prevail.
          </li>
        </ul>
        <p>
          Should you need any clarifications regarding the Terms, please do write to us at{" "}
          <a href="mailto:info@blinkit.com" className={styles.link}>info@blinkit.com</a>.
        </p>
      </main>
    </div>
  );
};

export default TermsAndConditions;
