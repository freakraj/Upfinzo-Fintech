import React from 'react';
import './Footer.css';

import logoBase from '../../assets/image/connect-controle-logo.png'; // Example base text file name
import logoO from '../../assets/image/logo-image.png';

export const Footer = () => {
    
  const currentYear = new Date().getFullYear();

  const productLinks = [
    "AI Banking",
    "Payment",
    "Payout",
    "Merchant Onboarding",
    "FRM"
  ];

  const companyLinks = [
    "About Us",
    "Help Center",
    "Contact"
  ];

  const legalLinks = [
    "Cookie Policy",
    "Privacy Policy",
    "Terms of Service"
  ];

  const socialLinks = [
    { name: "/uzofin", iconClass: "social-icon-linkedin", url: "#" },
    { name: "/uzofin", iconClass: "social-icon-x", url: "#" },
    { name: "/uzofin", iconClass: "social-icon-instagram", url: "#" },
    { name: "/uzofin", iconClass: "social-icon-facebook", url: "#" }
  ];

  return (
    <footer className="api-footer">
      <div className="api-footer-container">
        
        {/* Left Section: Logo, Tagline, Description */}
        <div className="api-footer-main">
          <div className="api-footer-logo-container">
            {/* Reconstruction of the complex logo */}
            <div className="logo-uzfin">
              {/* <span className="logo-text-base logo-uz">Uz</span> */}
              <img src={logoO} alt="UzOFIN O" className="logo-o" />
              {/* <span className="logo-text-base logo-fin">FIN</span> */}
            </div>
            {/* The pre-rendered tagline image for pixel accuracy */}
            <img src={logoBase} alt="Connect. Control. Comply" className="logo-tagline" />
          </div>
          
          <p className="api-footer-description">
            Experience the new age of payments with UzOFin and explore new growth opportunities to reach greater heights
          </p>
        </div>

        {/* Right Section: Link Columns */}
        <div className="api-footer-links-grid">
          
          <div className="link-column">
            <h4 className="gradient-heading">PRODUCTS</h4>
            <ul>
              {productLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="link-column">
            <h4 className="gradient-heading">COMPANY</h4>
            <ul>
              {companyLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="link-column">
            <h4 className="gradient-heading">LEGAL</h4>
            <ul>
              {legalLinks.map((link, index) => (
                <li key={index}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Social Icons column is unique in layout */}
          <div className="link-column social-column">
            <h4 className="gradient-heading">SOCIAL</h4>
            <div className="social-links-list">
              {socialLinks.map((link, index) => (
                <div key={index} className="social-link-item">
                  <span className={`social-icon ${link.iconClass}`}></span>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Region */}
      <div className="api-footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            Copyright © {currentYear} UzOFIn. All rights reserved
          </p>
          <div className="region-selector">
            <span>India (EN)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;