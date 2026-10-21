
function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="section-container">
        <div className="section-heading">
          <p>PROFESSIONAL JOURNEY</p>
          <h2>Experience</h2>
          <span className="section-line"></span>
        </div>

        <div className="experience-wrapper">
          {/* CURRENT TEACHING ROLE */}
          <article className="experience-card current-role">
            <div className="experience-top">
              <div className="experience-number">01</div>

              <div className="experience-heading">
                <div className="experience-meta">
                  <span className="experience-status">
                    previous ROLE
                  </span>

                  <span className="experience-date">
                    July 20, 2026 — October 22, 2026
                  </span>
                </div>

                <h3>Computer Science Teacher</h3>

                <h4>
                  Muslim Group of Schools &amp; Colleges, Multan
                </h4>
              </div>
            </div>

            <div className="experience-body">
              <p>
                Teach computer science and programming concepts
                through practical examples, structured lectures,
                and student-focused learning activities. Prepare
                educational materials and programming exercises
                to help students develop their technical knowledge
                and problem-solving skills.
              </p>

              <div className="experience-responsibilities">
                <div className="responsibility">
                  <span>01</span>
                  <p>
                    Deliver computer science and programming
                    lessons using clear explanations and practical
                    examples.
                  </p>
                </div>

                <div className="responsibility">
                  <span>02</span>
                  <p>
                    Prepare lecture notes, assignments, assessments,
                    and practical programming exercises.
                  </p>
                </div>

                <div className="responsibility">
                  <span>03</span>
                  <p>
                    Explain programming, databases, operating
                    systems, and computer networking concepts.
                  </p>
                </div>
              </div>

              <div className="experience-skills">
                <span>Teaching</span>
                <span>Programming</span>
                <span>Computer Science</span>
                <span>Lesson Planning</span>
                <span>Technical Communication</span>
              </div>
            </div>
          </article>

          {/* INDEPENDENT SOFTWARE DEVELOPMENT */}
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-number">02</div>

              <div className="experience-heading">
                <div className="experience-meta">
                  <span className="experience-type">
                    INDEPENDENT PROJECTS
                  </span>
                </div>

                <h3>Web Developer / Software Developer</h3>

                <h4>Independent Software Development</h4>
              </div>
            </div>

            <div className="experience-body">
              <p>
                Design and develop web and software projects
                that address practical requirements, including
                academic record management, database-driven
                applications, APIs, and AI-powered functionality.
              </p>

              <div className="experience-responsibilities">
                <div className="responsibility">
                  <span>01</span>
                  <p>
                    Develop responsive web applications with
                    user authentication, dashboards, and database
                    management features.
                  </p>
                </div>

                <div className="responsibility">
                  <span>02</span>
                  <p>
                    Build backend applications and APIs using
                    Python, FastAPI, PHP, and Django.
                  </p>
                </div>

                <div className="responsibility">
                  <span>03</span>
                  <p>
                    Develop AI-related projects and explore
                    machine learning and computer vision
                    applications.
                  </p>
                </div>
              </div>

              <div className="experience-skills">
                <span>React</span>
                <span>Python</span>
                <span>PHP</span>
                <span>Django</span>
                <span>FastAPI</span>
                <span>MySQL</span>
                <span>AI / ML</span>
              </div>
            </div>
          </article>

          {/* PEPSICO EXPERIENCE */}
          <article className="experience-card">
            <div className="experience-top">
              <div className="experience-number">03</div>

              <div className="experience-heading">
                <div className="experience-meta">
                  <span className="experience-type">
                    PROFESSIONAL EXPERIENCE
                  </span>

                  <span className="experience-date">
                    November 10, 2025 — January 2, 2026
                  </span>
                </div>

                <h3>Data Entry Operator</h3>

                <h4>PepsiCo</h4>
              </div>
            </div>

            <div className="experience-body">
              <p>
                Supported data entry and record-management
                activities, with an emphasis on accurate
                information handling, data verification, and
                organized digital documentation.
              </p>

              <div className="experience-responsibilities">
                <div className="responsibility">
                  <span>01</span>
                  <p>
                    Enter and update information in digital
                    records with attention to accuracy.
                  </p>
                </div>

                <div className="responsibility">
                  <span>02</span>
                  <p>
                    Review information for errors and help
                    maintain consistent records.
                  </p>
                </div>

                <div className="responsibility">
                  <span>03</span>
                  <p>
                    Organize digital documentation and support
                    routine administrative tasks.
                  </p>
                </div>
              </div>

              <div className="experience-skills">
                <span>Data Entry</span>
                <span>Record Keeping</span>
                <span>Data Verification</span>
                <span>Digital Documentation</span>
                <span>Attention to Detail</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
