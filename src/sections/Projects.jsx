import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">

        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              number={index + 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;