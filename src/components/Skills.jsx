// src/components/Skills.jsx
const skills = [
  "Java",
  "Servlet",
  "Tomcat",
  "JavaScript",
  "jQuery",
  "AJAX",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git",
  "Redes",
  "PostgreSQL",
  "Flutter",
  "Spring Boot",
  "APIs REST",
  "Supabase",
  "Angular",
  "React",
  "MVC",
  "Linux"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;