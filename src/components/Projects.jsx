// src/components/Projects.jsx
const projects = [
  {
    name: "EuroPro",
    period: "Jan 2025 – Dez 2025",
    description:
      "Plataforma multiplataforma (Web/Android) de engajamento de projetos e ideias futuras, com integração de IA para chatbot de suporte.",
    role:
      "Atuei como desenvolvedor, orquestrando o desenvolvimento do produto como um todo (back-end e front-end).",
    details:
      "Utilizei Flutter com componentes Stateless e Stateful, arquitetura MVVM, Repositories e integração com a library nativa do Supabase para Flutter.",
    techs: ["Flutter", "Dart", "Supabase", "MVVM"],
    // Se tiver repo ou demo, coloque aqui:
    link: null
  },
  {
    name: "Natura – Plataforma de Conexões",
    period: "Jan 2024 – Dez 2024",
    description:
      "Plataforma de conexões sociais para consultores Natura, focada em relacionamento e engajamento entre consultores.",
    role: "Atuei como desenvolvedor no desenvolvimento das funcionalidades de front-end e integração com o banco de dados.",
    details:
      "Projeto desenvolvido com JavaScript, CSS, HTML, MariaDB e JSON para armazenamento e manipulação de dados.",
    techs: ["JavaScript", "HTML", "CSS", "MariaDB", "JSON"],
    link: null
  },
  {
    name: "Challenge 2025 - Sistema de Gestão",
    period: "2025",
    description:
      "Projeto em equipe consistindo em um sistema de gestão com painel administrativo para controle e visualização de dados.",
    role:
      "Participei do desenvolvimento do sistema e do painel administrativo, colaborando com a equipe no back-end e front-end.",
    details:
      "Projeto com integração entre front-end e back-end, utilizando API, banco de dados e boas práticas de organização de código.",
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