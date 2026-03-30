import React from 'react';
import './Section6.css';

export const Section6 = () => {
  const cardData = [
    { title: "Scalability & Integration", desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed." },
    { title: "Step-by-step guide", desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed." },
    { title: "SaaS based solution", desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed." },
    { title: "Flexible size", desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed." },
    { title: "Mobile First", desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed." }
  ];

  // Double the data for seamless infinite looping
  const marqueeList = [...cardData, ...cardData];

  return (
    <section className="s6-wrapper">
      <div className="s6-header">
        <span className="s6-subtitle">24/7 support</span>
        <h2 className="s6-title">Industry <span className="s6-gradient-text">Standard</span></h2>
      </div>

      <div className="s6-marquee-container">
        <div className="s6-marquee-track">
          {marqueeList.map((card, index) => (
            <div key={index} className={`s6-card ${index % 2 === 0 ? 'up' : 'down'}`}>
              <h3 className="s6-card-title">{card.title}</h3>
              <p className="s6-card-desc">{card.desc}</p>
              <a href="#" className="s6-card-link">Know more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default Section6;