
import React, { useState } from "react";
import "../styles/articlePage.css";
import Footer from "../components/Footer";

const articles = [
  {
    id: 1,
    category: "CAREERS",
    date: "Sep 03, 2026",
    readTime: "6 min read",
    title: "Building Careers That Actually Matter",
    description:
      "The modern career is no longer a straight path. Discover how purpose, skills and opportunity are reshaping professional journeys.",
    featured: true,
    theme: "blue",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    title: "How AI Is Changing The Way We Work",
    description:
      "Artificial intelligence is transforming everyday work. Here is what the next generation of workplaces could look like.",
    theme: "green",
  },
  {
    id: 3,
    category: "HIRING",
    date: "Aug 21, 2026",
    readTime: "4 min read",
    title: "What Great Companies Look For",
    description:
      "Beyond degrees and job titles, companies are looking for people who can adapt, learn and create meaningful impact.",
    theme: "orange",
  },
  {
    id: 4,
    category: "INSIGHTS",
    date: "Aug 16, 2026",
    readTime: "7 min read",
    title: "The Future Belongs To Curious People",
    description:
      "Curiosity has become one of the most valuable skills in a world where technology and industries are constantly evolving.",
    theme: "light-blue",
  },
  {
    id: 5,
    category: "CAREERS",
    date: "Aug 10, 2026",
    readTime: "5 min read",
    title: "Why Skills Matter More Than Job Titles",
    description:
      "The traditional career ladder is changing. Skills, adaptability and continuous learning are becoming the new currency.",
    theme: "orange",
  },
  {
    id: 6,
    category: "WORKPLACE",
    date: "Aug 04, 2026",
    readTime: "6 min read",
    title: "Creating A Workplace People Love",
    description:
      "A great workplace is more than an office. Explore the ideas that create environments where people can do their best work.",
    theme: "green",
  },
  {
    id: 7,
    category: "TECHNOLOGY",
    date: "Jul 29, 2026",
    readTime: "8 min read",
    title: "Technology With A Human Side",
    description:
      "Innovation matters most when it solves real human problems. A look at building technology around people.",
    theme: "blue",
  },
  {
    id: 8,
    category: "INSIGHTS",
    date: "Jul 22, 2026",
    readTime: "4 min read",
    title: "Small Decisions, Big Career Changes",
    description:
      "Sometimes the smallest decisions create the biggest changes in our professional lives.",
    theme: "light-blue",
  },
];

const categories = [
  "ALL",
  "CAREERS",
  "HIRING",
  "TECHNOLOGY",
  "WORKPLACE",
  "INSIGHTS",
];

const ArticlePage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const featuredArticle = articles.find(
    (article) => article.featured
  );

  const filteredArticles =
    activeCategory === "ALL"
      ? articles.filter((article) => !article.featured)
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <div className="articles-page">

      {/* =====================================================
          NAVBAR COLOR OVERRIDE
      ===================================================== */}

      <style>
        {`
          .navbar a,
          .navbar .nav-link,
          .navbar .nav-item,
          .navbar li a {
            color: #174f3b !important;
          }

          .navbar a:hover,
          .navbar .nav-link:hover,
          .navbar .nav-item:hover,
          .navbar li a:hover {
            color: #ed9560 !important;
          }
        `}
      </style>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="articles-intro">

        <div className="intro-left">

          <div className="intro-eyebrow">
            <span></span>
            THE CANDIIQ JOURNAL
          </div>

          <h1>
            Ideas worth
            <em> exploring.</em>
          </h1>

        </div>


        <div className="intro-right">

          <p>
            Stories, insights and ideas about careers,
            technology, hiring and the people shaping
            the future of work.
          </p>

          <div className="article-count">

            <strong>
              {String(articles.length).padStart(2, "0")}
            </strong>

            <span>
              ARTICLES
              <br />
              &amp; INSIGHTS
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="category-section">

        <div className="category-line"></div>

        <div className="category-list">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      {activeCategory === "ALL" && (

        <section className="featured-section">

          <div className="featured-visual">

            <div className="visual-shape shape-one"></div>
            <div className="visual-shape shape-two"></div>
            <div className="visual-shape shape-three"></div>

            <div className="featured-number">
              01
            </div>

            <div className="featured-visual-text">

              <span>
                FEATURED STORY
              </span>

              <strong>
                PEOPLE × PURPOSE × POSSIBILITY
              </strong>

            </div>

          </div>


          <div className="featured-content">

            <div className="article-topline">

              <span>
                {featuredArticle.category}
              </span>

              <span>
                {featuredArticle.date}
              </span>

            </div>


            <h2>
              {featuredArticle.title}
            </h2>


            <p>
              {featuredArticle.description}
            </p>


            <div className="featured-bottom">

              <span>
                {featuredArticle.readTime}
              </span>

              <button className="read-button">
                Read story
                <span>↗</span>
              </button>

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          ARTICLES HEADING
      ===================================================== */}

      <section className="articles-heading">

        <div>

          <span>
            FROM THE JOURNAL
          </span>

          <h2>
            {activeCategory === "ALL"
              ? "Latest stories"
              : activeCategory}
          </h2>

        </div>


        <p>
          Discover perspectives designed to help
          you think differently.
        </p>

      </section>


      {/* =====================================================
          ARTICLE GRID
      ===================================================== */}

      <section className="articles-grid">

        {filteredArticles.map((article, index) => (

          <article
            className={`article-card ${article.theme}`}
            key={article.id}
          >

            {/* Card Visual */}

            <div className="card-visual">

              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="card-pattern">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="card-category">
                {article.category}
              </div>

            </div>


            {/* Card Content */}

            <div className="card-content">

              <div className="card-meta">

                <span>
                  {article.date}
                </span>

                <span>
                  {article.readTime}
                </span>

              </div>


              <h3>
                {article.title}
              </h3>


              <p>
                {article.description}
              </p>


              <button className="card-read">
                Read article
                <span>→</span>
              </button>

            </div>

          </article>

        ))}


        {/* No Results */}

        {filteredArticles.length === 0 && (

          <div className="no-articles">
            <h3>
              No articles found.
            </h3>

            <p>
              More stories are coming soon.
            </p>
          </div>

        )}

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="articles-cta">

        <div className="cta-decoration">

          <span></span>
          <span></span>
          <span></span>

        </div>


        <div className="cta-content">

          <span className="cta-label">
            KEEP EXPLORING
          </span>

          <h2>
            There is always
            <em> more to discover.</em>
          </h2>

          <p>
            New perspectives. New ideas. New possibilities.
          </p>

        </div>

      </section>


      {/* =====================================================
          EXISTING FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
};

export default ArticlePage;

