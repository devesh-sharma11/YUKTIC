import React from "react";
import "../styles/aboutPage.css";
import leaf3 from "../assets/leaf3.png";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section className="about-hero">

        {/* Decorative shapes */}
        <div className="about-orb about-orb-green"></div>
        <div className="about-orb about-orb-blue"></div>
        <div className="about-orb about-orb-orange"></div>

        {/* LEFT CONTENT */}
        <div className="about-hero-content">

          <span className="about-eyebrow">
            ABOUT YUKTIC
          </span>

          <h1>
            Building ideas.
            <br />
            <span>Creating impact.</span>
          </h1>

          <p>
            We are Yuktic — a technology and innovation-driven company
            focused on creating meaningful digital solutions that help
            businesses grow, evolve and move forward.
          </p>

          <div className="about-hero-buttons">

            <a
              href="#our-story"
              className="about-primary-btn"
            >
              Discover Our Story
              <span>↗</span>
            </a>

            <a
              href="#our-values"
              className="about-secondary-btn"
            >
              Our Values
            </a>

          </div>

        </div>


        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}
        <div className="about-hero-visual">

          <div className="about-visual-card">

            <div className="visual-card-top">

              <span className="visual-dot"></span>

              <span>
                Yuktic
              </span>

            </div>


            <div className="visual-circle">

              <div className="visual-circle-inner">
                <span>☘︎</span>
              </div>

            </div>


            <div className="visual-bottom">

              <strong>
                Think.
              </strong>

              <strong>
                Build.
              </strong>

              <strong>
                Grow.
              </strong>

            </div>

          </div>


          {/* Floating badges */}

          <div className="floating-badge badge-green">
            Innovation
          </div>

          <div className="floating-badge badge-blue">
            Technology
          </div>

          <div className="floating-badge badge-orange">
            Impact
          </div>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
          LEAF IMAGE ON LEFT
      ===================================================== */}
      <section
        className="our-story-section"
        id="our-story"
      >

        {/* LEAF BACKGROUND */}

        <div className="story-leaf">

          <img
            src={leaf3}
            alt=""
            aria-hidden="true"
          />

        </div>


        <div className="story-container">

        


          {/* Story content */}

          <div className="story-content">

            <div className="story-heading">

              <h2>
                Technology Should
                <br />
                <span>Make Things.</span>
              </h2>

            </div>


            <div className="story-text">

              <p>
                Yuktic was built around a simple belief — technology
                becomes truly valuable when it solves real problems
                and creates real opportunities.
              </p>

              <p>
                We bring together creativity, technology and business
                thinking to develop solutions that are practical,
                scalable and built for the future.
              </p>

              <p>
                From ideas to execution, we work closely with our
                partners to transform challenges into possibilities.
              </p>

            </div>

          </div>


          {/* =====================================================
              STORY STATS
          ===================================================== */}

         <div className="story-stats">

  <div className="story-stat">



    <span className="stat-text">
      Think beyond
      <br />
      boundaries
    </span>

  </div>


  <div className="story-stat">


    <span className="stat-text">
      Build with
      <br />
      purpose
    </span>

  </div>


  <div className="story-stat">



    <span className="stat-text">
      Create lasting
      <br />
      impact
    </span>

  </div>

</div>

        </div>

      </section>


      {/* =====================================================
    MISSION + VISION
===================================================== */}
<section className="mission-section">

  <div className="mission-container">

    <div className="mission-intro">

      <span className="about-eyebrow">
        WHAT DRIVES US
      </span>

      <h2>
        Purpose behind
        <br />
        <span>every solution.</span>
      </h2>

    </div>


    <div className="mission-grid">

      {/* =================================================
          MISSION
      ================================================= */}

      <article className="mission-card mission-card-green">

        <div className="mission-card-glow"></div>

        <div className="mission-card-grid"></div>

        <div className="mission-card-top">

          <div className="mission-card-symbol">
            ✦
          </div>

          <span className="mission-card-label">
            MISSION
          </span>

          <div className="mission-card-arrow">
            ↗
          </div>

        </div>


        <div className="mission-card-content">

          <h3>
            Our Mission
          </h3>

          <p>
            To empower businesses with innovative technology
            solutions that simplify complexity, unlock growth
            and create measurable value.
          </p>

        </div>


        <div className="mission-card-ghost">
          MISSION
        </div>

        <div className="mission-card-line"></div>

      </article>


      {/* =================================================
          VISION
      ================================================= */}

      <article className="mission-card mission-card-blue">

        <div className="mission-card-glow"></div>

        <div className="mission-card-grid"></div>

        <div className="mission-card-top">

          <div className="mission-card-symbol">
            ◌
          </div>

          <span className="mission-card-label">
            VISION
          </span>

          <div className="mission-card-arrow">
            ↗
          </div>

        </div>


        <div className="mission-card-content">

          <h3>
            Our Vision
          </h3>

          <p>
            To create a future where technology, people and ideas
            come together to build a smarter, more connected world.
          </p>

        </div>


        <div className="mission-card-ghost">
          VISION
        </div>

        <div className="mission-card-line"></div>

      </article>

    </div>

  </div>

</section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}
      <section
        className="values-section"
        id="our-values"
      >

        <div className="values-container">


          {/* Heading */}

          <div className="values-heading">

            <div className="values-heading-left">

              <span className="about-eyebrow">
                OUR VALUES
              </span>

              <h2>
                The Way 
               
                <span> We Work.</span>
              </h2>

            </div>


            <p>
              Our values shape how we think, how we collaborate and
              how we create solutions for the people and businesses
              we work with.
            </p>

          </div>


          {/* Values */}

          <div className="values-grid">


            {/* VALUE 01 */}

            <article className="value-card">

              <div className="value-number">
                01
              </div>

              <div className="value-icon green-icon">
                ✦
              </div>

              <h3>
                Innovation
              </h3>

              <p>
                We challenge conventional thinking and constantly
                search for smarter ways to solve problems.
              </p>

            </article>


            {/* VALUE 02 */}

            <article className="value-card value-card-highlight">

              <div className="value-number">
                02
              </div>

              <div className="value-icon blue-icon">
                ↗
              </div>

              <h3>
                Growth
              </h3>

              <p>
                We create solutions designed not only for today,
                but for long-term progress and scalability.
              </p>

            </article>


            {/* VALUE 03 */}

            <article className="value-card">

              <div className="value-number">
                03
              </div>

              <div className="value-icon orange-icon">
                ♡
              </div>

              <h3>
                People First
              </h3>

              <p>
                Technology is meaningful when it improves experiences
                and creates genuine value for people.
              </p>

            </article>


            {/* VALUE 04 */}

            <article className="value-card">

              <div className="value-number">
                04
              </div>

              <div className="value-icon green-icon">
                ∞
              </div>

              <h3>
                Integrity
              </h3>

              <p>
                We believe in transparent relationships, responsible
                decisions and doing the right thing.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
    HOW WE THINK
===================================================== */}

<section className="thinking-section">

  <div className="thinking-container">

    {/* =================================================
        LEFT INTRO
    ================================================= */}
    <div className="thinking-intro">

      <span className="about-eyebrow">
        OUR APPROACH
      </span>

      <h2>
        Ideas are only
        <br />
        <span>the beginning.</span>
      </h2>

      <p>
        Great products are created when strategy, design,
        technology and people move in the same direction.
      </p>

      <div className="thinking-intro-meta">
        <span>YUKTIC / APPROACH</span>
        <span>2026</span>
      </div>

    </div>


    {/* =================================================
        RIGHT PROCESS
    ================================================= */}
    <div className="thinking-process">

      {/* PROCESS 01 */}
      <article className="thinking-process-item">

        <div className="thinking-process-number">
          01
        </div>

        <div className="thinking-process-line"></div>

        <div className="thinking-process-content">

          <div className="thinking-process-top">
            <span>DISCOVER</span>
            <span>01 / 03</span>
          </div>

          <h3>
            Understand
          </h3>

          <p>
            We start by understanding the real challenge,
            the people behind it and the opportunity waiting
            to be discovered.
          </p>

        </div>

      </article>


      {/* PROCESS 02 */}
      <article className="thinking-process-item">

        <div className="thinking-process-number">
          02
        </div>

        <div className="thinking-process-line"></div>

        <div className="thinking-process-content">

          <div className="thinking-process-top">
            <span>EXPLORE</span>
            <span>02 / 03</span>
          </div>

          <h3>
            Imagine
          </h3>

          <p>
            We challenge assumptions, explore possibilities
            and find a smarter direction before we start
            building.
          </p>

        </div>

      </article>


      {/* PROCESS 03 */}
      <article className="thinking-process-item">

        <div className="thinking-process-number">
          03
        </div>

        <div className="thinking-process-line"></div>

        <div className="thinking-process-content">

          <div className="thinking-process-top">
            <span>CREATE</span>
            <span>03 / 03</span>
          </div>

          <h3>
            Create
          </h3>

          <p>
            We turn the strongest ideas into practical,
            scalable solutions designed to create lasting
            value.
          </p>

        </div>

      </article>

    </div>

  </div>

</section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="about-cta">

        <div className="cta-shape cta-shape-one"></div>

        <div className="cta-shape cta-shape-two"></div>


        <div className="cta-content">

          <span className="about-eyebrow">
            LET'S BUILD TOGETHER
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Let's create something meaningful, innovative and
            built to make an impact.
          </p>

          <a
            href="#contact"
            className="cta-button"
          >
            Start a Conversation
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
};


export default AboutPage;