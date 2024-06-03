import React, { useState } from "react";
import '../style/TestimonialSection.css';

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(2);

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="section-header">
          <p>Testimonial</p>
          <h2>What Our Users Say About Us?</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-img">
              <img src="/testimonial-img.png" alt="Testimonial img"></img>
              <div className="red-circle">
                <img src="/circle-rt.png" alt="Red"></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-content">
              <h3>The best financial accounting app ever!</h3>
              <article className="testimonial-article">
                <p className="testimonial-message">
                  "{PeopleData[current].message}"
                </p>
                <div className="testimonial-images">
                  {PeopleData.map((ele, index) => (
                    <img
                      key={index}
                      src={ele.photo}
                      alt={`Person${index}`}
                      className={`testimonial-photo ${current === index ? 'active' : ''}`}
                      onClick={() => setCurrent(index)}
                    />
                  ))}
                </div>
                <h2 className="testimonial-name">
                  {PeopleData[current].name}
                </h2>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PeopleData = [
  {
    name: "Ava Thompson",
    message:
      "Absolute financial wizard! His expertise and in-depth knowledge have been instrumental in helping me navigate complex investment strategies with ease. I highly recommend his services to anyone looking for exceptional financial guidance.",
    photo: "/person1.png",
  },
  {
    name: "Max Collins",
    message:
      "A true gem in the finance industry. Her professionalism, attention to detail, and ability to simplify complex financial concepts have made a significant impact on my financial stability. I am incredibly grateful for her expertise and would confidently refer her to anyone seeking financial advice.",
    photo: "/person2.png",
  },
  {
    name: "Jack Morgan",
    message:
      "An outstanding financial advisor who goes above and beyond to ensure his clients' success. His personalized approach, combined with his exceptional communication skills, has helped me gain clarity and confidence in my financial decisions. I can't recommend him enough!",
    photo: "/person3.png",
  },
  {
    name: "Ruby Foster",
    message:
      "Emily is a rare find in the finance world. Her ability to analyze and interpret market trends is unparalleled. With her guidance, I have achieved remarkable investment growth and financial security. I am truly grateful for her dedication and highly endorse her services.",
    photo: "/person4.png",
  },
  {
    name: "Evan Hughes",
    message:
      "Michael is a trusted partner in my financial journey. His unwavering commitment to my financial goals and his sound advice have been invaluable. With his guidance, I have achieved financial milestones that seemed out of reach before. I wholeheartedly endorse him as a finance professional.",
    photo: "/person5.png",
  },
];
