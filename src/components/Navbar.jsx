import React, { forwardRef, useState, useEffect } from "react";
import Yuktic from "../assets/Yuktic.png";
import "../styles/navbar.css";

const Navbar = forwardRef(({ visible }, ref) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      } ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        {/* =====================================
            LOGO
        ====================================== */}
        <a
          href="#home"
          className="navbar-logo"
          ref={ref}
          aria-label="Yuktic Home"
        >
          <img src={Yuktic} alt="Yuktic" />
        </a>

        {/* =====================================
            NAVIGATION
        ====================================== */}
        <nav className="navbar-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Our Services</a>
          <a href="#career">Career</a>
          <a href="#jobs">Jobs</a>
          <a href="#article">Article</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}
        <button
          className="navbar-menu-button"
          aria-label="Open navigation menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;