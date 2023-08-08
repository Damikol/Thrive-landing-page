import React from "react";
import JohnDoe from "../Assets/john-doe-image.png";
import Mason from "../Assets/mason-image.png";
import Jane from "../Assets/jane-image.png"
import Sarah from "../Assets/sarah-image.png"
import Emily from "../Assets/emily-image.png"
import David from "../Assets/david-image.png"
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  const testimonials = [
    {
      image: JohnDoe,
      name: "John Doe",
      text:
        "I thoroughly enjoyed my sessions with Will my thrive therapist. He is the most considerate and patient person I could imagine. His passionate opposition against black and white thinking and labeling was a huge eye opener for me. It made for a most welcoming atmosphere in his sessions and gradually led to an inner reconciliation with my anxiety and sleep issues. His very many practical suggestions extremely helpful and played an important role in my day to day anxiety management.",
    },
    {
      image: Jane,
      name: "Jane Smith",
      text:
        "After my first session, I was very happy that I chose Thrive. It was very easy to talk and it made me feel comfortable. I trusted Dave my thrive therapist with everything I said and never felt pressured while with him. He taught me the most valuable piece of information - that I am in control of my life, everything is my decision and my choice. I left every session amazed with the results.",
    },
    {
      image: Mason,
      name: "Mason Johnson",
      text:
        "Dave, my thrive therapist's non-confrontational style and strong belief in the dignity of human experience has encouraged me to re-view my relationships with the past, myself, and others in a more encompassing light.  His careful, thoughtful council and listening skills are refreshing. I highly recommend Thrive.",
    },
    {
      image: Sarah,
      name: "Sarah Williams",
      text:
        "I've seen half a dozen therapists over the years and few of them have done for me what Phil my thrive theraphist has. Phil's method is conversational and delicate — he works by asking the right questions at the right time, and by demystifying mental illness. Phil won't back you into a corner, won't pathologize you and he isn't overly sentimental. He's there to supplement your internal dialogue, and to guide you along the path to living ore freely. As long as I am in town, if I need a therapist again, I know where I will seek out.",
    },
    { image: David,
      name: "David Lee",
      text:
        "When I booked my first appointment, I didn't know what to expect.  I wanted answers and strategies, but what I got was so much more.  Will helped me to look at my life in a way I never had before.  He asked me about things that I had never even considered, and the understanding and awareness that I got from those sessions helped me to change what I struggled with for over 10 years of my life.  Before I always felt incomplete and anxious to be seen as good.  Now I just feel at peace with myself.  I'm amazed that those things I used to worry about for most of the day, every day, barely even cross my mind now.",
    },
    {
      image: Emily,
      name: "Emily Johnson",
      text:
        "Working with Phil & Jane my thrive therapist has been a really positive and transformative experience. They got what I needed straight away and through incisive but gentle questioning helped me change the way I think about so many things. If you are thinking about talking to a therapist, I would encourage you to go for it!",
    },
  ];
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Experience the transformative power of therapy and embark on a journey of 
        self-discovery, growth, and empowerment.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* Render the top row */}
        <div className="testimonial-row">
          {topRow.map((data) => (
            <div className="testimonial-item" key={data.image}>
              <img src={data.image} alt="thrive-user" />
              <p>{data.text}</p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>{data.name}</h2>
            </div>
          ))}
        </div>

        {/* Render the bottom row */}
        <div className="testimonial-row">
          {bottomRow.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.image} alt="thrive-user" />
              <p>{testimonial.text}</p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>{testimonial.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Testimonial;
