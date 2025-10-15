import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function ContactInfo() {
    return (
        <section className="contact-section">
            <div className="container contact-section-container">
                <div className="contact-box">
                    <h4>CONTACT INFO</h4>
                    <p>
                        ThriftVerse<br />
                        Aarya Pawar<br />
                        Shragvi Patil<br />
                        Purva Patil<br />
                        Aditya Patil<br />
                    </p>
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>

                <div className="contact-box">
                    <h4>HELP & SUPPORT</h4>
                    <p>Phone / WA: +91 85910 88819</p>
                    <p>Email: admin@thriftverse.com</p>
                    <a href="#" className="support-link">Privacy Policy</a>
                    <a href="#" className="support-link">Shipping & Return</a>
                    <a href="#" className="support-link">Terms & Conditions</a>
                    <a href="#" className="support-link">FAQs</a>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;