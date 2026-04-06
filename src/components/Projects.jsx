// src/components/Projects.jsx
const projects = [
  {
    name: "Challenge 2025 - Sistema de Gestão",
    description:
      "Projeto em equipe desenvolvido em 2025, consistindo em um sistema de gestão com painel administrativo para controle e visualização de dados, integrando front-end e back-end.",
    techs: ["Java", "Spring Boot", "SQL", "React", "JavaScript", "Git"],
    link: "https://github.com/AriadineAmaral/Challenge2025"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="project-techs">{project.techs.join(" · ")}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;