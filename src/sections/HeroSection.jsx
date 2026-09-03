import React, { useState, useEffect } from "react";

import {
  FaCode,
  FaRocket,
  FaUserFriends,
  FaCube,
  FaArrowRight,
} from "react-icons/fa";

import courageImg from "../assets/courage.avif";
import integrityImg from "../assets/integrity.jpg";
import respectImg from "../assets/Respect.avif";

import "../styles/heroSection.css";


/* =========================================================
   YUKTIC ANIMATION CONFIG
========================================================= */

const STROKE_DURATION = 0.72;
const START_DELAY = 3.0;

const LETTERS = [
  ["M10 10 L50 58 L90 10", "M50 58 L50 110"],

  [
    "M10 10 L10 65 Q10 110 50 110 Q90 110 90 65 L90 10",
  ],

  [
    "M12 10 L12 110",
    "M88 10 L50 60 L88 110",
  ],

  [
    "M8 10 L92 10",
    "M50 10 L50 110",
  ],

  [
    "M50 10 L50 110",
  ],

  [
    "M90 18 Q72 8 52 8 Q10 8 10 60 Q10 112 52 112 Q72 112 90 100",
  ],
];


const STROKES = LETTERS.flatMap((paths, letterIndex) =>
  paths.map((path) => ({
    path,
    x: letterIndex * 116,
  }))
);


const TOTAL_WRITING_DURATION =
  START_DELAY + STROKES.length * STROKE_DURATION;


/* =========================================================
   YUKTIC WRITING HEADER
========================================================= */

function YukticWritingHeader() {
  return (
    <div
      className="yuktic-header-animation"
      style={{
        "--writing-duration": `${TOTAL_WRITING_DURATION}s`,
      }}
    >
      <svg
        className="writing-word"
        viewBox="0 0 680 120"
        role="img"
        aria-label="YUKTIC written by an orb"
      >
        {STROKES.map(({ path, x }, index) => {
          const delayNum =
            START_DELAY + index * STROKE_DURATION;

          const delayStr = `${delayNum}s`;

          return (
            <g
              key={`${x}-${path}-${index}`}
              transform={`translate(${x} 0)`}
            >
              <path
                className="writing-path"
                pathLength="1"
                d={path}
                style={{
                  "--stroke-delay": delayStr,
                }}
              />

              <circle
                className="writing-orb"
                r="5"
                style={{
                  "--stroke-delay": delayStr,
                }}
              >
                <animateMotion
                  dur={`${STROKE_DURATION}s`}
                  begin={delayStr}
                  path={path}
                  fill="freeze"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}


/* =========================================================
   BACKGROUND IMAGES
========================================================= */

const backgroundImages = [
  courageImg,
  integrityImg,
  respectImg,
];


/* =========================================================
   SERVICES DATA
========================================================= */

const servicesData = [
  {
    id: "consulting",

    icon: <FaCode />,

    subtitle: "Architecture & Advisory",

    title: "Software Consulting",

    tag: "Consulting",

    desc:
      "Architecture, high-performance engineering, and technology execution designed for scale.",
  },

  {
    id: "delivery",

    icon: <FaRocket />,

    subtitle: "End-to-End Build",

    title: "Solution Delivery",

    tag: "Delivery",

    desc:
      "Fixed-cost and T&M engagements aligned directly to mission-critical business outcomes.",
  },

  {
    id: "staffing",

    icon: <FaUserFriends />,

    subtitle: "Elite Engineering",

    title: "Staff Augmentation",

    tag: "Staffing",

    desc:
      "Vetted, high-impact engineers who seamlessly integrate with your existing core teams.",
  },

  {
    id: "products",

    icon: <FaCube />,

    subtitle: "Proprietary Tech",

    title: "Products & candiQ",

    tag: "Products",

    desc:
      "Building purpose-driven platforms, next-gen SaaS tools, and intelligent recruiting ecosystems like candiQ.",
  },
];


/* =========================================================
   MAIN HERO COMPONENT
========================================================= */

const LightHeartSection = () => {
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const [activeService, setActiveService] = useState(0);

  const [initialLoaded, setInitialLoaded] =
    useState(false);


  /* =======================================================
     INITIAL YUKTIC ANIMATION
  ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoaded(true);
    }, TOTAL_WRITING_DURATION * 1000);

    return () => clearTimeout(timer);
  }, []);


  /* =======================================================
     BACKGROUND IMAGE ROTATION
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBgIndex(
        (prev) =>
          (prev + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  /* =======================================================
     SERVICE ROTATION
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(
        (prev) =>
          (prev + 1) % servicesData.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const currentItem =
    servicesData[activeService];


  return (
    /*
      IMPORTANT:

      This wrapper remains in normal document flow
      while the actual Hero is fixed.

      This gives AboutYukticSection its correct
      starting position.
    */
    <div className="candid-hero-wrapper">

      <section className="candid-section">

        {/* =================================================
            BACKGROUND IMAGES
        ================================================= */}

        <div className="bg-layers-wrapper">

          {backgroundImages.map((img, idx) => (
            <div
              key={idx}
              className={`bg-layer ${
                idx === activeBgIndex
                  ? "active"
                  : ""
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}

        </div>


        {/* =================================================
            AMBIENT OVERLAY
        ================================================= */}

        <div className="section-overlay"></div>


        {/* =================================================
            BOTTOM BLUE FADE
        ================================================= */}

        <div className="section-bottom-blue-fade"></div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="section-content-container">


          {/* =================================================
              LEFT — LIVE VIEW CARD
          ================================================= */}

          <div className="live-view-card">

            <div className="live-header">
              <h3>
                PERFORMANCE STATICS
              </h3>
            </div>


            {/* ===============================================
                METRICS
            =============================================== */}

            <div className="metrics-grid">

              <div className="metric-box">

                <div className="metric-title-row">

                  <span className="metric-label">
                    RISK LEVEL
                  </span>

                  <span className="metric-status text-cyan">
                    Low / Decreasing
                  </span>

                </div>


                <div className="bars-chart">

                  <span className="bar bar-1"></span>

                  <span className="bar bar-2"></span>

                  <span className="bar bar-3"></span>

                  <span className="bar bar-4"></span>

                </div>

              </div>


              <div className="metric-box">

                <div className="metric-title-row">

                  <span className="metric-label">
                    DELIVERY PIPELINE
                  </span>

                  <span className="metric-status text-cyan">
                    Stabilised
                  </span>

                </div>


                <div className="timeline-chart">

                  <svg
                    viewBox="0 0 160 48"
                    className="sparkline-svg"
                  >

                    <path
                      d="
                        M 0 35
                        L 20 15
                        L 40 40
                        L 60 18
                        L 80 32
                        L 95 24
                        L 110 26
                        L 130 24
                        L 155 24
                      "
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <line
                      x1="88"
                      y1="0"
                      x2="88"
                      y2="48"
                      stroke="rgba(56, 189, 248, 0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                    />

                    <circle
                      cx="155"
                      cy="24"
                      r="4"
                      fill="#38bdf8"
                    />

                  </svg>

                </div>

              </div>

            </div>


            {/* ===============================================
                HUB NETWORK
            =============================================== */}

            <div className="teams-hub-section">

              <span className="teams-header-label">
                CONNECTED TEAMS & CAPABILITIES
              </span>


              <div className="hub-network-container">

                <svg
                  className="hub-lines-svg"
                  viewBox="0 0 300 220"
                >

                  <line
                    x1="150"
                    y1="110"
                    x2="60"
                    y2="45"
                    className="hub-line"
                  />

                  <line
                    x1="150"
                    y1="110"
                    x2="240"
                    y2="45"
                    className="hub-line"
                  />

                  <line
                    x1="150"
                    y1="110"
                    x2="60"
                    y2="175"
                    className="hub-line"
                  />

                  <line
                    x1="150"
                    y1="110"
                    x2="240"
                    y2="175"
                    className="hub-line"
                  />

                </svg>


                {/* CENTRAL NODE */}

                <div
                  className="hub-center-node"
                  title="Yuktic Core"
                >
                  <span className="clover-symbol">
                    ☘︎
                  </span>
                </div>


                {/* SERVICE NODES */}

                {servicesData.map(
                  (srv, idx) => (
                    <button
                      key={srv.id}
                      onClick={() =>
                        setActiveService(idx)
                      }
                      className={`hub-node node-${
                        idx + 1
                      } ${
                        activeService === idx
                          ? "node-active"
                          : ""
                      }`}
                      aria-label={srv.title}
                    >

                      <span className="hub-node-icon">
                        {srv.icon}
                      </span>

                      <span className="hub-node-title">
                        {srv.tag}
                      </span>

                    </button>
                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — TYPOGRAPHY
          ================================================= */}

          <div className="text-content">

            <YukticWritingHeader />


            <div
              className={`card-text-wrapper ${
                initialLoaded
                  ? "initial-ready"
                  : "initial-waiting"
              }`}
              key={currentItem.id}
            >

              {/* BADGE */}

              <div className="badge-chip">

                <span className="chip-icon">
                  {currentItem.icon}
                </span>

                <span>
                  {currentItem.subtitle}
                </span>

              </div>


              {/* TITLE */}

              <h1 className="service-title drop-down-anim">
                {currentItem.title}
              </h1>


              {/* DESCRIPTION */}

              <p className="service-description drop-down-anim-delay">
                {currentItem.desc}
              </p>


              {/* SERVICE SELECTOR */}

              <div className="glass-services-grid">

                {servicesData.map(
                  (item, idx) => {

                    const isActive =
                      activeService === idx;

                    return (
                      <div
                        key={item.id}
                        onClick={() =>
                          setActiveService(idx)
                        }
                        className={`glass-service-card ${
                          isActive
                            ? "active"
                            : ""
                        }`}
                      >

                        <div className="card-left-group">

                          <span className="service-card-icon">
                            {item.icon}
                          </span>


                          <div className="card-text-block">

                            <h4 className="service-card-title">
                              {item.title}
                            </h4>

                            <p className="service-card-sub">
                              {item.subtitle}
                            </p>

                          </div>

                        </div>


                        <FaArrowRight className="card-arrow" />


                        {isActive && (
                          <div className="active-glow-bar"></div>
                        )}

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};


export default LightHeartSection;