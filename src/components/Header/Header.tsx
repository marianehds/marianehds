import { useEffect, useState } from 'react'
import { navItems, profile } from '../../data/profile'
import './Header.css'

export function Header() {
  const [active, setActive] = useState<string>(navItems[0].id)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section!))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <header className={`header anim-slide-down ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a
          href="#"
          className="header__logo anim-wiggle-hover"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="header__heart anim-heartbeat">💗</span>
          <span>{profile.name}</span>
        </a>

        <nav className="header__nav">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`header__pill anim-pop-in ${active === item.id ? 'header__pill--active' : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header__social">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glow-btn glass glass--pill anim-pop-in"
            style={{ animationDelay: '0.5s' }}
            aria-label="LinkedIn"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
