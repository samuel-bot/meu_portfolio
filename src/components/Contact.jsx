// src/components/Contact.jsx
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <p>Se quiser bater um papo ou saber mais sobre meu trabalho:</p>
      <ul>
        <li>
          E-mail:{" "}
          <a href="mailto:samuelabreu2346@gmail.com">
            samuelabreu2346@gmail.com
          </a>
        </li>
        <li>
          Telefone / WhatsApp:{" "}
          <a href="tel:+5511998606428">
            +55 11 99860-6428
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/samuel-bot"
            target="_blank"
            rel="noreferrer"
          >
            github.com/samuel-bot
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/samuelabreudev"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/samuelabreudev
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;