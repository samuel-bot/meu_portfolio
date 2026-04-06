// src/components/Hero.jsx
import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Olá, eu sou o Samuel</h1>
        <h2>Desenvolvedor Back-end & Front-end em formação</h2>
        <p>
          Comecei minha jornada no desenvolvimento de software em 2023 e, desde então, participei
          de projetos individuais e em equipe. Hoje estou em busca de vagas de estágio tanto em
          front-end quanto em back-end.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver projetos
          </a>
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
        <img src={profileImg} alt="Foto de perfil de Samuel Mota Gama De Abreu" />
      </div>
    </section>
  );
}

export default Hero;