// src\components\connect\Connect.jsx

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Connect.css";

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kpjitzl",
      "template_uk7w1fu",
      form.current,
      "wluBZMT19yQUA3zQi"
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("❌ Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <section className="section" id="connect">
      <h2 className="section__title">Connect With Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="connect__form grid">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="connect__input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="connect__input"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="connect__input"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            className="connect__input"
            required
          ></textarea>
          <button type="submit" className="button button--flex">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Connect;
