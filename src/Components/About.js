import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpeg";
import BannerImage from "../Assets/home-banner-image.jpeg";
import community from "../Assets/community.jpeg"
import resources from "../Assets/resources.jpeg"
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="about-background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="about-background" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Get access to our services
        </h1>
        <p className="primary-text">
        Explore a diverse range of empowering services, including individual therapy,
        couples counseling, and family therapy, guiding you towards stronger relationships and
        personal growth.
        </p>
        <div className="first-about">
          <img src= {BannerImage} alt="banner" />
          <div className="sub-text">
            <h1>Therapist Services:</h1>
            <p>Professional one-on-one therapy
             sessions for individuals, couples,
             and families. Specialized support
             for trauma and grief.</p>
          </div>
             <button className="secondary-button1">Continue <FiArrowRight />{" "}</button>
        </div>
        <div className="first-about">
          <img src= {community} alt="community" />
          <div className="sub-text">
            <h1>Community Services:</h1>
            <p>Join support groups and
             attend workshops for a supportive
             and understanding community.</p>
          </div>
          <button className="secondary-button1">Continue <FiArrowRight />{" "}</button>
        </div>
        <div className="first-about">
          <img src= {resources} alt="resources" />
          <div className="sub-text">
            <h1>Resources:</h1>
            <p>Access self-help articles,
             recommended reading, and
             mental health assessments 
             for personal growth.</p>
          </div>
          <button className="secondary-button1">Continue <FiArrowRight />{" "}</button>
        </div>
        <div className="about-buttons-container">
          <button className="secondary-button">Get to Know More <FiArrowRight />{" "}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
