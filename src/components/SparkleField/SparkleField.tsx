import './SparkleField.css'

const PARTICLES = [
  { emoji: '🌸', top: '8%', left: '5%', size: '1.4rem', delay: '0s', duration: '7s' },
  { emoji: '✨', top: '15%', left: '88%', size: '1.2rem', delay: '1s', duration: '5s' },
  { emoji: '⭐', top: '35%', left: '92%', size: '1rem', delay: '2s', duration: '8s' },
  { emoji: '💗', top: '55%', left: '3%', size: '1.3rem', delay: '0.5s', duration: '6s' },
  { emoji: '🌸', top: '72%', left: '95%', size: '1.1rem', delay: '1.5s', duration: '9s' },
  { emoji: '✨', top: '85%', left: '10%', size: '1rem', delay: '3s', duration: '7s' },
  { emoji: '⭐', top: '25%', left: '50%', size: '0.9rem', delay: '2.5s', duration: '10s' },
  { emoji: '💖', top: '48%', left: '78%', size: '1.2rem', delay: '0.8s', duration: '6.5s' },
  { emoji: '🌸', top: '65%', left: '42%', size: '1rem', delay: '4s', duration: '8s' },
  { emoji: '✨', top: '90%', left: '60%', size: '1.1rem', delay: '1.2s', duration: '5.5s' },
] as const

export function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="sparkle-field__particle"
          style={{
            top: p.top,
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}
