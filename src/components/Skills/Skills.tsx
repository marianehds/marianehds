import { skills } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";
import "./Skills.css";

const groups = [
  { key: "frontend" as const, label: "Frontend", emoji: "⚛️" },
  { key: "backend" as const, label: "Backend & dados", emoji: "🗄️" },
  { key: "tools" as const, label: "Ferramentas", emoji: "🛠️" },
];

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Skills</h2>
          <p className="section__subtitle">Tecnologias que uso no dia a dia</p>
        </div>
      </Reveal>

      <div className="skills__grid">
        {groups.map((group, i) => (
          <Reveal key={group.key} delay={i * 150} variant="scale">
            <article className="skills__card card glass glass--pink">
              <h3 className="skills__card-title anim-wiggle-hover">
                <span className="skills__emoji">{group.emoji}</span>{" "}
                {group.label}
              </h3>
              <ul className="skills__list">
                {skills[group.key].map((skill, j) => (
                  <li
                    key={skill}
                    className="skills__pill anim-pop-in"
                    style={{ animationDelay: `${0.3 + j * 0.06}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
