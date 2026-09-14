function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Building solutions with code and creativity.</h3>

            <p>
              I'm Muhammad Shahzaib, a web developer and Python developer
              interested in building practical software solutions and
              AI-powered applications.
            </p>

            <p>
              I enjoy turning real-world problems into useful, responsive,
              and user-friendly applications. My experience includes web
              development, backend development, databases, and AI/ML
              projects.
            </p>

            <p>
              I'm continuously improving my technical skills and building
              real-world projects to grow as a professional developer.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h4>Web Development</h4>
              <p>
                Responsive and database-driven web applications.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h4>Python & AI</h4>
              <p>
                Python applications, APIs and AI-powered solutions.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h4>Problem Solving</h4>
              <p>
                Turning real-world requirements into practical software.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;