import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'slide' | 'scale'
}

export function Reveal({ children, className = '', delay = 0, variant = 'slide' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const base = variant === 'scale' ? 'reveal-scale' : 'reveal'
  const state = visible ? `${base}--visible` : ''
  const style = { transitionDelay: `${delay}ms` } as CSSProperties

  return (
    <div ref={ref} className={`${base} ${state} ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
