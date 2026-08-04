import { experiences } from "../../data/profile";
import { Reveal } from "../Reveal/Reveal";
import "./Jobs.css";

export function Jobs() {
  return (
    <section id="experiencia" className="section jobs">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Experiência</h2>
        </div>
      </Reveal>

      <div className="jobs__timeline">
        {experiences.map((job, i) => (
          <Reveal key={job.id} delay={i * 120} variant="scale">
            <article className="jobs__card card glass glass--pink">
              <span
                className={`badge ${job.isCurrent ? "" : "badge--outline"}`}
              >
                {job.period}
              </span>
              <h3 className="jobs__title">{job.title}</h3>
              <p className="jobs__desc">{job.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
