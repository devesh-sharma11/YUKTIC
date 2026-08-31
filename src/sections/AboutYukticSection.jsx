import React, { useEffect, useRef, useState } from 'react';
import yukticImg from '../assets/Yuktic.png';
import rightearth from '../assets/rightearth3.png';
import '../styles/aboutYukticSection.css';

const AboutYukticSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const stats = [
    { target: 22, suffix: '+', label: 'YEAR EXPERIENCE' },
    { target: 16, suffix: '+', label: 'EHR PROGRAMMES' },
    { target: 12, suffix: '+', label: 'HEALTH SYSTEMS' },
    { target: 5, suffix: '', label: 'COUNTRIES' },
    { target: 15, suffix: '+', label: 'EPIC CERTIFICATIONS' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Slow Animated Number Counter (2.2s duration)
  useEffect(() => {
    if (!isInView) return;

    const duration = 2200; // Total count-up time in ms (slow & smooth)
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Smooth ease-out quad curve
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => Math.floor(easeOut * stat.target))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCounts(stats.map((stat) => stat.target));
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      className={`about-yuktic-section ${isInView ? 'in-view' : ''}`} 
      id="about"
    >
      {/* Ambient Earth Background */}
      <div className="contact-earth-decor" aria-hidden="true">
        <img src={rightearth} alt="" className="leaf-earth-image" />
      </div>

      {/* Floating Stats Bar */}
      <div className="about-stats-wrapper">
        <div className="about-stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-box">
              <div className="stat-number-wrap">
                <span className="stat-number">{counts[idx]}</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <br/> <br/> <br/> <br/> 

      {/* Centered Top Heading Block */}
      <div className="capabilities-header-center">
        <div className="capabilities-eyebrow">
          <span className="eyebrow-icon">☘</span> YUKTIC
        </div>
        <h2 className="capabilities-title">About US.</h2>
        <p className="capabilities-subtitle">
          Specialist expertise to transform complex healthcare programmes into confident, sustainable delivery.
        </p>
        <div className="capabilities-divider"></div>
      </div>

      {/* Main 2-Column Content */}
      <div className="about-yuktic-container">
        {/* Left Side: Visual Showcase */}
        <div className="about-yuktic-visual">
          <div className="about-image-card">
            <img 
              src={yukticImg} 
              alt="Yuktic Innovation & Engineering" 
              className="about-yuktic-image" 
            />
            <div className="image-overlay-glow"></div>
          </div>
          
          <div className="about-badge-card">
            <span className="badge-value">100%</span>
            <span className="badge-text">Mission Driven Architecture</span>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="about-yuktic-content">
          <div className="about-eyebrow">
            <span className="eyebrow-dot"></span>
            About Us
          </div>
          
          <h2 className="about-heading">
            Engineering Precision with <span className="highlight-text">Yuktic</span>.
          </h2>
          
          <div className="heading-line about-line"></div>

          <p className="about-lead">
            At Yuktic, we engineer cutting-edge healthcare technologies, distributed EHR infrastructure, and intelligent automation built for scale and resilience.
          </p>

          <p className="about-desc">
            We bridge deep technical complexity with intuitive design—crafting high-performance digital systems that elevate healthcare delivery and enterprise operations.
          </p>

          <div className="about-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-num">01</div>
              <div className="pillar-info">
                <h4>Strategic Innovation</h4>
                <p>Architecting future-proof digital solutions tailored for real-world enterprise constraints.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-num">02</div>
              <div className="pillar-info">
                <h4>Security & Integrity</h4>
                <p>HIPAA-compliant, secure data pipelines designed with zero-trust architectural standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYukticSection;