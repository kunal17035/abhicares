import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.servicesContainer}>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Register as a Professional</Link>
          </li>
          <li>
            <Link>My Bookings</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
          <li>
            <Link>Login/SignUp</Link>
          </li>
        </ul>
      </div>
      <div className={styles.pagesContainer}>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Complaint</li>
          <li>FeedBack</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
