import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
          <h1>Thrive</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
          <RiInstagramFill />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Home</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>About</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Services</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Blog</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Testimonials</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Contact us</span></a>
        </div>
        <div className="footer-section-columns">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Privacy Policy</span></a>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Terms of Service</span></a>
        </div>
        <div className="footer-section-columns">
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer"><span>Accreditations and Certifications</span></a>
        </div>
        <div className="footer-section-columns">
          <span>© 2023 Thrive Thearpeutics. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
