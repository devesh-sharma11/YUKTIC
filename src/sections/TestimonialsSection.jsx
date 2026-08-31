import React, { useState } from "react";
import "../styles/testimonialsSection.css";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Dr. Alistair Finch",
    role: "Chief Medical Information Officer",
    organisation: "St. Jude NHS Trust",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "Yuktic transformed our complex EHR rollout into a streamlined, risk-mitigated success. Their clinicians and data architects understood our workflow from day one.",
    rating: 5,
    tag: "EHR Migration",
  },

  {
    id: 2,
    name: "Elena Rostova",
    role: "Director of Digital Transformation",
    organisation: "Novis Healthcare Group",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote:
      "The clinical optimization work delivered measurable time savings for our nursing staff within the first quarter. Outstanding domain knowledge and technical execution.",
    rating: 5,
    tag: "Workflow Optimisation",
  },

  {
    id: 3,
    name: "Marcus Sterling",
    role: "Head of Infrastructure & Cloud Systems",
    organisation: "Apex Research Hospitals",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "Their team stepped in during a stalled deployment and recovered the entire pipeline without missing regulatory compliance deadlines. Highly recommended.",
    rating: 5,
    tag: "Programme Recovery",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="testimonials-section"
      id="testimonials"
    >
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="testimonials-heading">

        <span className="testimonials-eyebrow">
          CLIENT ENDORSEMENTS
        </span>

        <h2 className="testimonials-main-heading">
          Trusted by Healthcare Leaders
        </h2>

        <p className="testimonials-subheading">
          Discover how our specialized EHR advisory and engineering
          teams empower hospitals and healthcare providers.
        </p>

        <div className="testimonials-heading-line" />

      </div>


      {/* =====================================================
          TESTIMONIAL CONTENT
      ===================================================== */}

      <div className="testimonials-container">

        <div className="testimonials-grid">

          {testimonials.map((item, index) => (

            <div
              key={item.id}
              className={`testimonial-card ${
                index === activeIndex ? "is-featured" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >

              {/* ---------------------------------------------
                  TOP ROW
              --------------------------------------------- */}

              <div className="card-top-row">

                <span className="testimonial-tag">
                  {item.tag}
                </span>

                <div className="star-rating">

                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="star-icon"
                    />
                  ))}

                </div>

              </div>


              {/* ---------------------------------------------
                  QUOTE ICON
              --------------------------------------------- */}

              <div className="quote-icon-box">
                <FaQuoteLeft />
              </div>


              {/* ---------------------------------------------
                  QUOTE
              --------------------------------------------- */}

              <p className="testimonial-quote">
                "{item.quote}"
              </p>


              {/* ---------------------------------------------
                  PROFILE
              --------------------------------------------- */}

              <div className="testimonial-profile">

                <img
                  src={item.avatar}
                  alt={item.name}
                  className="profile-avatar"
                />

                <div className="profile-info">

                  <h4 className="profile-name">
                    {item.name}
                  </h4>

                  <p className="profile-role">
                    {item.role}
                  </p>

                  <span className="profile-org">
                    {item.organisation}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ===================================================
            CAROUSEL CONTROLS
        =================================================== */}

        <div className="testimonials-controls">

          <button
            className="control-btn"
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>


          <div className="carousel-dots">

            {testimonials.map((_, idx) => (

              <button
                key={idx}
                className={`dot ${
                  idx === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />

            ))}

          </div>


          <button
            className="control-btn"
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>

      <br/> <br/> <br/> <br/>

    </section>
    
  );
}