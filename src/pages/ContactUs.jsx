import CatalogueVideo from "../components/CatalogueVideo.jsx";
import Navbar from "../components/Navbar.jsx";
import React, { useState } from "react";
import "../index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-us">
      <Navbar />
      <CatalogueVideo />
      <div className="contact-us">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or inquiries, please feel free to contact
            us using the information below:
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>Email: gariZetu@gmail.com</p>
            <p>Phone: 78456-7890</p>
            <p>Address: Kenya, Nairobi,Kiambu Road</p>
          </div>
          <div className="contact-map">
            <h3>Our Location</h3>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.132781433252!2d36.84030731819246!3d-1.2296663139418555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDUyJzQwLjYiTiAwwrAyNic0Mi42Ilc!5e0!3m2!1sen!2ske!4v1626535226837!5m2!1sen!2ske"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          {submitted ? (
            <p className="success-message">Form submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;