// src/components/Projects.jsx
const projects = [
  {
    name: "EuroPro - Sistema de Gestão",
    period: "Jan 2025 – Dez 2025",
    description:
      "Projeto em equipe consistindo em uma plataforma de engajamento de projetos e ideias futuras, com sistema de gestão e painel administrativo para controle e visualização de dados.",
    role:
      "Atuei como desenvolvedor, orquestrando o desenvolvimento do produto como um todo (back-end e front-end).",
    details:
      "Plataforma multiplataforma (Web/Android) com integração de IA para chatbot de suporte. Utilizei Flutter com componentes Stateless e Stateful, arquitetura MVVM, Repositories e integração com a library nativa do Supabase para Flutter, além da integração com API e banco de dados que compõem o sistema de gestão (Challenge 2025).",
    techs: [
      "Flutter",
      "Dart",
      "Supabase",
      "MVVM",
      "APIs REST",
      "Banco de dados",
      "Git"
    ],
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
            {project.period && (
              <p className="project-techs">{project.period}</p>
            )}
            <p>{project.description}</p>
            <p style={{ marginTop: "0.5rem" }}>{project.role}</p>
            <p style={{ marginTop: "0.3rem" }}>{project.details}</p>
            <p className="project-techs" style={{ marginTop: "0.5rem" }}>
              {project.techs.join(" · ")}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Ver no GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;