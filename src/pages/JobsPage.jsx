import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";
import "../styles/jobsPage.css";

const jobs = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Artificial Intelligence",
    location: "India / Remote",
    type: "Full-time",
    experience: "3–6 years",
    color: "blue",
    description:
      "Build intelligent systems that turn complex business problems into simple, useful experiences.",
    tags: ["Python", "LLMs", "Machine Learning"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "India / Remote",
    type: "Full-time",
    experience: "2–5 years",
    color: "green",
    description:
      "Create fast, expressive interfaces that bring ambitious digital products to life.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "India / Remote",
    type: "Full-time",
    experience: "2–5 years",
    color: "orange",
    description:
      "Shape thoughtful product experiences from the first sketch to the final interaction.",
    tags: ["Figma", "UX", "Product Design"],
  },
  {
    id: 4,
    title: "Backend Engineer",
    department: "Engineering",
    location: "India / Remote",
    type: "Full-time",
    experience: "3–6 years",
    color: "blue",
    description:
      "Design reliable APIs and scalable systems that power meaningful products.",
    tags: ["Python", "FastAPI", "MySQL"],
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "India / Remote",
    type: "Full-time",
    experience: "4–7 years",
    color: "green",
    description:
      "Connect strategy, technology and customer needs to build products people actually use.",
    tags: ["Product", "Strategy", "Agile"],
  },
  {
    id: 6,
    title: "Business Development Executive",
    department: "Growth",
    location: "India",
    type: "Full-time",
    experience: "1–4 years",
    color: "orange",
    description:
      "Build relationships, discover opportunities and help businesses find the right technology.",
    tags: ["B2B", "Sales", "Growth"],
  },
];

const JobsPage = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = [
    "All",
    "Artificial Intelligence",
    "Engineering",
    "Design",
    "Product",
    "Growth",
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesDepartment =
        department === "All" ||
        job.department === department;

      const searchText = search.toLowerCase();

      const matchesSearch =
        !searchText ||
        job.title.toLowerCase().includes(searchText) ||
        job.department.toLowerCase().includes(searchText) ||
        job.location.toLowerCase().includes(searchText) ||
        job.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      return matchesDepartment && matchesSearch;
    });
  }, [search, department]);

  return (
    <main className="jobs-page">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="jobs-bg jobs-bg-one"></div>
      <div className="jobs-bg jobs-bg-two"></div>
      <div className="jobs-bg jobs-bg-three"></div>

      <div className="jobs-grid-bg"></div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="jobs-hero">

        <div className="jobs-hero-inner">

          {/* LEFT */}

          <div className="jobs-hero-content">

            


            <h1>

              Build your
              <br />

              <span>
                next chapter.
              </span>

            </h1>


            <p>
              We are building a team of curious people who
              believe technology should make things better,
              simpler and more human.
            </p>


            <div className="jobs-hero-actions">

              <a
                href="#open-positions"
                className="jobs-primary-btn"
              >
                <span>
                  Explore open roles
                </span>

                <strong>
                  ↓
                </strong>
              </a>

              <div className="jobs-availability">

                <span className="jobs-live-dot"></span>

                <div>
                  <b>
                    {jobs.length} OPEN POSITIONS
                  </b>

                  <small>
                    Across multiple teams
                  </small>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}

          <div className="jobs-hero-visual">

            <div className="jobs-orbit orbit-one"></div>
            <div className="jobs-orbit orbit-two"></div>
            <div className="jobs-orbit orbit-three"></div>


            <div className="jobs-main-card">

              <div className="jobs-card-top">

                <span>
                  YUKTIC
                </span>

                <small>
                  CAREERS 
                </small>

              </div>


              <div className="jobs-card-center">

                <div className="jobs-card-letter">
                  ☘︎
                </div>

                <div className="jobs-card-ring"></div>

              </div>


              <div className="jobs-card-bottom">

                <span>
                  THINK
                </span>

                <span>
                  BUILD
                </span>

                <span>
                  GROW
                </span>

              </div>

            </div>


            <div className="jobs-floating jobs-floating-one">

              <span></span>

              <strong>
                AI
              </strong>

            </div>


            <div className="jobs-floating jobs-floating-two">

              <span></span>

              <strong>
                DESIGN
              </strong>

            </div>


            <div className="jobs-floating jobs-floating-three">

              <span></span>

              <strong>
                PRODUCT
              </strong>

            </div>


            <div className="jobs-floating jobs-floating-four">

              <span></span>

              <strong>
                ENGINEERING
              </strong>

            </div>

          </div>

        </div>


        {/* HERO BOTTOM */}

        <div className="jobs-hero-bottom">

          <span>
            01
          </span>

          <div></div>

          <span>
            PEOPLE
          </span>

          <span>
            CULTURE
          </span>

          <span>
            CRAFT
          </span>

          <span>
            IMPACT
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="jobs-intro">

        <div className="jobs-container">

         

          <div className="jobs-intro-grid">

            <h2>
              Come for the
              <span> challenge.</span>
              <br />
              Stay for the
              <span> people.</span>
            </h2>


            <div className="jobs-intro-copy">

              <p>
                At Yuktic, different disciplines work side by
                side. Engineers talk to designers. Product
                teams talk to customers. Ideas move quickly
                because the people building them are close
                to the problem.
              </p>

              <p>
                We care about ambitious work, thoughtful
                technology and creating an environment where
                people can do their best work.
              </p>


              <div className="jobs-values">

                <div>
                  <span>01</span>
                  <strong>Curiosity</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Ownership</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Craft</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        className="jobs-positions"
        id="open-positions"
      >

        <div className="jobs-container">

          <div className="jobs-section-heading">

            <div>

             

              <h2>
                Find your
                <span> place.</span>
              </h2>

            </div>


           

          </div>


          {/* SEARCH */}

          <div className="jobs-controls">

            <div className="jobs-search">

              <span>
                /
              </span>

              <input
                type="text"
                placeholder="Search roles, skills or teams..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <small>
                {filteredJobs.length} RESULTS
              </small>

            </div>


            <div className="jobs-filters">

              {departments.map((item) => (

                <button
                  key={item}
                  className={
                    department === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setDepartment(item)
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>


          {/* JOB LIST */}

          <div className="jobs-list">

            {filteredJobs.length > 0 ? (

              filteredJobs.map((job, index) => (

                <article
                  className={`job-item job-${job.color}`}
                  key={job.id}
                >

                  <div className="job-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <div className="job-main">

                    <div className="job-department">
                      <span></span>
                      {job.department}
                    </div>

                    <h3>
                      {job.title}
                    </h3>

                    <p>
                      {job.description}
                    </p>


                    <div className="job-tags">

                      {job.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>


                  <div className="job-meta">

                    <div>
                      <small>
                        LOCATION
                      </small>

                      <strong>
                        {job.location}
                      </strong>
                    </div>


                    <div>
                      <small>
                        EXPERIENCE
                      </small>

                      <strong>
                        {job.experience}
                      </strong>
                    </div>


                    <div>
                      <small>
                        TYPE
                      </small>

                      <strong>
                        {job.type}
                      </strong>
                    </div>

                  </div>


                  <a
                    href={`mailto:careers@yuktic.com?subject=Application - ${job.title}`}
                    className="job-arrow"
                    aria-label={`Apply for ${job.title}`}
                  >
                    ↗
                  </a>

                </article>

              ))

            ) : (

              <div className="jobs-empty">

                <span>
                  404
                </span>

                <h3>
                  No role found.
                </h3>

                <p>
                  Try another search or department.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setDepartment("All");
                  }}
                >
                  Reset filters
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}
       
      <section className="jobs-culture">
        

        <div className="jobs-container">

          


          <div className="culture-layout">

            <div className="culture-statement">

              <h2>
                Smart people.
                <br />

                <em>
                  Real ownership.
                </em>
              </h2>

              <p>
                We don't believe great work comes from
                unnecessary layers. We give people context,
                responsibility and room to figure things out.
              </p>

            </div>


            <div className="culture-list">

              <div className="culture-item">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Work with freedom
                  </h3>

                  <p>
                    Bring your own perspective. We care about
                    outcomes more than rigid processes.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Learn constantly
                  </h3>

                  <p>
                    Technology changes quickly. We expect
                    curiosity and create space to keep learning.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span>
                  03
                </span>

                <div>

                  <h3>
                    Build together
                  </h3>

                  <p>
                    The best ideas rarely belong to one person.
                    We challenge, collaborate and improve together.
                  </p>

                </div>

              </div>


              <div className="culture-item">

                <span>
                  04
                </span>

                <div>

                  <h3>
                    Make an impact
                  </h3>

                  <p>
                    We build things that solve real problems,
                    not technology for technology's sake.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="jobs-cta">

        <div className="jobs-cta-circle"></div>

        <div className="jobs-cta-inner">

          <span>
            CAN'T FIND THE RIGHT ROLE?
          </span>

          <h2>
            We still want
            <br />
            to hear from you.
          </h2>

          <p>
            If you think you could bring something valuable
            to Yuktic, send us your story. The right opportunity
            might not have a title yet.
          </p>

          <a
            href="mailto:careers@yuktic.com?subject=Open Application - Yuktic"
            className="jobs-cta-button"
          >
            <span>
              Send your profile
            </span>

            <strong>
              ↗
            </strong>
          </a>

        </div>

      </section>


      <Footer />

    </main>
  );
};

export default JobsPage;