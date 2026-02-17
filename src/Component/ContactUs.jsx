import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">

      <div className="contact-card">
        <h2 className="college-name">
          JUNIOR COLLEGE OF EDUCATION DANDEGAON – Med – Marathi
        </h2>

        <div className="contact-detail">
          <span className="icon">📍</span>
          <p>
            At Post Dandegaon Tah + Dist Gondia 441614 Maharashtra India
          </p>
        </div>

        <div className="contact-detail">
          <span className="icon">📞</span>
          <p>+91 9405514274</p>
        </div>

        <div className="contact-detail">
          <span className="icon">✉️</span>
          <p>jcedandegaon@rediffmail.com</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2079.1860829638!2d80.03582617101071!3d21.444363591967026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b06c14fd02555%3A0x4a38647784cb703b!2sJunior%20college%20of%20Education%20Dandegaon!5e0!3m2!1sen!2sin!4v1770834695727!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="college-location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

