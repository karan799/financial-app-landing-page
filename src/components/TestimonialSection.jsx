import React, { useState, useEffect } from "react";
import '../style/TestimonialSection.css';

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(2);
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/people')
      .then(response => response.json())
      .then(data => setPeopleData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (peopleData.length === 0) {
    return <div>Loading...</div>;
  }

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
                  "{peopleData[current].message}"
                </p>
                <div className="testimonial-images">
                  {peopleData.map((ele, index) => (
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
                  {peopleData[current].name}
                </h2>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
