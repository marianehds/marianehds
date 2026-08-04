import { useEffect, useRef } from 'react'
import './CursorSparkles.css'

export function CursorSparkles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let last = 0

    const onMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - last < 60) return
      last = now

      const spark = document.createElement('span')
      spark.className = 'cursor-sparkle'
      spark.textContent = ['✨', '⭐', '🌸', '💫'][Math.floor(Math.random() * 4)]
      spark.style.left = `${e.clientX}px`
      spark.style.top = `${e.clientY}px`
      container.appendChild(spark)

      spark.addEventListener('animationend', () => spark.remove())
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={containerRef} className="cursor-sparkles" aria-hidden="true" />
}
