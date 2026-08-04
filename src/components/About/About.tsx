import { profile } from '../../data/profile'
import { Reveal } from '../Reveal/Reveal'
import './About.css'

export function About() {
  return (
    <section id="sobre" className="section about">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title section__title--animated anim-title-sparkle">
            <span>🌸</span> Sobre <span>🌸</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="about__card card glass glass--pink">
          <p className="about__text">{profile.bio}</p>
          <p className="about__text">
            Experiência com <strong>Design Systems</strong>, micro front-ends, testes automatizados
            (<strong>Playwright</strong>, <strong>Jest</strong>) e colaboração com UX/UI.
          </p>
          <p className="about__education anim-bounce-soft">🎓 {profile.education}</p>

          <div className="about__timeline">
            {[
              { badge: '2026 – atual', outline: false, title: 'Full Stack Pleno · Wk JobHub', desc: 'Celebré Soluções Digitais & Abrutelecom — ponta a ponta com React, .NET e Azure.' },
              { badge: '2023 – 2025', outline: true, title: 'Programadora JR · Bem Promotora', desc: 'Design System, micro front-ends e testes automatizados.' },
              { badge: '2022 – 2023', outline: true, title: 'Estágio Full Stack · Bem Promotora', desc: 'React, TypeScript, ASP.NET Core MVC e SQL Server.' },
            ].map((job, i) => (
              <Reveal key={job.badge} delay={i * 120} variant="scale">
                <div className="about__job">
                  <span className={`badge ${job.outline ? 'badge--outline' : ''}`}>{job.badge}</span>
                  <h3>{job.title}</h3>
                  <p>{job.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
