// src/components/Hero.jsx
import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Olá, eu sou o Samuel</h1>
        <h2>Estudante de Sistemas de Informação & Desenvolvedor em formação</h2>
        <p>
          Busco oportunidade de estágio em desenvolvimento, aplicando o que aprendo em Java,
          Spring Boot, SQL, React e TypeScript.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">Ver projetos</a>
          <a
            href="https://www.linkedin.com/in/samuelabreudev"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img src={profileImg} alt="Foto de perfil de Samuel Abreu" />
      </div>
    </section>
  );
}

export default Hero;