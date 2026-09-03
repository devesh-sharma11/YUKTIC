import React, { useEffect, useState } from "react";
import "../styles/aiBot.css";

const AiBot = () => {
  const [footerVisible, setFooterVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /*
      Find the real footer on the page.
    */
    const footer = document.querySelector("footer");

    if (!footer) {
      return;
    }

    /*
      Detect when footer enters the viewport.
    */
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
    Close the bot when footer appears.
  */
  useEffect(() => {
    if (footerVisible) {
      setIsOpen(false);
    }
  }, [footerVisible]);

  /*
    Don't render bot when footer is visible.
  */
  if (footerVisible) {
    return null;
  }

  return (
    <div className="ai-bot-wrapper">

      {/* =========================================
          CHAT PANEL
      ========================================= */}

      <div
        className={`ai-bot-chat ${
          isOpen ? "ai-bot-chat-open" : ""
        }`}
      >

        <div className="ai-bot-chat-header">

          <div className="ai-bot-mini-avatar">
            ✦
          </div>

          <div>
            <strong>Yuktic AI</strong>
            <span>Always here to help</span>
          </div>

          <button
            className="ai-bot-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close AI assistant"
          >
            ×
          </button>

        </div>


        <div className="ai-bot-chat-body">

          <div className="ai-message">
            <div className="ai-message-avatar">
              ✦
            </div>

            <div className="ai-message-bubble">
              Hey! 👋
              <br />
              How can I help you today?
            </div>
          </div>


          <div className="ai-bot-options">

            <button>
              Explore Yuktic
            </button>

            <button>
              Our Services
            </button>

            <button>
              Talk to us
            </button>

          </div>

        </div>

      </div>


      {/* =========================================
          FLOATING BOT
      ========================================= */}

      <button
        className={`ai-bot-float ${
          isOpen ? "ai-bot-float-active" : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Yuktic AI assistant"
      >

        {/* Floating glow */}
        <span className="ai-bot-glow"></span>


        {/* Outer orbit */}
        <span className="ai-bot-orbit"></span>


        {/* Bot body */}
        <span className="ai-bot-face">

          <span className="ai-bot-antenna">
            <span></span>
          </span>

          <span className="ai-bot-eyes">

            <span></span>
            <span></span>

          </span>

          <span className="ai-bot-smile"></span>

        </span>


        {/* Notification dot */}
        <span className="ai-bot-notification">
          1
        </span>

      </button>


      {/* =========================================
          SMALL LABEL
      ========================================= */}

      {!isOpen && (
        <div className="ai-bot-label">
          <span>Need help?</span>
          <strong>Ask Yuktic AI</strong>
        </div>
      )}

    </div>
  );
};

export default AiBot;