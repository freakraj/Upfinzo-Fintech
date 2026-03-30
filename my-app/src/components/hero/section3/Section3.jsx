import React from 'react';
import './Section3.css';
import spiral from "../../../assets/image/spiral-image.png";

export const Section3 = () => {
  return (
    <section className="financial-suite-container">
      <div className="content-wrapper">
        
        {/* Left Side: Branding & Animated Hero */}
        <div className="left-column">
          <div className="header-text">
            <h2>Your Business Pays Are Now <br /> <span>Faster and Secure</span></h2>
          </div>
          
          <div className="spiral-container">
            <img 
              src={spiral}
              className="floating-spiral" 
              alt="Spiral Animation" 
            />
            <div className="glow-gradient"></div>
          </div>

          <div className="suite-title">
            <h3>Our Intelligent <br /> Financial Suite</h3>
            <p>• Tools That Accelerate Every Step Of Your Financial Workflow.</p>
          </div>
        </div>

        {/* Right Side: Stats and Features */}
        <div className="right-column">
          
          {/* Top Stats */}
          <div className="stats-section">
            <div className="stat-item">
              <h1 className="purple-text">11.5M+</h1>
              <p>TRANSACTIONS PROCESSED MONTHLY</p>
            </div>
            <div className="stat-item">
              <h1 className="blue-text">99.9%</h1>
              <p>PLATFORM UPTIME AND RELIABILITY</p>
            </div>
            <div className="stat-item">
              <h1 className="teal-text">70% <span>Faster</span></h1>
              <p>MERCHANT ONBOARDING WITH AI AUTOMATION</p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <h4>AI Banking</h4>
              <p>Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.</p>
              <div className="feature-stat">
                <span className="dot blue"></span>
                <strong>3,969</strong>
                <small>TRANSACTIONS PER SECOND</small>
              </div>
            </div>

            <div className="feature-card">
              <h4>Payments</h4>
              <p>Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.</p>
              <div className="feature-stat">
                <span className="dot yellow"></span>
                <strong>1,675</strong>
                <small>VALIDATOR NODES</small>
              </div>
            </div>

            <div className="feature-card">
              <h4>Payouts</h4>
              <p>Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.</p>
              <div className="feature-stat">
                <span className="dot blue"></span>
                <strong>163,077,581,394</strong>
                <small>TOTAL TRANSACTIONS</small>
              </div>
            </div>

            <div className="feature-card">
              <h4>Merchant Onboarding</h4>
              <p>Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.</p>
              <div className="feature-stat">
                <strong>100%</strong>
                <small>ON-TIME MERCHANT ONBOARD</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// export default Section3;