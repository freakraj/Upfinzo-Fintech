import React from 'react';
import './Section2.css';
import braveLogo from '../../assets/image/brave-logo.png'; // Replace with your actual logo paths
// C:\react-pro\my-app\src\assets\image\brave-logo.png
import circleLogo from '../../assets/image/circle.png'; 
import discordLogo from '../../assets/image/discord-logo.png';
import googleLogo from '../../assets/image/google-logo.png';
import jumpLogo from '../../assets/image/jump-logo.png';
import lollapaloozaLogo from '../../assets/image/lollapalooza-logo.png';
import magicEdenLogo from '../../assets/image/magic.png';

export const Section2 = () => {
  const logos = [
    { src: braveLogo, alt: 'Brave' },
    { src: circleLogo, alt: 'CIRCLE' },
    { src: discordLogo, alt: 'Discord' },
    { src: googleLogo, alt: 'Google' },
    { src: jumpLogo, alt: 'jump_' },
    { src: lollapaloozaLogo, alt: 'lollapalooza' },
    { src: magicEdenLogo, alt: 'MAGIC EDEN' },
  ];

  return (
    <section className="section2">
      <div className="section2-content">
        <h2 className="section2-title">
          POWERING TOOLS AND INTEGRATION FOR COMPANIES AROUND THE WORLD
        </h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
