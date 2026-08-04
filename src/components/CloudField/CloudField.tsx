import './CloudField.css'

type CloudConfig = {
  top: string
  scale: number
  duration: string
  delay: string
  opacity: number
}

const CLOUDS: CloudConfig[] = [
  { top: '4%', scale: 1.6, duration: '38s', delay: '0s', opacity: 0.9 },
  { top: '10%', scale: 0.6, duration: '72s', delay: '-12s', opacity: 0.75 },
  { top: '16%', scale: 1.1, duration: '48s', delay: '-25s', opacity: 0.85 },
  { top: '22%', scale: 1.8, duration: '95s', delay: '-5s', opacity: 0.7 },
  { top: '28%', scale: 0.85, duration: '55s', delay: '-40s', opacity: 0.8 },
  { top: '34%', scale: 1.25, duration: '42s', delay: '-18s', opacity: 0.88 },
  { top: '40%', scale: 0.55, duration: '68s', delay: '-33s', opacity: 0.65 },
  { top: '46%', scale: 1.45, duration: '80s', delay: '-8s', opacity: 0.82 },
  { top: '52%', scale: 0.75, duration: '35s', delay: '-28s', opacity: 0.78 },
  { top: '58%', scale: 1.55, duration: '88s', delay: '-45s', opacity: 0.72 },
  { top: '64%', scale: 0.95, duration: '52s', delay: '-15s', opacity: 0.86 },
  { top: '70%', scale: 1.35, duration: '62s', delay: '-50s', opacity: 0.74 },
  { top: '76%', scale: 0.65, duration: '78s', delay: '-22s', opacity: 0.8 },
  { top: '82%', scale: 1.15, duration: '44s', delay: '-35s', opacity: 0.68 },
  { top: '88%', scale: 0.9, duration: '58s', delay: '-10s', opacity: 0.84 },
  { top: '94%', scale: 1.5, duration: '70s', delay: '-42s', opacity: 0.7 },
]

function CloudSvg() {
  return (
    <svg className="cloud-field__svg" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="62" rx="52" ry="28" fill="white" />
      <ellipse cx="130" cy="52" rx="44" ry="34" fill="white" />
      <ellipse cx="168" cy="64" rx="38" ry="24" fill="white" />
      <ellipse cx="108" cy="44" rx="36" ry="28" fill="white" />
    </svg>
  )
}

export function CloudField() {
  return (
    <div className="cloud-field" aria-hidden="true">
      {CLOUDS.map((cloud, i) => (
        <div
          key={i}
          className="cloud-field__cloud"
          style={{
            top: cloud.top,
            opacity: cloud.opacity,
            width: `${240 * cloud.scale}px`,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <CloudSvg />
        </div>
      ))}
    </div>
  )
}
