import { profile } from '../../data/profile'
import { Reveal } from '../Reveal/Reveal'
import './About.css'

export function About() {
  return (
    <section id="sobre" className="section about">
      <Reveal>
        <div className="section__header">
          <h2 className="section__title">Sobre</h2>
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
        </div>
      </Reveal>
    </section>
  )
}
