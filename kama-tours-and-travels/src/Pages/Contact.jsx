import React from "react";
import "./ContactPage.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import WhatsAppButton from "../components/whats_app_chat/whatsApp";

const ContactPage = () => {
  return (
    <div className="contact-container">
      
      {/* Top Info Cards */}
      <div className="contact-cards">
        <div className="card">
          <FaMapMarkerAlt className="icon" />
          <h3>Our Office</h3>
          <p>Panchavati<br />Nashik, Maharashtra</p>
        </div>

        <div className="card" onClick={() => window.location.href = "tel:+918956355200"}>
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p>+91 8956355200</p>
        </div>

        <div className="card" onClick={() => window.location.href = "https://wa.me/918956355200"}>
          <FaHeadset className="icon" />
          <h3>WhatsApp</h3>
          <p>+91 8956355200</p>
        </div>

        <div className="card" onClick={() => window.location.href = "https://www.instagram.com/tripwithsarthak/"}>
          <FaEnvelope className="icon" />
          <h3>Instagram</h3>
          <p>@tripwithsarthak</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-content">
        
        {/* Form */}
        <form className="contact-form">
          <h2>Plan Your Trip</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us about your dream destination..." rows="4"></textarea>

          <button type="submit">Send Inquiry</button>
        </form>

        {/* Info */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            We help you explore the world with comfort and safety. From exotic
            beaches to mountain adventures — we’ve got your journey covered.
          </p>

          <p>
            Reach out to plan your next unforgettable trip with us. Our team is
            available 24/7 to assist you.
          </p>

          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;