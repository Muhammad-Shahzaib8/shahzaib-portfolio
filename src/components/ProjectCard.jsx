
function ProjectCard({ project, number }) {
  const projectNumber = String(number).padStart(2, "0");

  const hasGithub =
    project.github && project.github !== "#";

  const hasDemo =
    project.demo && project.demo !== "#";

  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span>{projectNumber}</span>
            <p>{project.category}</p>
          </div>
        )}

        <div className="project-overlay">
          <span>PROJECT {projectNumber}</span>
        </div>
      </div>

      <div className="project-content">
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {(hasGithub || hasDemo) && (
          <div className="project-links">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo of ${project.title}`}
              >
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
