
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          MS<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#research" onClick={closeMenu}>
  Research
</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="/resume/Muhammad_Shahzaib_Resume.pdf"
            className="mobile-cv-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/resume/Muhammad_Shahzaib_Resume.pdf"
            className="nav-cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
