// src/components/Projects.jsx
const projects = [
  {
    name: "Zenith Finanças - Gestão Financeira Pessoal (Em Produção)",
    featured: true,
    statusBadge: {
      text: "● Online (Deploy Contínuo)",
      aria: "online"
    },
    description:
      "Plataforma Full Stack para controle completo de receitas, despesas e metas financeiras. O sistema está em produção ativa, com arquitetura moderna que garante alta segurança na autenticação e total independência do usuário sobre seus dados. Inclui sistema inteligente de recuperação de senha e foi desenvolvido seguindo as melhores práticas de mercado para performance e usabilidade.",
    techs: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker", "Nginx", "Tailwind"],
    link: {
      site: "https://zenithfinancas.com.br",
      repo: "https://github.com/samuel-bot"
    }
  },
  {
    name: "EuroPro - Sistema de Gestão",
    period: "Jan 2025 – Dez 2025",
    description:
      "Projeto em equipe consistindo em uma plataforma de engajamento de projetos e ideias futuras, com sistema de gestão e painel administrativo para controle e visualização de dados.",
    role:
      "Atuei como desenvolvedor, orquestrando o desenvolvimento do produto como um todo (back-end e front-end).",
    details:
      "Plataforma multiplataforma (Web/Android) com integração de IA para chatbot de suporte. Utilizei Flutter com componentes Stateless e Stateful, arquitetura MVVM, Repositories e integração com a library nativa do Supabase para Flutter, além da integração com API e banco de dados que compõem o sistema de gestão (Challenge 2025).",
    techs: ["Flutter", "Dart", "Supabase", "MVVM", "APIs REST", "Banco de dados", "Git"],
    link: "https://github.com/AriadineAmaral/Challenge2025"
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
              <h3>{project.name}</h3>
              {project.statusBadge && (
                <span className="project-badge" aria-label={project.statusBadge.aria}>
                  {project.statusBadge.text}
                </span>
              )}
            </div>

            {project.period && <p className="project-techs">{project.period}</p>}

            <p style={{ marginTop: '0.5rem' }}>{project.description}</p>

            {project.role && <p style={{ marginTop: '0.5rem' }}>{project.role}</p>}
            {project.details && <p style={{ marginTop: '0.3rem' }}>{project.details}</p>}

            {project.techs && (
              <p className="project-techs" style={{ marginTop: '0.5rem' }}>
                {project.techs.join(' · ')}
              </p>
            )}

            {project.link && (
              <p style={{ marginTop: '0.6rem', display: 'flex', gap: '0.75rem' }}>
                {project.link.site && (
                  <a href={project.link.site} target="_blank" rel="noreferrer">Acessar Site</a>
                )}
                {typeof project.link === 'string' && (
                  <a href={project.link} target="_blank" rel="noreferrer">Ver no GitHub</a>
                )}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;