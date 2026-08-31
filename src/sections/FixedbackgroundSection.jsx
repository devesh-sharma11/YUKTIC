import React, { useEffect, useRef } from 'react';
import '../styles/fixedbackgroundSection.css';
import fixedImg from '../assets/fixedimage.jpg';

const FixedbackgroundSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.35 // Triggers animation when 35% of the slide is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible'); // Reset animation when scrolled away
        }
      });
    }, observerOptions);

    const steps = containerRef.current?.querySelectorAll('.story-step');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="fixed-story-wrapper"
      style={{ backgroundImage: `url(${fixedImg})` }}
    >
      {/* =====================================================
          STEP 1 — CAREER / IMPACT
      ===================================================== */}
      <div className="story-step story-step-one">
        <div className="story-content">
          <span className="story-eyebrow">BUILD WITH PURPOSE</span>
          <div className="story-line"></div>

          <h2 className="story-title">
            Your Ambition.
            <br />
            <span>Your Impact.</span>
          </h2>

          <p className="story-desc">
            Build meaningful work, take ownership of your ideas, and grow
            alongside people who believe that great careers are created by
            creating real impact.
          </p>

          <div className="story-meta">
            <span>CREATE</span>
            <span className="meta-dot"></span>
            <span>GROW</span>
            <span className="meta-dot"></span>
            <span>LEAD</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          STEP 2 — VISION / EXECUTION
      ===================================================== */}
      <div className="story-step story-step-two">
        <div className="story-content">
          <span className="story-eyebrow">THINK BIG. MOVE FORWARD.</span>
          <div className="story-line"></div>

          <h2 className="story-title">
            Big Ideas.
            <br />
            <span>Real-World Impact.</span>
          </h2>

          <p className="story-desc">
            We combine ambitious thinking, modern technology, and relentless
            execution to transform ideas into solutions that move businesses
            forward.
          </p>

          <div className="story-meta">
            <span>IDEAS</span>
            <span className="meta-dot"></span>
            <span>INNOVATION</span>
            <span className="meta-dot"></span>
            <span>RESULTS</span>
          </div>
        </div>
      </div>

     
      {/* =====================================================
          STEP 3 — PARTNERSHIP / PROJECTS
      ===================================================== */}
      <div className="story-step story-step-three">
        <div className="story-content">
          <span className="story-eyebrow">PARTNERS IN PROGRESS</span>
          <div className="story-line"></div>

          <h2 className="story-title">
            Ideas Become
            <br />
            <span>What We Build Together.</span>
          </h2>

          <p className="story-desc">
            Explore the digital experiences, intelligent systems, and scalable
            solutions we create with businesses ready to build what comes next.
          </p>

          <div className="story-actions">
            <button className="story-btn primary-btn">
              <span>VIEW PROJECTS</span>
              <span className="btn-arrow">↗</span>
            </button>

            <button className="story-btn secondary-btn">
              <span>JOIN OUR TEAM</span>
              <span className="btn-arrow">↗</span>
            </button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default FixedbackgroundSection;