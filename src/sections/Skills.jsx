const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "Django",
  "FastAPI",
  "MySQL",
  "SQLite",
  "Git & GitHub",
  "AI / Machine Learning",
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;