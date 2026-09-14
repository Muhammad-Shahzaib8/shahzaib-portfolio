function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Muhammad <span>Shahzaib</span>
          </h1>

          <h2>Web Developer | Python Developer | AI Enthusiast</h2>

          <p className="hero-description">
            I build modern, responsive web applications and AI-powered
            solutions with a focus on practical problems and real-world
            impact.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img src="/images/profile.jpg" alt="Muhammad Shahzaib" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;