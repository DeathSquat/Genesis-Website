"use client"

import { useEffect, useRef } from "react"

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Get computed background color
  const computedStyle = getComputedStyle(document.documentElement)
  const backgroundColor = computedStyle.getPropertyValue('--background').trim()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      color: string
    }

    const particles: Particle[] = []
    const particleCount = 50

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? "#a855f7" : "#7c3aed",
      })
    }

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Clear canvas with background color
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Move particle
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1
        }

        // Keep in bounds
        particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x))
        particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y))

        // Attract to mouse
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          particle.vx += (dx / distance) * 0.1
          particle.vy += (dy / distance) * 0.1
        }

        // Draw particle with glow
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 15
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(168, 85, 247, 0.1)"
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.globalAlpha = 0.2 * (1 - distance / 150)
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: backgroundColor }}
    />
  )
}
