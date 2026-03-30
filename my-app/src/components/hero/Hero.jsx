import React, { useEffect } from "react";
import "./Hero.css";
import gsap from "gsap";

// Import your images (ensure they are in the same folder or update paths)
import imgL from "../../assets/image/image L.jpg";
import imgR from "../../assets/image/image R.jpg";
import logoO from '../../assets/image/logo-image.png';

export const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero__nav", { y: -60, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(".hero__bg-img", { opacity: 0, scale: 1.1, duration: 1.5, stagger: 0.2 }, "-=0.5")
      .from(".hero__title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=1")
      .from(".hero__desc", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
      .from(".hero__buttons button", { opacity: 0, y: 20, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.5");
  }, []);

  return (
    <section className="hero">
      {/* BACKGROUND ASSETS */}
      <img src={imgL} className="hero__bg-img bg-left" alt="glow-left" />
      <img src={imgR} className="hero__bg-img bg-right" alt="glow-right" />

      {/* NAV */}
      <header className="hero__nav">
        <div className="hero__logo">
          <div style={{display:"flex"}}>
            {/* <div>Uz</div>
            <div><span>O</span></div>
            <div>Fin</div> */}
            <img src={logoO} alt="UzOFIN O" className="header-logo" />

          </div>

          {/* Uz<span>o</span>Fin */}
          <small>Connect. Control. Comply.</small>
        </div>

        <nav className="hero__menu">
          <a href="#ai">AI Banking</a>
          <a href="#payments">Payments <i className="chevron"></i></a>
          <a href="#payouts">Payouts <i className="chevron"></i></a>
          <a href="#support">Support</a>
        </nav>

        <button className="hero__nav-btn">START BUILDING →</button>
      </header>

      {/* CONTENT */}
      <div className="hero__content">
        <div className="hero__content__heading">
          <h1 className="hero__title">
            AI-powered <span className="text-gradient-blue">Banking & Payment Solutions</span>
            <br />
            built for Modern Businesses
          </h1>
          <p className="hero__desc">
            UzoFin brings intelligent automation, real-time payments, and seamless
            financial operations together so you can scale without friction.
          </p>

        </div>
        <div className="hero__buttons">
          <button className="primary">START BUILDING →</button>
          <button className="secondary">READ DOCS →</button>
        </div>
      </div>
    </section>
  );
};