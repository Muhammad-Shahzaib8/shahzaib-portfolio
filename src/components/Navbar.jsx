import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          MS<span>.</span>
        </a>

        {/* Desktop / Mobile Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* Mobile CV Button */}
          <a
            href="/resume/Muhammad-Shahzaib-Resume.pdf"
            className="mobile-cv-button"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Download CV
          </a>

        </div>

        {/* Desktop Actions */}
        <div className="nav-actions">

          <a
            href="/resume/Muhammad-Shahzaib-Resume.pdf"
            className="nav-cv-button"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
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