import { profile } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Contato</h2>
        </div>
      </Reveal>

      <Reveal delay={150} variant="scale">
        <div className="contact__card card glass glass--pink">
          <p className="contact__emoji anim-float-slow" aria-hidden="true">
            💬
          </p>
          <p className="contact__text">
            Estou aberta a oportunidades, projetos e trocas sobre
            desenvolvimento Full Stack.
          </p>
          <div className="contact__links">
            {[
              { href: `mailto:${profile.email}`, label: `${profile.email}` },
              { href: profile.linkedin, label: "LinkedIn", external: true },
            ].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="contact__link anim-pop-in"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
