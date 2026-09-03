import React, { useState } from "react";
import "../styles/projectsSection.css";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import stoneImage from "../assets/stoneimage.png";

const projectData = [
  {
    id: 1,
    num: "1",
    accentColor: "#f97316",
    category: "Recruitment / ATS",
    title: "CandiQ — Intelligent Recruitment & Talent Platform",
    subtitle: "Enterprise Talent Intake & Candidate Management",
    description:
      "Candidate management, resume intake, intelligent search, scoring algorithms, and full recruiter pipeline workflows.",
    challenges: ["Resume Parsing AI", "Multi-Tenant Workflows", "High-Speed Search"],
    impactStats: [
      { label: "SCREENING SPEED", value: "3.5x Faster" },
      { label: "ACTIVE PIPELINES", value: "50K+" },
      { label: "PARSING ACCURACY", value: "98.8%" },
    ],
    detailedCase:
      "Engineered high-throughput candidate indexing with instant semantic search and algorithmic fit-scoring. Built real-time collaboration dashboards for enterprise hiring teams with automated interview scheduling and custom workflow builders.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    num: "2",
    accentColor: "#0284c7",
    category: "Digital Health / EHR",
    title: "YuDi Health — Connected Healthcare & Patient Platform",
    subtitle: "Clinical Care Coordination & Digital Health Concept",
    description:
      "Digital platform concept focused on connected healthcare workflows, unified patient records, and modern clinical user experience.",
    challenges: ["HIPAA Compliance", "FHIR / HL7 Bridges", "Telehealth Streams"],
    impactStats: [
      { label: "ACTIVE RECORDS", value: "120K+" },
      { label: "SYNC LATENCY", value: "<180ms" },
      { label: "UPTIME SLA", value: "99.99%" },
    ],
    detailedCase:
      "Constructed secure patient charts with role-based access control, cryptographic audit logging, and sub-second telemetry streaming for inpatient vitals. Implemented end-to-end encrypted video consultation pipelines with automated clinical notes.",
    tags: ["React", "FHIR API", "Redis", "WebSockets", "Docker"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    num: "3",
    accentColor: "#eab308",
    category: "Custom Business Apps",
    title: "Custom Business & Workflow Automation Apps",
    subtitle: "Web • Mobile • Workflow",
    description:
      "Bespoke applications, multi-system integrations, and specialized internal tools shaped directly around enterprise business processes.",
    challenges: ["Legacy Integration", "Role-Based ACL", "Complex Analytics"],
    impactStats: [
      { label: "HOURS SAVED", value: "40%" },
      { label: "TRANSACTIONS", value: "1M+" },
      { label: "INTEGRITY", value: "100%" },
    ],
    detailedCase:
      "Developed high-velocity internal suites with dynamic form builders, audit history, automated notifications, and interactive BI dashboards. Reduced operational bottlenecks by replacing disjointed legacy spreadsheets with central cloud tools.",
    tags: ["React", "Next.js", "Python", "FastAPI", "GraphQL"],
    liveLink: "#",
    githubLink: "#",
  },
  
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Recruitment / ATS",
    "Digital Health / EHR",
    "Custom Business Apps",
    "HealthTech / EHR",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      {/* =====================================================
          STONE IMAGE
      ===================================================== */}
      <div className="projects-stone-bg">
        <img src={stoneImage} alt="" className="projects-stone-image" />
        <div className="projects-stone-fade" />
      </div>

      {/* =====================================================
          PROJECT CONTENT
      ===================================================== */}
      <div className="projects-content">
        {/* SECTION HEADER */}
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className="capabilities-header-center2">
          <div className="capabilities-eyebrow2">
            <span className="eyebrow-icon2">☘</span> YUKTIC
          </div>
          <h2 className="capabilities-title2">Our PROJECTS</h2>
          <p className="capabilities-subtitle2">
            Specialist expertise to transform complex healthcare programmes into confident, sustainable delivery.
          </p>
          <div className="capabilities-divider2"></div>
        </div>

        {/* FILTER TABS */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "is-active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID (3 CARDS PER ROW) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* CARD TOP HEADER */}
              <div className="project-card-header">
                <div className="project-header-left">
                  <span
                    className="project-number-badge"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    {project.num}
                  </span>
                  <span className="project-category-badge">
                    {project.category}
                  </span>
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    aria-label="GitHub Repository"
                    className="icon-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.liveLink}
                    aria-label="Live Demo"
                    className="icon-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* CARD TITLES */}
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>

              <p className="project-description">{project.description}</p>

              {/* CHALLENGES / CAPABILITIES */}
              <div className="project-challenges">
                <span className="challenge-label">KEY CAPABILITIES</span>
                <div className="challenge-pills">
                  {project.challenges.map((item, idx) => (
                    <span key={idx} className="challenge-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* STATS ROW */}
              <div className="project-stats-grid">
                {project.impactStats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* TECH TAGS */}
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* FOOTER */}
              <div className="project-card-footer">
                <a href={project.liveLink} className="project-view-btn">
                  <span>View Case Study</span>
                  <FaArrowRight className="btn-arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}