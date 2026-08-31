import React from "react";
import "../styles/footer.css";
import yukticLogo from "../assets/Yuktic.png";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* Dynamic Multi-Shaded Floating Waves */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-inner">
        {/* Main Grid */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <img src={yukticLogo} alt="Yuktic" className="footer-logo" />
            <p className="footer-tagline">
              Independent EHR expertise that delivers.
            </p>
            <p className="footer-subtext">
              Supporting public, private and research hospitals.
            </p>
            <div className="footer-social-wrapper">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-box-wide"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav-grid">
            {/* Services */}
            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li><a href="#advisory">Advisory</a></li>
                <li><a href="#implementation">Implementation</a></li>
                <li><a href="#design">Design & Configuration</a></li>
                <li><a href="#optimisation">Optimisation</a></li>
                <li><a href="#recovery">Recovery</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#case-study">Case Study</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#qa">Q&A</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#data-transfer">Data Transfer Notice</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Details */}
        <div className="footer-divider" />
        <div className="footer-company-details">
          <p>
            Registered in England and Wales • Company No. 14525353 • VAT No. GB449942349
          </p>
          <p>
            Registered office: 1 Grenville Mews, London N19 4EQ, United Kingdom
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span>Copyright © {new Date().getFullYear()} Yuktic Limited.</span>
          <span className="powered-by">
            Powered by <img src={yukticLogo} alt="Yuktic" className="powered-logo" /> Yuktic.com
          </span>
        </div>
      </div>
    </footer>
  );
}