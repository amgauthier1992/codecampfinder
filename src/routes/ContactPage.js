import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import ContactForm from "../components/ContactForm"

export default function ContactPage(){
  return (
    <div className="contact-container">
      <div className="contact-top">
        <Logo />
        <Link to="/">
          <button className="contact-home-btn" type="button">Home
            <i className="fas fa-home"></i>
          </button>
        </Link>
        <h2 className="contact-title">Contact Us</h2>
          <p className="contact-p">
            Let us know what you think! In order to provide better service,
            please do not hesitate to give us your feedback. Thank you.
          </p>
        <hr/>
      </div>
      <ContactForm />
    </div>
  )
}
