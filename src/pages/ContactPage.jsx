import React, { useState } from "react";
import "../styles/contactPage.css";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          PROFESSIONAL HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-container">

          <div className="contact-hero-left">

            <div className="contact-label">
              CONTACT US
            </div>

            <h1>
              Let’s start a
              <br />
              <span>conversation.</span>
            </h1>

            <p>
              Have a question, need support, or interested in
              working with us? Our team is here to help.
            </p>

          </div>


          <div className="contact-hero-right">

            <div className="hero-location-block">

              <div className="hero-location-number">
                01
              </div>

              <div>
                <span>GENERAL ENQUIRIES</span>

                <a href="mailto:hello@candiiq.com">
                  hello@candiiq.com
                </a>
              </div>

            </div>


            <div className="hero-location-block">

              <div className="hero-location-number">
                02
              </div>

              <div>
                <span>PARTNERSHIPS</span>

                <a href="mailto:partnerships@candiiq.com">
                  partnerships@candiiq.com
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <section className="contact-main">

        <div className="contact-main-container">

          {/* LEFT INFORMATION */}

          <div className="contact-details">

            <div className="section-small-title">
              GET IN TOUCH
            </div>

            <h2>
              We’d love to
              <br />
              <span>hear from you.</span>
            </h2>

            <p className="contact-description">
              Whether you're exploring an opportunity,
              looking for the right talent, or simply have
              a question about what we do, send us a message.
            </p>


            <div className="contact-detail-list">

              <div className="contact-detail-item">

                <div className="detail-icon">
                  <span>✉</span>
                </div>

                <div>
                  <small>EMAIL</small>

                  <a href="mailto:hello@candiiq.com">
                    hello@candiiq.com
                  </a>
                </div>

              </div>


              <div className="contact-detail-item">

                <div className="detail-icon">
                  <span>↗</span>
                </div>

                <div>
                  <small>PARTNERSHIPS</small>

                  <a href="mailto:partnerships@candiiq.com">
                    partnerships@candiiq.com
                  </a>
                </div>

              </div>


              <div className="contact-detail-item">

                <div className="detail-icon">
                  <span>◷</span>
                </div>

                <div>
                  <small>RESPONSE TIME</small>

                  <strong>
                    Within 1–2 business days
                  </strong>
                </div>

              </div>

            </div>


            <div className="contact-note">

              <div className="note-line"></div>

              <p>
                We believe good communication is the
                beginning of every great relationship.
              </p>

            </div>

          </div>


          {/* FORM */}

          <div className="contact-form-container">

            <div className="form-header">

              <span>
                SEND US A MESSAGE
              </span>

              <h3>
                Tell us how we can help.
              </h3>

            </div>


            {submitted && (
              <div className="contact-success">

                <div className="success-check">
                  ✓
                </div>

                <div>
                  <strong>
                    Message sent successfully
                  </strong>

                  <p>
                    Thank you for reaching out.
                    We’ll get back to you shortly.
                  </p>
                </div>

              </div>
            )}


            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="name">
                    Full name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select an option
                    </option>

                    <option value="general">
                      General enquiry
                    </option>

                    <option value="partnership">
                      Partnership
                    </option>

                    <option value="hiring">
                      Hiring
                    </option>

                    <option value="candidate">
                      Candidate support
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              <div className="contact-form-group message-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="7"
                  required
                ></textarea>

              </div>


              <div className="contact-form-footer">

                <p>
                  Your information is only used to respond
                  to your enquiry.
                </p>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>
                    Send message
                  </span>

                  <strong>
                    →
                  </strong>
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS SECTION
      ===================================================== */}

      <section className="contact-business">

        <div className="business-container">

          <div className="business-heading">

            <span>
              OUR APPROACH
            </span>

            <h2>
              Professional by nature.
              <br />
              <em>Human by design.</em>
            </h2>

          </div>


          <div className="business-columns">

            <div className="business-column">

              <span className="business-number">
                01
              </span>

              <h3>
                Clear communication
              </h3>

              <p>
                We keep conversations straightforward,
                transparent and focused on what matters.
              </p>

            </div>


            <div className="business-column">

              <span className="business-number">
                02
              </span>

              <h3>
                Meaningful solutions
              </h3>

              <p>
                Every conversation starts with understanding
                the problem before finding the right solution.
              </p>

            </div>


            <div className="business-column">

              <span className="business-number">
                03
              </span>

              <h3>
                Long-term relationships
              </h3>

              <p>
                We aim to build relationships that create
                value well beyond the first conversation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-final">

        <div className="contact-final-container">

          <div>

            <span>
              HAVE AN IDEA?
            </span>

            <h2>
              Let’s make it
              <br />
              <em>happen.</em>
            </h2>

          </div>


          <a
            href="mailto:hello@candiiq.com"
            className="final-contact-button"
          >
            <span>
              Get in touch
            </span>

            <strong>
              →
            </strong>
          </a>

        </div>

      </section>


      {/* EXISTING FOOTER */}

      <Footer />

    </div>
  );
};

export default ContactPage;