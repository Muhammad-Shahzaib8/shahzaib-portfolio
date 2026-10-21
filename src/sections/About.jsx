
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
            <h3>
              Exploring AI research and building meaningful solutions.
            </h3>

            <p>
              I'm Muhammad Shahzaib, a Computer Science postgraduate
              student and developer interested in Artificial
              Intelligence, Machine Learning, and modern software
              development.
            </p>

            <p>
              My current research interest is transformer-based weed
              detection, exploring how computer vision can help identify
              weeds in agricultural fields and contribute to smarter,
              more precise weed management.
            </p>

            <p>
              Alongside research, I build responsive web applications,
              Python-based tools, backend APIs, and database-driven
              systems. I enjoy connecting academic knowledge with
              practical projects that solve real-world problems.
            </p>

            <p>
              I'm continuously developing my skills in AI, deep learning,
              software engineering, and research methodology to create
              useful and impactful technology.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h4>AI & Computer Vision</h4>
              <p>
                Exploring machine learning and transformer models
                for visual recognition tasks.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h4>Smart Agriculture</h4>
              <p>
                Researching weed detection approaches for
                precision agriculture applications.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h4>Software Development</h4>
              <p>
                Building responsive web apps, Python tools,
                APIs, and database-driven systems.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
