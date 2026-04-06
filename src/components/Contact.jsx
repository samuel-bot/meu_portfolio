// src/components/Contact.jsx
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <p>Se quiser bater um papo ou saber mais sobre meu trabalho:</p>
      <ul>
        <li>Email: <a href="mailto:seuemail@exemplo.com">samuelabreu2346@gmail.com</a></li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/samuelabreudev"
            target="_blank"
            rel="noreferrer"
          >
            /in/samuelabreudev
          </a>
        </li>
        {/* Coloque também o link do seu GitHub */}
      </ul>
    </section>
  );
}

export default Contact;