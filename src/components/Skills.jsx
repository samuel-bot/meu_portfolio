// src/components/Skills.jsx
const skills = [
  "Java",
  "Spring Boot",
  "SQL",
  "React.js (em estudo)",
  "TypeScript (em estudo)",
  "Git & GitHub"
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;