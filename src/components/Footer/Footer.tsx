import { profile } from '../../data/profile'
import { Reveal } from '../Reveal/Reveal'
import './Footer.css'

export function Footer() {
  return (
    <Reveal>
      <footer className="footer">
        <p>
          💗 feito por <strong>{profile.name}</strong>
        </p>
        <p className="footer__stars">
          <span className="footer__star">⭐</span>
          <span className="footer__star">⭐</span>
          <span className="footer__star">⭐</span>
        </p>
      </footer>
    </Reveal>
  )
}
