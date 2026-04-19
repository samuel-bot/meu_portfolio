// src/components/Header.jsx
function Header() {
  return (
    <header className="header">
      <div className="container-inner">
        <span className="logo">Samuel Abreu</span>

        <nav className="nav-links">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projetos</a>
          <a href="#contact" className="nav-link">Contato</a>
        </nav>

        {/* Mobile: optional hamburger placeholder (not functional) */}
        <button className="mobile-menu" aria-label="Abrir menu" style={{display: 'none'}}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;