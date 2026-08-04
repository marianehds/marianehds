import { profile } from '../../data/profile'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">

      <div className="hero__content">
        <p className='hero__hello'>Olá, eu sou</p>
        <h1 className="hero__title anim-shimmer-text anim-pop-in" style={{ animationDelay: '1' }}>
          {profile.fullName}
        </h1>
        <p className="hero__role anim-pop-in" style={{ animationDelay: '0.4s' }}>
          {profile.role}
        </p>
        <p className="hero__tagline anim-pop-in" style={{ animationDelay: '0.55s' }}>
          {profile.tagline}
        </p>
      </div>
      <div>
        foto
      </div>
    </section>
  )
}
