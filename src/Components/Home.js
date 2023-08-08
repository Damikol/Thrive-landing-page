import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.jpeg";
import people from "../Assets/people.png"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="thrive-background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Empowering you to embrace life's challenges
          </h1>
          <p className="primary-text">
          Thrive is your partner on the path to emotional well-being. 
          Our therapy center offers a nurturing environment for your
          healing journey. With experienced therapists, explore your 
          thoughts, emotions, and behaviors, gaining valuable insights
          to overcome challenges.
          </p>
          <button className="secondary-button">
            Let's Thrive <FiArrowRight />{" "}
          </button>
          <div className="people">
        <img src={people} alt="people"/> 14k+ users
          <p>Endorsed by the <br />
             <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">World Health Organisation</a></p>
        </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="thrive-banner" />
        </div>
      </div>
    </div>
  );
};

export default Home;
