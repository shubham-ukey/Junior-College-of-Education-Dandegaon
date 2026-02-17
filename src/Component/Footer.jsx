import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* College Info */}
        <div className="footer-section">
          <h3>Junior College of Education</h3>
          <p>Dandegaon, Dist - Gondia</p>
          <p>Maharashtra, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Student Corner</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/college-staff">College Staff</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📞 +91 9405514274</p>
          <p>📧 jcedandegaon@rediffmail.com</p>
          <p>📍 Dandegaon, Gondia, Maharashtra</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © 2026 Junior College of Education Dandegaon. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
