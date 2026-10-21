
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Muhammad <span>Shahzaib</span>
          </h1>

          <h2 className="hero-role">
            AI Researcher <span>|</span> Python Developer
            <span> |</span> Web Developer
          </h2>

          <p className="hero-description">
            I am pursuing my journey in Computer Science,
            exploring Artificial Intelligence, Machine Learning,
            and modern web technologies. My current research
            interest focuses on transformer-based weed detection
            to support smarter and more precise agriculture.
          </p>

          <div className="hero-highlights">
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Computer Vision</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img
              src="/images/profile.jpg"
              alt="Muhammad Shahzaib"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
