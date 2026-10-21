
const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  },
  {
    title: "Programming & Backend",
    skills: ["Python", "PHP", "Django", "FastAPI", "REST APIs"],
  },
  {
    title: "Database Management",
    skills: ["MySQL", "SQLite", "SQL"],
  },
  {
    title: "AI & Research Interests",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Transformer Models",
    ],
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
          <span>
            Technologies and tools I use in software development
            and explore through my AI research interests.
          </span>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={category.title}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
