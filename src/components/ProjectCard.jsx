function ProjectCard({ project, number }) {
  return (
    <article className="project-card">

      {/* Project Visual */}
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
          />
        ) : (
          <div className="project-placeholder">
            <span>{String(number).padStart(2, "0")}</span>
            <p>{project.category}</p>
          </div>
        )}

        <div className="project-overlay">
          <span>PROJECT {String(number).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">

        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="technology-list">
          {project.technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;