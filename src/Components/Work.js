import React from "react";
import Smile from "../Assets/smile.png"
import Heart from "../Assets/heart.png"
import Bandage from "../Assets/bandage.png"
import Compass from "../Assets/compass.png"
import Book from "../Assets/book.png"
import Group from "../Assets/group.png"

const Work = () => {
  const workInfoData = [
    {
      image: Smile,
      title: "Emotional Well-being:",
      text: "Therapy provides a safe space to explore and understand your emotions, leading to improved emotional well-being and a greater sense of self-awareness.",
    },
    {
      image: Heart,
      title: "Improved Relationships:",
      text: "Couples and family therapy can foster better communication and deeper connections, leading to more fulfilling and harmonious relationships.",
    },
    {
      image: Bandage,
      title: "Healing from Trauma:",
      text: "Trauma and grief counseling offer compassionate support to heal from traumas and cope with loss,promoting a path towards healing and growth.",
    },
    {
      image: Compass,
      title: "Tailored Guidance:",
      text: "Specialized therapy addresses unique challenges, offering tailored guidance for issues like anxiety, depression, and substance abuse.",
    },
    {
      image: Book,
      title: "Access to Resources:",
      text: "Therapy offers access to self-help articles, recommended reading, and mental health assessments to enrich your personal development.",
    },
    {
      image: Group,
      title: "Supportive Community:",
      text: "Engaging in support groups and workshops provides a supportive community, offering understanding and encouragement on your journey.",
    },
  ];

  const topRow = workInfoData.slice(0, 3);
  const bottomRow = workInfoData.slice(3, 6);

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Benefits</p>
        <h1 className="primary-heading">Benefits of Therapy with <span style={{ color: 'blue' }}>Thrive</span></h1>
        <p className="primary-text">
        Experience the transformative power of therapy and embark on a journey of 
        self-discovery, growth, and empowerment.
        </p>
      </div>
      <div className="work-section-bottom">
        {topRow.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="emoji" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="work-section-bottom">
        {bottomRow.map((data) =>(
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="emoji" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
