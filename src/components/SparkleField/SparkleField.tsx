import './SparkleField.css'

type Star = {
  top: string
  left: string
  size: number
  delay: string
  duration: string
  variant: 'dot' | 'bright' | 'glow'
}

const STARS: Star[] = [
  { top: '4%', left: '6%', size: 2, delay: '0s', duration: '3.4s', variant: 'dot' },
  { top: '7%', left: '22%', size: 3, delay: '1.2s', duration: '4.1s', variant: 'bright' },
  { top: '11%', left: '78%', size: 2, delay: '0.6s', duration: '3.8s', variant: 'dot' },
  { top: '14%', left: '91%', size: 4, delay: '2.1s', duration: '5s', variant: 'glow' },
  { top: '18%', left: '44%', size: 2, delay: '1.8s', duration: '3.2s', variant: 'dot' },
  { top: '22%', left: '12%', size: 2, delay: '0.3s', duration: '4.5s', variant: 'dot' },
  { top: '26%', left: '63%', size: 3, delay: '2.8s', duration: '4.2s', variant: 'bright' },
  { top: '29%', left: '85%', size: 2, delay: '1.5s', duration: '3.6s', variant: 'dot' },
  { top: '33%', left: '31%', size: 2, delay: '3.2s', duration: '5.2s', variant: 'dot' },
  { top: '36%', left: '52%', size: 4, delay: '0.9s', duration: '4.8s', variant: 'glow' },
  { top: '41%', left: '7%', size: 2, delay: '2.4s', duration: '3.9s', variant: 'dot' },
  { top: '44%', left: '72%', size: 2, delay: '1.1s', duration: '4.3s', variant: 'dot' },
  { top: '48%', left: '94%', size: 3, delay: '3.6s', duration: '5.5s', variant: 'bright' },
  { top: '52%', left: '18%', size: 2, delay: '0.4s', duration: '3.1s', variant: 'dot' },
  { top: '55%', left: '41%', size: 2, delay: '2.6s', duration: '4.6s', variant: 'dot' },
  { top: '58%', left: '58%', size: 3, delay: '1.7s', duration: '3.7s', variant: 'bright' },
  { top: '62%', left: '83%', size: 2, delay: '3.9s', duration: '5.1s', variant: 'dot' },
  { top: '66%', left: '4%', size: 4, delay: '0.7s', duration: '4.9s', variant: 'glow' },
  { top: '69%', left: '27%', size: 2, delay: '2.2s', duration: '3.5s', variant: 'dot' },
  { top: '73%', left: '49%', size: 2, delay: '1.4s', duration: '4.4s', variant: 'dot' },
  { top: '76%', left: '67%', size: 3, delay: '3.1s', duration: '5.3s', variant: 'bright' },
  { top: '80%', left: '88%', size: 2, delay: '0.2s', duration: '3.3s', variant: 'dot' },
  { top: '84%', left: '14%', size: 2, delay: '2.9s', duration: '4.7s', variant: 'dot' },
  { top: '87%', left: '36%', size: 2, delay: '1.9s', duration: '3.8s', variant: 'dot' },
  { top: '90%', left: '61%', size: 4, delay: '3.4s', duration: '5.6s', variant: 'glow' },
  { top: '93%', left: '79%', size: 2, delay: '0.8s', duration: '4.1s', variant: 'dot' },
  { top: '16%', left: '56%', size: 2, delay: '2.5s', duration: '3.9s', variant: 'dot' },
  { top: '38%', left: '96%', size: 2, delay: '1.3s', duration: '4.2s', variant: 'dot' },
  { top: '61%', left: '33%', size: 3, delay: '3.7s', duration: '5s', variant: 'bright' },
  { top: '8%', left: '38%', size: 2, delay: '2.7s', duration: '3.6s', variant: 'dot' },
  { top: '2%', left: '48%', size: 2, delay: '1.6s', duration: '4s', variant: 'dot' },
  { top: '5%', left: '67%', size: 2, delay: '3.3s', duration: '3.5s', variant: 'dot' },
  { top: '9%', left: '15%', size: 2, delay: '0.5s', duration: '4.4s', variant: 'dot' },
  { top: '13%', left: '33%', size: 3, delay: '2s', duration: '5.1s', variant: 'bright' },
  { top: '19%', left: '68%', size: 2, delay: '1s', duration: '3.7s', variant: 'dot' },
  { top: '24%', left: '38%', size: 2, delay: '3.8s', duration: '4.2s', variant: 'dot' },
  { top: '31%', left: '8%', size: 4, delay: '0.1s', duration: '5.4s', variant: 'glow' },
  { top: '34%', left: '76%', size: 2, delay: '2.3s', duration: '3.9s', variant: 'dot' },
  { top: '39%', left: '59%', size: 2, delay: '1.8s', duration: '4.6s', variant: 'dot' },
  { top: '43%', left: '24%', size: 3, delay: '3s', duration: '5s', variant: 'bright' },
  { top: '47%', left: '47%', size: 2, delay: '0.6s', duration: '3.4s', variant: 'dot' },
  { top: '51%', left: '69%', size: 2, delay: '2.8s', duration: '4.8s', variant: 'dot' },
  { top: '56%', left: '91%', size: 2, delay: '1.2s', duration: '3.6s', variant: 'dot' },
  { top: '59%', left: '11%', size: 4, delay: '3.5s', duration: '5.2s', variant: 'glow' },
  { top: '64%', left: '56%', size: 2, delay: '0.9s', duration: '4.1s', variant: 'dot' },
  { top: '68%', left: '74%', size: 2, delay: '2.1s', duration: '3.8s', variant: 'dot' },
  { top: '71%', left: '19%', size: 3, delay: '3.2s', duration: '5.3s', variant: 'bright' },
  { top: '75%', left: '41%', size: 2, delay: '1.5s', duration: '4.5s', variant: 'dot' },
  { top: '78%', left: '96%', size: 2, delay: '2.6s', duration: '3.3s', variant: 'dot' },
  { top: '82%', left: '62%', size: 2, delay: '0.3s', duration: '4.7s', variant: 'dot' },
  { top: '86%', left: '28%', size: 3, delay: '3.9s', duration: '5.1s', variant: 'bright' },
  { top: '89%', left: '50%', size: 2, delay: '1.1s', duration: '3.9s', variant: 'dot' },
  { top: '92%', left: '8%', size: 2, delay: '2.4s', duration: '4.3s', variant: 'dot' },
  { top: '96%', left: '44%', size: 4, delay: '0.7s', duration: '5.5s', variant: 'glow' },
  { top: '97%', left: '72%', size: 2, delay: '3.1s', duration: '4s', variant: 'dot' },
  { top: '12%', left: '52%', size: 2, delay: '2.9s', duration: '3.7s', variant: 'dot' },
  { top: '27%', left: '93%', size: 2, delay: '1.4s', duration: '4.9s', variant: 'dot' },
  { top: '45%', left: '3%', size: 2, delay: '3.6s', duration: '3.2s', variant: 'dot' },
  { top: '63%', left: '46%', size: 2, delay: '0.8s', duration: '5s', variant: 'dot' },
  { top: '74%', left: '86%', size: 3, delay: '2.5s', duration: '4.4s', variant: 'bright' },
]

export function SparkleField() {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {STARS.map((star, i) => (
        <span
          key={i}
          className={`sparkle-field__star sparkle-field__star--${star.variant}`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  )
}
